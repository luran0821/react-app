import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Column} from 'primereact/column';
import {DataTable} from 'primereact/datatable';
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import * as actionCreators from '../../action/actionCreators' 

import '../../index.css'

class Leave extends Component{


render () {
    let {
        LaddNew, 
        LDelete, 

        displayDialog, 

        globalFilter,
        selectedCar, 
        cars, 

        LSave,
        LinputSearchChanege ,
        LselectionChange, 

        LonHide,

        user_id,
        user_name,
        user_department,

        leave_types,
        start_types,
        end_types,
        message,
        inputLUser_idChanege,
        inputLUser_nameChanege,
        inputLUser_departmentChanege,

        inputLeave_typesChanege,
        inputStart_typesChanege,
        inputEnd_typesChanege
    }  = this.props
 
  

    var header = <div style={{'textAlign':'right'}}>
                        <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
                        <InputText type="search" 
                        // onInput={(e) => this.setState({globalFilter: e.target.value})} 
                        onInput={(e) =>  LinputSearchChanege(e) }
                        placeholder="搜索" size="50"/>
                    </div>;


    let footer = <div className="p-clearfix" style={{width:'100%'}}>
        <Button style={{float:'left'}} label="添加" icon="pi pi-plus" 
        onClick={ LaddNew.bind(this) }           
        />
    </div>;

    let dialogFooter = <div className="ui-dialog-buttonpane p-clearfix">
            <Button label="删除" icon="pi pi-times" 
            onClick={ LDelete.bind(this) }                
            />
            <Button label="保存" icon="pi pi-check" 
            onClick={ LSave.bind(this) }               
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
                           onSelectionChange = {(e) =>  LselectionChange(e) }
                          globalFilter={ globalFilter } emptyMessage="没有结果"
                           >                    
                    <Column field="user_id" header="工号" sortable={true} />
                    <Column field="user_name" header="姓名" sortable={true} />
                    <Column field="user_department" header="部门" sortable={true} />
                    <Column field="leave_types" header="请假类型" sortable={true} />
                    <Column field="start_types" header="开始时间" sortable={true} />
                    <Column field="end_types" header="结束时间" sortable={true} />
                </DataTable>

{/* 添加信息 */}
                <Dialog visible={ displayDialog } width="300px" 
                header="部门信息" 
                modal={true} 
                footer={ dialogFooter } 
                onHide={ LonHide }
                >   
                    {
                        cars &&   
                        <div className="p-grid p-fluid">
                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="user_id">工号</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="user_id" 
                                onChange = {(e) =>  inputLUser_idChanege(e)}
                                value={ user_id }/>
                            </div>
                            
                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="user_name">姓名</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="user_name" 
                                onChange = { (e) => inputLUser_nameChanege(e) }
                                value={ user_name }/>
                            </div>
                            <div className='clear'></div>


                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="user_department">部门</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="user_department" 
                                onChange = { (e) => inputLUser_departmentChanege(e) }
                                value={ user_department }/>
                            </div>

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="leave_types">请假类型</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="leave_types" 
                                onChange = { (e) => inputLeave_typesChanege(e) }
                                value={ leave_types }/>
                            </div>
                            <div className='clear'></div>

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="start_types">开始时间</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="start_types" 
                                onChange = { (e) => inputStart_typesChanege(e) }
                                value={ start_types }/>
                            </div>

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="school_name">结束时间</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="end_types" 
                                onChange = { (e) => inputEnd_typesChanege(e) }
                                value={ end_types }/>
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
    user_id: state.leave.car.user_id,
    user_name: state.leave.car.user_name,
    user_department: state.leave.car.user_department,

    leave_types: state.leave.car.leave_types,
    start_types: state.leave.car.start_types,
    end_types: state.leave.car.end_types,
    
    selectedCar: state.leave.selectedCar,
    globalFilter: state.leave.globalFilter,
    cars: state.leave.cars,
    displayDialog:  state.leave.displayDialog,
    message: state.account.message
    
})


const mapDispatchToProps = (dispatch) =>({

    LinputSearchChanege(e){
        dispatch(actionCreators.LinputSearchChanege(e))
    },

    LselectionChange(e){
        dispatch(actionCreators.LselectionChange(e))
    },
    LonHide(){
        dispatch(actionCreators.LonHide())
    },

    LSave(){
        dispatch(actionCreators.LSave())
    },

    LDelete(){
        dispatch(actionCreators.LDelete())
    },

    LaddNew(){
        dispatch(actionCreators.LaddNew())
    },


    inputLUser_idChanege(e){
      dispatch(actionCreators.inputLUser_idChanege(e))
    },
    inputLUser_nameChanege(e){
      dispatch(actionCreators.inputLUser_nameChanege(e))
    },
    inputLUser_departmentChanege(e){
      dispatch(actionCreators.inputLUser_departmentChanege(e))
    },



    inputLeave_typesChanege(e){
      dispatch(actionCreators.inputLeave_typesChanege(e))
    },
    inputStart_typesChanege(e){
      dispatch(actionCreators.inputStart_typesChanege(e))
    },
    inputEnd_typesChanege(e){
      dispatch(actionCreators.inputEnd_typesChanege(e))
    }
   
})


export default connect(mapStateToProps, mapDispatchToProps)(Leave)