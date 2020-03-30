import axios from 'axios'

export const Types = {
  GET_STARSHIP_INFO: 'GET_STARSHIP_INFO'
}

const INITIAL_STATE = {
  results: [{}]
}

export function fetchStarships (starships = []) {
  return dispatch => {
    axios.all(starships.map(starship => axios.get(starship)))
      .then(axios.spread((...res) => (
        dispatch({
          type: Types.GET_STARSHIP_INFO,
          payload: res
        })
      )))
  }
}

const starshipsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_STARSHIP_INFO:
      return {
        ...state,
        results: action.payload
      }
    default:
      return { ...state }
  }
}

export default starshipsReducer
