import './Benefits.css';

function Benefits({ content }) {
  return (
    <div className="section">
      <h2>{content.title}</h2>
      <ul className="benefits-list">
        {content.items.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </div>
  );
}

export default Benefits;
