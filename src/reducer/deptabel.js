import * as types from '../action/types'
import axios from 'axios'


const initState = {
    cars: {
      car: {
      name: 'yang',
      department_id: '1213'
    }
  },
    displayDialog: '',
    selectedCar: '',
    globalFilter: '',
    newCar: ''
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

  if(action.type === types.DepaddNew){
    const newState = JSON.parse(JSON.stringify(state))

    newState.newCar = true
    newState = [...action.value]
    newState.displayDialog = true
    return newState
  } 

  if(action.type === types.DepSave){
    const newState = JSON.parse(JSON.stringify(state))
    
   




    let cars = [...state.cars];
    if(state.newCar)
        cars.push(state.cars);
    else
        cars[findSelectedCarIndex()] = state.cars;

    newState.cars = cars
    newState.selectedCar = null 
    newState.selectedCar
    this.setState({cars:cars, selectedCar:null, car: null, displayDialog:false});
    return newState
  } 


  return state
}

function findSelectedCarIndex (state = initState){

  return state.cars.indexOf(state.selectedCar);
}



