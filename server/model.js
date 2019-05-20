const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/model'
const Schema = mongoose.Schema

mongoose.connect(DB_URL)
mongoose.connection.on('connected', function(){
    console.log('mongo connect success')
})

const models = {
    /**Account  账户*/
    account: {
        name: {type: String, require: true},
        password: {type: String, require: true},
        isAuth: {type: Boolean},
        isAdmin:{type: Boolean}
    },
    /**User  员工*/
    user:{
        name: {type: String, require: true},                //姓名
        job_number: {type: Number, require: true},          //工号
        position: {type: String, require: true},            //职位
        age: {type: Number, require: true},                 //年龄
        birth:{type: Date, require: true},                  //出生年月
        identity_number: {type: Number, require: true},     //身份证号
        inservice: {type: Boolean, require: true},          //在职情况
        marriage: {type: Boolean, require: true},           //婚姻情况
        political: {type: String, require: true},           //政治面貌
        phone: {type: String, require: true},               //电话
        gender:{type: String, require: true},               //性别
        inservice_time:{type: Date, require: true},          //入职时间
        department: { 
            type: Schema.Types.ObjectId, 
            ref: 'department' 
        }         //部门
    },
    /**Department 部门*/
    department:{
        name: {type: String, require: true}, //部门名称
        department_id: {type: Number, require: true},  //部门编号
    },

    /**Salary 薪资*/
    salary:{
        user_id:{
            type: Schema.Types.ObjectId, 
            ref: 'user'
        },//工号
        user_name:{
            type: Schema.Types.ObjectId, 
            ref: 'user'
        },//姓名
        user_department: {
            type: Schema.Types.ObjectId, 
            ref: 'user'
        },//部门

        bonus: {type: Number, require: true},         //奖金
        basic_salary: {type: Number, require: true},         //基本工资
        position_salary: {type: Number, require: true}         //岗位工资
         
    },

    /**Subsidy 补贴 */
    subsidy:{
        user_id:{
            type: Schema.Types.ObjectId, 
            ref: 'user'
        },//工号
        user_name:{
            type: Schema.Types.ObjectId, 
            ref: 'user'
        },//姓名
        user_department: {
            type: Schema.Types.ObjectId, 
            ref: 'user'
        },//部门

        
        communication_subsidy:{
            type: Number
        },//通讯补贴 
        temperature_subsidy:{
            type: Number
        },//高温补贴
        drink_subsidy:{
            type: Number
        },//冷饮补贴
        traffic_subsidy:{
            type: Number
        },//交通补贴
        meal_subsidy:{
            type: Number
        },//伙食补贴
        other_subsidy:{
            type: Number
        },//其他补贴

    },
    
    /**Socialsecurity 社保 */
    socialsecurity:{
        user_id:{
            type: Schema.Types.ObjectId, 
            ref: 'user'
        },//工号
        user_name:{
            type: Schema.Types.ObjectId, 
            ref: 'user'
        },//姓名
        user_department: {
            type: Schema.Types.ObjectId, 
            ref: 'user'
        },//部门
        pension:{type: Number, require: true},    //养老保险
        medical_insurance:{type: Number, require: true},    //医疗保险
        unemployment_insurance:{type: Number, require: true},    //失业保险
        injury_insurance:{type: Number, require: true},    //工伤保险
        maternity_insurance:{type: Number, require: true},    //生育保险
        housing_fund:{type: Number, require: true},    //住房公积金
    },
    /**Leave 请假 */
    leave:{
        user_id:{
            type: Schema.Types.ObjectId, 
            ref: 'user'
        },//工号
        user_name:{
            type: Schema.Types.ObjectId, 
            ref: 'user'
        },//姓名
        user_department: {
            type: Schema.Types.ObjectId, 
            ref: 'user'
        },//部门

        leave_types:{type: String, require: true},//请假类型
        start_types:{type: Date, require: true},//开始时间
        end_types:{type: Date, require: true},//结束时间
    },

     /**Attendance 考勤 */
     attendance:{
        user_id:{
            type: Schema.Types.ObjectId, 
            ref: 'user'
        },//工号
        user_name:{
            type: Schema.Types.ObjectId, 
            ref: 'user'
        },//姓名
        user_department: {
            type: Schema.Types.ObjectId, 
            ref: 'user'
        },//部门        
        attendance_tyeps: {type: String, require: true},
        date:{type: Date, require: true},   //日期
     },
     /**Onduty 考勤 */
     onduty:{
        user_id:{
            type: Schema.Types.ObjectId, 
            ref: 'user'
        },//工号
        user_name:{
            type: Schema.Types.ObjectId, 
            ref: 'user'
        },//姓名
        user_department: {
            type: Schema.Types.ObjectId, 
            ref: 'user'
        },//部门   
        date:{type: Date, require: true},   //日期
     },

     /**Education 学历 */
     education:{
        user_id:{
            type: Schema.Types.ObjectId, 
            ref: 'user'
        },//工号
        user_name:{
            type: Schema.Types.ObjectId, 
            ref: 'user'
        },//姓名
        user_department: {
            type: Schema.Types.ObjectId, 
            ref: 'user'
        },//部门 
        diploma_number:  {type: Number, require: true},    //毕业证号
        h_education: {type: String, require: true},        //最高学历
        school_name:{type: String, require: true}          //学校
     }
}


for(let m in models){
	mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
	getModel:function(name){
		return mongoose.model(name)
	}
}
