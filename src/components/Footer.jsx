import './Footer.css';

function Footer({ content, price }) {
  return (
    <div className="footer" id="register">
      <h2>{content.title}</h2>
      <p className="footer-description">{content.description}</p>
      <a href="https://forms.gle/DXd3i4EqkvbPnaeE9" className="cta-button footer-cta">{content.cta}</a>
      <p className="footer-contact">
        📧 {content.email}<br />
        📱 {content.phone}
      </p>
    </div>
  );
}

export default Footer;
