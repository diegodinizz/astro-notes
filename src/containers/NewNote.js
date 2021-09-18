import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`

export const NewNote = () => {
  return (
    <Container>
      <Title>New Note</Title>
    </Container>
  )
}
