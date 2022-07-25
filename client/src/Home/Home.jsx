import React from "react";
import { Container, Image, Info, Row, Section, Hello, Iam } from "./HomeComponents";

function Home() {
  return (
    <Section>
      <Container>
        <Row>
          <Info>
            <Hello>
              Hola! Mi nombre es <span>Pablo Ortega</span>
            </Hello>
            <Iam>
              Soy <span>Full Stack Web</span> developer
            </Iam>
            <p>
              Esta es una pequeña introdiccióin sobre mi
            </p>
            <a href="#contact">Hire Me</a>
          </Info>

          <Image>
            <img src="src/images/pexels-ali-pazani-2777898.jpg" alt="" />
          </Image>
        </Row>
      </Container>
    </Section>
  );
}

export default Home;
