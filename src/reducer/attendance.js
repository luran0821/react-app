import * as types from '../action/types'

const initState = {
  car:{
    user_id: '',   //工号
    user_name: '',    //姓名
    user_department: '', //部门 

    attendance_tyeps: '',    //考勤类型
    date: '',    //时间
    doctype: ''   //备注
  },
    
  displayDialog: false,
  selectedCar: {},
  globalFilter: null,
  newCar: false,
  index: 0,
  cars: [
    {
      user_id: 'wq',   //工号
      user_name: 'wq',    //姓名
      user_department: 'wq', //部门 
  
      attendance_tyeps: 'wqqw',    //考勤类型
      date: 'wqwqww',    //时间
      doctype: 'wqwq'   //备注
    },
    {
      user_id: 'wq',   //工号
      user_name: 'wq',    //姓名
      user_department: 'wq', //部门 
  
      attendance_tyeps: 'wqqw',    //考勤类型
      date: 'wqwqww',    //时间
      doctype: 'wqwq'   //备注
    },
    {
      user_id: 'wq',   //工号
      user_name: 'wq',    //姓名
      user_department: 'wq', //部门 
  
      attendance_tyeps: 'wqqw',    //考勤类型
      date: 'wqwqww',    //时间
      doctype: 'wqwq'   //备注
    },
    {
      user_id: 'wq',   //工号
      user_name: 'wq',    //姓名
      user_department: 'wq', //部门 
  
      attendance_tyeps: 'wqqw',    //考勤类型
      date: 'wqwqww',    //时间
      doctype: 'wqwq'   //备注
    },
    {
      user_id: 'wq',   //工号
      user_name: 'wq',    //姓名
      user_department: 'wq', //部门 
  
      attendance_tyeps: 'wqqw',    //考勤类型
      date: 'wqwqww',    //时间
      doctype: 'wqwq'   //备注
    },
    {
      user_id: 'wq',   //工号
      user_name: 'wq',    //姓名
      user_department: 'wq', //部门 
  
      attendance_tyeps: 'wqqw',    //考勤类型
      date: 'wqwqww',    //时间
      doctype: 'wqwq'   //备注
    },
    {
      user_id: 'wq',   //工号
      user_name: 'wq',    //姓名
      user_department: 'wq', //部门 
  
      attendance_tyeps: 'wqqw',    //考勤类型
      date: 'wqwqww',    //时间
      doctype: 'wqwq'   //备注
    },
    {
      user_id: 'wq',   //工号
      user_name: 'wq',    //姓名
      user_department: 'wq', //部门 
  
      attendance_tyeps: 'wqqw',    //考勤类型
      date: 'wqwqww',    //时间
      doctype: 'wqwq'   //备注
    },
    {
      user_id: 'wq',   //工号
      user_name: 'wq',    //姓名
      user_department: 'wq', //部门 
  
      attendance_tyeps: 'wqqw',    //考勤类型
      date: 'wqwqww',    //时间
      doctype: 'wqwq'   //备注
    },
    {
      user_id: 'wq',   //工号
      user_name: 'wq',    //姓名
      user_department: 'wq', //部门 
  
      attendance_tyeps: 'wqqw',    //考勤类型
      date: 'wqwqww',    //时间
      doctype: 'wqwq'   //备注
    },
    {
      user_id: 'wq',   //工号
      user_name: 'wq',    //姓名
      user_department: 'wq', //部门 
  
      attendance_tyeps: 'wqqw',    //考勤类型
      date: 'wqwqww',    //时间
      doctype: 'wqwq'   //备注
    }
    ]
    
}
   
export default(state = initState, action) => {
    if(action.type === types.ADinputSearchChanege){
      const newState = JSON.parse(JSON.stringify(state))
      newState.globalFilter = action.value 
      return newState
  }

    if(action.type === types.inputADUser_idChanege){
        const newState = JSON.parse(JSON.stringify(state))
        newState.car.user_id = action.value   
        return newState
   } 

  if(action.type === types.inputADUser_nameChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.user_name = action.value 
    return newState
  } 

  if(action.type === types.inputADUser_departmentChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.user_department = action.value 
    return newState
  } 



  if(action.type === types.inputAttendance_tyepsChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.attendance_tyeps = action.value 
    return newState
  } 

  if(action.type === types.inputDatesChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.date = action.value 
    return newState
  } 

  if(action.type === types.inputDoctypeChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.doctype = action.value 
    return newState
  } 




  if(action.type === types.ADselectionChange){
    const newState = JSON.parse(JSON.stringify(state))
    newState.newCar = false
    newState.car = action.value
    newState.index = state.cars.indexOf(action.value)
    console.log(state.cars.indexOf(action.value))
    //console.log(state.index)
      
    newState.displayDialog = true
    
    return newState
  } 

 
  if(action.type === types.ADonHide){
    const newState = JSON.parse(JSON.stringify(state))
    newState.displayDialog = false
    return newState
  } 

  if(action.type === types.ADaddNew){
    const newState = JSON.parse(JSON.stringify(state))

    newState.car.user_id = ''
    newState.car.user_name = ''
    newState.car.user_department = ''

    newState.car.attendance_tyeps = ''
    newState.car.date = ''
    newState.car.doctype = ''
    
    newState.newCar = true
   
    newState.displayDialog = true
    return newState
  } 

  if(action.type === types.ADSave){
    const newState = JSON.parse(JSON.stringify(state))
    newState.cars = [...state.cars]
    if(state.newCar){
      newState.cars.push(state.car)
    }
    
    else{
      newState.cars[state.index] = state.car
      console.log( state.cars, state.selectedCar, state.car, state.index)
    }
  
    newState.selectedCar = null 
    newState.displayDialog = false 
   
    return newState
  } 


  if(action.type === types.ADDelete){
    const newState = JSON.parse(JSON.stringify(state))
    
    newState.cars = state.cars.filter(( val ,i) => i !== state.index)
    newState.selectedCar = null
    newState.displayDialog = false
    return newState
  } 


  
 

  return state
}



