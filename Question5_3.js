let employees = new Array({name : "Vikram Vikrant",age : 22,salary : 999 ,DOB : 12},
{name : "Vikrant Thakur",age : 21,salary : 2500, DOB : 13},
{ name : "Ramesh Sharma", age : 19, salary : 5001, DOB : 14},
{name : "Srikant Yadav",age : 25,salary : 5500, DOB : 15});

const emp = employees.reduce((acc,obj) => {
    if(acc[0].age==obj.age){
    
        acc.unshift(obj);
    
    }
    return acc;
    },new Array({name : "",age : 19,salary : 0,DOB : 0}));
    emp.pop();
    console.log(emp);
    
