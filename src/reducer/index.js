import { combineReducers } from 'redux'



import login from  './login'
import register from  './register'
import deptabel from  './deptabel'
import usertabel from  './usertable'
import account from './account'
import education from './education'
import  salary from './salary'
import  subsidy from './subsidy'
import  socialsecurity from './socialsecurity'
import  leave from './leave'
import  attendance from './attendance'
/** 
 * combineReducers 辅助函数的作用是，
 * 把一个由多个不同 reducer 函数作为 value 的 object，
 * 合并成一个最终的 reducer 函数，
 * 然后就可以对这个 reducer 调用 createStore 方法
*/



export default combineReducers({

    login,
    register,
    deptabel,
    usertabel,
    account,
    education,
    salary,
    subsidy,
    socialsecurity,
    leave,
    attendance
});