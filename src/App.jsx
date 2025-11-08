import { useState } from 'react';
import data from './data.json';
import Header from './components/Header';
import WhyProgram from './components/WhyProgram';
import Schedule from './components/Schedule';
import Technologies from './components/Technologies';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import LanguageToggle from './components/LanguageToggle';
import './App.css';

function App() {
  const [language, setLanguage] = useState('ar');
  const content = data.program[language];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  return (
    <div className="app" lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <LanguageToggle language={language} onToggle={toggleLanguage} />
      
      <div className="container">
        <Header content={content} />
        <WhyProgram content={content.whyProgram} description={content.description} />
        <Schedule content={content.schedule} />
        <Technologies content={content.technologies} />
        <Benefits content={content.benefits} />
        <Footer content={content.footer} price={content.price} />
      </div>
    </div>
  );
}

export default App;
