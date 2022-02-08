import styled from "styled-components";

function Card({ user }) {
  return (
    <CardContainer>
      <h2>{user.profile.name}</h2>
      <p>{user.profile.about}</p>
      <button>contact</button>
      <button>delete</button>
    </CardContainer>
  );
}

export default Card;

const CardContainer = styled.article`
  padding: 20px;
  background-color: #335;
  border-radius: 14px;
  border-left: 14px solid #ccd;
  opacity: 0.8;
  transition: 0.2s;

  p {
    color: white;
  }

  &:hover {
    opacity: 1;
  }
`;
