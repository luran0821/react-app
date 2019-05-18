import * as types from '../action/types'

const initState = {
  car:{
    name: '',
    department_id: ''
  },
    
  displayDialog: false,
  selectedCar: {},
  globalFilter: null,
  newCar: false,
  index: 0,
  cars: [{
    name: '32',
    department_id: 2132
  },{
    name: 'ya32ng',
    department_id: 2132
  }]
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
    newState.selectedCar = action.value

    let j , len 
    for( j = 0,  len = state.cars.length; j <= len; j ++){
      if (state.cars[j] == newState.car){
        newState.index = state.cars.indexOf(state.cars[j])
       
      }
    }
    console.log(state.index)
    
    newState.cars[state.index] = action.value
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




