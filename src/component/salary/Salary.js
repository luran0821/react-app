import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Column} from 'primereact/column';
import {DataTable} from 'primereact/datatable';
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import * as actionCreators from '../../action/actionCreators' 


import '../../index.css'

class Salary extends Component{


render () {
    let {
        displayDialog, 
        globalFilter,
        selectedCar, 
        cars, 

        salary_addNew, 
        salary_Delete,
        salary_Save,
        salary_inputSearchChanege ,
        salary_selectionChange, 

        salary_onHide,
        message,
        user_id,
        user_name,
        user_department,

        bonus,                 //奖金
        basic_salary,         //基本工资
        position_salary,      //岗位工资

        salary_inputUser_idChanege,
        salary_inputUser_nameChanege,
        salary_inputUser_departmentChanege,
        inputBasic_salaryChanege,
        inputPosition_salaryChanege,
        inputBonusChanege,
    }  = this.props
 
  

    var header = <div style={{'textAlign':'right'}}>
                        <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
                        <InputText type="search" 
                        // onInput={(e) => this.setState({globalFilter: e.target.value})} 
                        onInput={(e) =>  salary_inputSearchChanege(e) }
                        placeholder="搜索" size="50"/>
                    </div>;


    let footer = <div className="p-clearfix" style={{width:'100%'}}>
        <Button style={{float:'left'}} label="添加" icon="pi pi-plus" 
        onClick={ salary_addNew.bind(this) }           
        />
    </div>;

    let dialogFooter = <div className="ui-dialog-buttonpane p-clearfix">
            <Button label="删除" icon="pi pi-times" 
            onClick={ salary_Delete.bind(this) }                
            />
            <Button label="保存" icon="pi pi-check" 
            onClick={ salary_Save.bind(this) }               
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
                           onSelectionChange = {(e) =>  salary_selectionChange(e) }
                          globalFilter={ globalFilter } emptyMessage="没有结果"
                           >                    
                    <Column field="user_id" header="工号" sortable={true} />
                    <Column field="user_name" header="姓名" sortable={true} />
                    <Column field="user_department" header="部门" sortable={true} />
                    <Column field="basic_salary" header="基本工资" sortable={true} />
                    <Column field="position_salary" header="岗位工资" sortable={true} />
                    <Column field="bonus" header="奖金" sortable={true} />
                </DataTable>

{/* 添加信息 */}
                <Dialog visible={ displayDialog } width="300px" 
                header="部门信息" 
                modal={true} 
                footer={ dialogFooter } 
                onHide={ salary_onHide }
                >   
                    {
                        cars &&   
                        <div className="p-grid p-fluid">
                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="user_id">工号</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="user_id" 
                                onChange = {(e) =>  salary_inputUser_idChanege(e)}
                                value={ user_id }/>
                            </div>
                            
                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="user_name">姓名</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="user_name" 
                                onChange = { (e) => salary_inputUser_nameChanege(e) }
                                value={ user_name }/>
                            </div>

                            <div className='clear'></div>

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="user_department">部门</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="user_department" 
                                onChange = { (e) => salary_inputUser_departmentChanege(e) }
                                value={ user_department }/>
                            </div>

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="basic_salary">基本工资</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="basic_salary" 
                                onChange = { (e) => inputBasic_salaryChanege(e) }
                                value={ basic_salary }/>
                            </div>

                            <div className='clear'></div>

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="position_salary">岗位工资</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="position_salary" 
                                onChange = { (e) => inputPosition_salaryChanege(e) }
                                value={ position_salary }/>
                            </div>

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="bonus">奖金</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="bonus" 
                                onChange = { (e) => inputBonusChanege(e) }
                                value={ bonus }/>
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
    user_id: state.salary.car.user_id,
    user_name: state.salary.car.user_name,
    user_department: state.salary.car.user_department,
    diploma_number: state.salary.car.diploma_number,

    basic_salary: state.salary.car.basic_salary,
    bonus: state.salary.car.bonus,
    position_salary: state.salary.car.position_salary,

    selectedCar: state.salary.selectedCar,
    globalFilter: state.salary.globalFilter,
    cars: state.salary.cars,
    displayDialog:  state.salary.displayDialog,
    message: state.account.message
    
})


const mapDispatchToProps = (dispatch) =>({

   salary_inputSearchChanege(e){
        dispatch(actionCreators.salary_inputSearchChanege(e))
    },

    salary_selectionChange(e){
        dispatch(actionCreators.salary_selectionChange(e))
    },
    salary_onHide(){
        dispatch(actionCreators.salary_onHide())
    },

    salary_Save(){
        dispatch(actionCreators.salary_Save())
    },

    salary_Delete(){
        dispatch(actionCreators.salary_Delete())
    },

    salary_addNew(){
        dispatch(actionCreators.salary_addNew())
    },

    salary_inputUser_idChanege(e){
      dispatch(actionCreators.salary_inputUser_idChanege(e))
    },
    salary_inputUser_nameChanege(e){
      dispatch(actionCreators.salary_inputUser_nameChanege(e))
    },
    salary_inputUser_departmentChanege(e){
      dispatch(actionCreators.salary_inputUser_departmentChanege(e))
    },


    inputBasic_salaryChanege(e){
      dispatch(actionCreators.inputBasic_salaryChanege(e))
    },
    inputPosition_salaryChanege(e){
      dispatch(actionCreators.inputPosition_salaryChanege(e))
    },
    inputBonusChanege(e){
      dispatch(actionCreators.inputBonusChanege(e))
    }

})


   export default connect(mapStateToProps, mapDispatchToProps)(Salary)