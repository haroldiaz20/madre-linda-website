import React, { useEffect, useRef } from 'react';
import './About.css';

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
            entry.target.classList.add('about__card--visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const cards = sectionRef.current?.querySelectorAll('.about__card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about__container">
        <div className="about__header">
          <span className="about__label">Who We Are</span>
          <h2 className="about__title">
            Crafting Software That
            <span className="about__title-accent"> Makes a Difference</span>
          </h2>
          <p className="about__description">
            Madre Linda Labs is a boutique software development studio dedicated to
            building exceptional digital products. Founded by a passionate developer,
            we partner with startups, businesses, and entrepreneurs to transform ideas
            into polished, production-ready software.
          </p>
        </div>

        <div className="about__grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="about__card"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="about__card-icon">{feature.icon}</div>
              <h3 className="about__card-title">{feature.title}</h3>
              <p className="about__card-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
