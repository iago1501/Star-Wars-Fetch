import React from 'react'
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel'
import StarshipCard from './StarshipCard'


const StarshipCarousel = ({open, onClose, starships}) => {


 return (
  <AutoRotatingCarousel    
    label='Close'
    open={open}
    onClose={onClose}
    onStart={onClose}
    autoplay = {false}
  >    
  {starships.map(starship => <StarshipCard {...starship.data} />)}    
  
  </AutoRotatingCarousel >
 ) 
}

export default StarshipCarousel