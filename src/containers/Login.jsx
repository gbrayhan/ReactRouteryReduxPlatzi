import React, { useState } from 'react';
import '../assets/styles/components/Login.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import { loginRequest } from '../actions';

const Login = (props) => {

  const [form, setForm] = useState({});

  const handleOnChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = () => {
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        <form className='login__container--form'>
          <input className='input' type='text' placeholder='Correo' name='email' value={form.email} onChange={handleOnChange} />
          <input className='input' type='password' placeholder='Contraseña' name='password' value={form.password} onChange={handleOnChange} />
          <button type='button' className='button' onClick={handleSubmit}>Iniciar sesión</button>
          <div className='login__container--remember-me'>
            <label htmlFor='cbox1'>
              <input type='checkbox' id='cbox1' value='first_checkbox' />
              Recuérdame
            </label>
            <a href='/'>Olvidé mi contraseña</a>
          </div>
        </form>
        <section className='login__container--social-media'>
          <div>
            <img alt='google-icon' src={googleIcon} />
            Inicia sesión con Google
          </div>
          <div>
            <img alt='twitter-icon' src={twitterIcon} />
            Inicia sesión con Twitter
          </div>
        </section>
        <p className='login__container--register'>
          No tienes ninguna cuenta
          <Link to='/register'> Regístrate</Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};
const mapStateToProps = (state) => {
  return {
  };
};export default connect(mapStateToProps, mapDispatchToProps)(Login);

