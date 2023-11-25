import './App.css';
import Header from './UserCV/Header';
import PersonalInfo from './UserCV/PersonalInfo';
import Contacts from './UserCV/Contacts';
import Education from './UserCV/Education';
import Skills from './UserCV/Skills';
function App() {
  return (
    <div className='CV'>
      <Header/>
      <PersonalInfo/>
      <Contacts/>
      <Education/>
      <Skills/>
    </div>
  );
}

export default App;
