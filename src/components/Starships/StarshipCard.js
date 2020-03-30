import React from 'react'
import { Slide } from 'material-auto-rotating-carousel'
import { blue } from '@material-ui/core/colors'
import StarshipAttribs from './StarshipAttribs'
import StarshipImage from 'assets/images/starship.png'

const StarshipCard = ({ ...props }) => {
  return (

    <Slide
      media={<img src={StarshipImage} alt='' style={{ paddingTop: '15px' }} />}
      mediaBackgroundStyle={{ backgroundColor: blue[600] }}
      style={{ backgroundColor: blue[600] }}
      title={props.name}
      subtitle={<StarshipAttribs {...props} />}
    />
  )
}

export default StarshipCard
