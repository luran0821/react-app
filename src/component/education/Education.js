import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Column} from 'primereact/column';
import {DataTable} from 'primereact/datatable';
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import * as actionCreators from '../../action/actionCreators' 

import '../../index.css'
class Education extends Component{


render () {
    let {
        EaddNew, 
        EDelete, 

        displayDialog, 

        globalFilter,
        selectedCar, 
        cars, 

        ESave,
        EinputSearchChanege ,
        EselectionChange, 

        EonHide,

        user_id,
        user_name,
        user_department,
        diploma_number,
        h_education,
        school_name,
        inputUser_idChanege,
        inputUser_nameChanege,
        inputUser_departmentChanege,
        inputDiploma_numberChanege,
        inputH_educationChanege,
        inputSchool_nameChanege
    }  = this.props
 
  

    var header = <div style={{'textAlign':'right'}}>
                        <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
                        <InputText type="search" 
                        // onInput={(e) => this.setState({globalFilter: e.target.value})} 
                        onInput={(e) =>  EinputSearchChanege(e) }
                        placeholder="搜索" size="50"/>
                    </div>;


    let footer = <div className="p-clearfix" style={{width:'100%'}}>
        <Button style={{float:'left'}} label="添加" icon="pi pi-plus" 
        onClick={ EaddNew.bind(this) }           
        />
    </div>;

    let dialogFooter = <div className="ui-dialog-buttonpane p-clearfix">
            <Button label="删除" icon="pi pi-times" 
            onClick={ EDelete.bind(this) }                
            />
            <Button label="保存" icon="pi pi-check" 
            onClick={ ESave.bind(this) }               
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
                           onSelectionChange = {(e) =>  EselectionChange(e) }
                          globalFilter={ globalFilter } emptyMessage="没有结果"
                           >                    
                    <Column field="user_id" header="工号" sortable={true} />
                    <Column field="user_name" header="姓名" sortable={true} />
                    <Column field="user_department" header="部门" sortable={true} />
                    <Column field="diploma_number" header="毕业证号" sortable={true} />
                    <Column field="h_education" header="最高学历" sortable={true} />
                    <Column field="school_name" header="学校" sortable={true} />
                </DataTable>

{/* 添加信息 */}
                <Dialog visible={ displayDialog } width="300px" 
                header="部门信息" 
                modal={true} 
                footer={ dialogFooter } 
                onHide={ EonHide }
                >   
                    {
                        cars &&   
                        <div className="p-grid p-fluid">
                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="user_id">工号</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="user_id" 
                                onChange = {(e) =>  inputUser_idChanege(e)}
                                value={ user_id }/>
                            </div>
                            
                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="user_name">姓名</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="user_name" 
                                onChange = { (e) => inputUser_nameChanege(e) }
                                value={ user_name }/>
                            </div>


                            <div className='clear'></div>

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="user_department">部门</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="user_department" 
                                onChange = { (e) => inputUser_departmentChanege(e) }
                                value={ user_department }/>
                            </div>

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="diploma_number">毕业证号</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="diploma_number" 
                                onChange = { (e) => inputDiploma_numberChanege(e) }
                                value={ diploma_number }/>
                            </div>
                            <div className='clear'></div>


                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="h_education">毕业证号</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="h_education" 
                                onChange = { (e) => inputH_educationChanege(e) }
                                value={ h_education }/>
                            </div>

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="school_name">毕业证号</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="school_name" 
                                onChange = { (e) => inputSchool_nameChanege(e) }
                                value={ school_name }/>
                            </div>
                            <div className='clear'></div>
                            <div className="p-col-4" style={{padding:'.75em'}}><label > 退出编辑状态请保存退出 ！</label></div>
                        </div>
                    }
                </Dialog>
            </div>
        </div>
    )}
  
 }


   const mapStateToProps = (state) => ({
    user_id: state.education.car.user_id,
    user_name: state.education.car.user_name,
    user_department: state.education.car.user_department,
    diploma_number: state.education.car.diploma_number,
    h_education: state.education.car.h_education,
    school_name: state.education.car.school_name,
    selectedCar: state.education.selectedCar,
    globalFilter: state.education.globalFilter,
    cars: state.education.cars,
    displayDialog:  state.education.displayDialog
    
})


const mapDispatchToProps = (dispatch) =>({

    EinputSearchChanege(e){
        dispatch(actionCreators.EinputSearchChanege(e))
    },

    EselectionChange(e){
        dispatch(actionCreators.EselectionChange(e))
    },
    EonHide(){
        dispatch(actionCreators.EonHide())
    },

    ESave(){
        dispatch(actionCreators.ESave())
    },

    EDelete(){
        dispatch(actionCreators.EDelete())
    },

    EaddNew(){
        dispatch(actionCreators.EaddNew())
    },

    inputUser_idChanege(e){
      dispatch(actionCreators.inputUser_idChanege(e))
    },
    inputUser_nameChanege(e){
      dispatch(actionCreators.inputUser_nameChanege(e))
    },
    inputUser_departmentChanege(e){
      dispatch(actionCreators.inputUser_departmentChanege(e))
    },
    inputDiploma_numberChanege(e){
      dispatch(actionCreators.inputDiploma_numberChanege(e))
    },
    inputH_educationChanege(e){
      dispatch(actionCreators.inputH_educationChanege(e))
    },
    inputSchool_nameChanege(e){
      dispatch(actionCreators.inputSchool_nameChanege(e))
    }
   
})


   export default connect(mapStateToProps, mapDispatchToProps)(Education)