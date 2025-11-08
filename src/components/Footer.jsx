import './Footer.css';

function Footer({ content, price }) {
  return (
    <div className="footer" id="register">
      <h2>{content.title}</h2>
      <p className="footer-description">{content.description}</p>
      <a href="https://forms.gle/DXd3i4EqkvbPnaeE9" className="cta-button footer-cta">{content.cta}</a>
      <p className="footer-contact">
        <a href={`mailto:${content.email}`} className="footer-email">📧 {content.email}</a><br />
        <div dir='ltr'>
          📱 {
            content.phones.map((phone, index) => (
              <span key={index}>
                <a href={`tel:${phone}`} className="footer-phone">{phone}</a>{index < content.phones.length - 1 ? ' / ' : ''}
              </span>
            ))
          }
        </div>
      </p>
    </div>
  );
}

export default Footer;
