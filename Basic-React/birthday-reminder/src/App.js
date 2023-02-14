import './App.css';
import User from './User';
import Data from './Data';
import React, { useState } from 'react';

function App() {
  const [people, setPeople] = useState(Data);

  return (
    <main>
    <section className="container">
       <h3>{people.length} birthdays today</h3>
        <User people = {people} />
       <button onClick={()=>setPeople([])}>clear all</button>
    </section>
 </main>
  );
}

export default App;
