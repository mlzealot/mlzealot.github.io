import './App.css';
import StickyFooter from './components/Footer';
import DefaultNavBar from './components/DefaultNavBar';
import Home from './components/Home';
import ProjectCards from './components/ProjectCards';

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, StyledEngineProvider } from '@mui/material';
import { darkTheme } from './Theme';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <DefaultNavBar/>
          <section id="home"><Home /></section>
          <section id="projects"><ProjectCards /></section>
          <section id="aboutme"><AboutMe /></section>
          <StickyFooter/>
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
