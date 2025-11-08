import './Schedule.css';

function Schedule({ content }) {
  return (
    <div className="section">
      <h2>{content.title}</h2>
      {content.days.map((day, index) => (
        <div key={index} className="day-schedule">
          <h3>{day.icon} {day.day}</h3>
          {day.sessions.map((session, sessionIndex) => (
            <div key={sessionIndex} className="time-slot">
              <strong>{session.period}</strong>
              {session.content}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Schedule;
