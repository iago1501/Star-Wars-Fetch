import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import FlightIcon from '@material-ui/icons/Flight';
import HeightIcon from '@material-ui/icons/Height';
import SpeedIcon from '@material-ui/icons/Speed';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import ClassIcon from '@material-ui/icons/Class';


const useStyles = makeStyles({
    icons: {        
        display: 'flex',
        justifyContent: 'space-between', 
        flexWrap: 'wrap'     
    }
  })
  

const StarshipAttribs = ({cost_in_credits, model, length, max_atmosphering_speed,crew, passengers, starship_class}) => {
    const classes = useStyles()
    return (
        <span className= {classes.icons}>                 
            {/* {!!model ? <FlightIcon fontSize="small"/> : ''} {model}
            {!!starship_class ? <ClassIcon fontSize="small"/> : ''} {starship_class} */}
            <span title="Credits Cost">{!!cost_in_credits ? <MonetizationOnIcon fontSize="small"/> : ''} {cost_in_credits}</span>
            <span title="Speed">{!!max_atmosphering_speed ? <SpeedIcon fontSize="small"/> : ''} {max_atmosphering_speed}</span>
            <span title="Size">{!!length ? <HeightIcon fontSize="small"/> : ''} {length}</span>
            <span title="Crew">{!!crew ? <SupervisedUserCircleIcon fontSize="small"/> : ''} {crew}</span>
            <span title="Passengers">{!!passengers ? <AirlineSeatReclineNormalIcon fontSize="small"/> : ''} {passengers}</span>
        </span>      
    )
    
}

export default StarshipAttribs;