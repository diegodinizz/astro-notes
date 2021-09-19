import { useState } from 'react'

import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { deleteNote, updateNote } from '../redux/actions'
import { CustomButtom } from '../components/CustomButton'
import { BackButton } from '../components/BackButton'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 0 auto; */
  width: 100%;
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
  justify-content: space-between;
  width: 20%;
  margin-top: 20px;
`

const BackButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 30%;
`

export const NoteDetail = () => {
  const { id, content } = useSelector(state => state.currentNote)
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
        <CustomButtom color='#5F939A' onClick={handleUpdate}>
          Update
        </CustomButtom>
        <CustomButtom color='#FF616D' onClick={handleDelete}>
          Delete
        </CustomButtom>
      </ButtonsContainer>
      <BackButtonContainer>
        <BackButton to='/'>&#8592; Back</BackButton>
      </BackButtonContainer>
    </Container>
  )
}
