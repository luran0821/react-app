const mongoose = require('mongoose')

const DB_URL = 'mongodb://localhost:27017/model'

mongoose.connect(DB_URL)
const Schema = mongoose.Schema

mongoose.connection.on('connected', function(){
    console.log('mongo connect success')
})


// /**Account  账户*/
// const Account = mongoose.model('account', Schema({
//     name: {type: String, require: true},
//     password: {type: Number, require: true},
//     isAuth: {type: Boolean, require: true},
// }))

// /**User  员工*/
// const User = mongoose.model('user', Schema({
//     name: {type: String, require: true},                //姓名
//     job_number: {type: Number, require: true},          //工号
//     position: {type: String, require: true},            //职位
//     age: {type: Number, require: true},                 //年龄
//     birth:{type: Date, require: true},                  //出生年月
//     identity_number: {type: Number, require: true},     //身份证号
//     inservice: {type: Boolean, require: true},          //在职情况
//     marriage: {type: Boolean, require: true},           //婚姻情况
//     political: {type: String, require: true},           //政治面貌
//     phone: {type: String, require: true},               //电话
//     gender:{type: String, require: true},               //性别
//     address:{type: String, require: true},              //家庭住址
//     inservice_time:{type: Date, require: true},          //入职时间
//     department: { 
//         type: Schema.Types.ObjectId, 
//         ref: 'department' 
//     }         //部门
// }))

// /**Department 部门*/
// const Department = mongoose.model('department',Schema({
//     name: {type: String, require: true}, //部门名称
//     department_id: {type: Number, require: true},  //部门编号
   
// }))


// /**Education 学历*/
// const Education = mongoose.model('education',Schema({
//     education_id: {type: String, require: true},        //毕业证号
//     university: {type: String},          //大学
//     primary_school: {type: String, require: true},      //小学
//     middle_school: {type: String, require: true},       //中学
//     high_school: {type: String, require: true},         //高中
//     identity_number:{
//         type: Schema.Types.ObjectId, 
//         ref: 'user' 
//     }
// }))

// /**Salary 薪资*/
// const Salary = mongoose.model('salary',Schema({
//     user_id:{
//         type: Schema.Types.ObjectId, 
//         ref: 'user'
//     },//工号
//     user_name:{
//         type: Schema.Types.ObjectId, 
//         ref: 'user'
//     },//姓名
//     bonus: {type: Number, require: true},         //奖金
//     basic_salary: {type: Number, require: true},         //基本工资
//     position_salary: {type: Number, require: true},         //岗位工资
//     subsidy_salary: {type: Number, require: true},  //其他补贴 
// }))
// /**Attendance 考勤 */
// const Attendance = mongoose.model('attendance',Schema({
//     user_id:{
//         type: Schema.Types.ObjectId, 
//         ref: 'user'
//     },//工号
//     user_name:{
//         type: Schema.Types.ObjectId, 
//         ref: 'user'
//     },//姓名

// }))






const models = {
    /**Account  账户*/
    account: {
        name: {type: String, require: true},
        password: {type: String, require: true},
        isAuth: {type: Boolean, require: true}
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
        address:{type: String, require: true},              //家庭住址
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
        bonus: {type: Number, require: true},         //奖金
        basic_salary: {type: Number, require: true},         //基本工资
        position_salary: {type: Number, require: true},         //岗位工资
        subsidy_salary: {type: Number, require: true},  //其他补贴 
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
