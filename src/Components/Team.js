import React, { useState } from 'react';
import './Team.css'; // Import the CSS file
import teamMember1 from './team-member1.jpg'; // Import team member 1 image
import teamMember2 from './team-member2.jpg'; // Import team member 2 image
import teamMember3 from './team-member3.jpg'; // Import team member 3 image
import teamMember4 from './team-member4.jpg'; // Import team member 4 image

const Team = () => {
  const [activeMember, setActiveMember] = useState(null); // Track the active team member

  const teamMembers = [
    {
      name: 'John Doe',
      position: 'Frontend Developer',
      bio: 'John Doe has 3 years of Experience in Front-End Development. His Tech Stack mainly includes Reactjs,Vuejs and other Frontend Technologies. John Doe has also worked on backend technologies like Nodejs.',
      image: teamMember1,
    },
    {
      name: 'Jane Smith',
      position: 'UI/UX Designer',
      bio: 'Jane Smith has worked as UI/UX Engineer for more than 7 years of Industry. He is known for designing and creating user-friendly interfaces, focusing on usability and visual appeal, to enhance the overall user experience of digital products and websites.',
      image: teamMember2,
    },
    {
      name: 'Mark Johnson',
      position: 'Backend Developer',
      bio: 'Mark Johnson has been working with Arthmate from June. He has graduated from ETC College this year and is very enthusiastic in learning new backend technologies and tools',
      image: teamMember3,
    },
    {
      name: 'Emily Davis',
      position: 'Full Stack Developer',
      bio: 'Emily Davis has been working with MERN Stack for more than 4 years. She has experience of delivery high-quality tech projects within the Finance Industry. Her Frontend Skills include React and in backend she has mainly worked on Node',
      image: teamMember4,
    },
  ];

  const toggleMember = (index) => {
    setActiveMember(index === activeMember ? null : index);
  };

  return (
    <div className="content">
      <h2>Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} className="team-member-img" />
            <div className="team-member-info">
              <h3>{member.name}</h3>
              <p>{member.position}</p>
              <button className="team-member-toggle" onClick={() => toggleMember(index)}>
                {index === activeMember ? 'Hide Info' : 'Show Info'}
              </button>
              {index === activeMember && (
                <div className="team-member-bio">{member.bio}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
