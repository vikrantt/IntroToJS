let employees = new Array({name : "Vikram Vikrant",age : 22,salary : 999 ,DOB : 12},
{name : "Vikrant Thakur",age : 21,salary : 2500, DOB : 13},
{ name : "Ramesh Sharma", age : 19, salary : 5001, DOB : 14},
{name : "Srikant Yadav",age : 25,salary : 5500, DOB : 15});

const emps= employees.map((obj)=> {
    if(obj.age>20 && obj.salary<1000)
    {
        obj.salary=obj.salary*5;
    }
    return obj;
})
console.log(emps);