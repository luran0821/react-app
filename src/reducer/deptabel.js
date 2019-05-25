import * as types from '../action/types'

const initState = {
  car:{
    name: '',
    department_id: ''
  },
  //message: ' 退出编辑状态请保存退出 ！',  
  displayDialog: false,
  selectedCar: {},
  globalFilter: null,
  newCar: false,
  index: 0,
  cars: [{
    name: '生产部',
    department_id: '0001'
  },{
    name: '公关部',
    department_id:  '0002'
  },{
    name: '设能部',
    department_id:  '0003'
  },{
    name: '保卫部',
    department_id:  '0004'
  },{
    name: '人力资源部',
    department_id:  '0005'
  },{
    name: '财务部',
    department_id:  '0006'
  },{
    name: '项目部',
    department_id:  '0007'
  },{
    name: '综合服务部',
    department_id:  '0008'
  },{
    name: '安全环保部',
    department_id:  '0009'
  }
]
}
   
export default(state = initState, action) => {
  
    if(action.type === types.InputSearchChanege){
      const newState = JSON.parse(JSON.stringify(state))
      newState.globalFilter = action.value
      
      return newState
  }

    if(action.type === types.InputNameChanege){
        const newState = JSON.parse(JSON.stringify(state))
        newState.car.name = action.value
    
        return newState
   } 

  if(action.type === types.InputIdChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.department_id = action.value
  
    return newState
  } 

  if(action.type === types.SelectionChange){
    const newState = JSON.parse(JSON.stringify(state))
    newState.newCar = false
    newState.car = action.value
    //newState.selectedCar = action.value
    newState.index = state.cars.indexOf(action.value)
    console.log(state.cars.indexOf(action.value))
//todo bug
    // if( newState.message ){
    //   let j , len 
    //   for( j = 1,  len = state.cars.length; j <= len; j ++){
    //     if (state.cars[j] == newState.car){
    //       newState.index = state.cars.indexOf(state.cars[j])
         
    //     }
    //   }
      console.log(state.index)
      
      //newState.cars[state.index] = action.value
    
   

    newState.displayDialog = true
    
    return newState
  } 

 
  if(action.type === types.DepOnHide){
    const newState = JSON.parse(JSON.stringify(state))
    newState.displayDialog = false
    return newState
  } 

  if(action.type === types.DepaddNew){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.name = '' 
    newState.car.department_id = ''
    newState.newCar = true
   
    newState.displayDialog = true
    return newState
  } 

  if(action.type === types.DepSave){
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


  if(action.type === types.DepDelete){
    const newState = JSON.parse(JSON.stringify(state))
    
    newState.cars = state.cars.filter(( val ,i) => i !== state.index)
    newState.selectedCar = null
    newState.displayDialog = false
    return newState
  } 


  
 

  return state
}




