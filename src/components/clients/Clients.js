import React, { useEffect, useRef } from 'react';
import {
  Section,
  BgGlowLeft,
  BgGlowRight,
  Container,
  Header,
  Label,
  Title,
  TitleAccent,
  Subtitle,
  Grid,
  Card,
  Stars,
  Star,
  Quote,
  Author,
  Avatar,
  Name,
  Role,
  Logos,
  LogosText,
  LogosRow,
  LogoPill,
} from './styles';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, NovaTech Ventures',
    avatar: 'SM',
    rating: 5,
    text:
      'Madre Linda Labs delivered an exceptional SaaS platform for us. Their attention to detail and code quality is unmatched. We went from idea to launch in just 3 months!',
    color: '#7c3aed',
  },
  {
    name: 'James Okonkwo',
    role: 'Founder, DataBridge AI',
    avatar: 'JO',
    rating: 5,
    text:
      'Working with Madre Linda Labs was a game-changer. They understood our complex AI integration requirements and delivered a seamless, production-ready product on schedule.',
    color: '#3b82f6',
  },
  {
    name: 'Ana Carvalho',
    role: 'CTO, GreenRoute Logistics',
    avatar: 'AC',
    rating: 5,
    text:
      'The team is incredibly talented and communicates clearly throughout the entire process. Our logistics dashboard has transformed how we manage operations. Highly recommend!',
    color: '#06b6d4',
  },
  {
    name: 'Marcus Lee',
    role: 'Product Manager, FinPulse',
    avatar: 'ML',
    rating: 5,
    text:
      'Madre Linda Labs built our fintech mobile app with amazing precision and speed. The UI is beautiful, performance is top-notch, and our users love every interaction.',
    color: '#7c3aed',
  },
  {
    name: 'Elena Rossi',
    role: 'Head of Engineering, MedSync',
    avatar: 'ER',
    rating: 5,
    text:
      'They handled our HIPAA-compliant medical platform with professionalism and expertise. Security, performance, and design all exceeded our expectations.',
    color: '#3b82f6',
  },
  {
    name: 'David Nguyen',
    role: 'Co-founder, EduLaunch',
    avatar: 'DN',
    rating: 5,
    text:
      'From our e-learning platform to our mobile app, Madre Linda Labs has been our go-to partner. Reliable, talented, and genuinely invested in our success.',
    color: '#06b6d4',
  },
];

const StarRating = ({ rating, testId }) => (
  <Stars data-testid={testId}>
    {Array.from({ length: rating }).map((_, i) => (
      <Star key={i} data-testid={`${testId}-star-${i}`}>
        ★
      </Star>
    ))}
  </Stars>
);

const Clients = () => {
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
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-clients-card]');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <Section id="clients" ref={sectionRef} data-testid="clients">
      <BgGlowLeft data-testid="clients-bg-glow-left" />
      <BgGlowRight data-testid="clients-bg-glow-right" />

      <Container data-testid="clients-container">
        <Header data-testid="clients-header">
          <Label data-testid="clients-label">Testimonials</Label>
          <Title data-testid="clients-title">
            Trusted by
            <TitleAccent> Happy Clients</TitleAccent>
          </Title>
          <Subtitle data-testid="clients-subtitle">
            We measure our success by the results we deliver and the relationships
            we build along the way.
          </Subtitle>
        </Header>

        <Grid data-testid="clients-testimonial-grid">
          {testimonials.map((client, index) => (
            <Card
              key={index}
              data-clients-card
              data-testid={`clients-testimonial-card-${index}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <StarRating
                rating={client.rating}
                testId={`clients-stars-${index}`}
              />
              <Quote data-testid={`clients-quote-${index}`}>
                "{client.text}"
              </Quote>
              <Author data-testid={`clients-author-${index}`}>
                <Avatar
                  data-testid={`clients-avatar-${index}`}
                  style={{
                    background: `linear-gradient(135deg, ${client.color}, ${client.color}99)`,
                  }}
                >
                  {client.avatar}
                </Avatar>
                <div>
                  <Name data-testid={`clients-name-${index}`}>
                    {client.name}
                  </Name>
                  <Role data-testid={`clients-role-${index}`}>
                    {client.role}
                  </Role>
                </div>
              </Author>
            </Card>
          ))}
        </Grid>

        <Logos data-testid="clients-logos">
          <LogosText data-testid="clients-logos-heading">
            Worked with teams from
          </LogosText>
          <LogosRow data-testid="clients-logos-row">
            {[
              'NovaTech',
              'DataBridge AI',
              'GreenRoute',
              'FinPulse',
              'MedSync',
              'EduLaunch',
            ].map((name) => (
              <LogoPill key={name} data-testid={`clients-logo-pill-${name.replace(/\s+/g, '-').toLowerCase()}`}>
                {name}
              </LogoPill>
            ))}
          </LogosRow>
        </Logos>
      </Container>
    </Section>
  );
};

export default Clients;
