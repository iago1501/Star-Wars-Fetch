import axios from 'axios'

export const Types = {
  GET_STARSHIP_INFO: 'GET_STARSHIP_INFO',
  GET_STARSHIP_ERROR: 'GET_STARSHIP_ERROR'
}

const INITIAL_STATE = {
  results: [{}]
}

const ERROR_STATE = 
  [{  data: {
      name: 'Oooops',      
      error: true,
      message: 'Something went wrong, sorry'    
    }      
  }]



export function fetchStarships (starships = []) {
  return async dispatch => {    
      await axios.all(starships.map(starship => axios.get(starship)))
      .then(axios.spread((...res) => (
        dispatch({
          type: Types.GET_STARSHIP_INFO,
          payload: res
        })
      ))
      ).catch((error) => {      
      if(error){        
        dispatch({
          type: Types.GET_STARSHIP_ERROR,
          payload: error
        })
      } 
    })     
  }
  
}

const starshipsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_STARSHIP_INFO:
      return {
        ...state,
        results: action.payload
      }
    case Types.GET_STARSHIP_ERROR:      
    return {
      ...state,
      results: ERROR_STATE
    }
    default:
      return { ...state }
  }
}

export default starshipsReducer
