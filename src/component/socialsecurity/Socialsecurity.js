import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Column} from 'primereact/column';
import {DataTable} from 'primereact/datatable';
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import * as actionCreators from '../../action/actionCreators' 


import '../../index.css'

class Socialsecurity extends Component{


render () {
    let {
        displayDialog, 
        globalFilter,
        selectedCar, 
        cars, 

        socialsecurity_addNew, 
        socialsecurity_Delete,
        socialsecurity_Save,
        socialsecurity_inputSearchChanege ,
        socialsecurity_selectionChange, 
        socialsecurity_onHide,

        user_id,
        user_name,
        user_department,

        pension,
        medical_insurance,
        unemployment_insurance,
        injury_insurance,
        maternity_insurance,
        housing_fund,
        message,


        socialsecurity_inputUser_idChanege,
        socialsecurity_inputUser_nameChanege,
        socialsecurity_inputUser_departmentChanege,

        inputPensionChanege,   //养老保险
        inputMedical_insuranceChanege,  //医疗保险
        inputUnemployment_insuranceChanege, //失业保险
        inputInjury_insuranceChanege, //工伤保险
        inputMaternity_insuranceChanege,  //生育保险
        inputHousing_fundChanege  //住房公积金

    }  = this.props
 
  

    var header = <div style={{'textAlign':'right'}}>
                        <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
                        <InputText type="search" 
                        // onInput={(e) => this.setState({globalFilter: e.target.value})} 
                        onInput={(e) =>  socialsecurity_inputSearchChanege(e) }
                        placeholder="搜索" size="50"/>
                    </div>;


    let footer = <div className="p-clearfix" style={{width:'100%'}}>
        <Button style={{float:'left'}} label="添加" icon="pi pi-plus" 
        onClick={ socialsecurity_addNew.bind(this) }           
        />
    </div>;

    let dialogFooter = <div className="ui-dialog-buttonpane p-clearfix">
            <Button label="删除" icon="pi pi-times" 
            onClick={ socialsecurity_Delete.bind(this) }                
            />
            <Button label="保存" icon="pi pi-check" 
            onClick={ socialsecurity_Save.bind(this) }               
            />
        </div>;

    return (
        <div>
            <div className="content-section implementation">
                <DataTable value={ cars } paginator={true} rows={20}  
                            header={header} 
                            footer={footer}   
                           selectionMode="single"                
                           selection={ selectedCar } 
                           onSelectionChange = {(e) =>  socialsecurity_selectionChange(e) }
                          globalFilter={ globalFilter } emptyMessage="没有结果"
                           >                    
                    <Column field="user_id" header="工号" sortable={true} />
                    <Column field="user_name" header="姓名" sortable={true} />
                    <Column field="user_department" header="部门" sortable={true} />
                    <Column field="pension" header="养老保险" sortable={true} />
                    <Column field="medical_insurance" header="医疗保险" sortable={true} />
                    <Column field="unemployment_insurance" header="失业保险" sortable={true} />
                    <Column field="injury_insurance" header="工伤保险" sortable={true} />
                    <Column field="maternity_insurance" header="生育保险" sortable={true} />
                    <Column field="housing_fund" header="住房公积金" sortable={true} />
                </DataTable>

{/* 添加信息 */}
                <Dialog visible={ displayDialog } width="300px" 
                header="部门信息" 
                modal={true} 
                footer={ dialogFooter } 
                onHide={ socialsecurity_onHide }
                >   
                    {
                        cars &&   
                        <div className="p-grid p-fluid">
                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="user_id">工号</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="user_id" 
                                onChange = {(e) =>  socialsecurity_inputUser_idChanege(e)}
                                value={ user_id }/>
                            </div>
                            
                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="user_name">姓名</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="user_name" 
                                onChange = { (e) => socialsecurity_inputUser_nameChanege(e) }
                                value={ user_name }/>
                            </div>

                            <div className='clear'></div>

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="user_department">部门</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="user_department" 
                                onChange = { (e) => socialsecurity_inputUser_departmentChanege(e) }
                                value={ user_department }/>
                            </div>

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="pension">养老保险</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="pension" 
                                onChange = { (e) => inputPensionChanege(e) }
                                value={ pension }/>
                            </div>
                            <div className='clear'></div>

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="temperature_subsidy">医疗保险</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="medical_insurance" 
                                onChange = { (e) => inputMedical_insuranceChanege(e) }
                                value={ medical_insurance }/>
                            </div>

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="drink_subsidy">失业保险</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="unemployment_insurance" 
                                onChange = { (e) => inputUnemployment_insuranceChanege(e) }
                                value={ unemployment_insurance }/>
                            </div>
                            <div className='clear'></div>

                            
                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="injury_insurance">工伤保险</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="injury_insurance" 
                                onChange = { (e) => inputInjury_insuranceChanege(e) }
                                value={ injury_insurance }/>
                            </div>


                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="maternity_insurance">生育保险</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="maternity_insurance" 
                                onChange = { (e) => inputMaternity_insuranceChanege(e) }
                                value={ maternity_insurance }/>
                            </div>

                            <div className='clear'></div>

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="housing_fund">其他补贴</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="housing_fund" 
                                onChange = { (e) => inputHousing_fundChanege(e) }
                                value={ housing_fund }/>
                            </div>
                            <div className='clear'></div>

                            <div className="p-col-4" style={{padding:'.75em'}}><label >{ message }</label></div>
                        </div>
                    }
                </Dialog>
            </div>
        </div>
    )}
  
 }


   const mapStateToProps = (state) => ({
    user_id: state.socialsecurity.car.user_id,
    user_name: state.socialsecurity.car.user_name,
    user_department: state.socialsecurity.car.user_department,

    pension: state.socialsecurity.car.pension,

    medical_insurance: state.socialsecurity.car.medical_insurance,
    unemployment_insurance: state.socialsecurity.car.unemployment_insurance,
    injury_insurance: state.socialsecurity.car.injury_insurance,
    maternity_insurance: state.socialsecurity.car.maternity_insurance,
    housing_fund: state.socialsecurity.car.housing_fund,

    selectedCar: state.socialsecurity.selectedCar,
    globalFilter: state.socialsecurity.globalFilter,
    cars: state.socialsecurity.cars,
    displayDialog:  state.socialsecurity.displayDialog,
    message: state.account.message
})


const mapDispatchToProps = (dispatch) =>({

  socialsecurity_inputSearchChanege(e){
        dispatch(actionCreators.socialsecurity_inputSearchChanege(e))
    },

    socialsecurity_selectionChange(e){
        dispatch(actionCreators.socialsecurity_selectionChange(e))
    },
    socialsecurity_onHide(){
        dispatch(actionCreators.socialsecurity_onHide())
    },

    socialsecurity_Save(){
        dispatch(actionCreators.socialsecurity_Save())
    },

    socialsecurity_Delete(){
        dispatch(actionCreators.socialsecurity_Delete())
    },

    socialsecurity_addNew(){
        dispatch(actionCreators.socialsecurity_addNew())
    },

    socialsecurity_inputUser_idChanege(e){
      dispatch(actionCreators.socialsecurity_inputUser_idChanege(e))
    },
    socialsecurity_inputUser_nameChanege(e){
      dispatch(actionCreators.socialsecurity_inputUser_nameChanege(e))
    },
    socialsecurity_inputUser_departmentChanege(e){
      dispatch(actionCreators.socialsecurity_inputUser_departmentChanege(e))
    },




    inputPensionChanege(e){
      dispatch(actionCreators.inputPensionChanege(e))
    },
    inputMedical_insuranceChanege(e){
      dispatch(actionCreators.inputMedical_insuranceChanege(e))
    },
    inputUnemployment_insuranceChanege(e){
      dispatch(actionCreators.inputUnemployment_insuranceChanege(e))
    },
    inputInjury_insuranceChanege(e){
      dispatch(actionCreators.inputInjury_insuranceChanege(e))
    },
    inputMaternity_insuranceChanege(e){
      dispatch(actionCreators.inputMaternity_insuranceChanege(e))
    },
    inputHousing_fundChanege(e){
      dispatch(actionCreators.inputHousing_fundChanege(e))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Socialsecurity)