import styled from 'styled-components'

import logo from '../assets/Astrosat-logo-300x300.png'

const Container = styled.div`
  background-color: #333f48;
  display: flex;
  padding: 0 15rem;
  height: 100px;
  width: 100%;
`

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Logo = styled.img`
  height: 60px;
  padding: 10px;
`

const Title = styled.h1`
  color: #fff;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
`

export const Header = () => (
  <Container>
    <LogoWrapper>
      <Logo src={logo} alt='Astrosat Logo' />
      <Title>astronotes</Title>
    </LogoWrapper>
  </Container>
)
