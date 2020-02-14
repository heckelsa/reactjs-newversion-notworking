import styled from 'styled-components'

const Button = styled.button`
  border: 2px solid ${props => (props.backgroundColor ? props.backgroundColor : '#f75f0a')};
  background-color: unset;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  font-family: 'Montserrat', sans serif;
`

module.exports = {
  Button: Button
}
