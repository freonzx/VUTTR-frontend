import styled from 'styled-components';
import { darken } from 'polished';

import SearchIcon from '../../assets/images/iconsearch.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  min-height: 600px;
  margin: 50px auto;
  padding: 30px 50px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #ebeaed;
  border-radius: 5px;

  h1 {
    font-size: 42px;
  }

  h3 {
    font-size: 30px;
  }
`;

export const Card = styled.div`
  margin: 10px 0;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 10px #0000000d;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  opacity: 1;
`;

export const SearchBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  margin: 15px 0;

  input[id='search'] {
    flex: 1;
    background: #f5f4f6 url(${SearchIcon}) 5px no-repeat;
    background-size: 15px 15px;
    border: 1px solid #ebeaed;
    border-radius: 5px;
    opacity: 1;
    padding: 5px 15px 5px 25px;

    &:focus {
      background: #ebeaed url(${SearchIcon}) 5px no-repeat;
      background-size: 15px 15px;
      border: 1px solid #dedce1;
      border-radius: 5px;
      opacity: 1;
    }
  }

  div {
    display: flex;
    align-items: center;
    padding: 5px 10px;

    /*input[type='checkbox'] {
      margin-right: 2px;
      transform: scale(1.2);
    }*/

    input[type='checkbox'] {
      margin: 0 5px;
      width: 40px;
      height: 20px;
      position: relative;
      -webkit-appearance: none;
      background-color: #ebeaed;
      border-radius: 20px;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      transition: 0.5s;
    }

    input:checked[type='checkbox'] {
      background-color: #12db89;
    }

    input[type='checkbox']:before {
      content: '';
      position: absolute;
      width: 15px;
      height: 15px;
      border-radius: 20px;
      top: 2px;
      left: 3px;
      background-color: #fff;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      transition: 0.5s;
    }
    input:checked[type='checkbox']:before {
      left: 22px;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 5px 15px;
    color: #fff;
    border: 0;
    outline: 0;
    border-radius: 4px;
    font-size: 18px;
    font-weight: bold;
    background: #6554c0;
    transition-duration: 0.2s;

    svg {
      margin-right: 5px;
    }

    &:hover {
      background: ${darken(0.1, '#6554c0')};
    }
  }
`;
