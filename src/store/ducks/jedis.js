import axios from 'axios'

export const Types = {
  GET_JEDIS_INFO: 'GET_JEDIS_INFO'
}

const INITIAL_STATE = {
  count: 1,
  next: 'https://swapi.co/api/people/?page=1',
  previous: null,
  results: [],
  page: 1,
  hasMore: true
}

export function fetchJedis (next = 'https://swapi.co/api/people/?page=1') {
  return dispatch => {
    axios.get(next)
      .then(res =>
        dispatch({
          type: Types.GET_JEDIS_INFO,
          payload: res.data
        })
      )
  }
}

const jedisReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_JEDIS_INFO:
      return {
        ...state,
        next: action.payload.next,
        hasMore: !!action.payload.next,
        results: state.results.concat(action.payload.results)
      }
    default:
      return { ...state }
  }
}

export default jedisReducer
