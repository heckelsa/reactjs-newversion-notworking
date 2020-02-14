import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Loadable from 'react-loadable'

import { getPlantsById } from '../../services/getPlants/index'
import Title from '../../components/Title/Title'
import Loading from '../../components/Loading/Loading'

const Plant = Loadable({
  loader: () => import('../../components/Plant/Plant'),
  loading: Loading
})

const MyPlantsWrapper = styled.div`
  text-align: center;
`

const OwnedBy = styled.span`
  font-family: Montserrat, sans serif;
  font-size: 10px;
`

export default function myPlants(props) {
  const { plantIds, title, owner } = props

  const plants = [...(plantIds ? getPlantsById(plantIds) : [])]

  return (
    <div>
      <MyPlantsWrapper>
        {title ? <Title>{title}</Title> : null}
        {plants
          ? plants.map(plantProps => <Plant {...plantProps} key={plantProps.plantName} />)
          : null}
        {owner ? <OwnedBy>{owner}</OwnedBy> : null}
      </MyPlantsWrapper>
    </div>
  )
}

myPlants.propTypes = {
  plantIds: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  owner: PropTypes.string,
  title: PropTypes.string
}

myPlants.defaultProps = {
  title: 'My Plants',
  plantIds: [0, 1],
  owner: 'Max Mustermann'
}
