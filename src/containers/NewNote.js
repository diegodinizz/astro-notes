import { useState } from 'react'

import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { addNote } from '../redux/actions'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;

  form {
    display: flex;
    flex-direction: column;
  }
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 40px 0;
`

const Content = styled.textarea`
  padding: 10px;
  line-height: 1.5;
  border: 1px solid grey;
  box-shadow: 1px 1px 1px #999;
  resize: none;
  width: 27vw;
  height: 100px;
  font-size: 18px;
  color: grey;
  outline: none;

  ::placeholder {
    color: gainsboro;
  }
`

const Button = styled.button`
  font-size: 1.5rem;
  padding: 0.5rem;
  border: none;
  outline: none;
  box-sizing: border-box;
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: #e0e0e0;
  color: grey;
  width: 50%;
  text-align: center;
  margin: 0.5rem;

  &:hover {
    background-color: #ccc;
  }
`

export const NewNote = () => {
  const [note, setNote] = useState('')
  const dispatch = useDispatch()

  function handleSubmit (event) {
    event.preventDefault()

    dispatch(addNote(note))
    setNote('')
  }

  return (
    <Container>
      <Title>New Note</Title>
      <form onSubmit={handleSubmit}>
        <Content
          value={note}
          placeholder='Enter your note here'
          onChange={event => setNote(event.target.value)}
          required
        />
        <Button type='submit'>Add Note</Button>
      </form>
    </Container>
  )
}
