import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  width: 500px;
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    background: #f5f4f6 0% 0% no-repeat padding-box;
    border: 1px solid #ebeaed;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 5px 0;
  }

  h2 {
    margin-bottom: 10px;
  }

  textarea {
    padding: 5px 10px;
    background: #f5f4f6 0% 0% no-repeat padding-box;
    border: 1px solid #ebeaed;
    border-radius: 5px;
  }

  span {
    color: #cc4c4c;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  button {
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    border: 0;
    color: #fff;
    padding: 8px 20px;
    background: #6554c0 0% 0% no-repeat padding-box;
    border-radius: 5px;
    align-items: center;
    justify-items: center;
    transition-duration: 0.25s;

    &:hover {
      background: ${darken(0.1, '#6554c0')};
    }
  }
`;
