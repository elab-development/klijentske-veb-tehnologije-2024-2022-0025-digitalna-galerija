import React, { useState } from 'react';
import './AboutUs.css'; // Uvoz CSS datoteke
import jana from '../images/ktehjana.jpg';
import kristina from '../images/kethkristina.jpg';
import ema from '../images/ktehema.jpg';




// Definiraj interfejs za podatke o timu
interface TeamMember {
  name: string;
  position: string;
  department: string; 
  image: string; // Dodali smo polje za sliku
}

// niz objekata koji definiraj podatke o timu
const team: TeamMember[] = [
  { name: "Jana Ostojić", position: "Software Developer", department: "Engineering", image: jana },
  { name: "Kristina Pantelić", position: "Marketing Manager", department: "Marketing", image: kristina },
  { name: "Emilija Nikolić", position: "HR Specialist", department: "Human Resources", image: ema},

];

const AboutUs: React.FC = () => {
  const [filteredDepartment, setFilteredDepartment] = useState<string | null>(null); 
  //Koristi se useState hook za praćenje trenutno odabranog departmana za filtriranje članova tima.

  // Filtriraj članove tima prema odabranom departmanu
  const filterTeamByDepartment = (department: string) => {
    setFilteredDepartment(department);
  };

  // Funkcija za prikaz članova tima - ako nije odabran nijedan departman, prikazuju se svi članovi tima
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



  return (
    
    <div>
      
      <div className="filters">
        <button onClick={() => filterTeamByDepartment("Engineering")}>Engineering</button>
        <button onClick={() => filterTeamByDepartment("Marketing")}>Marketing</button>
        <button onClick={() => filterTeamByDepartment("Human Resources")}>Human Resources</button>
        
      </div>

      {/* Prikaz članova tima */}
      <div className="team">{displayTeamMembers()}</div>
    </div>
        
  );
};

export default AboutUs;