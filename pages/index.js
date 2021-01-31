import styled from 'styled-components'
import db from '../db.json'

const Wrapper = styled.div`
position:absolute;
transform: translate(-50%,-50%);
top:50vh;
left:50vw;
`
const Bg = styled.div`
  flex: 1;
  background-position: center; 
  background-size:cover;
  width: 100vw;
  height: 100vh;
  background-image: url(${db.bg});
`
const Image = styled.div`
  width: 200px;
  height: 200px;
  border-radius:100%;
  background-position: center; 
  background-size:cover;
  background-image: url(${db.face});
`

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`


export default function Home() {
  return (
    <Bg>
      <Wrapper>
        <center>
          <Image></Image>
          <Title>Estou aprendendo next!</Title>
        </center>
      </Wrapper>
    </Bg>
  )
}
