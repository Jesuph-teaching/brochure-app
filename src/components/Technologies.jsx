import './Technologies.css';

function Technologies({ content }) {
  return (
    <div className="section">
      <h2>{content.title}</h2>
      <div className="tech-list">
        {content.items.map((tech, index) => (
          <span key={index} className="tech-badge">{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
