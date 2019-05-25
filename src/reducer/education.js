import * as types from '../action/types'

const initState = {
  car:{
    user_id: '',   //工号
    user_name: '',    //姓名
    user_department: '', //部门 
    diploma_number: '',    //毕业证号
    h_education: '',    //最高学历
    school_name: ''   //学校
  },
  //message: ' 退出编辑状态请保存退出 ！',  
  displayDialog: false,
  selectedCar: {},
  globalFilter: null,
  newCar: false,
  index: 0,
  cars: [
   {
      user_id: '001',   //工号
      user_name: '杨涵',    //姓名
      user_department: '公关部', //部门 
      diploma_number: '1112120',    //毕业证号
      h_education: '本科',    //最高学历
      school_name: '北京大学'   //学校
    },
    {
      user_id: '002',   //工号
      user_name: '孔二',    //姓名
      user_department: '财务部', //部门 
      diploma_number: '1112120',    //毕业证号
      h_education: '本科',    //最高学历
      school_name: '清华大学'   //学校
    },
    {
      user_id: '003',   //工号
      user_name: '杨三',    //姓名
      user_department: '公关部', //部门 
      diploma_number: '1112120',    //毕业证号
      h_education: '本科',    //最高学历
      school_name: '北京大学'   //学校
    },
    {
      user_id: '004',   //工号
      user_name: '杨一涵',    //姓名
      user_department: '公关部', //部门 
      diploma_number: '1112120',    //毕业证号
      h_education: '本科',    //最高学历
      school_name: '北京大学'   //学校
    },
    {
      user_id: '004',   //工号
      user_name: '杨二涵',    //姓名
      user_department: '公关部', //部门 
      diploma_number: '1112120',    //毕业证号
      h_education: '本科',    //最高学历
      school_name: '北京大学'   //学校
    },
    {
      user_id: '004',   //工号
      user_name: '杨儿涵',    //姓名
      user_department: '生产部', //部门 
      diploma_number: '1112120',    //毕业证号
      h_education: '本科',    //最高学历
      school_name: '北京航天航空大学'   //学校
    },
    {
      user_id: '004',   //工号
      user_name: '杨一涵',    //姓名
      user_department: '公关部', //部门 
      diploma_number: '1112120',    //毕业证号
      h_education: '本科',    //最高学历
      school_name: '北京大学'   //学校
    },
    {
      user_id: '004',   //工号
      user_name: '杨一涵',    //姓名
      user_department: '公关部', //部门 
      diploma_number: '1112120',    //毕业证号
      h_education: '本科',    //最高学历
      school_name: '北京大学'   //学校
    },
    {
      user_id: '004',   //工号
      user_name: '杨一涵',    //姓名
      user_department: '公关部', //部门 
      diploma_number: '1112120',    //毕业证号
      h_education: '本科',    //最高学历
      school_name: '北京大学'   //学校
    },
    {
      user_id: '004',   //工号
      user_name: '杨一涵',    //姓名
      user_department: '公关部', //部门 
      diploma_number: '1112120',    //毕业证号
      h_education: '本科',    //最高学历
      school_name: '北京大学'   //学校
    },
    {
      user_id: '004',   //工号
      user_name: '杨一涵',    //姓名
      user_department: '公关部', //部门 
      diploma_number: '1112120',    //毕业证号
      h_education: '本科',    //最高学历
      school_name: '北京大学'   //学校
    },
    {
      user_id: '004',   //工号
      user_name: '杨一涵',    //姓名
      user_department: '公关部', //部门 
      diploma_number: '1112120',    //毕业证号
      h_education: '本科',    //最高学历
      school_name: '北京大学'   //学校
    },
    {
      user_id: '004',   //工号
      user_name: '杨一涵',    //姓名
      user_department: '公关部', //部门 
      diploma_number: '1112120',    //毕业证号
      h_education: '本科',    //最高学历
      school_name: '北京大学'   //学校
    },
    {
      user_id: '004',   //工号
      user_name: '杨一涵',    //姓名
      user_department: '公关部', //部门 
      diploma_number: '1112120',    //毕业证号
      h_education: '本科',    //最高学历
      school_name: '北京大学'   //学校
    },
    {
      user_id: '004',   //工号
      user_name: '杨一涵',    //姓名
      user_department: '公关部', //部门 
      diploma_number: '1112120',    //毕业证号
      h_education: '本科',    //最高学历
      school_name: '北京大学'   //学校
    }
   ]
}
   
export default(state = initState, action) => {
    if(action.type === types.EinputSearchChanege){
      const newState = JSON.parse(JSON.stringify(state))
      newState.globalFilter = action.value 
      return newState
  }

    if(action.type === types.inputUser_idChanege){
        const newState = JSON.parse(JSON.stringify(state))
        newState.car.user_id = action.value   
        return newState
   } 

  if(action.type === types.inputUser_nameChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.user_name = action.value 
    return newState
  } 

  if(action.type === types.inputUser_departmentChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.user_department = action.value 
    return newState
  } 

  if(action.type === types.inputDiploma_numberChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.diploma_number = action.value 
    return newState
  } 

  if(action.type === types.inputH_educationChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.h_education = action.value 
    return newState
  } 

  if(action.type === types.inputSchool_nameChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.car.school_name = action.value 
    return newState
  } 


  if(action.type === types.EselectionChange){
    const newState = JSON.parse(JSON.stringify(state))
    newState.newCar = false
    newState.car = action.value
    newState.index = state.cars.indexOf(action.value)
    console.log(state.cars.indexOf(action.value))
    //console.log(state.index)
      
    newState.displayDialog = true
    
    return newState
  } 

 
  if(action.type === types.EonHide){
    const newState = JSON.parse(JSON.stringify(state))
    newState.displayDialog = false
    return newState
  } 

  if(action.type === types.EaddNew){
    const newState = JSON.parse(JSON.stringify(state))

    newState.car.user_id = ''
    newState.car.user_name = ''
    newState.car.user_department = ''
    newState.car.diploma_number = ''
    newState.car.h_education = ''
    newState.car.school_name = ''
    
    newState.newCar = true
   
    newState.displayDialog = true
    return newState
  } 

  if(action.type === types.ESave){
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


  if(action.type === types.EDelete){
    const newState = JSON.parse(JSON.stringify(state))
    
    newState.cars = state.cars.filter(( val ,i) => i !== state.index)
    newState.selectedCar = null
    newState.displayDialog = false
    return newState
  } 


  
 

  return state
}




