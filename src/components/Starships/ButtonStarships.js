import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import StarshipCarousel from './StarshipCarousel'
import { fetchStarships } from 'store/ducks/starships'
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles({
  button: {
    '&:hover': {
      boxShadow: '0px 0px 5px 0px rgb(30, 136, 229)'
    },
  }
})

const ButtonStarships = ({ ...props }) => {
  const [open, setCount] = useState(false)
  const classes = useStyles()
  const { results } = useSelector(state => state.starships)
  const dispatch = useDispatch()

  function getStarshipsInfo (starships) {
    dispatch(fetchStarships(starships))
    setCount(true)
  }
  return (
    <>
      {(props.starships.length > 0)
        ? <>
          <Button variant='outlined' className={classes.button} onClick={() => getStarshipsInfo(props.starships)}>{props.children}</Button>
          <StarshipCarousel open={open} onClose={() => setCount(false)} starships={results} />
          </>
        : 
        <Tooltip title="This char doesn't have any starship" placement='right'>
          <span>
            <Button variant='outlined' disabled>{props.children}</Button>
          </span>
          </Tooltip>}

    </>
  )
}

export default ButtonStarships
