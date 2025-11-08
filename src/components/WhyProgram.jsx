import './WhyProgram.css';

function WhyProgram({ content, description }) {
  return (
    <div className="section">
      <h2>{content.title}</h2>
      <p className="why-description">{description}</p>
      <div className="info-grid">
        {content.features.map((feature, index) => (
          <div key={index} className="info-card">
            <h3>{feature.icon} {feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyProgram;
