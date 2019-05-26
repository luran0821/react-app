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
})

export const onClicRegister = () => ({
    type: types.Register 
})


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
    type: types.UinputInserviceTChanege,
    value: e.target.value
})

export const UServeice = () => ({
    type: types.UServeice
  
})



/** account*/
export const AInputNameChanege = (e) => ({
    type: types.AInputNameChanege,
    value: e.target.value
})

export const AInputPwdChanege = (e) => ({
    type: types.AInputPwdChanege,
    value: e.target.value
})

export const AselectionChange = (e) => ({
    type: types.ASelectionChange,
    value: e.value
})


export const AonHide = () => ({
    type: types.AonHide,   
})

export const AInputSearchChanege = (e) => ({
    type: types.AInputSearchChanege,
    value: e.target.value
})

export const AaddNew = () => ({
    type: types.AaddNew
})

export const ADelete = () => ({
    type: types.ADelete
})

export const ASave = () => ({
    type: types.ASave
})

export const AServeice = () => ({
    type: types.AServeice
  
})

export const InputaddChanege = (e) => ({
    type: types.InputaddChanege,
    value: e.target.value
})
export const InputdeleteChanege = (e) => ({
    type: types.InputdeleteChanege,
    value: e.target.value
})
export const InputmodifyChanege = (e) => ({
    type: types.InputmodifyChanege,
    value: e.target.value
})




/** education*/

export const EinputSearchChanege = (e) => ({
    type: types.EinputSearchChanege,
    value: e.target.value
})
export const EselectionChange = (e) => ({
    type: types.EselectionChange,
    value:  e.value
})
export const EonHide = () => ({
    type: types.EonHide
})
export const ESave = () => ({
    type: types.ESave
})
export const EDelete = () => ({
    type: types.EDelete
})
export const EaddNew = () => ({
    type: types.EaddNew
})
export const inputUser_idChanege = (e) => ({
    type: types.inputUser_idChanege,
    value: e.target.value
})
export const inputUser_nameChanege = (e) => ({
    type: types.inputUser_nameChanege,
    value: e.target.value
})
export const inputUser_departmentChanege = (e) => ({
    type: types.inputUser_departmentChanege,
    value: e.target.value
})
export const inputDiploma_numberChanege = (e) => ({
    type: types.inputDiploma_numberChanege,
    value: e.target.value
})
export const inputH_educationChanege = (e) => ({
    type: types.inputH_educationChanege,
    value:e.target.value
})
export const inputSchool_nameChanege = (e) => ({
    type: types.inputSchool_nameChanege,
    value: e.target.value
})




/**Salary */


export const  salary_inputSearchChanege = (e) => ({
    type: types.salary_inputSearchChanege,
    value: e.target.value
}) 
export const  salary_selectionChange = (e) => ({
    type: types.salary_selectionChange,
    value:  e.value
}) 
export const  salary_onHide =  () => ({
    type: types.salary_onHide
})
export const  salary_Save = () => ({
    type: types.salary_Save
}) 
export const  salary_Delete = () => ({
    type: types.salary_Delete
}) 
export const  salary_addNew = () => ({
    type: types.salary_addNew
}) 

export const salary_inputUser_idChanege =  (e) => ({
    type: types.salary_inputUser_idChanege,
    value: e.target.value
})
export const salary_inputUser_nameChanege = (e) => ({
    type: types.salary_inputUser_nameChanege,
    value: e.target.value
})
export const salary_inputUser_departmentChanege = (e) => ({
    type: types.salary_inputUser_departmentChanege,
    value: e.target.value
})
export const inputBasic_salaryChanege = (e) => ({
    type: types.inputBasic_salaryChanege,
    value: e.target.value
}) 
export const inputPosition_salaryChanege =  (e) => ({
    type: types.inputPosition_salaryChanege,
    value: e.target.value
})
export const inputBonusChanege = (e) => ({
    type: types.inputBonusChanege,
    value: e.target.value
}) 




/**Subsidy */


export const  subsidy_inputSearchChanege = (e) => ({
    type: types.subsidy_inputSearchChanege,
    value: e.target.value
}) 
export const  subsidy_selectionChange = (e) => ({
    type: types.subsidy_selectionChange,
    value:  e.value
}) 
export const  subsidy_onHide =  () => ({
    type: types.subsidy_onHide
})
export const  subsidy_Save = () => ({
    type: types.subsidy_Save
}) 
export const  subsidy_Delete = () => ({
    type: types.subsidy_Delete
}) 
export const  subsidy_addNew = () => ({
    type: types.subsidy_addNew
}) 

export const subsidy_inputUser_idChanege =  (e) => ({
    type: types.subsidy_inputUser_idChanege,
    value: e.target.value
})
export const subsidy_inputUser_nameChanege = (e) => ({
    type: types.subsidy_inputUser_nameChanege,
    value: e.target.value
})
export const subsidy_inputUser_departmentChanege = (e) => ({
    type: types.subsidy_inputUser_departmentChanege,
    value: e.target.value
})


export const inputCommunication_subsidyChanege = (e) => ({
    type: types.inputCommunication_subsidyChanege,
    value: e.target.value
}) 
export const inputTemperature_subsidyChanege =  (e) => ({
    type: types.inputTemperature_subsidyChanege,
    value: e.target.value
})
export const inputDrink_subsidyChanege = (e) => ({
    type: types.inputDrink_subsidyChanege,
    value: e.target.value
}) 
export const inputTraffic_subsidyChanege = (e) => ({
    type: types.inputTraffic_subsidyChanege,
    value: e.target.value
}) 
export const inputMeal_subsidyChanege = (e) => ({
    type: types.inputMeal_subsidyChanege,
    value: e.target.value
}) 

export const inputOther_subsidyChanege = (e) => ({
    type: types.inputOther_subsidyChanege,
    value: e.target.value
}) 


// Socialsecurity 

export const  socialsecurity_inputSearchChanege = (e) => ({
    type: types.socialsecurity_inputSearchChanege,
    value: e.target.value
}) 
export const  socialsecurity_selectionChange = (e) => ({
    type: types.socialsecurity_selectionChange,
    value:  e.value
}) 
export const  socialsecurity_onHide =  () => ({
    type: types.socialsecurity_onHide
})
export const  socialsecurity_Save = () => ({
    type: types.socialsecurity_Save
}) 
export const  socialsecurity_Delete = () => ({
    type: types.socialsecurity_Delete
}) 
export const  socialsecurity_addNew = () => ({
    type: types.socialsecurity_addNew
}) 

export const socialsecurity_inputUser_idChanege =  (e) => ({
    type: types.socialsecurity_inputUser_idChanege,
    value: e.target.value
})
export const socialsecurity_inputUser_nameChanege = (e) => ({
    type: types.socialsecurity_inputUser_nameChanege,
    value: e.target.value
})
export const socialsecurity_inputUser_departmentChanege = (e) => ({
    type: types.socialsecurity_inputUser_departmentChanege,
    value: e.target.value
})


export const inputPensionChanege = (e) => ({
    type: types.inputPensionChanege,
    value: e.target.value
}) 
export const inputMedical_insuranceChanege =  (e) => ({
    type: types.inputMedical_insuranceChanege,
    value: e.target.value
})
export const inputUnemployment_insuranceChanege = (e) => ({
    type: types.inputUnemployment_insuranceChanege,
    value: e.target.value
}) 
export const inputInjury_insuranceChanege = (e) => ({
    type: types.inputInjury_insuranceChanege,
    value: e.target.value
}) 
export const inputMaternity_insuranceChanege = (e) => ({
    type: types.inputMaternity_insuranceChanege,
    value: e.target.value
}) 

export const inputHousing_fundChanege = (e) => ({
    type: types.inputHousing_fundChanege,
    value: e.target.value
}) 


// Leave

export const LinputSearchChanege = (e) => ({
    type: types.LinputSearchChanege,
    value: e.target.value
})
export const LselectionChange = (e) => ({
    type: types.LselectionChange,
    value:  e.value
})
export const LonHide = () => ({
    type: types.LonHide
})
export const LSave = () => ({
    type: types.LSave
})
export const LDelete = () => ({
    type: types.LDelete
})
export const LaddNew = () => ({
    type: types.LaddNew
})
export const inputLUser_idChanege = (e) => ({
    type: types.inputLUser_idChanege,
    value: e.target.value
})
export const inputLUser_nameChanege = (e) => ({
    type: types.inputLUser_nameChanege,
    value: e.target.value
})
export const inputLUser_departmentChanege = (e) => ({
    type: types.inputLUser_departmentChanege,
    value: e.target.value
})
export const inputLeave_typesChanege = (e) => ({
    type: types.inputLeave_typesChanege,
    value: e.target.value
})
export const inputStart_typesChanege = (e) => ({
    type: types.inputStart_typesChanege,
    value:e.target.value
})
export const inputEnd_typesChanege = (e) => ({
    type: types.inputEnd_typesChanege,
    value: e.target.value
})


//Attendance

export const ADinputSearchChanege = (e) => ({
    type: types.ADinputSearchChanege,
    value: e.target.value
})
export const ADselectionChange = (e) => ({
    type: types.ADselectionChange,
    value:  e.value
})
export const ADonHide = () => ({
    type: types.ADonHide
})
export const ADSave = () => ({
    type: types.ADSave
})
export const ADDelete = () => ({
    type: types.ADDelete
})
export const ADaddNew = () => ({
    type: types.ADaddNew
})
export const inputADUser_idChanege = (e) => ({
    type: types.inputADUser_idChanege,
    value: e.target.value
})
export const inputADUser_nameChanege = (e) => ({
    type: types.inputLUser_nameChanege,
    value: e.target.value
})
export const inputADUser_departmentChanege = (e) => ({
    type: types.inputADUser_departmentChanege,
    value: e.target.value
})
export const inputAttendance_tyepsChanege = (e) => ({
    type: types.inputAttendance_tyepsChanege,
    value: e.target.value
})
export const inputDatesChanege = (e) => ({
    type: types.inputDatesChanege,
    value:e.target.value
})
export const inputDoctypeChanege = (e) => ({
    type: types.inputDoctypeChanege,
    value: e.target.value
})

