import styled from "styled-components";

const buttonStyles = {
  regular: "#141417",
  danger: "red",
  success: "green",
};

function Card({ userData }) {
  return (
    <CardContainer roles={userData.roles}>
      <Company>{userData.profile.company}</Company>
      <h2>{userData.profile.name}</h2>
      <p>{userData.profile.about}</p>
      <Button styling="regular">contact</Button>
      <Button styling="danger">delete</Button>
    </CardContainer>
  );
}

export default Card;

const CardContainer = styled.article`
  padding: 20px;
  background-color: #335;
  border-radius: 14px;
  border-left: ${(props) => {
    return props.roles.includes("admin")
      ? "14px solid hotpink"
      : "14px solid #ccd";
  }};
  opacity: 0.8;
  transition: 0.2s;

  h2 {
    font-size: 1.6rem;
    color: ${(props) => (props.roles.includes("admin") ? "hotpink" : "#ccd")};
  }

  p {
    color: white;
  }

  &:hover {
    opacity: 1;
  }
`;

const Company = styled.span`
  border: 2px solid #ccd;
  padding: 5px 14px;
`;

const Button = styled.button`
  background-color: ${(props) => buttonStyles[props.styling]};
  color: white;
  padding: 20px 30px;
  border: none;
  border-radius: 14px;
  margin: 4px;

  &:hover {
    background-color: #444;
  }

  &:active {
    transform: scale(0.95);
  }
`;
