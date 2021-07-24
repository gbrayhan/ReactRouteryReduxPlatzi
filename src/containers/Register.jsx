import React, { useState } from 'react';
import '../assets/styles/components/Register.scss';

const Register = (props) => {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleOnChange = (event) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(registerData);
  };

  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form className='register__container--form'>
          <input className='input' type='text' name='name' value={registerData.name} placeholder='Nombre' onChange={handleOnChange} />
          <input className='input' type='text' name='email' value={registerData.email} placeholder='Correo' onChange={handleOnChange} />
          <input className='input' type='password' name='password' value={registerData.password} placeholder='Contraseña' onChange={handleOnChange} />
          <button type='button' className='button' onClick={handleSubmit}>Registrarme</button>
        </form>
        <a href='/'>Iniciar sesión</a>
      </section>
    </section>
  );
};

export default Register;
