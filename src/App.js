import './App.css';
import WelcomePage from './components/pages/WelcomePage';
import AboutPage from './components/pages/AboutPage';
import SkillPage from './components/pages/SkillPage';

function App() {
  return (
    <div className="App">
      <WelcomePage/>
      <AboutPage/>
      <SkillPage/>
    </div>
  );
}

export default App;
