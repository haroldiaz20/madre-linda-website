import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Clients from './components/clients/Clients';
import Contact from './components/contact/Contact';

const AppRoot = styled.div`
  min-height: 100vh;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoot data-testid="app-root">
        <Navbar />
        <Hero />
        <About />
        <Clients />
        <Contact />
      </AppRoot>
    </>
  );
}

export default App;
