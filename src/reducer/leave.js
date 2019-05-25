import * as types from '../action/types'

const initState = {
  car:{
    user_id: '',   //工号
    user_name: '',    //姓名
    user_department: '', //部门 

    leave_types: '',    //请假类型
    start_types: '',    //开始时间
    end_types: ''   //结束时间
  },
  //message: ' 退出编辑状态请保存退出 ！',  
  displayDialog: false,
  selectedCar: {},
  globalFilter: null,
  newCar: false,
  index: 0,
  cars: [
    {
      user_id: '001',   //工号
      user_name: '杨芷',    //姓名
      user_department: '生产部', //部门 
  
      leave_types: '病假',    //请假类型
      start_types: '2018.10.4',    //开始时间
      end_types: '2018.11.4'   //结束时间
    },
    {
      user_id: '001',   //工号
      user_name: '孔二',    //姓名
      user_department: '生产部', //部门 
  
      leave_types: '病假',    //请假类型
      start_types: '2018.10.4',    //开始时间
      end_types: '2018.11.4'   //结束时间
    },
    {
      user_id: '001',   //工号
      user_name: '杨三',    //姓名
      user_department: '生产部', //部门 
  
      leave_types: '病假',    //请假类型
      start_types: '2018.10.4',    //开始时间
      end_types: '2018.11.4'   //结束时间
    },
    {
      user_id: '001',   //工号
      user_name: '章五',    //姓名
      user_department: '生产部', //部门 
  
      leave_types: '婚假',    //请假类型
      start_types: '2018.10.4',    //开始时间
      end_types: '2018.11.4'   //结束时间
    },
    {
      user_id: '021',   //工号
      user_name: '杨芷',    //姓名
      user_department: '生产部', //部门 
  
      leave_types: '病假',    //请假类型
      start_types: '2018.10.4',    //开始时间
      end_types: '2018.11.4'   //结束时间
    },
    {
      user_id: '001',   //工号
      user_name: '杨芷',    //姓名
      user_department: '生产部', //部门 
  
      leave_types: '事假',    //请假类型
      start_types: '2018.10.4',    //开始时间
      end_types: '2018.11.4'   //结束时间
    },
    {
      user_id: '031',   //工号
      user_name: '杨芷',    //姓名
      user_department: '生产部', //部门 
  
      leave_types: '病假',    //请假类型
      start_types: '2018.10.4',    //开始时间
      end_types: '2018.11.4'   //结束时间
    },
    {
      user_id: '002',   //工号
      user_name: '杨芷',    //姓名
      user_department: '生产部', //部门 
  
      leave_types: '病假',    //请假类型
      start_types: '2018.10.4',    //开始时间
      end_types: '2018.11.4'   //结束时间
    },
    {
      user_id: '001',   //工号
      user_name: '杨芷',    //姓名
      user_department: '生产部', //部门 
  
      leave_types: '病假',    //请假类型
      start_types: '2018.10.4',    //开始时间
      end_types: '2018.11.4'   //结束时间
    },
    {
      user_id: '033',   //工号
      user_name: '杨芷',    //姓名
      user_department: '生产部', //部门 
  
      leave_types: '病假',    //请假类型
      start_types: '2018.10.4',    //开始时间
      end_types: '2018.11.4'   //结束时间
    },
    {
      user_id: '001',   //工号
      user_name: '杨芷',    //姓名
      user_department: '生产部', //部门 
  
      leave_types: '病假',    //请假类型
      start_types: '2018.10.4',    //开始时间
      end_types: '2018.11.4'   //结束时间
    },
    {
      user_id: '087',   //工号
      user_name: '杨芷',    //姓名
      user_department: '生产部', //部门 
  
      leave_types: '病假',    //请假类型
      start_types: '2018.10.4',    //开始时间
      end_types: '2018.11.4'   //结束时间
    },
    {
      user_id: '001',   //工号
      user_name: '杨芷',    //姓名
      user_department: '生产部', //部门 
  
      leave_types: '病假',    //请假类型
      start_types: '2018.10.4',    //开始时间
      end_types: '2018.11.4'   //结束时间
    },

   ]
    
}
   
export default(state = initState, action) => {
    if(action.type === types.LinputSearchChanege){
      const newState = JSON.parse(JSON.stringify(state))
      newState.globalFilter = action.value 
      return newState
  }

    if(action.type === types.inputLUser_idChanege){
        const newState = JSON.parse(JSON.stringify(state))
        newState.car.user_id = action.value   
        return newState
   } 

  if(action.type === types.inputLUser_nameChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.user_name = action.value 
    return newState
  } 

  if(action.type === types.inputLUser_departmentChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.user_department = action.value 
    return newState
  } 

  if(action.type === types.inputLeave_typesChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.leave_types = action.value 
    return newState
  } 

  if(action.type === types.inputStart_typesChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.start_types = action.value 
    return newState
  } 

  if(action.type === types.inputEnd_typesChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.end_types = action.value 
    return newState
  } 


  if(action.type === types.LselectionChange){
    const newState = JSON.parse(JSON.stringify(state))
    newState.newCar = false
    newState.car = action.value
    newState.index = state.cars.indexOf(action.value)
    console.log(state.cars.indexOf(action.value))
    //console.log(state.index)
      
    newState.displayDialog = true
    
    return newState
  } 

 
  if(action.type === types.LonHide){
    const newState = JSON.parse(JSON.stringify(state))
    newState.displayDialog = false
    return newState
  } 

  if(action.type === types.LaddNew){
    const newState = JSON.parse(JSON.stringify(state))

    newState.car.user_id = ''
    newState.car.user_name = ''
    newState.car.user_department = ''

    newState.car.leave_types = ''
    newState.car.start_types = ''
    newState.car.end_types = ''
    
    newState.newCar = true
   
    newState.displayDialog = true
    return newState
  } 

  if(action.type === types.LSave){
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


  if(action.type === types.LDelete){
    const newState = JSON.parse(JSON.stringify(state))
    
    newState.cars = state.cars.filter(( val ,i) => i !== state.index)
    newState.selectedCar = null
    newState.displayDialog = false
    return newState
  } 


  
 

  return state
}




