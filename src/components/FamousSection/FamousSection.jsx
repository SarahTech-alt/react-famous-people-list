import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FamousSection.css';

function FamousSection() {
  let [famousPersonName, setPersonName] = useState('');
  let [famousPersonRole, setPersonRole] = useState('');
  let [famousPeopleArray, setPeopleArray] = useState([]);


  // On Load, do this thing
  useEffect(() => {
    console.log('in useEffect')
    fetchPeople();
  }, []);



  // GET request
  const fetchPeople = () => {
    axios.get('/people').then((response) => {
      console.log('this is the response from fetchPeople', response.data);
      // take the data from the response and assign it to the famousPeopleArray
      setPeopleArray(response.data);
    })
  }



  const addPerson = (evt) => {
    evt.preventDefault();
    console.log(`The person is ${famousPersonName} and they're famous for ${famousPersonRole}`);
    // creating variable with key and values to send
    // as data to the server
    const FamousPerson = {
      name: famousPersonName,
      role: famousPersonRole
    };
    // send a post request to add to database
    // log the response message from the client
    // send to fetchPeople to get updated database info
    axios.post('/people', FamousPerson).then(response =>
      {console.log(response);
        fetchPeople();
      }).catch((error) => {
        console.log('there was an error', error);
      })

  }

  return (
    <section className="new-person-section">
      <form>
        <label htmlFor="name-input">Name:</label>
        <input id="name-input" onChange={e => setPersonName(e.target.value)} />
        <label htmlFor="role-input">Famous for:</label>
        <input id="role-input" onChange={e => setPersonRole(e.target.value)} />
        <button onClick={addPerson} type="submit">Done</button>
      </form>
      <p>
        {famousPersonName} is famous for "{famousPersonRole}".
      </p>
      <ul>
        {famousPeopleArray.map(person =>
          (<li key={person.id}> {person.name} as "{person.role}"</li>))}
      </ul>
    </section>
  );
}

export default FamousSection;
