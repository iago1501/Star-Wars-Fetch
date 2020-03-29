import React from 'react'
import { Slide } from 'material-auto-rotating-carousel'
import {green } from '@material-ui/core/colors'
import StarshipAttribs from './StarshipAttribs'

const StarshipCard = ({...props}) => {
return (
    /* https://66.media.tumblr.com/tumblr_lz4b0xReaG1qfy2kdo1_400.gifv */
    /* https://mcdn.wallpapersafari.com/medium/0/60/fkslRA.jpg */
    <Slide      
      media={<img src='https://mcdn.wallpapersafari.com/medium/0/60/fkslRA.jpg' alt ='' width='98%' height='95%'/>}
      mediaBackgroundStyle={{ backgroundColor: green[600] }}
      style={{ backgroundColor: green[600] }}
      title={props.name}
      subtitle={<StarshipAttribs {...props}/>}      
    />
    )
}

export default StarshipCard