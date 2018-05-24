import {combineReducers} from 'redux';
import repository from './reducers/repository';
import pagination from './reducers/pagination';
import items from './reducers/items';
import request from './reducers/request'

export default combineReducers({repository, pagination, items, request});