import { useState } from 'react'

import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { CustomButtom } from '../components/CustomButton'
import { deleteNote, updateNote } from '../redux/actions'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
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
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const NoteDetail = () => {
  const { id, content } = useSelector(state => state.currentNote)
  const notes = useSelector(state => state.notes)
  const [value, setValue] = useState(content)
  const dispatch = useDispatch()
  const history = useHistory()

  function handleUpdate () {
    dispatch(updateNote(id, value))
    history.push('/')
  }

  function handleDelete () {
    const confirmed = window.confirm(
      'Are you sure you want to delete this note?'
    )

    if (!confirmed) {
      return
    }

    dispatch(deleteNote(id))
    history.push('/')
  }

  return (
    <Container>
      <Title>Note Detail</Title>
      <Content
        value={value}
        onChange={event => setValue(event.target.value)}
        required
      />
      <ButtonsContainer>
        <CustomButtom color='blue' onClick={handleUpdate}>
          Edit
        </CustomButtom>
        <CustomButtom color='red' onClick={handleDelete}>
          Delete
        </CustomButtom>
      </ButtonsContainer>
    </Container>
  )
}
