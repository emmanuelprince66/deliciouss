import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Search = () => {

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
     e.preventDefault();
     navigate("/searched/"+input);
  }

  return (
    <FormStyled  onSubmit={submitHandler}>
        <div>
          <FaSearch/>
       <input type="text" onChange={(e) => setInput(e.target.value)} value={input}/>
        </div>
    </FormStyled>
  )
}

const FormStyled = styled.form`
  margin:2rem 20rem;

  input {
    border:none;
    background:linear-gradient(35deg , #494949 , #313131);
    font-size:1.5rem;
    color:white;
    padding:1rem 3rem;
    border-radius:1rem;
    outline:none;
    width:100%;
  }
  div {
    width:100%;
    positive:relative;
  }
  svg {
    z-index:10;
    position:absolute;
    top:3.8rem;
    left:54rem;
    transform:translate(100% , -50%);            
    color:white;
    width:20px;
  }
`;

export default Search;