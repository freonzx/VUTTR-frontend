import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

import Logo from '../../assets/images/Logo.svg';

import { Container, Content, Profile } from './styles';

const Header = () => {
  return (
    <Container>
      <Content>
        <nav>
          <img src={Logo} alt='bossa logo' />
          <Link to='/'>VUTR</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <Link to='#'>
                <FaSignOutAlt />
                Logout
              </Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
};

export default Header;
