import * as types from '../action/types'

const initState = {
  car: {
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
    department: '' ,//部门

  },
  displayDialog: false,
  selectedCar: {},
  globalFilter: null,
  newCar: false,
  index: 0,
  cars:[
    {
    name: 'yang',
    job_number: '222',//工号
    age: '12',      //年龄
    birth: '10',    //出生年月
    message: 'wq',
    identity_number: '434343', //身份证号
    inservice: 'yysua',       //在职情况
    marriage: 'dewd',        //婚姻情况
    political: 'dewde',      //政治面貌
    phone: 'dew',           //电话
    gender: 'dew',           //性别
    address: 'de',           //家庭住址
    inservice_time: 'dewdw',     //入职时间
    department: 'dewdew' ,//部门}
    },
    {
      name: 'yang',
      job_number: '222',//工号
      age: '12',      //年龄
      birth: '10',    //出生年月
      message: 'wq',
      identity_number: '434343', //身份证号
      inservice: 'yysua',       //在职情况
      marriage: 'dewd',        //婚姻情况
      political: 'dewde',      //政治面貌
      phone: 'dew',           //电话
      gender: 'dew',           //性别
      address: 'de',           //家庭住址
      inservice_time: 'dewdw',     //入职时间
      department: 'dewdew' ,//部门}
      },

  ]
}




export default(state = initState, action) => {
  if(action.type === types.Register_NAME){
      const newState = JSON.parse(JSON.stringify(state))
      newState.name = action.value
      return newState
  } 

  if(action.type === types.u_InputNameChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.name = action.value
    return newState
} 


  
  return state
}