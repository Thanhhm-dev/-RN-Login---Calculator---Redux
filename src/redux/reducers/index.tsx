import { combineReducers } from 'redux'
import calculatorReducer from './calculatorReducer'
import imageReducer from './imageReducer'

export default combineReducers({
    calculateReducer: calculatorReducer,
    imageReducer: imageReducer
})