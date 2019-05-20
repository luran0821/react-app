import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Column} from 'primereact/column';
import {DataTable} from 'primereact/datatable';
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import * as actionCreators from '../../action/actionCreators' 


class DepTabel extends Component{

render () {
    let {
        depaddNew, 
        depDelete, 
        displayDialog, 
        inputNameChanege,
        inputIdChanege,
        globalFilter,
        name,
        department_id, 
        selectedCar, 
        cars, 
        depSave,
        inputSearchChanege ,
        selectionChange, 
        deponHide
    }  = this.props
 
  

    var header = <div style={{'textAlign':'right'}}>
                        <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
                        <InputText type="search" 
                        // onInput={(e) => this.setState({globalFilter: e.target.value})} 
                        onInput={(e) =>  inputSearchChanege(e) }
                        placeholder="搜索" size="50"/>
                    </div>;


    let footer = <div className="p-clearfix" style={{width:'100%'}}>
        <Button style={{float:'left'}} label="添加" icon="pi pi-plus" 
        onClick={ depaddNew.bind(this) }           
        />
    </div>;

    let dialogFooter = <div className="ui-dialog-buttonpane p-clearfix">
            <Button label="删除" icon="pi pi-times" 
            onClick={ depDelete.bind(this) }                
            />
            <Button label="保存" icon="pi pi-check" 
            onClick={ depSave.bind(this) }               
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
                           onSelectionChange = {(e) =>  selectionChange(e) }
                          globalFilter={ globalFilter } emptyMessage="没有结果"
                           >                    
                    <Column field="name" header="部门名称" sortable={true} />
                    <Column field="department_id" header="部门编号" sortable={true} />
                </DataTable>

{/* 添加信息 */}
                <Dialog visible={ displayDialog } width="300px" 
                header="部门信息" 
                modal={true} 
                footer={ dialogFooter } 
                onHide={ deponHide }
                >   
                    {
                        cars &&   
                        <div className="p-grid p-fluid">
                            <div className="p-col-4" style={{padding:'.75em'}}><label htmlFor="name">部门名称</label></div>
                            <div className="p-col-8" style={{padding:'.5em'}}>
                                <InputText id="name" 
                                onChange = {(e) =>  inputNameChanege(e)}
                                value={ name }/>
                            </div>
                            
                            <div className="p-col-4" style={{padding:'.75em'}}><label htmlFor="department_id">部门编号</label></div>
                            <div className="p-col-8" style={{padding:'.5em'}}>
                                <InputText id="department_id" 
                                onChange = { (e) => inputIdChanege(e) }
                                value={ department_id }/>
                            </div>

                            <div className="p-col-4" style={{padding:'.75em'}}><label > 退出编辑状态请保存退出 ！</label></div>
                        </div>
                    }
                </Dialog>
            </div>
        </div>
    )}
  
 }


   const mapStateToProps = (state) => ({
    name: state.deptabel.car.name,
    cars: state.deptabel.cars,
    department_id: state.deptabel.car.department_id,
    displayDialog: state.deptabel.displayDialog,
    selectedCar: state.deptabel.selectedCar,
    globalFilter: state.deptabel.globalFilter
    
})


const mapDispatchToProps = (dispatch) =>({

    inputSearchChanege(e){
        dispatch(actionCreators.InputSearchChanege(e))
    },

    inputNameChanege(e){
        dispatch(actionCreators.inputNameChanege(e))
    },

    inputIdChanege(e){
        dispatch(actionCreators.inputIdChanege(e))
    },

    selectionChange(e){
        dispatch(actionCreators.selectionChange(e))
    },
    deponHide(){
        dispatch(actionCreators.deponHide())
    },

    depSave(){
        dispatch(actionCreators.depSave())
    },

    depDelete(){
        dispatch(actionCreators.depDelete())
    },

    depaddNew(){
        dispatch(actionCreators.depaddNew())
    }
   
})


   export default connect(mapStateToProps, mapDispatchToProps)(DepTabel)