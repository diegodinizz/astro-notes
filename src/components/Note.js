import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { deleteNote } from '../redux/actions'
import { CustomButtom } from './CustomButton'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #52575d;
  border-radius: 5px;
  width: 50%;
`

const ButtonsContainer = styled.div``

export const Note = ({ details }) => {
  const { id, content, createdAt } = details

  const dispatch = useDispatch()

  return (
    <Container>
      {content}
      <ButtonsContainer>
        <CustomButtom color='blue'>Edit</CustomButtom>
        <CustomButtom onClick={() => dispatch(deleteNote(id))} color='red'>
          Delete
        </CustomButtom>
      </ButtonsContainer>
    </Container>
  )
}
