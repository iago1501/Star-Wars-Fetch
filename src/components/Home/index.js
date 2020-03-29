import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import JediCard from 'components/Jedis/JediCard'
import {useSelector, useDispatch} from 'react-redux'
import { fetchJedis } from 'store/ducks/jedis';
import InfiniteScroll from 'react-infinite-scroller';


const useStyles = makeStyles({
    font: {
      fontFamily: 'StarWars', 
      color: 'white',
      textAlign: 'center',
      fontSize: '50px'
      
    },
    fontSpan:{
        color: 'red'
    },
    root: {
        backgroundColor: 'black',        
        padding: '15px',
        flexGrow: 1        
    },
    scroller:{
        display: 'flex',
        flexWrap: 'wrap'
    },
    scrollParent: {
        height:"75vh",
        overflowY:"overlay",
        padding: '10px'
    }  
  })  



const Home = () => {
    const classes = useStyles()
    const {results, hasMore, next} = useSelector(state => state.jedis);      
    const dispatch = useDispatch();      

    function onLoadMore (){        
        dispatch(fetchJedis(next));
    }


    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1 className={classes.font}><span className={classes.fontSpan} >$</span> &nbsp;@ <span className={classes.fontSpan} >$</span></h1>
          </Grid>     
          <div className={classes.scrollParent}>            
          <InfiniteScroll
            className={classes.scroller}
            pageStart={1}
            loadMore={onLoadMore}
            hasMore={hasMore}
            loader={<div className="loader" key={0}>Loading ...</div>}
            useWindow={false}            
        >     
                {results.map(jedi => <JediCard {...jedi}/>)}    
            </InfiniteScroll>                        
            </div>
        </Grid>          
        </div>
    )
}

export default Home
