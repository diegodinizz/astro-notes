import { useState } from 'react'

import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { addNote } from '../redux/actions'
import { CustomButtom } from '../components/CustomButton'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  form {
    display: flex;
    flex-direction: column;
  }

  button {
    margin: 30px auto;
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
  height: 150px;
  font-size: 18px;
  color: grey;
  outline: none;

  ::placeholder {
    color: gainsboro;
  }

  @media screen and (max-width: 1024px) {
    width: 35vw;
  }

  @media screen and (max-width: 768px) {
    width: 45vw;
  }

  @media screen and (max-width: 414px) {
    width: 70vw;
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
        <CustomButtom color='#00A19D' type='submit'>ADD NOTE</CustomButtom>
      </form>
    </Container>
  )
}
