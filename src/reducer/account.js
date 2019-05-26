import * as types from '../action/types'
import axios from 'axios'

const initState = {
  car:{
    name: '',
    password: '',
    add: '有',
    adelete: '没有',
    modify: '有',
    isAdmin: ''
  },
  message: ' 退出编辑状态请保存退出 ！',
    
  displayDialog: false,
  selectedCar: {},
  globalFilter: null,
  newCar: false,
  index: 0,
  cars: [{
    name: 'admin',
    password: 'admin',
    add: '有',
    adelete: '有',
    modify: '有',
  },
  {
    name: '普通员工',
    password: 'admin',
    add: '有',
    adelete: '没有',
    modify: '没有',
  },{
    name: '普通员工',
    password: 'admin',
    add: '有',
    adelete: '没有',
    modify: '没有',
  },{
    name: '普通员工',
    password: 'admin',
    add: '有',
    adelete: '没有',
    modify: '没有',
  },
  {
    name: '普通员工',
    password: 'admin',
    add: '有',
    adelete: '没有',
    modify: '有',
  },]
}
   
export default(state = initState, action) => {

  if(action.type === types.AServeice){
    const newState = JSON.parse(JSON.stringify(state))
      axios.get('/account/inquire')
      .then(function (response) {
        const data =  JSON.parse(JSON.stringify(response.data))
        newState.cars = []
        let i, len
        for(i = 0, len = data.length; i < len; i++){
            newState.car = data[i]
            newState.cars.push(data[i])
         }   
      })
      .catch(function (error) {
        console.log(error);
      });
    return newState
  }
  
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
    newState.car.add = ''
    newState.car.adelete = ''
    newState.car.modify = ''
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




