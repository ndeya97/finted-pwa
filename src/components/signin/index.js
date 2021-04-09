import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components'
import axios from 'axios';



const Signin = () => {
  const [formState, setFormState] = useState({username: '', password: ''})
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(()=> {
    console.log(formState)
  })

  const history = useHistory()

  const submit = e => {
    e.preventDefault()
    if(!formState.username || !formState.password)
      setErrorMessage('Les champs ne doivent pas être vide')
  
    axios({
      method:'POST',
      url:'https://easy-login-api.herokuapp.com/users/login',
      data:{
        username: formState.username,
        password: formState.password
      }
    })
    .then(res => {
      localStorage.setItem('token', res.headers['x-access-token'])
      history.push('/home/20')
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <StyledForm onSubmit={submit}>
      <StyledSpan>Signin</StyledSpan>
      <SigninInput placeholder="Username" type='text' onChange={e=> setFormState({...formState, username: e.target.value})}></SigninInput>
      <SigninInput placeholder="password" type='password' onChange={e=> setFormState({...formState, password: e.target.value})}></SigninInput>
      <StyledSpan>{errorMessage}</StyledSpan>
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