import './Header.css';

function Header({ content }) {
  return (
    <div className="header">
      <h1>{content.title}</h1>
      <p className="subtitle">{content.subtitle}</p>
      <div className="price-badge">{content.price}</div>
      <p style={{ fontSize: '1.2em', margin: '15px 0' }}>{content.duration}</p>
      <a href="#register" className="cta-button">{content.cta}</a>
    </div>
  );
}

export default Header;
