import Card from "./components/Card/Card";
import { USERS } from "./db";
import styled from "styled-components/macro";

function App() {
  return (
    <AppContainer>
      <Title>ClientBoard</Title>
      <CardGrid columns={3}>
        {USERS.map((user) => (
          <Card key={user.id} userData={user} />
        ))}
      </CardGrid>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => "repeat(" + props.columns + ",1fr)"};
  gap: 30px;
  padding: 20px;
`;

const Title = styled.h1`
  border-top: 5px solid #ccd;
  border-bottom: 5px solid #ccd;
  border-radius: 5px;
`;
