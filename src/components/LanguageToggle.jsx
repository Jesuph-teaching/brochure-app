import './LanguageToggle.css';

function LanguageToggle({ language, onToggle }) {
  return (
    <div className="lang-toggle" onClick={onToggle}>
      <span>{language === 'ar' ? 'English 🇬🇧' : 'العربية 🇩🇿'}</span>
    </div>
  );
}

export default LanguageToggle;
