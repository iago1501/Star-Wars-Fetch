import React from 'react'
import { Slide } from 'material-auto-rotating-carousel'
import { blue } from '@material-ui/core/colors'
import StarshipAttribs from './StarshipAttribs'
import StarshipImage from 'assets/images/starship.png'
import Confused from 'assets/images/confused.gif'

const StarshipCard = ({ ...props }) => {
  return (

    <Slide
      media={<img src={ props.error ?  Confused : StarshipImage} alt='' width = '98%' height='100%' style={{ paddingTop: '15px', objectFit: 'cover' }} />}
      mediaBackgroundStyle={{ backgroundColor: blue[600] }}
      style={{ backgroundColor: blue[600] }}
      title={props.name}
      subtitle={ props.error ?  props.message : <StarshipAttribs {...props} />}
    />
  )
}

export default StarshipCard
