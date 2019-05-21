import * as types from '../action/types'

const initState = {
  car:{
    user_id: '',                      //工号
    user_name: '',                   //姓名
    user_department: '',             //部门 

    pension: '',                     //养老保险
    medical_insurance: '',           //医疗保险
    unemployment_insurance: '',      //失业保险
    injury_insurance: '',            //工伤保险
    maternity_insurance: '',         //生育保险
    housing_fund: ''                 //住房公积金
  },
    
  displayDialog: false,
  selectedCar: {},
  globalFilter: null,
  newCar: false,
  index: 0,
  cars:[
    {
      user_id: '2131',                      //工号
      user_name: '313',                   //姓名
      user_department: '3131',             //部门 
  
      pension: '3131',                     //养老保险
      medical_insurance: '31',           //医疗保险
      unemployment_insurance: '333',      //失业保险
      injury_insurance: '3313',            //工伤保险
      maternity_insurance: '31321',         //生育保险
      housing_fund: '321'                 //住房公积金
    },
    {
      user_id: '2131',                      //工号
      user_name: '313',                   //姓名
      user_department: '3131',             //部门 
  
      pension: '3131',                     //养老保险
      medical_insurance: '31',           //医疗保险
      unemployment_insurance: '333',      //失业保险
      injury_insurance: '3313',            //工伤保险
      maternity_insurance: '31321',         //生育保险
      housing_fund: '321'                 //住房公积金
    },
    {
      user_id: '2131',                      //工号
      user_name: '313',                   //姓名
      user_department: '3131',             //部门 
  
      pension: '3131',                     //养老保险
      medical_insurance: '31',           //医疗保险
      unemployment_insurance: '333',      //失业保险
      injury_insurance: '3313',            //工伤保险
      maternity_insurance: '31321',         //生育保险
      housing_fund: '321'                 //住房公积金
    },
    {
      user_id: '2131',                      //工号
      user_name: '313',                   //姓名
      user_department: '3131',             //部门 
  
      pension: '3131',                     //养老保险
      medical_insurance: '31',           //医疗保险
      unemployment_insurance: '333',      //失业保险
      injury_insurance: '3313',            //工伤保险
      maternity_insurance: '31321',         //生育保险
      housing_fund: '321'                 //住房公积金
    },
    {
      user_id: '2131',                      //工号
      user_name: '313',                   //姓名
      user_department: '3131',             //部门 
  
      pension: '3131',                     //养老保险
      medical_insurance: '31',           //医疗保险
      unemployment_insurance: '333',      //失业保险
      injury_insurance: '3313',            //工伤保险
      maternity_insurance: '31321',         //生育保险
      housing_fund: '321'                 //住房公积金
    },
    {
      user_id: '2131',                      //工号
      user_name: '313',                   //姓名
      user_department: '3131',             //部门 
  
      pension: '3131',                     //养老保险
      medical_insurance: '31',           //医疗保险
      unemployment_insurance: '333',      //失业保险
      injury_insurance: '3313',            //工伤保险
      maternity_insurance: '31321',         //生育保险
      housing_fund: '321'                 //住房公积金
    },
    {
      user_id: '2131',                      //工号
      user_name: '313',                   //姓名
      user_department: '3131',             //部门 
  
      pension: '3131',                     //养老保险
      medical_insurance: '31',           //医疗保险
      unemployment_insurance: '333',      //失业保险
      injury_insurance: '3313',            //工伤保险
      maternity_insurance: '31321',         //生育保险
      housing_fund: '321'                 //住房公积金
    },
    {
      user_id: '2131',                      //工号
      user_name: '313',                   //姓名
      user_department: '3131',             //部门 
  
      pension: '3131',                     //养老保险
      medical_insurance: '31',           //医疗保险
      unemployment_insurance: '333',      //失业保险
      injury_insurance: '3313',            //工伤保险
      maternity_insurance: '31321',         //生育保险
      housing_fund: '321'                 //住房公积金
    },
    {
      user_id: '2131',                      //工号
      user_name: '313',                   //姓名
      user_department: '3131',             //部门 
  
      pension: '3131',                     //养老保险
      medical_insurance: '31',           //医疗保险
      unemployment_insurance: '333',      //失业保险
      injury_insurance: '3313',            //工伤保险
      maternity_insurance: '31321',         //生育保险
      housing_fund: '321'                 //住房公积金
    },
    {
      user_id: '2131',                      //工号
      user_name: '313',                   //姓名
      user_department: '3131',             //部门 
  
      pension: '3131',                     //养老保险
      medical_insurance: '31',           //医疗保险
      unemployment_insurance: '333',      //失业保险
      injury_insurance: '3313',            //工伤保险
      maternity_insurance: '31321',         //生育保险
      housing_fund: '321'                 //住房公积金
    },
    {
      user_id: '2131',                      //工号
      user_name: '313',                   //姓名
      user_department: '3131',             //部门 
  
      pension: '3131',                     //养老保险
      medical_insurance: '31',           //医疗保险
      unemployment_insurance: '333',      //失业保险
      injury_insurance: '3313',            //工伤保险
      maternity_insurance: '31321',         //生育保险
      housing_fund: '321'                 //住房公积金
    }
]
}
   
export default(state = initState, action) => {
    if(action.type === types.socialsecurity_inputSearchChanege){
      const newState = JSON.parse(JSON.stringify(state))
      newState.globalFilter = action.value 
      return newState
  }

    if(action.type === types.socialsecurity_inputUser_idChanege){
        const newState = JSON.parse(JSON.stringify(state))
        newState.car.user_id = action.value   
        return newState
   } 

  if(action.type === types.socialsecurity_inputUser_nameChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.user_name = action.value 
    return newState
  } 

  if(action.type === types.socialsecurity_inputUser_departmentChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.user_department = action.value 
    return newState
  } 




  if(action.type === types.inputPensionChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.pension = action.value 
    return newState
  } 

  if(action.type === types.inputMedical_insuranceChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.medical_insurance = action.value 
    return newState
  } 

  if(action.type === types.inputUnemployment_insuranceChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.unemployment_insurance = action.value 
    return newState
  } 

  if(action.type === types.inputInjury_insuranceChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.injury_insurance = action.value 
    return newState
  } 


  if(action.type === types.inputMaternity_insuranceChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.maternity_insurance = action.value 
    return newState
  } 

  if(action.type === types.inputHousing_fundChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.housing_fund = action.value 
    return newState
  } 



  if(action.type === types.socialsecurity_selectionChange){
    const newState = JSON.parse(JSON.stringify(state))
    newState.newCar = false
    newState.car = action.value
    newState.index = state.cars.indexOf(action.value)
    console.log(state.cars.indexOf(action.value))
    //console.log(state.index)
      
    newState.displayDialog = true
    
    return newState
  } 

 
  if(action.type === types.socialsecurity_onHide){
    const newState = JSON.parse(JSON.stringify(state))
    newState.displayDialog = false
    return newState
  } 

  if(action.type === types.socialsecurity_addNew){
    const newState = JSON.parse(JSON.stringify(state))

    newState.car.user_id = ''
    newState.car.user_name = ''
    newState.car.user_department = ''
    
    newState.car.pension = ''
    newState.car.medical_insurance = ''
    newState.car.unemployment_insurance = ''
    
    newState.car.injury_insurance = ''
    newState.car.maternity_insurance = ''
    newState.car.housing_fund = ''
    

    newState.newCar = true
   
    newState.displayDialog = true
    return newState
  } 

  if(action.type === types.socialsecurity_Save){
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


  if(action.type === types.socialsecurity_Delete){
    const newState = JSON.parse(JSON.stringify(state))
    
    newState.cars = state.cars.filter(( val ,i) => i !== state.index)
    newState.selectedCar = null
    newState.displayDialog = false
    return newState
  } 

  return state
}




