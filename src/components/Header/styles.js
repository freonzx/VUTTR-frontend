import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  border: 1px solid #ebeaed;
  border-radius: 5px;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    height: 100%;

    img {
      margin-right: 20px;
      padding-right: 20px;
      height: 100%;
      border-right: 1px solid #eee;
    }

    a {
      font-size: 26px;
      font-weight: bold;
      color: black;
    }
  }

  aside {
    display: flex;
    align-items: center;
    height: 100%;
    border-left: 1px solid #eee;
  }
`;

export const Profile = styled.div`
  svg {
    margin: 0 5px 0 25px;
    align-self: center;
  }

  button {
    display: flex;
    outline: 0;
    border: 0;
    background: #fff;
    color: #333;
    font-size: 18px;
    font-weight: bold;
    transition-duration: 0.2s;

    &:hover {
      color: #666;
    }
  }
`;
