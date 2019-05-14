import * as types from '../action/types'

const initState = {
  name: '',
  job_number: '',//工号
  age: '',      //年龄
  birth: '',    //出生年月
  message: '',
  identity_number: '', //身份证号
  inservice: '',       //在职情况
  marriage: '',        //婚姻情况
  political: '',      //政治面貌
  phone: '',           //电话
  gender: '',           //性别
  address: '',           //家庭住址
  inservice_time: '',     //入职时间
  department: ''          //部门
}




export default(state = initState, action) => {
  if(action.type === types.Register_NAME){
      const newState = JSON.parse(JSON.stringify(state))
      newState.name = action.value
      return newState
  } 
  return state
}