import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

// const BackgroundImage = styled.div`
//   flex: 1;
//   background-position: center; 
//   background-size:cover;
//   background-image: url(${db.bg});
//   min-width:100vw;
//   min-height:100vh;
// `;

const QuizContainer = styled.div`
  width:100%;
  max-width:350px;
  padding-top:45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.backgroundImage}>
      <QuizContainer>
        {/* First Box */}
        <Widget>
          <Widget.Header>
            <h1>Japan Culture</h1>
            <p>Será que você sabe?</p>
          </Widget.Header>
          <Widget.Content>
            Conteudo
          </Widget.Content>
        </Widget>
        {/* Second Box */}
        <Widget>
          <Widget.Header>
            <h1>Japan Culture</h1>
            <p>Será que você sabe?</p>
          </Widget.Header>
          <Widget.Content>

          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Leterinho" />
    </QuizBackground>
  )
}
