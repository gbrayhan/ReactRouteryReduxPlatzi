import React from 'react';
import '../assets/styles/components/Header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import gravatar from '../utils/gravatar';
import logo from '../assets/static/logo-platzi-video-BW2.png';

import { logoutRequest } from '../actions';

const Header = (props) => {
  const { user } = props;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={gravatar(user.email || '')} alt='' />
          <p>Perfil</p>
        </div>
        <ul>
          <li><a href='/'>Cuenta</a></li>
          <li><Link to='/login'>Iniciar Sesión</Link></li>
          <li>
            <a href='##' onClick={handleLogout}>Close Session</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
Header.propTypes = {
  logoutRequest: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  logoutRequest,
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
