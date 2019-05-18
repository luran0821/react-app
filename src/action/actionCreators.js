import * as types from './types'


export const changeInputValue = (e) => ({
    type: types.CHANGE_INPUT_VALUE,
    value: e.target.value
})

export const handleClick = () => ({
    type: types.ADD_ITEM 
})

export const loginNameChanege = (e) => ({
    type: types.Login_NAME, 
    value: e.target.value
})
export const loginPwdChanege = (e) => ({
    type: types.Login_PWD,
    value: e.target.value 
})

export const onClickLogin = () => ({
    type: types.Login 
}
// axios.get('/data')
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
)


export const Sign = () => ({
    type: types.Sign
})


export const registerNameChanege = (e) => ({
    type: types.Register_NAME, 
    value: e.target.value
})

export const registerNpwdChanege = (e) => ({
    type: types.Register_Npassword,
    value: e.target.value
})

export const registerPwdChanege = (e) => ({
    type: types.Register_PWD,
    value: e.target.value 
})

export const registerPwdSChanege = (e) => ({
    type: types.Register_sPWD,
    value: e.target.value 
})

export const onClickregister = () => ({
    type: types.Register
})


/**dep*/
export const inputNameChanege = (e) => ({
    type: types.InputNameChanege,
    value: e.target.value
})

export const inputIdChanege = (e) => ({
    type: types.InputIdChanege,
    value: e.target.value
})

export const selectionChange = (e) => ({
    type: types.SelectionChange,
    value: e.value
})


export const deponHide = () => ({
    type: types.DepOnHide,   
})

export const InputSearchChanege = (e) => ({
    type: types.InputSearchChanege,
    value: e.target.value
})

export const depaddNew = () => ({
    type: types.DepaddNew
})

export const depDelete = () => ({
    type: types.DepDelete
})

export const depSave = () => ({
    type: types.DepSave
})




/**user */


export const u_inputNameChanege = (e) => ({
    type: types.UInputNameChanege,
    value: e.target.value
})

export const u_inputIdChanege = (e) => ({
    type: types.u_InputIdChanege,
    value: e.target.value
})

export const u_selectionChange = (e) => ({
    type: types.u_SelectionChange,
    value: e.value
})


export const u_onHide = () => ({
    type: types.u_OnHide,   
})

export const u_InputSearchChanege = (e) => ({
    type: types.u_InputSearchChanege,
    value: e.target.value
})

export const u_addNew = () => ({
    type: types.u_AddNew
})

export const u_Delete = () => ({
    type: types.u_Delete
})

export const u_Save = () => ({
    type: types.u_Save
})

// export const u_updateProperty = (property, value) => ({
//     type: types.u_UpdateProperty,
//     value: value,
//     property: property
// })



export const u_inputJobChanege = (e) => ({
    type: types.UinputJobChanege,
    value: e.target.value
})


export const u_inputDepChanege = (e) => ({
    type: types.UinputDepChanege,
    value: e.target.value
})

export const u_inputAgeChanege = (e) => ({
    type: types.UinputAgeChanege,
    value: e.target.value
})


export const u_inputGenderChanege = (e) => ({
    type: types.UinputGenderChanege,
    value: e.target.value
})


export const u_inputPhoneChanege = (e) => ({
    type: types.UinputPhoneChanege,
    value: e.target.value
})

export const u_inputIdentityChanege = (e) => ({
    type: types.UinputIdentityChanege,
    value: e.target.value
})

export const u_inputMarriageChanege = (e) => ({
    type: types.UinputMarriageChanege,
    value: e.target.value
})

export const u_inputBirthChanege = (e) => ({
    type: types.UinputBirthChanege,
    value: e.target.value
})

export const u_inputPoliticalChanege = (e) => ({
    type: types.UinputPoliticalChanege,
    value: e.target.value
})


export const u_inputInserviceChanege = (e) => ({
    type: types.UinputInserviceChanege,
    value: e.target.value
})

export const u_inputAddressChanege = (e) => ({
    type: types.UinputAddressChanege,
    value: e.target.value
})
export const u_inputInserviceTChanege = (e) => ({
    type: types.UinputAddressChanege,
    value: e.target.value
})




/** */
/** */
/** */