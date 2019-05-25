import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Column} from 'primereact/column';
import {DataTable} from 'primereact/datatable';
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import * as actionCreators from '../../action/actionCreators' 


import '../../index.css'
class Attendance extends Component{


render () {
    let {
        ADaddNew, 
        ADDelete, 

        displayDialog, 

        globalFilter,
        selectedCar, 
        cars, 

        ADSave,
        ADinputSearchChanege ,
        ADselectionChange, 

        ADonHide,

        user_id,
        user_name,
        user_department,

        attendance_tyeps,//考勤类型
        date, //日期
        doctype, //备注
        message,
        inputADUser_idChanege,
        inputADUser_nameChanege,
        inputADUser_departmentChanege,

        inputAttendance_tyepsChanege,
        inputDateChanege,
        inputDoctypeChanege
    }  = this.props
 
  

    var header = <div style={{'textAlign':'right'}}>
                        <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
                        <InputText type="search" 
                        // onInput={(e) => this.setState({globalFilter: e.target.value})} 
                        onInput={(e) =>  ADinputSearchChanege(e) }
                        placeholder="搜索" size="50"/>
                    </div>;


    let footer = <div className="p-clearfix" style={{width:'100%'}}>
        <Button style={{float:'left'}} label="添加" icon="pi pi-plus" 
        onClick={ ADaddNew.bind(this) }           
        />
    </div>;

    let dialogFooter = <div className="ui-dialog-buttonpane p-clearfix">
            <Button label="删除" icon="pi pi-times" 
            onClick={ ADDelete.bind(this) }                
            />
            <Button label="保存" icon="pi pi-check" 
            onClick={ ADSave.bind(this) }               
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
                           onSelectionChange = {(e) =>  ADselectionChange(e) }
                          globalFilter={ globalFilter } emptyMessage="没有结果"
                           >                    
                    <Column field="user_id" header="工号" sortable={true} />
                    <Column field="user_name" header="姓名" sortable={true} />
                    <Column field="user_department" header="部门" sortable={true} />
                    <Column field="attendance_tyeps" header="考勤类型" sortable={true} />
                    <Column field="date" header="时间" sortable={true} />
                    <Column field="doctype" header="备注" sortable={true} />
                </DataTable>

{/* 添加信息 */}
                <Dialog visible={ displayDialog } width="300px" 
                header="部门信息" 
                modal={true} 
                footer={ dialogFooter } 
                onHide={ ADonHide }
                >   
                    {
                        cars &&   
                        <div className="p-grid p-fluid">
                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="user_id">工号</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="user_id" 
                                onChange = {(e) =>  inputADUser_idChanege(e)}
                                value={ user_id }/>
                            </div>
                            
                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="user_name">姓名</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="user_name" 
                                onChange = { (e) => inputADUser_nameChanege(e) }
                                value={ user_name }/>
                            </div>
                            <div className='clear'></div>

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="user_department">部门</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="user_department" 
                                onChange = { (e) => inputADUser_departmentChanege(e) }
                                value={ user_department }/>
                            </div>

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="attendance_tyeps">考勤类型</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="attendance_tyeps" 
                                onChange = { (e) => inputAttendance_tyepsChanege(e) }
                                value={ attendance_tyeps }/>
                            </div>
                            <div className='clear'></div>

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="date">时间</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="date" 
                                onChange = { (e) => inputDateChanege(e) }
                                value={ date }/>
                            </div>

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="doctype">备注</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="doctype" 
                                onChange = { (e) => inputDoctypeChanege(e) }
                                value={ doctype }/>
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
    user_id: state.attendance.car.user_id,
    user_name: state.attendance.car.user_name,
    user_department: state.attendance.car.user_department,

    attendance_tyeps: state.attendance.car.attendance_tyeps,
    date: state.attendance.car.date,
    doctype: state.attendance.car.doctype,
    
    selectedCar: state.attendance.selectedCar,
    globalFilter: state.attendance.globalFilter,
    cars: state.attendance.cars,
    displayDialog:  state.attendance.displayDialog,
    message: state.account.message
    
})


const mapDispatchToProps = (dispatch) =>({

    ADinputSearchChanege(e){
        dispatch(actionCreators.ADinputSearchChanege(e))
    },

    ADselectionChange(e){
        dispatch(actionCreators.ADselectionChange(e))
    },
    ADonHide(){
        dispatch(actionCreators.ADonHide())
    },

    ADSave(){
        dispatch(actionCreators.ADSave())
    },

    ADDelete(){
        dispatch(actionCreators.ADDelete())
    },

    ADaddNew(){
        dispatch(actionCreators.ADaddNew())
    },


    inputADUser_idChanege(e){
      dispatch(actionCreators.inputADUser_idChanege(e))
    },
    inputADUser_nameChanege(e){
      dispatch(actionCreators.inputADUser_nameChanege(e))
    },
    inputADUser_departmentChanege(e){
      dispatch(actionCreators.inputADUser_departmentChanege(e))
    },



    inputAttendance_tyepsChanege(e){
      dispatch(actionCreators.inputAttendance_tyepsChanege(e))
    },
    inputDatesChanege(e){
      dispatch(actionCreators.inputDatesChanege(e))
    },
    inputDoctypeChanege(e){
      dispatch(actionCreators.inputDoctypeChanege(e))
    }
   
})


export default connect(mapStateToProps, mapDispatchToProps)(Attendance)