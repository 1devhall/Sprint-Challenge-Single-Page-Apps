import React from "react";
import { Jumbotron, Container } from 'reactstrap';

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Welcome to the ultimate fan site!</h1>
          <img
  className="main-img"
  src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  alt="rick"
/>
        </Container>
      </Jumbotron>
      </header>
    </section>
  );
}
