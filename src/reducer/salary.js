import * as types from '../action/types'

const initState = {
  car:{
    user_id: '',   //工号
    user_name: '',    //姓名
    user_department: '', //部门 

    bonus: '',      //奖金
    basic_salary: '',    //基本工资
    position_salary: ''   //岗位工资
  },
    
  displayDialog: false,
  selectedCar: {},
  globalFilter: null,
  newCar: false,
  index: 0,
  cars:[
    {
      user_id: '001',   //工号
      user_name: '杨一',    //姓名
      user_department: '生产部', //部门 
  
      bonus: '2000',      //奖金
      basic_salary: '5000',    //基本工资
      position_salary: '500'   //岗位工资
    },
    {
      user_id: '002',   //工号
      user_name: '孔一',    //姓名
      user_department: '生产部', //部门 
  
      bonus: '2000',      //奖金
      basic_salary: '5000',    //基本工资
      position_salary: '500'   //岗位工资
    },
    {
      user_id: '003',   //工号
      user_name: '杨二',    //姓名
      user_department: '财务部', //部门 
  
      bonus: '1000',      //奖金
      basic_salary: '3000',    //基本工资
      position_salary: '500'   //岗位工资
    },
    {
      user_id: '004',   //工号
      user_name: '杨三',    //姓名
      user_department: '生产部', //部门 
  
      bonus: '2000',      //奖金
      basic_salary: '5000',    //基本工资
      position_salary: '500'   //岗位工资
    },
    {
      user_id: '001',   //工号
      user_name: '杨一',    //姓名
      user_department: '生产部', //部门 
  
      bonus: '2000',      //奖金
      basic_salary: '5000',    //基本工资
      position_salary: '500'   //岗位工资
    },
    {
      user_id: '001',   //工号
      user_name: '杨一',    //姓名
      user_department: '生产部', //部门 
  
      bonus: '2000',      //奖金
      basic_salary: '5000',    //基本工资
      position_salary: '500'   //岗位工资
    },
    {
      user_id: '004',   //工号
      user_name: '王二',    //姓名
      user_department: '生产部', //部门 
  
      bonus: '2000',      //奖金
      basic_salary: '5000',    //基本工资
      position_salary: '500'   //岗位工资
    },
    {
      user_id: '001',   //工号
      user_name: '李一',    //姓名
      user_department: '公关部', //部门 
  
      bonus: '1000',      //奖金
      basic_salary: '2000',    //基本工资
      position_salary: '500'   //岗位工资
    },
    {
      user_id: '001',   //工号
      user_name: '杨一',    //姓名
      user_department: '生产部', //部门 
  
      bonus: '2000',      //奖金
      basic_salary: '5000',    //基本工资
      position_salary: '500'   //岗位工资
    },
    {
      user_id: '001',   //工号
      user_name: '杨一',    //姓名
      user_department: '生产部', //部门 
  
      bonus: '2000',      //奖金
      basic_salary: '5000',    //基本工资
      position_salary: '500'   //岗位工资
    },
    {
      user_id: '001',   //工号
      user_name: '杨一',    //姓名
      user_department: '生产部', //部门 
  
      bonus: '2000',      //奖金
      basic_salary: '5000',    //基本工资
      position_salary: '500'   //岗位工资
    },
    {
      user_id: '001',   //工号
      user_name: '杨一',    //姓名
      user_department: '生产部', //部门 
  
      bonus: '2000',      //奖金
      basic_salary: '5000',    //基本工资
      position_salary: '500'   //岗位工资
    },
    {
      user_id: '001',   //工号
      user_name: '杨一',    //姓名
      user_department: '生产部', //部门 
  
      bonus: '2000',      //奖金
      basic_salary: '5000',    //基本工资
      position_salary: '500'   //岗位工资
    },
]
}
   
export default(state = initState, action) => {
    if(action.type === types.salary_inputSearchChanege){
      const newState = JSON.parse(JSON.stringify(state))
      newState.globalFilter = action.value 
      return newState
  }

    if(action.type === types.salary_inputUser_idChanege){
        const newState = JSON.parse(JSON.stringify(state))
        newState.car.user_id = action.value   
        return newState
   } 

  if(action.type === types.salary_inputUser_nameChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.user_name = action.value 
    return newState
  } 

  if(action.type === types.salary_inputUser_departmentChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.user_department = action.value 
    return newState
  } 

  if(action.type === types.inputBasic_salaryChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.basic_salary = action.value 
    return newState
  } 

  if(action.type === types.inputPosition_salaryChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.position_salary = action.value 
    return newState
  } 

  if(action.type === types.inputBonusChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.bonus = action.value 
    return newState
  } 


  if(action.type === types.salary_selectionChange){
    const newState = JSON.parse(JSON.stringify(state))
    newState.newCar = false
    newState.car = action.value
    newState.index = state.cars.indexOf(action.value)
    console.log(state.cars.indexOf(action.value))
    //console.log(state.index)
      
    newState.displayDialog = true
    
    return newState
  } 

 
  if(action.type === types.salary_onHide){
    const newState = JSON.parse(JSON.stringify(state))
    newState.displayDialog = false
    return newState
  } 

  if(action.type === types.salary_addNew){
    const newState = JSON.parse(JSON.stringify(state))

    newState.car.user_id = ''
    newState.car.user_name = ''
    newState.car.user_department = ''
    
    newState.car.bonus = ''
    newState.car.basic_salary = ''
    newState.car.position_salary = ''
    
    newState.newCar = true
   
    newState.displayDialog = true
    return newState
  } 

  if(action.type === types.salary_Save){
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


  if(action.type === types.salary_Delete){
    const newState = JSON.parse(JSON.stringify(state))
    
    newState.cars = state.cars.filter(( val ,i) => i !== state.index)
    newState.selectedCar = null
    newState.displayDialog = false
    return newState
  } 


  
 

  return state
}




