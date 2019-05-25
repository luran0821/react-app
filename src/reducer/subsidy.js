import * as types from '../action/types'

const initState = {
  car:{
    user_id: '',   //工号
    user_name: '',    //姓名
    user_department: '', //部门 

    communication_subsidy: '',  //通讯补贴 
    temperature_subsidy: '',    //高温补贴
    drink_subsidy: '',          //高温补贴
    traffic_subsidy: '',        //交通补贴
    meal_subsidy: '',            //伙食补贴
    other_subsidy: ''            //其他补贴
  },
  //message: ' 退出编辑状态请保存退出 ！',  
  displayDialog: false,
  selectedCar: {},
  globalFilter: null,
  newCar: false,
  index: 0,
  cars: [
    {
      user_id: '111',   //工号
      user_name: '杨一',    //姓名
      user_department: '设能部', //部门 
  
      communication_subsidy: '100',  //通讯补贴 
      temperature_subsidy: '50',    //高温补贴
      drink_subsidy: '50',          //高温补贴
      traffic_subsidy: '100',        //交通补贴
      meal_subsidy: '200',            //伙食补贴
      other_subsidy: '10'            //其他补贴
    },
    {
      user_id: '111',   //工号
      user_name: '杨一',    //姓名
      user_department: '设能部', //部门 
  
      communication_subsidy: '100',  //通讯补贴 
      temperature_subsidy: '50',    //高温补贴
      drink_subsidy: '50',          //高温补贴
      traffic_subsidy: '100',        //交通补贴
      meal_subsidy: '200',            //伙食补贴
      other_subsidy: '10'            //其他补贴
    },
    {
      user_id: '111',   //工号
      user_name: '杨一',    //姓名
      user_department: '设能部', //部门 
  
      communication_subsidy: '100',  //通讯补贴 
      temperature_subsidy: '50',    //高温补贴
      drink_subsidy: '50',          //高温补贴
      traffic_subsidy: '100',        //交通补贴
      meal_subsidy: '200',            //伙食补贴
      other_subsidy: '10'            //其他补贴
    },
    {
      user_id: '111',   //工号
      user_name: '杨一',    //姓名
      user_department: '设能部', //部门 
  
      communication_subsidy: '100',  //通讯补贴 
      temperature_subsidy: '50',    //高温补贴
      drink_subsidy: '50',          //高温补贴
      traffic_subsidy: '100',        //交通补贴
      meal_subsidy: '200',            //伙食补贴
      other_subsidy: '10'            //其他补贴
    },
    {
      user_id: '111',   //工号
      user_name: '杨一',    //姓名
      user_department: '设能部', //部门 
  
      communication_subsidy: '100',  //通讯补贴 
      temperature_subsidy: '50',    //高温补贴
      drink_subsidy: '50',          //高温补贴
      traffic_subsidy: '100',        //交通补贴
      meal_subsidy: '200',            //伙食补贴
      other_subsidy: '10'            //其他补贴
    },
    {
      user_id: '111',   //工号
      user_name: '杨一',    //姓名
      user_department: '设能部', //部门 
  
      communication_subsidy: '100',  //通讯补贴 
      temperature_subsidy: '50',    //高温补贴
      drink_subsidy: '50',          //高温补贴
      traffic_subsidy: '100',        //交通补贴
      meal_subsidy: '200',            //伙食补贴
      other_subsidy: '10'            //其他补贴
    },
    {
      user_id: '111',   //工号
      user_name: '杨一',    //姓名
      user_department: '设能部', //部门 
  
      communication_subsidy: '100',  //通讯补贴 
      temperature_subsidy: '50',    //高温补贴
      drink_subsidy: '50',          //高温补贴
      traffic_subsidy: '100',        //交通补贴
      meal_subsidy: '200',            //伙食补贴
      other_subsidy: '10'            //其他补贴
    }, {
      user_id: '111',   //工号
      user_name: '杨一',    //姓名
      user_department: '设能部', //部门 
  
      communication_subsidy: '100',  //通讯补贴 
      temperature_subsidy: '50',    //高温补贴
      drink_subsidy: '50',          //高温补贴
      traffic_subsidy: '100',        //交通补贴
      meal_subsidy: '200',            //伙食补贴
      other_subsidy: '10'            //其他补贴
    }, {
      user_id: '111',   //工号
      user_name: '杨一',    //姓名
      user_department: '设能部', //部门 
  
      communication_subsidy: '100',  //通讯补贴 
      temperature_subsidy: '50',    //高温补贴
      drink_subsidy: '50',          //高温补贴
      traffic_subsidy: '100',        //交通补贴
      meal_subsidy: '200',            //伙食补贴
      other_subsidy: '10'            //其他补贴
    }, {
      user_id: '111',   //工号
      user_name: '杨一',    //姓名
      user_department: '设能部', //部门 
  
      communication_subsidy: '100',  //通讯补贴 
      temperature_subsidy: '50',    //高温补贴
      drink_subsidy: '50',          //高温补贴
      traffic_subsidy: '100',        //交通补贴
      meal_subsidy: '200',            //伙食补贴
      other_subsidy: '10'            //其他补贴
    }, {
      user_id: '111',   //工号
      user_name: '杨一',    //姓名
      user_department: '设能部', //部门 
  
      communication_subsidy: '100',  //通讯补贴 
      temperature_subsidy: '50',    //高温补贴
      drink_subsidy: '50',          //高温补贴
      traffic_subsidy: '100',        //交通补贴
      meal_subsidy: '200',            //伙食补贴
      other_subsidy: '10'            //其他补贴
    },
  ]
}
   
export default(state = initState, action) => {
    if(action.type === types.subsidy_inputSearchChanege){
      const newState = JSON.parse(JSON.stringify(state))
      newState.globalFilter = action.value 
      return newState
  }

    if(action.type === types.subsidy_inputUser_idChanege){
        const newState = JSON.parse(JSON.stringify(state))
        newState.car.user_id = action.value   
        return newState
   } 

  if(action.type === types.subsidy_inputUser_nameChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.user_name = action.value 
    return newState
  } 

  if(action.type === types.subsidy_inputUser_departmentChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.user_department = action.value 
    return newState
  } 




  if(action.type === types.inputCommunication_subsidyChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.communication_subsidy = action.value 
    return newState
  } 

  if(action.type === types.inputTemperature_subsidyChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.temperature_subsidy = action.value 
    return newState
  } 

  if(action.type === types.inputDrink_subsidyChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.drink_subsidy = action.value 
    return newState
  } 

  if(action.type === types.inputTraffic_subsidyChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.traffic_subsidy = action.value 
    return newState
  } 

  if(action.type === types.inputMeal_subsidyChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.meal_subsidy = action.value 
    return newState
  } 
  
  if(action.type === types.inputOther_subsidyChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.other_subsidy = action.value 
    return newState
  } 







  if(action.type === types.subsidy_selectionChange){
    const newState = JSON.parse(JSON.stringify(state))
    newState.newCar = false
    newState.car = action.value
    newState.index = state.cars.indexOf(action.value)
    console.log(state.cars.indexOf(action.value))
    //console.log(state.index)
      
    newState.displayDialog = true
    
    return newState
  } 

 
  if(action.type === types.subsidy_onHide){
    const newState = JSON.parse(JSON.stringify(state))
    newState.displayDialog = false
    return newState
  } 

  if(action.type === types.subsidy_addNew){
    const newState = JSON.parse(JSON.stringify(state))

    newState.car.user_id = ''
    newState.car.user_name = ''
    newState.car.user_department = ''     
    newState.car.communication_subsidy = ''
    newState.car.temperature_subsidy = ''
    newState.car.drink_subsidy = ''
    newState.car.traffic_subsidy = ''
    newState.car.meal_subsidy = ''
    newState.car.other_subsidy = ''

    newState.newCar = true
    newState.displayDialog = true

    return newState
  } 

  if(action.type === types.subsidy_Save){
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


  if(action.type === types.subsidy_Delete){
    const newState = JSON.parse(JSON.stringify(state))
    
    newState.cars = state.cars.filter(( val ,i) => i !== state.index)
    newState.selectedCar = null
    newState.displayDialog = false
    return newState
  } 


  
 

  return state
}




