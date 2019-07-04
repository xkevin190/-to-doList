import {combineReducers} from 'redux';
import aplicationReducer from './reducers';


export default combineReducers({
   app:aplicationReducer
});