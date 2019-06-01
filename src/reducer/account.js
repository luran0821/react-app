import * as types from '../action/types'
import axios from 'axios'

const initState = {
  car:{
    name: '',
    password: '',
    add: '有',
    adelete: '没有',
    modify: '有',
    isAdmin: '',
    _id: ''
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


if(action.type === types.InputaddChanege){
  const newState = JSON.parse(JSON.stringify(state))
  newState.car.add = action.value
  return newState
} 
if(action.type === types.InputdeleteChanege){
  const newState = JSON.parse(JSON.stringify(state))
  newState.car.adelete = action.value
  return newState
} 
if(action.type === types.InputmodifyChanege){
  const newState = JSON.parse(JSON.stringify(state))
  newState.car.modify = action.value
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
    newState.car._id = ''

    newState.newCar = true 
    newState.displayDialog = true

    return newState
  } 

  if(action.type === types.ASave){
    const newState = JSON.parse(JSON.stringify(state))
    newState.cars = [...state.cars]
    let data = newState.car
    console.log(data)
    if(state.newCar){
      axios.post('/account/add',data)
      .then((res)=> {
             if( res.status === 200 && res.data.code === 1 ){  
                 
                 
             }         
       }) 
       .catch(function (error) {
         console.log(error);
       });

       newState.cars.push(data)
    }
    
    else{
     // newState.cars[state.index] = state.car
      data = newState.cars[state.index]
      console.log( data )
      axios.post('/account/modify',data)
      .then((res)=> {
             if( res.status === 200 && res.data.code === 1 ){
               console.log(res.data)            
              newState.cars[state.index] = res.data           
             }         
       }) 
       .catch(function (error) {
         console.log(error);
       });




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




