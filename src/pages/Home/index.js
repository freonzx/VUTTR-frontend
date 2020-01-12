import React, { useEffect, useState } from 'react';
import { FaTools } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Container, SearchBar } from './styles';
import ToolItem from '../../components/ToolItem';
import {
  requestTools,
  searchToolByDesc,
  searchToolByTags,
} from '../../store/modules/tool/actions';

export default function Home() {
  const dispatch = useDispatch();
  const { tools } = useSelector(state => state.tool);
  const [byTag, setbyTag] = useState(false);

  useEffect(() => {
    dispatch(requestTools());
  }, []);

  return (
    <Container>
      <header>
        <h1>VUTTR</h1>
        <h3>Very Useful Tools to Remember</h3>
      </header>
      <SearchBar>
        <input
          type='text'
          id='search'
          placeholder='Digite o que está procurando...'
          onChange={e =>
            byTag
              ? dispatch(searchToolByTags(e.target.value))
              : dispatch(searchToolByDesc(e.target.value))
          }
        />
        <div>
          <input type='checkbox' onChange={e => setbyTag(e.target.checked)} />
          <span>Search in tags only</span>
        </div>
        <button type='button' id='btn-new'>
          <FaTools />
          New Tool
        </button>
      </SearchBar>
      {tools ? (
        tools.map(tool => <ToolItem key={tool.id} data={tool} />)
      ) : (
        <p>Loading</p>
      )}
    </Container>
  );
}
