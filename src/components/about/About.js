import React from 'react';
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
} from './styles';

const TEAM = [
  {
    name: 'Eduardo Andrade',
    role: 'Director general de operaciones',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
  },
  {
    name: 'Isabel Parra',
    role: 'Directora ejecutiva',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
  },
  {
    name: 'Claudio Alvarado',
    role: 'Director general de TI',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
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
            <Card
              key={member.name}
              data-testid={`about-feature-card-${index}`}
            >
              <PhotoWrap>
                <Photo
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  width={400}
                  height={400}
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
