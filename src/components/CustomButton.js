import styled from 'styled-components'

const Container = styled.button`
  width: auto;
  background-color: ${({ color }) => color};
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  height: 50px;
  padding: 0 1rem;
  text-align: center;
  border: none;
  outline: none;
  margin: 1rem;
`

export const CustomButtom = ({ children, color, onClick }) => (
  <Container onClick={onClick} color={color}>
    {children}
  </Container>
)
