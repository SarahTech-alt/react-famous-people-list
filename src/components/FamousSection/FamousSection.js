import React, { useEffect, useState } from 'react';
import './FamousSection.css';

function FamousSection() {

  let [famousPersonName, handleChangeForName] = useState("");
  let [famousPersonRole, handleChangeForRole] = useState("");

  const addPerson = (evt) => {
    evt.preventDefault();
    console.log( `The person is ${famousPersonName} and they're famous for ${famousPersonRole}` );
  }

    return (
      <section className="new-person-section">
        <form onSubmit={addPerson}>
          <label htmlFor="name-input">Name:</label>
          <input id="name-input" onChange={e => handleChangeForName(e.target.value)} />
          <label htmlFor="role-input">Famous for:</label>
          <input id="role-input" onChange={e => handleChangeForRole(e.target.value)} />
          <button type="submit">Done</button>
        </form>
        <p>
          {famousPersonName} is famous for "{famousPersonRole}".
        </p>
        <ul>
          {/* The list should go here. */}
        </ul>
      </section>
    );
}

export default FamousSection;
