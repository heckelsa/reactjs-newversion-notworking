import React, { Component } from 'react';


import Box from './Box'
import Title from '../../components/Title/Title'

class RouteCalls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('https://api.mydomain.com')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
}

export default function Stuff() {

  return (
    <div>
      <Title>Stuff for saskia</Title>
      <Box />
    </div>
  )
}
