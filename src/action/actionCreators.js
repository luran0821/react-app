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

export const onCarSelect = (e) => ({
    type: types.OnCarSelect,
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
    type: types.InputNameChanege,
    value: e.target.value
})

export const u_inputIdChanege = (e) => ({
    type: types.InputIdChanege,
    value: e.target.value
})

export const u_selectionChange = (e) => ({
    type: types.SelectionChange,
    value: e.value
})

export const u_onCarSelect = (e) => ({
    type: types.OnCarSelect,
    value: e.value
})

export const u_onHide = () => ({
    type: types.DepOnHide,   
})

export const u_InputSearchChanege = (e) => ({
    type: types.u_InputSearchChanege,
    value: e.target.value
})

export const u_addNew = () => ({
    type: types.DepaddNew
})

export const u_Delete = () => ({
    type: types.DepDelete
})

export const u_Save = () => ({
    type: types.DepSave
})






/** */
/** */
/** */