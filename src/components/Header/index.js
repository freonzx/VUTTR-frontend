import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

import { useDispatch } from 'react-redux';
import Logo from '../../assets/images/Logo.svg';

import { Container, Content, Profile } from './styles';
import { signOut } from '../../store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

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
              <button type='button' onClick={handleSignOut}>
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
