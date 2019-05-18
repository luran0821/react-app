import * as types from '../action/types'

const initState = {
  car: {
    name: '',
    job_number: '',//工号
    age: '',      //年龄
    birth: '',    //出生年月
    message: '',
    identity_number: '', //身份证号
    inservice: '',       //在职情况
    marriage: '',        //婚姻情况
    political: '',      //政治面貌
    phone: '',           //电话
    gender: '',           //性别
    address: '',           //家庭住址
    inservice_time: '',     //入职时间
    department: '' ,//部门

  },
  displayDialog: false,
  selectedCar: {},
  globalFilter: null,
  newCar: false,
  index: 0,
  new: false,
  cars:[
    {
    name: 'yang',
    job_number: '222',//工号
    age: '12',      //年龄
    birth: '10',    //出生年月
    message: 'wq',
    identity_number: '434343', //身份证号
    inservice: 'yysua',       //在职情况
    marriage: 'dewd',        //婚姻情况
    political: 'dewde',      //政治面貌
    phone: 'dew',           //电话
    gender: 'dew',           //性别
    inservice_time: 'dewdw',     //入职时间
    department: 'dewdew' ,//部门}
    },
    {
      name: 'yang',
      job_number: '222',//工号
      age: '12',      //年龄
      birth: '10',    //出生年月
      message: 'wq',
      identity_number: '434343', //身份证号
      inservice: 'yysua',       //在职情况
      marriage: 'dewd',        //婚姻情况
      political: 'dewde',      //政治面貌
      phone: 'dew',           //电话
      gender: 'dew',           //性别
      inservice_time: 'dewdw',     //入职时间
      department: 'dewdew' ,//部门}
      },

  ]
}




export default(state = initState, action) => {
  if(action.type === types.u_InputSearchChanege){
    const newState = JSON.parse(JSON.stringify(state))
    newState.globalFilter = action.value
    return newState
  } 
 
if(action.type === types.u_SelectionChange){
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


if(action.type === types.u_OnHide){
  const newState = JSON.parse(JSON.stringify(state))
  newState.displayDialog = false
  return newState
} 

if(action.type === types.u_AddNew){
  const newState = JSON.parse(JSON.stringify(state))
 
  newState.car.name = ''
  newState.car.job_number = ''//工号
  newState.car.age = ''      //年龄
  newState.car.birth = ''    //出生年月
  newState.car.message = ''
  newState.car.identity_number = '' //身份证号
  newState.car.inservice = ''       //在职情况
  newState.car.marriage = ''        //婚姻情况
  newState.car.political = ''      //政治面貌
  newState.car.phone = ''           //电话
  newState.car.gender = ''           //性别
  newState.car.inservice_time = ''     //入职时间
  newState.car.department = ''          //部门

  newState.selectedCar = state.car
  newState.new = true
  newState.newCar = true
 
  newState.displayDialog = true
  return newState
} 

if(action.type === types.u_Save){
  const newState = JSON.parse(JSON.stringify(state))
  newState.car = state.selectedCar
  
  newState.cars = [...state.cars]
  if(state.newCar){
    newState.cars.push(state.car)
    newState.selectedCar = state.car
  }
  
  else{
    newState.cars[state.index] = state.car
    console.log( state.cars, state.selectedCar, state.car, state.index)
  }

  newState.selectedCar = null 
  newState.displayDialog = false 
 
  return newState
} 


if(action.type === types.u_Delete){
  const newState = JSON.parse(JSON.stringify(state))
  
  newState.cars = state.cars.filter(( val ,i) => i !== state.index)
  newState.selectedCar = null
  newState.displayDialog = false
  return newState
} 

// if(action.type === types.u_UpdateProperty){
//   const newState = JSON.parse(JSON.stringify(state))

//   if(state.new) newState.newCar = true
//   else newState.newCar = false
  
//   newState.car = updateProperty(action.property, action.value)  
//   newState.selectedCar = updateProperty(action.property, action.value) 
//   console.log(updateProperty(action.property, action.value) )

//     //updateProperty(property, value) {
//     //     let car = this.state.car;
//     //     car[property] = value;
//     //     this.setState({car: car});
//     // }

  
//   return newState
// } 


if(action.type === types.UInputNameChanege){
  const newState = JSON.parse(JSON.stringify(state))
  newState.car.name = action.value
  return newState
} 

if(action.type === types.UinputJobChanege){
  const newState = JSON.parse(JSON.stringify(state))
  newState.car.job_number = action.value
  return newState
}
if(action.type === types.UinputDepChanege){
  const newState = JSON.parse(JSON.stringify(state))
  newState.car.department = action.value
  return newState
}
if(action.type === types.UinputAgeChanege){
  const newState = JSON.parse(JSON.stringify(state))
  newState.car.age = action.value
  return newState
}


if(action.type === types.UinputGenderChanege){
  const newState = JSON.parse(JSON.stringify(state))
  newState.car.gender = action.value
  return newState
}
if(action.type === types.UinputPhoneChanege){
  const newState = JSON.parse(JSON.stringify(state))
  newState.car.phone = action.value
  return newState
}
if(action.type === types.UinputIdentityChanege){
  const newState = JSON.parse(JSON.stringify(state))
  newState.car.identity_number = action.value
  return newState
}
if(action.type === types.UinputMarriageChanege){
  const newState = JSON.parse(JSON.stringify(state))
  newState.car.marriage = action.value
  return newState
}
if(action.type === types.UinputBirthChanege){
  const newState = JSON.parse(JSON.stringify(state))
  newState.car.birth = action.value
  return newState
}

if(action.type === types.UinputPoliticalChanege){
  const newState = JSON.parse(JSON.stringify(state))
  newState.car.political = action.value
  return newState
}

if(action.type === types.UinputInserviceChanege){
  const newState = JSON.parse(JSON.stringify(state))
  newState.car.inservice_time = action.value
  return newState
}

if(action.type === types.UinputInserviceTChanege){
  const newState = JSON.parse(JSON.stringify(state))
  newState.car.inservice_time = action.value
  return newState
}





// function updateProperty(property, value) {
//   let car = state.car;
//   car[property] = value;
//   return car
// }

  
  return state
}

