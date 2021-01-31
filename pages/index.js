import styled from 'styled-components'
import db from '../db.json';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid #4CAF50;
  background-color: #1C1814;
  border-radius: 4px;
  overflow: hidden;
`;

export default function Home() {
  return (
    < BackgroundImage>
      <QuizContainer>
        <Widget>
          shdakjhdka
        </Widget>
      </QuizContainer>
      <QuizContainer>
        shndjandj
      </QuizContainer>
    </ BackgroundImage>
  );
}
