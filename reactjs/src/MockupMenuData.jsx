import React from 'react';
import { Link } from 'react-router-dom';
import generateId from 'nanoid';

import { Button } from './components/Button/Button';

module.exports = [
  <Button backgroundColor="#bf2f24" key={generateId()} >
    <Link to="/">Home</Link>
  </Button>,
  <Button backgroundColor="#c53ee2" key={generateId()} >
    <Link to="/addPlant">Add Plant!</Link>
  </Button>,
  <Button backgroundColor="#92569f" key={generateId()} >
    <Link to="/myPlants">My Plants!</Link>
  </Button>,
  <Button backgroundColor="#92569f" key={generateId()} >
    <Link to="/stuff">Saskia stuff!</Link>
  </Button>,
];
