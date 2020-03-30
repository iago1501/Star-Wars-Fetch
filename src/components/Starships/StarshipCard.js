import React from 'react'
import { Slide } from 'material-auto-rotating-carousel'
import { blue } from '@material-ui/core/colors'
import StarshipAttribs from './StarshipAttribs'
import StarshipImage from 'assets/images/starship.png'

const StarshipCard = ({ ...props }) => {
  return (

    <Slide
      media={<img src={StarshipImage} alt='' width = '98%' height='100%' style={{ paddingTop: '15px', objectFit: 'cover' }} />}
      mediaBackgroundStyle={{ backgroundColor: blue[600] }}
      style={{ backgroundColor: blue[600] }}
      title={props.name}
      subtitle={<StarshipAttribs {...props} />}
    />
  )
}

export default StarshipCard
