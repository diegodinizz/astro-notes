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
  color: #41444b;
`

const ButtonsContainer = styled.div``

export const Note = ({ details }) => {
  const { id, content, createdAt } = details

  const dispatch = useDispatch()

  return (
    <Container to={`/notes/${id}`}>
      {content}
      {/* <ButtonsContainer>
        <CustomButtom color='blue'>Edit</CustomButtom>
        <CustomButtom onClick={() => dispatch(deleteNote(id))} color='red'>
          Delete
        </CustomButtom>
      </ButtonsContainer> */}
    </Container>
  )
}
