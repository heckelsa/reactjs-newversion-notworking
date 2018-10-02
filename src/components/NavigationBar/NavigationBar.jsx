import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const NavigationBarWrapper = styled.div`
  background-color: ${props => props.backgroundColor};
  height: 100px;
`

export default function NavigationBar(props) {
  const { backgroundColor, content } = props

  return <NavigationBarWrapper backgroundColor={backgroundColor}>{content}</NavigationBarWrapper>
}

NavigationBar.propTypes = {
  backgroundColor: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
}

NavigationBar.defaultProps = {
  content: <div>Nothingham!</div>,
  backgroundColor: 'red'
}
