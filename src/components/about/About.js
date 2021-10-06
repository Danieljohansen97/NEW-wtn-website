// General React imports
import React from "react";
// Bootstrap imports
import Figure from "react-bootstrap/Figure";
import Container from "react-bootstrap/Container";

const About = () => {
  return (
    <div>
      <Container>
        <Figure className="float-start">
          <Figure.Image
            width={250}
            height={260}
            alt="The founder of Taekkyeon"
            src="https://via.placeholder.com/171x180"
          />
          <Figure.Caption>Grunnleggeren av taekkyeon her.</Figure.Caption>
        </Figure>
      </Container>
    </div>
  );
};

export default About;
