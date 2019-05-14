import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Column} from 'primereact/column';
import {DataTable} from 'primereact/datatable';
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
//import {DataTableSubmenu} from './DataTableSubmenu';


import './UserTable.css'


 class UserTable extends Component {


  
  constructor() {
      super();
      this.state = {
        cars: [
          {"name": "VW", "job_number": 2012, "department": "Orange", "age": "12",birth: 'wqwq',gender: 'wqwq', identity_number: 'cwqe', marriage: 'cewe', political: 'dwede', phone:'dwqe', inservice_time: 'dwq',address: 'dewdw'},
          {"name": "VW", "job_number": 2012, "department": "Orange", "age": "dsad231ff",birth: 'wqwq',gender: 'wqwq', identity_number: 'cwqe', marriage: 'cewe', political: 'dwede', phone:'dwqe', inservice_time: 'dwq',address: 'dewdw'},
          {"name": "VW", "job_number": 2012, "department": "Orange", "age": "dsad231ff",birth: 'wqwq',gender: 'wqwq', identity_number: 'cwqe', marriage: 'cewe', political: 'dwede', phone:'dwqe', inservice_time: 'dwq',address: 'dewdw'},
          {"name": "VW", "job_number": 2012, "department": "Orange", "age": "dsad231ff",birth: 'wqwq',gender: 'wqwq', identity_number: 'cwqe', marriage: 'cewe', political: 'dwede', phone:'dwqe', inservice_time: 'dwq',address: 'dewdw'},
          {"name": "VW", "job_number": 2012, "department": "Orange", "age": "dsad231ff",birth: 'wqwq',gender: 'wqwq', identity_number: 'cwqe', marriage: 'cewe', political: 'dwede', phone:'dwqe', inservice_time: 'dwq',address: 'dewdw'},
          {"name": "VW", "job_number": 2012, "department": "Orange", "age": "dsad231ff",birth: 'wqwq',gender: 'wqwq', identity_number: 'cwqe', marriage: 'cewe', political: 'dwede', phone:'dwqe', inservice_time: 'dwq',address: 'dewdw'},
          {"name": "VW", "job_number": 2012, "department": "Orange", "age": "dsad231ff",birth: 'wqwq',gender: 'wqwq', identity_number: 'cwqe', marriage: 'cewe', political: 'dwede', phone:'dwqe', inservice_time: 'dwq',address: 'dewdw'},
          {"name": "VW", "job_number": 2012, "department": "Orange", "age": "dsad231ff",birth: 'wqwq',gender: 'wqwq', identity_number: 'cwqe', marriage: 'cewe', political: 'dwede', phone:'dwqe', inservice_time: 'dwq',address: 'dewdw'},
          {"name": "VW", "job_number": 2012, "department": "Orange", "age": "dsad231ff",birth: 'wqwq',gender: 'wqwq', identity_number: 'cwqe', marriage: 'cewe', political: 'dwede', phone:'dwqe', inservice_time: 'dwq',address: 'dewdw'},
          {"name": "VW", "job_number": 2012, "department": "Orange", "age": "dsad231ff",birth: 'wqwq',gender: 'wqwq', identity_number: 'cwqe', marriage: 'cewe', political: 'dwede', phone:'dwqe', inservice_time: 'dwq',address: 'dewdw'},
          {"name": "VW", "job_number": 2012, "department": "Orange", "age": "dsad231ff",birth: 'wqwq',gender: 'wqwq', identity_number: 'cwqe', marriage: 'cewe', political: 'dwede', phone:'dwqe', inservice_time: 'dwq',address: 'dewdw'}
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
        car: {vin:'', year: '', brand: '', color: ''},
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
           
            <Button label="删除" icon="pi pi-times"    onClick={this.delete}/>
            <Button label="保存" icon="pi pi-check"  onClick={this.save}/>
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

                    <Column field="name" header="姓名" sortable={true} style={{width: '6em',fontWeight: 'none'}} />
                    <Column field="job_number" header="工号" sortable={true} style={{width: '7em'}} />
                    <Column field="department" header="部门" sortable={true}  style={{width: '6em'}}/>
                    <Column field="age" header="年龄" sortable={true}  style={{width: '5em'}}/>
                    <Column field="birth" header="出生年月" sortable={true} style={{width: '8em'}} />
                    <Column field="gender" header="性别" sortable={true} style={{width: '5em'}}/>
                    <Column field="identity_number" header="身份证号" sortable={true} style={{width: '12em'}} />
                    <Column field="marriage" header="婚姻情况" sortable={true} style={{width: '6em'}}/>
                    <Column field="political" header="政治面貌" sortable={true} style={{width: '6em'}}/>
                    <Column field="phone" header="电话" sortable={true} style={{width: '10em'}} />
                    <Column field="inservice_time" header="入职时间" sortable={true}  style={{width: '8em'}}/>
                    <Column field="address" header="住址" sortable={true} />
                </DataTable>





{/* 添加信息 */}
                <Dialog visible={this.state.displayDialog} width="300px" 
                header="员工信息" 
                modal={true} 
                footer={dialogFooter} 
                onHide={() => this.setState({displayDialog: false})}
                style = {{width: "530px"}}
                >
                
                   
                    {
                        this.state.car && 
                        
                        <div className="p-grid p-fluid">
                            <div className='clear'></div>
                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="name">姓名</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="name" onChange={(e) => {this.updateProperty('name', e.target.value)}} value={this.state.car.name}/>
                            </div>
                            

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="job_number">工号</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="job_number" onChange={(e) => {this.updateProperty('job_number', e.target.value)}} value={this.state.car.job_number}/>
                            </div>
                            <div className='clear'></div>
                            
                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="department">部门</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="department" onChange={(e) => {this.updateProperty('department', e.target.value)}} value={this.state.car.department}/>
                            </div>
                            

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="age">年龄</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="age" onChange={(e) => {this.updateProperty('age', e.target.value)}} value={this.state.car.age}/>
                            </div> 
                            <div className='clear'></div>


                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="gender">性别</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="vin" onChange={(e) => {this.updateProperty('gender', e.target.value)}} value={this.state.car.gender}/>
                            </div>
                            

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="phone">电话</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="phone" onChange={(e) => {this.updateProperty('phone', e.target.value)}} value={this.state.car.phone}/>
                            </div> <div className='clear'></div>


                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="identity_number">身份证</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="identity_number" onChange={(e) => {this.updateProperty('identity_number', e.target.value)}} value={this.state.car.identity_number}/>
                            </div>
                            

                            <div className="p-col-4 floatf" style={{padding:'.75em'}}><label htmlFor="marriage">婚姻</label></div>
                            <div className="p-col-8 floatf" style={{padding:'.5em'}}>
                                <InputText id="marriage" onChange={(e) => {this.updateProperty('marriage', e.target.value)}} value={this.state.car.marriage}/>
                            </div> 
                            <div className='clear'></div>


                            <div className="p-col-4 " style={{padding:'.75em'}}><label htmlFor="birth">出生年月</label></div>
                            <div className="p-col-8 " style={{padding:'.5em'}}>
                                <InputText id="birth" onChange={(e) => {this.updateProperty('birth', e.target.value)}} value={this.state.car.birth}/>
                            </div>
                            

                            <div className="p-col-4 " style={{padding:'.75em'}}><label htmlFor="political">政治面貌</label></div>
                            <div className="p-col-8 " style={{padding:'.5em'}}>
                                <InputText id="political" onChange={(e) => {this.updateProperty('political', e.target.value)}} value={this.state.car.political}/>
                            </div>
                            <div className='clear'></div>





                            <div className="p-col-4" style={{padding:'.75em'}}><label htmlFor="inservice_time">入职时间</label></div>
                            <div className="p-col-8" style={{padding:'.5em'}}>
                                <InputText id="inservice_time" onChange={(e) => {this.updateProperty('inservice_time', e.target.value)}} value={this.state.car.inservice_time}/>
                            </div>
                            
                            <div className="p-col-4" style={{padding:'.75em'}}><label htmlFor="address">家庭住址</label></div>
                            <div className="p-col-8" style={{padding:'.5em'}}>
                                <InputText id="address" onChange={(e) => {this.updateProperty('address', e.target.value)}} value={this.state.car.address}/>
                            </div>

                            <div className="p-col-4" style={{padding:'.75em'}}><label > 退出编辑状态请保存退出 ！</label></div>
                        </div>
                    }
                </Dialog>
            </div>
        </div>
    )}
   }






   export default connect()(UserTable)