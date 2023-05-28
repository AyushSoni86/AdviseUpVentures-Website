// import React from 'react';
// import './Teams.css';
// import teamData from './data.js';

// const Team = () => {
//   return (
//     <div className="team-container">
//       <h2>Our Team</h2>
//       <div className="team-cards">
//         {teamData.map((member) => (
//           <div className="team-card" key={member.id}>
//             <img src={member.photo} alt={member.name} />
//             <div className="member-details">
//               <h3>{member.name}</h3>
//               <p>{member.designation}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Team;

import React from 'react';
import './Teams.css';
import teamData from './data.js';

const Team = () => {
  // Divide team members into two groups of 3
  const topRow = teamData.slice(0, 3);
  const bottomRow = teamData.slice(3);

  return (
    <div className="team-container">
      <h2>Our Team</h2>
      <div className="team-row">
        {topRow.map((member) => (
          <div className="team-card" key={member.id}>
            <img src={member.photo} alt={member.name} />
            <div className="member-details">
              <h3>{member.name}</h3>
              <p>{member.designation}</p>
              <p>{member.loremText}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="team-row">
        {bottomRow.map((member) => (
          <div className="team-card" key={member.id}>
            <img src={member.photo} alt={member.name} />
            <div className="member-details">
              <h3>{member.name}</h3>
              <p>{member.designation}</p>
              <p>{member.loremText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
