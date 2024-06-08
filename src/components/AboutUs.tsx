import React, { useState } from 'react';
import './AboutUs.css'; // Uvoz CSS datoteke
import johnDoeImg from '../images/slika4.png';
import janeSmithImg from '../images/slika2.png';
import alexJohnsonImg from '../images/slika3.png';



// Definiraj interfejs za podatke o timu
interface TeamMember {
  name: string;
  position: string;
  department: string;
  image: string; // Dodali smo polje za sliku
}

// Definiraj podatke o timu
const team: TeamMember[] = [
  { name: "John Doe", position: "Software Developer", department: "Engineering", image: johnDoeImg },
  { name: "Jane Smith", position: "Marketing Manager", department: "Marketing", image: janeSmithImg },
  { name: "Alex Johnson", position: "HR Specialist", department: "Human Resources", image: alexJohnsonImg },

];

const AboutUs: React.FC = () => {
  const [filteredDepartment, setFilteredDepartment] = useState<string | null>(null);

  // Filtriraj članove tima prema odabranom departmanu
  const filterTeamByDepartment = (department: string) => {
    setFilteredDepartment(department);
  };

  // Funkcija za prikaz članova tima
  const displayTeamMembers = () => {
    if (filteredDepartment) {
      const filteredTeam = team.filter(member => member.department === filteredDepartment);
      return filteredTeam.map(member => (
        <div key={member.name} className="team-member">
          <img src={member.image} alt={member.name} />
          <div>
            <h3>{member.name}</h3>
            <p>{member.position}</p>
            <p>{member.department}</p>
          </div>
        </div>
      ));
    } else {
      return team.map(member => (
        <div key={member.name} className="team-member">
          <img src={member.image} alt={member.name} />
          <div>
            <h3>{member.name}</h3>
            <p>{member.position}</p>
            <p>{member.department}</p>
          </div>
        </div>
      ));
    }
  };

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
    <div>
      
      <div className="filters">
        <button onClick={() => filterTeamByDepartment("Engineering")}>Engineering</button>
        <button onClick={() => filterTeamByDepartment("Marketing")}>Marketing</button>
        <button onClick={() => filterTeamByDepartment("Human Resources")}>Human Resources</button>
        
      </div>

      {/* Prikaz članova tima */}
      <div className="team">{displayTeamMembers()}</div>
    </div>
        <div className="dark">
            <button onClick={toggleDarkMode}>Promeni u Dark Mode</button>
        </div>
    </div>
  );
};

export default AboutUs;
