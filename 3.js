// a
let Tasks = [];

// b
let addTasks = (task)=>
{
    Tasks.push(task);
    console.log(task + " Has been added to my Tasks array")
    return Tasks.length;
}

addTasks("Work")

// c
let listAllTasks = ()=>
{
    Tasks.forEach((element)=>{
        console.log(element);
    })
}

listAllTasks()

let deleteTask = (task)=>{
    let index = Tasks.indexOf(task);
    if(index > -1)
    {
        Tasks.splice(index,1);
        console.log(task + " has been deleted");
    }
    else
    {
        console.log(task+" not found");
    }
    return Tasks.length;

}
addTasks("eat");