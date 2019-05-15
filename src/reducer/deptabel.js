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
    newState.selectedCar = action.value
    return newState
  } 

  if(action.type === types.OnCarSelect){
   
    const newState = JSON.parse(JSON.stringify(state))
    newState.newCar = false
    newState.displayDialog = true
    //car: Object.assign({}, e.data
    newState.car =  action.value
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
    newState.cars.name = '' 
    newState.cars.department_id = ''
    newState.displayDialog = true
    return newState
  } 

  if(action.type === types.DepSave){
    const newState = JSON.parse(JSON.stringify(state))

    newState.cars = [...state.cars];
    
    if(state.newCar)
    newState.cars.push(state.car);
    else
    newState.cars[findSelectedCarIndex()] = state.cars;

    newState.selectedCar = null 
    //newState.car = null 
    newState.displayDialog = false 
    //this.setState({cars:cars, selectedCar:null, car: null, displayDialog:false});
    return newState
  } 


  return state
}

function findSelectedCarIndex (state = initState){

  return state.cars.indexOf(state.selectedCar);
}



