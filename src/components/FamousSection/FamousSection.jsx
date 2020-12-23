import React, { useState } from 'react';
import './FamousSection.css';

function FamousSection() {
  let [famousPerson, setPerson] = useState({name:"", role:""});

  const addPerson = (evt) => {
    evt.preventDefault();
    console.log( `The person is ${famousPerson.name} and they're famous for ${famousPerson.role}` );
  }

    return (
      <section className="new-person-section">
        <form onSubmit={addPerson}>
          <label htmlFor="name-input">Name:</label>
          <input id="name-input" onChange={e => setPerson({...famousPerson, name: e.target.value})} />
          <label htmlFor="role-input">Famous for:</label>
          <input id="role-input" onChange={e => setPerson({...famousPerson, role: e.target.value})} />
          <button type="submit">Done</button>
        </form>
        <p>
          {famousPerson.name} is famous for "{famousPerson.role}".
        </p>
        <ul>
          {/* The list should go here. */}
        </ul>
      </section>
    );
}

export default FamousSection;
