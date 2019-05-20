import * as types from '../action/types'

const initState = {
  car:{
    name: '',
    password: ''
  },
    
  displayDialog: false,
  selectedCar: {},
  globalFilter: null,
  newCar: false,
  index: 0,
  cars: [{
    name: '32',
    password: 2132
  },{
    name: 'ya32ng',
    password: 2132
  }]
}
   
export default(state = initState, action) => {
  
    if(action.type === types.AInputSearchChanege){
      const newState = JSON.parse(JSON.stringify(state))
      newState.globalFilter = action.value
      return newState
  }

    if(action.type === types.AInputNameChanege){
        const newState = JSON.parse(JSON.stringify(state))
        newState.car.name = action.value
        return newState
   } 

  if(action.type === types.AInputPwdChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.password = action.value
    return newState
  } 

  if(action.type === types.ASelectionChange){
    const newState = JSON.parse(JSON.stringify(state))
    newState.newCar = false
    newState.car = action.value
   
    newState.index = state.cars.indexOf(action.value)  
    newState.displayDialog = true
    
    return newState
  } 

 
  if(action.type === types.AonHide){
    const newState = JSON.parse(JSON.stringify(state))
    newState.displayDialog = false
    return newState
  } 

  if(action.type === types.AaddNew){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.name = '' 
    newState.car.password = ''
    newState.newCar = true
   
    newState.displayDialog = true
    return newState
  } 

  if(action.type === types.ASave){
    const newState = JSON.parse(JSON.stringify(state))

    
    newState.cars = [...state.cars]
    if(state.newCar){
      newState.cars.push(state.car)
    }
    
    else{
      newState.cars[state.index] = state.car
    }
  
    newState.selectedCar = null 
    newState.displayDialog = false 
   
    return newState
  } 


  if(action.type === types.ADelete){
    const newState = JSON.parse(JSON.stringify(state))
    
    newState.cars = state.cars.filter(( val ,i) => i !== state.index)
    newState.selectedCar = null
    newState.displayDialog = false
    return newState
  } 
 

  return state
}




