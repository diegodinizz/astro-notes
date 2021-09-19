import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #52575d;
  border-radius: 5px;
`

export const Note = ({ text }) => <Container>{text}</Container>
