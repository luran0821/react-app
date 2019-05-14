import * as types from '../action/types'
import axios from 'axios'


const initState = {
    cars: {
      name: '',
      department_id: ''
    },
    displayDialog: '',
    selectedCar: '',
    globalFilter: ''
}

export default(state = initState, action) => {
  
  if(action.type === types.InputSearchChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.globalFilter = action.value
    return newState
}
  if(action.type === types.InputNameChanege){
      const newState = JSON.parse(JSON.stringify(state))
      newState.cars.name = action.value
      return newState
  } 

  if(action.type === types.InputIdChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.cars.department_id = action.value
    return newState
} 
if(action.type === types.SelectionChange){
  const newState = JSON.parse(JSON.stringify(state))
  newState.selectedCar = action.value
  return newState
} 
 
if(action.type === types.DepOnHide){
  const newState = JSON.parse(JSON.stringify(state))
  newState.displayDialog = false
  return newState
} 



return state
}

function findSelectedCarIndex (state = initState){

  return state.cars.indexOf(state.selectedCar);
}



