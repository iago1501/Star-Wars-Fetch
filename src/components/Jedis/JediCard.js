import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import JediAttribs from './JediAttribs'
import Grid from '@material-ui/core/Grid'
import ButtonStarships from 'components/Starships/ButtonStarships'
import lightsabers from 'assets/images/lightsabers.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 330,
    marginBottom: '20px',
    boxShadow: '0px 0px 5px 1px rgba(225,255,255,1)',
    '&:hover': {
      boxShadow: '0px 0px 10px 1px rgba(225,255,255,1)'
    }
  },
  media: {
    height: 120
  }
})

const JediCard = ({ name, height, mass, gender, birth_year, starships }) => {
  const classes = useStyles()

  return (
    <Grid item xs={12} lg={3} sm={6}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={lightsabers}
            title={name} alt={name}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {name}
            </Typography>
            <Typography variant='body2' color='textSecondary'>
              <JediAttribs height={height} mass={mass} gender={gender} birth_year={birth_year} />
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <ButtonStarships className={classes.button} starships={starships}>See Starships</ButtonStarships>
          {/* <Button variant='outlined'>
          More Details
            </Button> */}
        </CardActions>
      </Card>
    </Grid>
  )
}

export default JediCard
