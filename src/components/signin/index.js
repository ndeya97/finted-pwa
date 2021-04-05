import React, {useState} from 'react';
import styled from 'styled-components'


const submit = e => {
  e.preventDefault()
  // ENVOYER LE FORM 
}

const Signin = () => {
  const [username, setUsername ] = useState('')
  const [password, setPassword]  = useState('')
  
  return (
    <StyledForm onSubmit={submit}>
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