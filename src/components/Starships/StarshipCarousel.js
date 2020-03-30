import React from 'react'
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel'
import StarshipCard from './StarshipCard'

const StarshipCarousel = ({ open, onClose, starships }) => {  
  return (
    <AutoRotatingCarousel
      label='Close'
      open={open}
      onClose={onClose}
      onStart={onClose}
      autoplay={false}
      style={{ width: '90%' }}
    >
      {starships.map((starship, idx) => <StarshipCard key = {idx} {...starship.data} />)}

    </AutoRotatingCarousel>
  )
}

StarshipCarousel.defaultProps = {  
  starships: [],
};

export default StarshipCarousel
