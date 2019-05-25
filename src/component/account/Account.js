import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Column} from 'primereact/column';
import {DataTable} from 'primereact/datatable';
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import * as actionCreators from '../../action/actionCreators' 

import '../../index.css'

class Account extends Component{

    componentDidMount(){
        this.props.AServeice()
    }
render () {
    let {
        AaddNew, 
        ADelete, 
        displayDialog, 
        AInputNameChanege,
        AInputPwdChanege,
        globalFilter,
        name,
        password, 
        selectedCar, 
        cars, 
        ASave,
        AInputSearchChanege ,
        AselectionChange, 
        AonHide,
        InputaddChanege,
        InputdeleteChanege,
        InputmodifyChanege,
        add,
        adelete,
        modify,
        message
    }  = this.props
 
  

    var header = <div style={{'textAlign':'right'}}>
                        <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
                        <InputText type="search" 
                        // onInput={(e) => this.setState({globalFilter: e.target.value})} 
                        onInput={(e) =>  AInputSearchChanege(e)}
                        placeholder="搜索" size="50"/>
                    </div>;


    let footer = <div className="p-clearfix" style={{width:'100%'}}>
        <Button style={{float:'left'}} label="添加" icon="pi pi-plus" 
        onClick={ AaddNew.bind(this) }           
        />
    </div>;

    let dialogFooter = <div className="ui-dialog-buttonpane p-clearfix">
            <Button label="删除" icon="pi pi-times" 
            onClick={ ADelete.bind(this) }                
            />
            <Button label="保存" icon="pi pi-check" 
            onClick={ ASave.bind(this) }               
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
                           onSelectionChange = {(e) => AselectionChange(e) }
                          globalFilter={ globalFilter } emptyMessage="没有结果"
                           >                    
                    <Column field="name" header="账号" sortable={true} />
                    <Column field="add"   header="添加权限" sortable={true} />
                    <Column field="adelete"   header="删除权限" sortable={true} />
                    <Column field="modify"   header="修改权限" sortable={true} />
                </DataTable>

{/* 添加信息 */}
                <Dialog visible={ displayDialog } width="300px" 
                header="账户信息" 
                modal={true} 
                footer={ dialogFooter } 
                onHide={ AonHide }
                >   
                    {
                        cars &&   
                        <div className="p-grid p-fluid ">
                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="name">账号</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="name" 
                                onChange = { (e) =>  AInputNameChanege(e)}
                                value={ name }/>
                            </div>
                            
                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="department_id">密码</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="password" 
                                 type="password" 
                                onChange = { (e) => AInputPwdChanege(e)}
                                value={ password }/>
                            </div>
                            <div className='clear'></div>

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="name">添加权限</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="add" 
                                placeholder="填：有 | 没有"
                                onChange = { (e) =>  InputaddChanege(e)}
                                value={ add }/>
                            </div>

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="name">删除权限</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="adelete" 
                                placeholder="填：有 | 没有"
                                onChange = { (e) =>  InputdeleteChanege(e)}
                                value={ adelete }/>
                            </div>
                            <div className='clear'></div>

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="name">修改权限</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="modify" 
                                placeholder="填：有 | 没有"
                                onChange = { (e) =>  InputmodifyChanege(e)}
                                value={ modify }/>
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
    name: state.account.car.name,
    cars: state.account.cars,
    add: state.account.car.add,
    adelete: state.account.car.adelete,
    modify: state.account.car.modify,
    department_id: state.account.car.password,
    displayDialog: state.account.displayDialog,
    selectedCar: state.account.selectedCar,
    globalFilter: state.account.globalFilter,
    message: state.account.message
    
})


const mapDispatchToProps = (dispatch) =>({

    AInputSearchChanege(e){
        dispatch(actionCreators.AInputSearchChanege(e))
    },

    AInputNameChanege(e){
        dispatch(actionCreators.AInputNameChanege(e))
    },

    AInputPwdChanege(e){
        dispatch(actionCreators.AInputPwdChanege(e))
    },

    AselectionChange(e){
        dispatch(actionCreators.AselectionChange(e))
    },
    AonHide(){
        dispatch(actionCreators.AonHide())
    },

    ASave(){
        dispatch(actionCreators.ASave())
    },

    ADelete(){
        dispatch(actionCreators.ADelete())
    },

    AaddNew(){
        dispatch(actionCreators.AaddNew())
    },
    AServeice(){
        dispatch(actionCreators.AServeice())
    },

    InputaddChanege(e){
        dispatch(actionCreators.InputaddChanege(e))
    },
    InputdeleteChanege(e){
        dispatch(actionCreators.InputdeleteChanege(e))
    },
    InputmodifyChanege(e){
        dispatch(actionCreators.InputmodifyChanege(e))
    },
   
})


export default connect(mapStateToProps, mapDispatchToProps)(Account)