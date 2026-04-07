import React, { useEffect, useRef } from 'react';
import './Clients.css';

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

const StarRating = ({ rating }) => (
  <div className="clients__stars">
    {Array.from({ length: rating }).map((_, i) => (
      <span key={i} className="clients__star">★</span>
    ))}
  </div>
);

const Clients = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('clients__card--visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.clients__card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="clients" className="clients" ref={sectionRef}>
      <div className="clients__bg-glow clients__bg-glow--left" />
      <div className="clients__bg-glow clients__bg-glow--right" />

      <div className="clients__container">
        <div className="clients__header">
          <span className="clients__label">Testimonials</span>
          <h2 className="clients__title">
            Trusted by
            <span className="clients__title-accent"> Happy Clients</span>
          </h2>
          <p className="clients__subtitle">
            We measure our success by the results we deliver and the relationships
            we build along the way.
          </p>
        </div>

        <div className="clients__grid">
          {testimonials.map((client, index) => (
            <div
              key={index}
              className="clients__card"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <StarRating rating={client.rating} />
              <p className="clients__quote">"{client.text}"</p>
              <div className="clients__author">
                <div
                  className="clients__avatar"
                  style={{ background: `linear-gradient(135deg, ${client.color}, ${client.color}99)` }}
                >
                  {client.avatar}
                </div>
                <div>
                  <p className="clients__name">{client.name}</p>
                  <p className="clients__role">{client.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="clients__logos">
          <p className="clients__logos-text">Worked with teams from</p>
          <div className="clients__logos-row">
            {['NovaTech', 'DataBridge AI', 'GreenRoute', 'FinPulse', 'MedSync', 'EduLaunch'].map((name) => (
              <span key={name} className="clients__logo-pill">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
