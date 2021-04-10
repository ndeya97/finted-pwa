import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Header from '../components/header'

const Home = props  => {
  return (
    <div>
      <p>home</p>
      <p>{props.match.params.id}</p>
      <Link to="/">To Login</Link>
      <Header></Header>

    </div>
  )
}



export default Home 
