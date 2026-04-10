import React from 'react';
import WireframeGlobe from '../common/WireframeGlobe';
import SectionReveal from '../common/SectionReveal';
import {
  Section,
  BgGradient,
  Container,
  Left,
  Title,
  TitleWhite,
  CtaLine,
  EmailLink,
  Right,
  Footer,
  FooterLinks,
  FooterLink,
  FooterCredit,
} from './styles';

const CONTACT_EMAIL = 'contacto@madrelindalabs.com';

const Contact = () => {
  return (
    <Section id="contacto" data-testid="contact">
      <BgGradient data-testid="contact-bg-gradient" />
      <Container data-testid="contact-container">
        <SectionReveal threshold={0.12} rootMargin="0px 0px -8% 0px">
          <Left data-testid="contact-column-info">
            <Title data-testid="contact-title">
              Sin importar cuál sea tu necesidad, podemos resolverlo para{' '}
              <TitleWhite>TI.</TitleWhite>
            </Title>
            <CtaLine data-testid="contact-description">
              Reserva una consulta en{' '}
              <EmailLink
                data-testid="contact-info-email"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                {CONTACT_EMAIL}
              </EmailLink>
              .
            </CtaLine>
          </Left>
        </SectionReveal>
        <SectionReveal threshold={0.12} rootMargin="0px 0px -8% 0px" delayMs={90}>
          <Right data-testid="contact-column-form">
            <WireframeGlobe maxWidth="400px" />
          </Right>
        </SectionReveal>
      </Container>

      <Footer data-testid="contact-footer">
        <FooterLinks>
          <FooterLink
            href="/terms-and-support.html"
            data-testid="contact-footer-terms"
          >
            Términos y soporte
          </FooterLink>
          <FooterLink
            href="/privacy-policy.html"
            data-testid="contact-footer-privacy"
          >
            Política de privacidad
          </FooterLink>
        </FooterLinks>
        <FooterCredit data-testid="contact-footer-text">
          © {new Date().getFullYear()} Madre Linda Labs E.I.R.L · Lima, Perú
        </FooterCredit>
      </Footer>
    </Section>
  );
};

export default Contact;
