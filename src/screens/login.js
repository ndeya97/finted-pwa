import  React from 'react';

import { Link } from 'react-router-dom'
import Signin from '../components/signin'


const Login = () => {
  return (
    <div>
      <Header backgroundColor='green'></Header>
      <Signin></Signin>
    </div>
  )
}



export default Login;