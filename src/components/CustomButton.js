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
  border-radius: 5px;
  box-shadow: 1px 1px 1px #999;
`

export const CustomButtom = ({ children, color, onClick }) => (
  <Container onClick={onClick} color={color}>
    {children}
  </Container>
)
