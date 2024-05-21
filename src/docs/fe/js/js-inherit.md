## 构造函数原型链继承

```javascript
//父类构造函数


function Person (name,sex) {
this.name = name;
this.sex = sex;
this.friends = ['小李','小红'];
this.getName = function () {
return this.name;
}
};
   Person.prototype.geSex = function () {    //父类原型链方法
   console.log(this.sex);
   };
//子类构造函数
function Student (name,sex,teacher) {
// 子类继承父类Person自身属性和方法
Person.call(this,name,sex);
//子类属性和方法``      -=
this.teacher = teacher;
this.getTeacher = function () {
return this.teacher;
}
};
//子类继承父类Person原型上的属性和方法
for(var attr in Person.prototype){
// 过滤自身方法和属性 保证是原型上的属性和方法
if(!Person.hasOwnProperty(attr)){
Student.prototype[attr] = Person.prototype[attr]
}
}
var s1 = new Student('小明','女','王老师')
s1.geSex() // 女
console.log(s1.getTeacher()) //王老师
```

## 构造函数子类原型链继承 new 父类

```js
//父类构造函数
function Person (name,sex) {
 this.name = name;
 this.sex = sex;
 this.friends = ['小李','小红'];
 this.getName = function () {
  return this.name;
 }
};
Person.prototype.geSex = function () {    //父类原型链方法
 console.log(this.sex);
};
//子类构造函数
function Student (name,sex,teacher) {
// 子类继承父类Person自身属性和方法
 Person.call(this,name,sex);
//子类属性和方法``      -=
 this.teacher = teacher;
 this.getTeacher = function () {
  return this.teacher;
 }
};
Student.prototype = new Person()  //  实例Student原有的对象构造信息丢失
Student.prototype.constructor = Student; //  弥补实例Student原有的对象构造信息丢失
var s1 = new Student('小明','女','王老师')
s1.geSex() // 女
console.log(s1.getTeacher()) //王老师
console.log(s1.getName()) //王老师
```

## 使用es6的面向对象实现继承

```javascript
//声明一个类
class People{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    say(){
        console.log(`大家好我是${this.name},今年${this.age}岁！`)//es6语法的模板字符串
    }
}
 var person = new People('邱权武',18)//新建People对象
 person.say()//调用方法
 //类的继承
class Student extends People{
    constructor(name,age,score){
        super(name,age)
        this.score=score
    }
    say(){
        console.log(`大家好我是${this.name},今年${this.age}岁,我这次的成绩是${this.score}！`)
    }
}
var student =new Student('小王',23,98)
student.say()
```
