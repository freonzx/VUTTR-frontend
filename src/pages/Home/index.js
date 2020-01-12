import React from 'react';
import { FaTools } from 'react-icons/fa';
import { Container, Card, SearchBar } from './styles';
import ToolItem from '../../components/ToolItem';

export default function Home() {
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
        />
        <div>
          <input type='checkbox' />
          <span>Search in tags only</span>
        </div>
        <button type='button' id='btn-new'>
          <FaTools />
          New Tool
        </button>
      </SearchBar>
      <ToolItem />
      <ToolItem />
      <ToolItem />
      <ToolItem />
      <ToolItem />
      <ToolItem />
    </Container>
  );
}
