import React, { useEffect, useRef } from 'react';
import {
  Section,
  Container,
  Header,
  Label,
  Title,
  TitleAccent,
  Description,
  Grid,
  Card,
  CardIcon,
  CardTitle,
  CardText,
} from './styles';

const features = [
  {
    icon: '⚡',
    title: 'High-Performance Apps',
    description:
      'We build blazing-fast applications optimized for performance, scalability, and seamless user experiences.',
  },
  {
    icon: '🎨',
    title: 'Modern UI/UX Design',
    description:
      'Beautiful, intuitive interfaces that captivate users and drive engagement from the first interaction.',
  },
  {
    icon: '🔒',
    title: 'Secure by Default',
    description:
      'Security is baked into every layer of our development process, protecting your data and your users.',
  },
  {
    icon: '📱',
    title: 'Mobile-First',
    description:
      'Every solution we craft is fully responsive and optimized for the devices your customers use every day.',
  },
  {
    icon: '🚀',
    title: 'Rapid Delivery',
    description:
      'Agile workflows and clear communication ensure your project ships on time and within budget.',
  },
  {
    icon: '🤝',
    title: 'Long-Term Partnership',
    description:
      'We build lasting relationships, supporting your growth with ongoing maintenance and feature development.',
  },
];

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true');
          }
        });
      },
      { threshold: 0.15 }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-about-card]');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <Section id="about" ref={sectionRef} data-testid="about">
      <Container data-testid="about-container">
        <Header data-testid="about-header">
          <Label data-testid="about-label">Who We Are</Label>
          <Title data-testid="about-title">
            Crafting Software That
            <TitleAccent> Makes a Difference</TitleAccent>
          </Title>
          <Description data-testid="about-description">
            Madre Linda Labs is a boutique software development studio dedicated to
            building exceptional digital products. Founded by a passionate developer,
            we partner with startups, businesses, and entrepreneurs to transform ideas
            into polished, production-ready software.
          </Description>
        </Header>

        <Grid data-testid="about-feature-grid">
          {features.map((feature, index) => (
            <Card
              key={index}
              data-about-card
              data-testid={`about-feature-card-${index}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <CardIcon>{feature.icon}</CardIcon>
              <CardTitle>{feature.title}</CardTitle>
              <CardText>{feature.description}</CardText>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default About;
