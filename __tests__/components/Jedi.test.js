import {expect} from 'chai'
import {fetchJedis} from '../../src/store/ducks/jedis'


test('fetchJedis should be a function', () => {    
    expect(fetchJedis).to.be.a('function')
})