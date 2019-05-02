import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Column} from 'primereact/column';
import {DataTable} from 'primereact/datatable';
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
//import {DataTableSubmenu} from './DataTableSubmenu';


//import './UserTable.css'


 class DepTabel extends Component {


  
  constructor() {
      super();
      this.state = {
        cars: [
          {"name": "VW", "department_id": 2012},
          {"name": "VW", "department_id": 2012},
          {"name": "VW", "department_id": 2012},
          {"name": "VW", "department_id": 2012},
          {"name": "VW", "department_id": 2012},
          {"name": "VW", "department_id": 2012},
          {"name": "VW", "department_id": 2012}
        ]

      };
     // this.carservice = new CarService();


        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);
        this.onCarSelect = this.onCarSelect.bind(this);
        this.addNew = this.addNew.bind(this);

  }

  componentDidMount() {
     // this.carservice.getCarsSmall().then(data => this.setState({cars: data}));

    
     
  }

  save() {
    let cars = [...this.state.cars];
    if(this.newCar)
        cars.push(this.state.car);
    else
        cars[this.findSelectedCarIndex()] = this.state.car;

    this.setState({cars:cars, selectedCar:null, car: null, displayDialog:false});
}

delete() {
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

addNew() {
    this.newCar = true;
    this.setState({
        car: {name:'', department_id: ''},
        displayDialog: true
    });
}


  render() {
    const {}  = this.props
    // let header = <div className="p-clearfix" style={{lineHeight:'1.87em'}}>CRUD for Cars </div>;
    var header = <div style={{'textAlign':'right'}}>
                        <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
                        <InputText type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="搜索" size="50"/>
                    </div>;


    let footer = <div className="p-clearfix" style={{width:'100%'}}>
        <Button style={{float:'left'}} label="添加" icon="pi pi-plus" onClick={this.addNew}/>
    </div>;

    let dialogFooter = <div className="ui-dialog-buttonpane p-clearfix">
            <Button label="删除" icon="pi pi-times" onClick={this.delete}/>
            <Button label="保存" icon="pi pi-check" onClick={this.save}/>
        </div>;

    return (
        <div>
            <div className="content-section implementation">
                <DataTable value={this.state.cars} paginator={true} rows={20}  
                            header={header} footer={footer}
                           selectionMode="single" 
                           selection={this.state.selectedCar} 
                           onSelectionChange={e => this.setState({selectedCar: e.value})}
                           onRowSelect={this.onCarSelect}
                           globalFilter={this.state.globalFilter} emptyMessage="没有结果"
                           >

                    
                    <Column field="name" header="部门名称" sortable={true} />
                    <Column field="department_id" header="部门编号" sortable={true} />
                </DataTable>





{/* 添加信息 */}
                <Dialog visible={this.state.displayDialog} width="300px" 
                header="部门信息" 
                modal={true} 
                footer={dialogFooter} 
                onHide={() => this.setState({displayDialog: false})}
                >   
                    {
                        this.state.car && 
                        
                        <div className="p-grid p-fluid">
                            <div className="p-col-4" style={{padding:'.75em'}}><label htmlFor="name">部门名称</label></div>
                            <div className="p-col-8" style={{padding:'.5em'}}>
                                <InputText id="name" onChange={(e) => {this.updateProperty('name', e.target.value)}} value={this.state.car.name}/>
                            </div>
                            
                            <div className="p-col-4" style={{padding:'.75em'}}><label htmlFor="department_id">部门编号</label></div>
                            <div className="p-col-8" style={{padding:'.5em'}}>
                                <InputText id="department_id" onChange={(e) => {this.updateProperty('department_id', e.target.value)}} value={this.state.car.department_id}/>
                            </div>
                        </div>
                    }
                </Dialog>
            </div>
        </div>
    )}
   }






   export default connect()(DepTabel)