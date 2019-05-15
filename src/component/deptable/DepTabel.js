import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Column} from 'primereact/column';
import {DataTable} from 'primereact/datatable';
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import * as actionCreators from '../../action/actionCreators' 
//import {DataTableSubmenu} from './DataTableSubmenu';


//import './UserTable.css'


 class DepTabel extends Component {


  
  constructor(props) {
      super(props);
    //   this.state = {
    //     cars: [
    //       {"name": "VW", "department_id": 2012},
    //       {"name": "VW", "department_id": 2012},
    //       {"name": "VW", "department_id": 2012},
    //       {"name": "VW", "department_id": 2012},
    //       {"name": "VW", "department_id": 2012},
    //       {"name": "VW", "department_id": 2012},
    //       {"name": "VW", "department_id": 2012}
    //     ]

     // };
     // this.carservice = new CarService();


        this.props.depsave = this.props.depsave.bind(this);
        this.props.depdelete = this.props.depdelete.bind(this);
        this.props.onCarSelect = this.props.onCarSelect.bind(this);
        this.props.depaddNew =this.props.depaddNew.bind(this);

  }

  componentDidMount() {
     // this.carservice.getCarsSmall().then(data => this.setState({cars: data}));   
  }

  depSave() {
    let cars = [...this.state.car];
    if(this.newCar)
        cars.push(this.state.car);
    else
        cars[this.findSelectedCarIndex()] = this.state.car;

    this.setState({cars:cars, selectedCar:null, car: null, displayDialog:false});
}

depDelete() {
    let index = this.findSelectedCarIndex();
    this.setState({
        cars: this.state.cars.filter((val,i) => i !== index),
        selectedCar: null,
        car: null,
        displayDialog: false});
}

findSelectedCarIndex() {
    return this.state.cars.indexOf(this.state.selectedCar);
}

updateProperty(property, value) {
    let car = this.state.car;
    car[property] = value;
    this.setState({car: car});
}


onCarSelect(e){
    this.newCar = false;
    this.setState({
        displayDialog:true,
        car: Object.assign({}, e.data)
    });
}

depaddNew() {
    this.newCar = true;
    this.setState({
        car: {name:'', department_id: ''},
        displayDialog: true
    });
}


  render() {
    const {
        depaddNew, 
        depDelete, 
        displayDialog, 
        onCarSelect, 
        updateProperty ,
        name,
        department_id, 
        selectedCar, 
        cars, 
        depSave,
        inputSearchChanege ,
        selectionChange, 
        deponHide,
    }  = this.props
    // let header = <div className="p-clearfix" style={{lineHeight:'1.87em'}}>CRUD for Cars </div>;

    var header = <div style={{'textAlign':'right'}}>
                        <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
                        <InputText type="search" 
                        // onInput={(e) => this.setState({globalFilter: e.target.value})} 
                        onInput={ inputSearchChanege }
                        placeholder="搜索" size="50"/>
                    </div>;


    let footer = <div className="p-clearfix" style={{width:'100%'}}>
        <Button style={{float:'left'}} label="添加" icon="pi pi-plus" 
        onClick={ depaddNew }           
        />
    </div>;

    let dialogFooter = <div className="ui-dialog-buttonpane p-clearfix">
            <Button label="删除" icon="pi pi-times" 
            onClick={ depDelete }                
            />
            <Button label="保存" icon="pi pi-check" 
            onClick={ depSave }               
            />
        </div>;

    return (
        <div>
            <div className="content-section implementation">
                <DataTable value={ cars } paginator={true} rows={20}  
                            header={header} footer={footer}
                           selectionMode="single" 
                           
                           selection={ selectedCar } 
                        // onSelectionChange={e => this.setState({selectedCar: e.value})}
                           onSelectionChange = { selectionChange }
                         //onRowSelect={this.onCarSelect}
                         onRowSelect = { onCarSelect }
                          // globalFilter={this.state.globalFilter} emptyMessage="没有结果"
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
                // onHide={() => this.setState({displayDialog: false})}
                onHide={ deponHide }
                >   
                    {
                        cars && 
                        
                        <div className="p-grid p-fluid">
                            <div className="p-col-4" style={{padding:'.75em'}}><label htmlFor="name">部门名称</label></div>
                            <div className="p-col-8" style={{padding:'.5em'}}>
                                <InputText id="name" 

                                // onChange={(e) => {this.updateProperty('name', e.target.value)}} 
                                onChange = { inputNameChanege }
                                value={ name }/>
                            </div>
                            
                            <div className="p-col-4" style={{padding:'.75em'}}><label htmlFor="department_id">部门编号</label></div>
                            <div className="p-col-8" style={{padding:'.5em'}}>
                                <InputText id="department_id"

                                // onChange={(e) => {this.updateProperty('department_id', e.target.value)}} 
                                onChange = { inputIdChanege }
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
    name: state.deptabel.cars.name,
    cars: state.deptabel.cars,
    department_id: state.deptabel.cars.department_id,
    displayDialog: state.deptabel.displayDialog,
    selectedCar: state.depTabel.selectedCar,
    globalFilter: state.depTabel.globalFilter
    
})


const mapDispatchToProps = (dispatch) =>({

    inputSearchChanege(e){
        dispatch(actionCreators.inputSearchChanege(e))
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
    onCarSelect(e){
        dispatch(actionCreators.onCarSelect(e))
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