import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setCurrentNote } from '../redux/actions'

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  border: 1px solid #52575d;
  /* border-radius: 5px; */
  width: 50%;
  height: auto;
  cursor: pointer;
  text-decoration: none;
  color: #545454;
  padding: 10px;
  margin-bottom: 30px;
  background-color: #FFF6CD;
  transform: translateZ(0.1);
  transition: transform 0.25s ease-out;
  box-shadow: 1px 1px 1px #999;
  
  :hover {
    transform: scale(1.05);
  }
`

const Content = styled.p`
  box-sizing: content-box;
  font-weight: 700;
  font-size: 1.3em;
  word-break: break-word;
  margin: 10px 0;
`

const Date = styled.p`
  font-size: 1em;
  font-weight: 400;
  margin: 10px 0;
`

export const Note = ({ details }) => {
  const { id, content, createdAt, updatedAt } = details

  console.log(details)

  const dispatch = useDispatch()

  return (
    <Container
      onClick={() => dispatch(setCurrentNote(details))}
      to={`/notes/${id}`}
    >
      <Content>{content}</Content>
      <Date>{updatedAt ? `Last modified ${updatedAt}` : createdAt}</Date>
    </Container>
  )
}
