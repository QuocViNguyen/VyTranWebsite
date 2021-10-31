import './App.css';
import WelcomePage from './components/pages/WelcomePage';
import AboutPage from './components/pages/AboutPage';
import SkillPage from './components/pages/SkillPage';
import FooterPage from './components/pages/FooterPage';

function App() {
  return (
    <div className="App">
      <WelcomePage/>
      <AboutPage/>
      <SkillPage/>

      <FooterPage/>
    </div>
  );
}

export default App;
