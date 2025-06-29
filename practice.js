const car =[{
    name:"BMW",
    model:2018,
    color:"red",
},{
    name:"audi",
    model:2019,
    color:'black'
}
]
car.push({name:"benz", model:2000, color:'blue'});
const newObject =[...car,  {name:'benz', model:3203, color:'green'}]
console.log(newObject)

