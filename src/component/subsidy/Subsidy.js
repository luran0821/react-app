import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Column} from 'primereact/column';
import {DataTable} from 'primereact/datatable';
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import * as actionCreators from '../../action/actionCreators' 

import '../../index.css'

class Subsidy extends Component{


render () {
    let {
        displayDialog, 
        globalFilter,
        selectedCar, 
        cars, 

        subsidy_addNew, 
        subsidy_Delete,
        subsidy_Save,
        subsidy_inputSearchChanege ,
        subsidy_selectionChange, 

        subsidy_onHide,

        user_id,
        user_name,
        user_department,
        message,
       
        communication_subsidy,
        temperature_subsidy,
        drink_subsidy,
        traffic_subsidy,
        meal_subsidy,
        other_subsidy,


        subsidy_inputUser_idChanege,
        subsidy_inputUser_nameChanege,
        subsidy_inputUser_departmentChanege,
        


        inputCommunication_subsidyChanege,
        inputTemperature_subsidyChanege,
        inputDrink_subsidyChanege,
        inputTraffic_subsidyChanege,
        inputMeal_subsidyChanege,
        inputOther_subsidyChanege,

    }  = this.props
 
  

    var header = <div style={{'textAlign':'right'}}>
                        <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
                        <InputText type="search" 
                        // onInput={(e) => this.setState({globalFilter: e.target.value})} 
                        onInput={(e) =>  subsidy_inputSearchChanege(e) }
                        placeholder="搜索" size="50"/>
                    </div>;


    let footer = <div className="p-clearfix" style={{width:'100%'}}>
        <Button style={{float:'left'}} label="添加" icon="pi pi-plus" 
        onClick={ subsidy_addNew.bind(this) }           
        />
    </div>;

    let dialogFooter = <div className="ui-dialog-buttonpane p-clearfix">
            <Button label="删除" icon="pi pi-times" 
            onClick={ subsidy_Delete.bind(this) }                
            />
            <Button label="保存" icon="pi pi-check" 
            onClick={ subsidy_Save.bind(this) }               
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
                           onSelectionChange = {(e) =>  subsidy_selectionChange(e) }
                          globalFilter={ globalFilter } emptyMessage="没有结果"
                           >                    
                    <Column field="user_id" header="工号" sortable={true} />
                    <Column field="user_name" header="姓名" sortable={true} />
                    <Column field="user_department" header="部门" sortable={true} />
                    <Column field="communication_subsidy" header="通讯补贴" sortable={true} />
                    <Column field="temperature_subsidy" header="高温补贴" sortable={true} />
                    <Column field="drink_subsidy" header="冷饮补贴" sortable={true} />
                    <Column field="traffic_subsidy" header="交通补贴" sortable={true} />
                    <Column field="meal_subsidy" header="伙食补贴" sortable={true} />
                    <Column field="other_subsidy" header="其他补贴" sortable={true} />
                </DataTable>

{/* 添加信息 */}
                <Dialog visible={ displayDialog } width="300px" 
                header="部门信息" 
                modal={true} 
                footer={ dialogFooter } 
                onHide={ subsidy_onHide }
                >   
                    {
                        cars &&   
                        <div className="p-grid p-fluid">
                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="user_id">工号</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="user_id" 
                                onChange = {(e) =>  subsidy_inputUser_idChanege(e)}
                                value={ user_id }/>
                            </div>
                            
                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="user_name">姓名</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="user_name" 
                                onChange = { (e) => subsidy_inputUser_nameChanege(e) }
                                value={ user_name }/>
                            </div>

                            <div className='clear'></div>

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="user_department">部门</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="user_department" 
                                onChange = { (e) => subsidy_inputUser_departmentChanege(e) }
                                value={ user_department }/>
                            </div>

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="communication_subsidy">通讯补贴</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="communication_subsidy" 
                                onChange = { (e) => inputCommunication_subsidyChanege(e) }
                                value={ communication_subsidy }/>
                            </div>
                            <div className='clear'></div>

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="temperature_subsidy">高温补贴</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="temperature_subsidy" 
                                onChange = { (e) => inputTemperature_subsidyChanege(e) }
                                value={ temperature_subsidy }/>
                            </div>
                         


                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="drink_subsidy">奖金</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="drink_subsidy" 
                                onChange = { (e) => inputDrink_subsidyChanege(e) }
                                value={ drink_subsidy }/>
                            </div>


                            <div className='clear'></div>
                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="traffic_subsidy">交通补贴</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="traffic_subsidy" 
                                onChange = { (e) => inputTraffic_subsidyChanege(e) }
                                value={ traffic_subsidy }/>
                            </div>

                            

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="meal_subsidy">伙食补贴</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="meal_subsidy" 
                                onChange = { (e) => inputMeal_subsidyChanege(e) }
                                value={ meal_subsidy }/>
                            </div>
                          
                            <div className='clear'></div>
                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="other_subsidy">其他补贴</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="other_subsidy" 
                                onChange = { (e) => inputOther_subsidyChanege(e) }
                                value={ other_subsidy }/>
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
    user_id: state.subsidy.car.user_id,
    user_name: state.subsidy.car.user_name,
    user_department: state.subsidy.car.user_department,

    communication_subsidy: state.subsidy.car.communication_subsidy,

    temperature_subsidy: state.subsidy.car.temperature_subsidy,
    drink_subsidy: state.subsidy.car.drink_subsidy,
    traffic_subsidy: state.subsidy.car.traffic_subsidy,
    meal_subsidy: state.subsidy.car.meal_subsidy,
    other_subsidy: state.subsidy.car.other_subsidy,

    selectedCar: state.subsidy.selectedCar,
    globalFilter: state.subsidy.globalFilter,
    cars: state.subsidy.cars,
    displayDialog:  state.subsidy.displayDialog,
    message: state.account.message
    
})


const mapDispatchToProps = (dispatch) =>({

   subsidy_inputSearchChanege(e){
        dispatch(actionCreators.subsidy_inputSearchChanege(e))
    },

    subsidy_selectionChange(e){
        dispatch(actionCreators.subsidy_selectionChange(e))
    },
    subsidy_onHide(){
        dispatch(actionCreators.subsidy_onHide())
    },

    subsidy_Save(){
        dispatch(actionCreators.subsidy_Save())
    },

    subsidy_Delete(){
        dispatch(actionCreators.subsidy_Delete())
    },

    subsidy_addNew(){
        dispatch(actionCreators.subsidy_addNew())
    },

    subsidy_inputUser_idChanege(e){
      dispatch(actionCreators.subsidy_inputUser_idChanege(e))
    },
    subsidy_inputUser_nameChanege(e){
      dispatch(actionCreators.subsidy_inputUser_nameChanege(e))
    },
    subsidy_inputUser_departmentChanege(e){
      dispatch(actionCreators.subsidy_inputUser_departmentChanege(e))
    },


    inputCommunication_subsidyChanege(e){
      dispatch(actionCreators.inputCommunication_subsidyChanege(e))
    },
    inputTemperature_subsidyChanege(e){
      dispatch(actionCreators.inputTemperature_subsidyChanege(e))
    },
    inputDrink_subsidyChanege(e){
      dispatch(actionCreators.inputDrink_subsidyChanege(e))
    },
    inputTraffic_subsidyChanege(e){
      dispatch(actionCreators.inputTraffic_subsidyChanege(e))
    },
    inputMeal_subsidyChanege(e){
      dispatch(actionCreators.inputMeal_subsidyChanege(e))
    },
    inputOther_subsidyChanege(e){
      dispatch(actionCreators.inputOther_subsidyChanege(e))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Subsidy)