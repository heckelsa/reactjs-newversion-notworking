// @flow
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PlantWrapper = styled.div`
  text-align: center;
`

const Title = styled.h1`
  font-family: Montserrat, sans serif;
`

const MaxKwp = styled.h3`
  font-family: Montserrat, sans serif;
`

const TextWrapper = styled.h6`
  font-family: Montserrat, sans serif;
  font-size: 12px;
`

export default function Plant(props) {
  const { plantName, maxKwp, currentlyProducing, currentlyConsuming } = props
  return (
    <PlantWrapper>
      <Title>{plantName}</Title>
      {maxKwp ? <MaxKwp>Kilo Watt Peak: {maxKwp}</MaxKwp> : null}
      {currentlyProducing ? (
        <TextWrapper>
          Currently Producing: {currentlyProducing}
        </TextWrapper>
      ) : null}
      {currentlyConsuming ? (
        <TextWrapper>
          Currently Consuming: {currentlyConsuming}
        </TextWrapper>
      ) : null}
    </PlantWrapper>
  )
}

Plant.propTypes = {
  plantName: PropTypes.string.isRequired,
  maxKwp: PropTypes.number,
  currentlyProducing: PropTypes.number,
  currentlyConsuming: PropTypes.number
}

Plant.defaultProps = {
  maxKwp: 666,
  currentlyProducing: 666,
  currentlyConsuming: 777
}
