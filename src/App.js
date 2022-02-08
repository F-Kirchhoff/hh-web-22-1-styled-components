import Card from "./components/Card/Card";
import { USERS } from "./db";
import styled from "styled-components/macro";

function App() {
  return (
    <AppContainer>
      <h1>ClientBoard</h1>
      <CardGrid>
        {USERS.map((user) => (
          <Card user={user} />
        ))}
      </CardGrid>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.main`
  background-color: #12121a;
  color: #ccd;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // 1fr 1fr 1fr 1fr
  gap: 30px;
  padding: 20px;
`;
