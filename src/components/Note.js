import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setCurrentNote } from '../redux/actions'

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: auto;
  cursor: pointer;
  text-decoration: none;
  color: #545454;
  padding: 20px;
  margin-bottom: 30px;
  background-color: #fff6cd;
  transform: translateZ(0.1);
  transition: transform 0.25s ease-out;
  box-shadow: 1px 1px 1px #999;

  :hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 1024px) {
    width: 60%;
  }

  @media screen and (max-width: 768px) {
    width: 85%;
  }

  @media screen and (max-width: 414px) {
    width: 100%;
  }
`

const Content = styled.p`
  font-weight: 700;
  font-size: 1.3em;
  word-break: break-word;
  margin: 10px 0;
  white-space: pre-wrap;

  @media screen and (max-width: 414px) {
    font-size: 1em;
  }
`

const Date = styled.p`
  font-size: 1em;
  font-weight: 400;
  margin: 10px 0 0 0;

  @media screen and (max-width: 414px) {
    font-size: 0.7em;
  }
`

export const Note = ({ details }) => {
  const { id, content, createdAt, updatedAt } = details

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
