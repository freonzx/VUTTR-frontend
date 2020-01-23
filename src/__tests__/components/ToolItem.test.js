import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import ToolItem from '../../components/ToolItem';

jest.mock('react-redux');

const tool = {
  _id: 'test_id',
  title: 'title',
  link: 'link',
  description: 'description',
  tags: ['tag1', 'tag2'],
};

describe('ToolItem', () => {
  it('Tool should render with all props', () => {
    const { getByText, getByTestId } = render(<ToolItem data={tool} />);

    expect(getByTestId('link-title')).toHaveTextContent('title');
    expect(getByTestId('tool-desc')).toHaveTextContent('description');
    expect(getByText('#tag1')).toBeTruthy();
    expect(getByText('#tag2')).toBeTruthy();
    expect(getByTestId('remove-btn')).toBeTruthy();
  });

  it('modal should open when Remove is clicked', () => {
    const { queryByTestId, getByTestId } = render(<ToolItem data={tool} />);

    expect(queryByTestId('remove-modal')).toBeNull();

    fireEvent.click(getByTestId('remove-btn'));

    expect(getByTestId('remove-modal')).toBeTruthy();
  });

  it('modal should close when Cancel is clicked', () => {
    const { queryByTestId, getByTestId } = render(<ToolItem data={tool} />);

    fireEvent.click(getByTestId('remove-btn'));
    expect(getByTestId('remove-modal')).toBeTruthy();
    fireEvent.click(getByTestId('cancel-btn'));
    expect(queryByTestId('remove-modal')).toBeNull();
  });

  it('should call dispatch deleteTool action when Yes is clicked', () => {
    const { getByTestId } = render(<ToolItem data={tool} />);

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    fireEvent.click(getByTestId('remove-btn'));
    fireEvent.click(getByTestId('yes-btn'));
    expect(dispatch).toHaveBeenCalledWith({
      type: '@tool/DELETE_TOOL_REQUEST',
      payload: tool._id,
    });
  });
});
