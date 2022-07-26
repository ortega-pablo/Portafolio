import React from "react";
import { Container, Image, Info, Row, Section, Hello, Iam } from "./HomeComponents";

function Home() {
  return (
    <Section>
      <Container>
        <Row>
          <Info>
            <Hello>
              Hello, my name is <span>Pablo Ortega</span>
            </Hello>
            <Iam>
              I' m a <span>Full Stack Web</span> developer
            </Iam>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem officia quia non quos eaque voluptas cupiditate asperiores illum, ad soluta quod ut quas libero assumenda neque exercitationem perspiciatis consequatur!
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
