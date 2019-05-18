import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Column} from 'primereact/column';
import {DataTable} from 'primereact/datatable';
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';

import * as actionCreators from '../../action/actionCreators' 


import './UserTable.css'


 class UserTable extends Component {


  render() {
    const {
        name,
        cars,
        job_number,             //工号
        age,                   //年龄
        birth,               //出生年月
        identity_number,   //身份证号
        inservice,       //在职情况
        marriage,        //婚姻情况
        political,      //政治面貌
        phone,           //电话
        gender,           //性别
        inservice_time,     //入职时间
        department,          //部门
        displayDialog,
        selectedCar,
        globalFilter,
        UinputSearchChanege,
        UaddNew,
        UDelete,
        USave,
        UselectionChange,
        UonHide,
        UinputNameChanege,
        UinputJobChanege,
        UinputDepChanege,
        UinputAgeChanege,
        UinputGenderChanege,
        UinputPhoneChanege,
        UinputIdentityChanege,
        UinputMarriageChanege,
        UinputBirthChanege,
        UinputPoliticalChanege,
        UinputInserviceChanege,
        UinputInserviceTChanege
    }  = this.props
    

    var header = <div style={{'textAlign':'right'}}>
                        <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>

                        <InputText type="search" 
                        onInput={ UinputSearchChanege } 
                        placeholder="搜索" size="50"/>
                    </div>;


    let footer = <div className="p-clearfix" style={{width:'100%'}}>
        <Button style={{float:'left'}} label="添加" icon="pi pi-plus" onClick={ UaddNew.bind(this) }/>
    </div>;

    let dialogFooter = <div className="ui-dialog-buttonpane p-clearfix">
           
            <Button label="删除" icon="pi pi-times"    
            onClick={UDelete.bind(this)}/>
            <Button label="保存" icon="pi pi-check"  
            onClick={USave.bind(this)}/>
        </div>;

    return (
        <div>
            <div className="content-section implementation">
                <DataTable value={ cars } paginator={true} rows={20}  
                            header={header} footer={footer}
                           selectionMode="single" 
                           selection={ selectedCar } 
                           onSelectionChange={(e) =>UselectionChange(e)}
                           
                           globalFilter={ globalFilter} emptyMessage="没有结果"
                           >

                    <Column field="name" header="姓名" sortable={true} style={{width: '6em',fontWeight: 'none'}} />
                    <Column field="job_number" header="工号" sortable={true} style={{width: '7em'}} />
                    <Column field="department" header="部门" sortable={true}  style={{width: '6em'}}/>
                    <Column field="age" header="年龄" sortable={true}  style={{width: '5em'}}/>
                    <Column field="birth" header="出生年月" sortable={true} style={{width: '8em'}} />
                    <Column field="gender" header="性别" sortable={true} style={{width: '5em'}}/>
                    <Column field="inservice" header="在职" sortable={true} style={{width: '5em'}}/>
                    <Column field="identity_number" header="身份证号" sortable={true} style={{width: '12em'}} />
                    <Column field="marriage" header="婚姻情况" sortable={true} style={{width: '6em'}}/>
                    <Column field="political" header="政治面貌" sortable={true} style={{width: '6em'}}/>
                    <Column field="phone" header="电话" sortable={true} style={{width: '10em'}} />
                    <Column field="inservice_time" header="入职时间" sortable={true}  style={{width: '8em'}}/>
                   
                </DataTable>





{/* 添加信息 */}
                <Dialog visible={ displayDialog } width="300px" 
                header="员工信息" 
                modal={true} 
                footer={dialogFooter} 
                onHide={ UonHide }
                style = {{width: "530px"}}
                >  
                    {
                      cars &&    
                        <div className="p-grid p-fluid">
                            <div className='clear'></div>
                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="name">姓名</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>

                                <InputText id="name" 
                                onChange={ (e) => UinputNameChanege(e) } 
                                value={ name }/>

                            </div>
                            

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="job_number">工号</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>

                                <InputText id="job_number" 
                                onChange={(e)=> UinputJobChanege(e)} 
                                value={ job_number }/>

                            </div>
                            <div className='clear'></div>
                            
                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="department">部门</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>

                                <InputText id="department" 
                                onChange={(e) =>  UinputDepChanege(e) } 
                                value={ department }/>

                            </div>
                            

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="age">年龄</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>

                                <InputText id="age" 
                                onChange={(e) => UinputAgeChanege(e) } 
                                value={ age }/>

                            </div> 
                            <div className='clear'></div>


                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="gender">性别</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>

                                <InputText id="gender" 
                                onChange={(e) => UinputGenderChanege(e)} 
                                value={ gender }/>

                            </div>
                            

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="phone">电话</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>

                                <InputText id="phone"
                                 onChange={(e) => UinputPhoneChanege(e) } 
                                 value={ phone } />

                            </div> <div className='clear'></div>


                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="identity_number">身份证</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>

                                <InputText id="identity_number" 
                                onChange={ (e) => UinputIdentityChanege(e) } 
                                value={ identity_number }/>
                            </div>
                            

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="marriage">婚姻</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>

                                <InputText id="marriage" 
                                onChange={ (e) => UinputMarriageChanege(e) } 
                                value={ marriage }/>

                            </div> 
                            <div className='clear'></div>
                           
                            <div className="p-col-4 " style={{padding:'.75em'}}><label htmlFor="inservice">在职</label></div>
                            <div className="p-col-8 " style={{padding:'.5em'}}>
                           <InputText id="birth" 
                           onChange={(e) => UinputInserviceChanege(e)}
                           value={ inservice }/>
                            </div>
                            
                            <div className="p-col-4 " style={{padding:'.75em'}}><label htmlFor="birth">出生年月</label></div>
                            <div className="p-col-8 " style={{padding:'.5em'}}>
                                <InputText id="birth" 
                                onChange={(e) => UinputBirthChanege(e)}
                                 value={ birth }/>
                            </div>
                            

                            <div className="p-col-4 " style={{padding:'.75em'}}><label htmlFor="political">政治面貌</label></div>
                            <div className="p-col-8 " style={{padding:'.5em'}}>
                                <InputText id="political"
                                onChange={(e) => UinputPoliticalChanege(e) } 
                                value={ political }/>
                            </div>
                            <div className='clear'></div>

                            <div className="p-col-4" style={{padding:'.75em'}}><label htmlFor="inservice_time">入职时间</label></div>
                            <div className="p-col-8" style={{padding:'.5em'}}>
                                <InputText id="inservice_time"
                                 onChange={(e) => UinputInserviceTChanege(e) } 
                                 value={ inservice_time }/>
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
    name: state.usertabel.car.name,
    cars: state.usertabel.cars,
    job_number: state.usertabel.car.job_number,     //工号
    age: state.usertabel.car.age,                   //年龄
    birth: state.usertabel.car.birth,               //出生年月
    message: state.usertabel.car.message,
    identity_number: state.usertabel.car.identity_number,   //身份证号
    inservice: state.usertabel.car.inservice,       //在职情况
    marriage: state.usertabel.car.marriage,        //婚姻情况
    political: state.usertabel.car.political,      //政治面貌
    phone: state.usertabel.car.phone,           //电话
    gender: state.usertabel.car.gender,           //性别
    inservice_time:  state.usertabel.car.inservice_time,     //入职时间
    department: state.usertabel.car.department,          //部门
    displayDialog: state.usertabel.displayDialog,
    selectedCar: state.usertabel.selectedCar,
    globalFilter: state.usertabel.globalFilter
})



const mapDispatchToProps = (dispatch) =>({
    UinputSearchChanege(e){
        dispatch(actionCreators.u_InputSearchChanege(e))
    },

    UselectionChange(e){
        dispatch(actionCreators.u_selectionChange(e))
    },

    UonHide(){
        dispatch(actionCreators.u_onHide())
    },

    USave(){
        dispatch(actionCreators.u_Save())
    },

    UDelete(){
        dispatch(actionCreators.u_Delete())
    },

    UaddNew(){
        dispatch(actionCreators.u_addNew())
    },

    UinputNameChanege(e){
        dispatch(actionCreators.u_inputNameChanege(e))
    },
    UinputJobChanege(e){
        dispatch(actionCreators.u_inputJobChanege(e))
    },

    UinputDepChanege(e){
        dispatch(actionCreators.u_inputDepChanege(e))
    },

    UinputAgeChanege(e){
        dispatch(actionCreators.u_inputAgeChanege(e))
    },
    UinputGenderChanege(e){
        dispatch(actionCreators.u_inputGenderChanege(e))
    },
    UinputPhoneChanege(e){
        dispatch(actionCreators.u_inputPhoneChanege(e))
    },
    UinputIdentityChanege(e){
        dispatch(actionCreators.u_inputIdentityChanege(e))
    },
    UinputMarriageChanege(e){
        dispatch(actionCreators.u_inputMarriageChanege(e))
    },
    UinputBirthChanege(e){
        dispatch(actionCreators.u_inputBirthChanege(e))
    },
    UinputPoliticalChanege(e){
        dispatch(actionCreators.u_inputPoliticalChanege(e))
    },
    UinputInserviceChanege(e){
        dispatch(actionCreators.u_inputInserviceChanege(e))
    },
    UinputInserviceTChanege(e){
        dispatch(actionCreators.u_inputInserviceTChanege(e))
    }
})




export default connect(mapStateToProps, mapDispatchToProps)(UserTable)