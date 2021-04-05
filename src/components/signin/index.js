import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { getFriendlyURL } from 'workbox-core/_private';

const submit = e => {
  e.preventDefault()
  console.log(username)
  console.log(password)
  // ENVOYER LE FORM 

  axios({
    method:'POST',
    url:'https://easy-login-api.herokuapp.com/users/login',
    data: {
      username: username,
      password: password
    }
  })
  .then(res => {
    console.log(res.headers['x-access-token'])
    localStorage.setItem['token'], res.headers['x-access-token']
  })
  .catch(err => {
    console.log(err)
  })
}

const Signin = () => {
  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <StyledForm onSubmit={Submit}>
      <StyledSpan>Signin</StyledSpan>
      <SigninInput placeholder="Username" type='text'></SigninInput>
      <SigninInput placeholder="password" type='password'></SigninInput>
      <SigninInput type='submit'></SigninInput>
    </StyledForm>
  );
};

const StyledSpan = styled.span`
  color: green;
  margin-bottom: 12px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
`

const  SigninInput = styled.input`
  margin: 6px 0px;
  border-radius: 12px;
  border: none;
  background-color: #222222;
  heights: 30px;
  color: white;
  padding: 0px 6px;
`

export default Signin;