import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import HeightIcon from '@material-ui/icons/Height';
import WcIcon from '@material-ui/icons/Wc';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import CakeIcon from '@material-ui/icons/Cake';

const useStyles = makeStyles({
    icons: {        
        display: 'flex',
        justifyContent: 'space-between',      
    }
  })
  

const JediAttribs = ({height, mass, gender, birth_year}) => {
    const classes = useStyles()
    return (
        <span className= {classes.icons}>
            <span title="Height">{!!height ? <HeightIcon fontSize="small"/> : ''} {height} cm</span>
            <span title="Weight">{!!mass ? <FitnessCenterIcon fontSize="small"/> : ''} {mass} kg</span>
            <span title="Gender">{!!mass ? <WcIcon fontSize="small"/> : ''} {gender} </span>
            <span title="Birthdate">{!!mass ? <CakeIcon fontSize="small"/> : ''} {birth_year} </span>            
        </span>      
    )
    
}

export default JediAttribs;