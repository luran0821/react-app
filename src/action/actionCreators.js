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