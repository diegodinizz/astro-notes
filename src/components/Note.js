import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { deleteNote } from '../redux/actions'
import { CustomButtom } from './CustomButton'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #52575d;
  border-radius: 5px;
  width: 50%;
`

export const Note = ({ details }) => {
  const { id, content, createdAt } = details

  const dispatch = useDispatch()

  return (
    <Container>
      {content}
      <CustomButtom color='blue'>Edit</CustomButtom>
      <CustomButtom onClick={() => dispatch(deleteNote(id))} color='red'>
        Delete
      </CustomButtom>
    </Container>
  )
}
