import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { deleteNote } from '../redux/actions'
import { CustomButtom } from './CustomButton'

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  border: 1px solid #52575d;
  border-radius: 5px;
  width: 50%;
  cursor: pointer;
  text-decoration: none;
  color: #545454;
  padding: 10px;
  margin-bottom: 20px;
`

const Content = styled.div`
  box-sizing: content-box;
  font-weight: 700;
  font-size: 1.5em;
  /* max-width: 400px; */
  overflow: hidden;
`

const Date = styled.div`
  font-size: 1em;
  font-weight: 400;
  margin-top: 10px;
`

const ButtonsContainer = styled.div``

export const Note = ({ details }) => {
  const { id, content, createdAt } = details

  const dispatch = useDispatch()

  return (
    <Container to={`/notes/${id}`}>
      <Content>{content}</Content>
      <Date>{createdAt}</Date>
      {/* <ButtonsContainer>
        <CustomButtom color='blue'>Edit</CustomButtom>
        <CustomButtom onClick={() => dispatch(deleteNote(id))} color='red'>
          Delete
        </CustomButtom>
      </ButtonsContainer> */}
    </Container>
  )
}
