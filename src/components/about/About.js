import React from "react";
import {
  Section,
  Container,
  Header,
  Title,
  Grid,
  Card,
  PhotoWrap,
  Photo,
  Name,
  Role,
} from "./styles";

const TEAM = [
  {
    key: "eduardo",
    name: "Eduardo Andrade",
    role: "Director general de operaciones",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&h=700&fit=crop",
  },
  {
    key: "isabel",
    name: "Isabel Parra",
    role: "Directora ejecutiva",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&h=700&fit=crop",
  },
  {
    key: "claudio",
    name: "Claudio Alvarado",
    role: "Director general de TI",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&h=700&fit=crop",
  },
];

const About = () => {
  return (
    <Section id="equipo" data-testid="about">
      <Container data-testid="about-container">
        <Header data-testid="about-header">
          <Title data-testid="about-title">Conoce al equipo</Title>
        </Header>

        <Grid data-testid="about-feature-grid">
          {TEAM.map((member, index) => (
            <Card key={member.key} data-testid={`about-feature-card-${index}`}>
              <PhotoWrap>
                <Photo
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  width={900}
                  height={700}
                />
              </PhotoWrap>
              <Name>{member.name}</Name>
              <Role>{member.role}</Role>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default About;
