{
	function add(num1,num2){
	console.log(num1 + num2)
}
add(32,7);	
}

//for loop 
{
for(let i=1; i<=10; i++){
	if(i%2 !==0){
		console.log("For odd number #"+i)
	}
}	
}

//while loop
{
	let i=5;
	while(i>=1){
		if(i%2 !==0){
			console.log("While odd number #"+i);
		}else{
			console.log("While even number #"+i);
		}
		i--
	}
}

//Do-while loop
{
	let i=2;
	do{
		if(i%2 ==0){
			console.log("Do-While even number #"+i);
		}
		i++
	}while(i<=10);
}

//for-in loop(object method)
{
	const person={
		name: 'jamal',
		age:22,
		gender:'male'
	}
	for(let key in person){
		console.log(key+person[key]);
	}
}

//for-in loop(array method) type-1
{
	let colors=['red','blue','green'];
	for(let key in colors){
		console.log(key);
	}
}

//for-in loop(array method) type-2
{
	let colors=['red','blue','green'];
	for(let key in colors){
		console.log(colors[1]);
	}
}

//for-of loop 
{
	let colors=['red','blue','green'];
	for(let color of colors){
		console.log("color:"+colors[2]);
	}
}

// if task
var age=27;
var gender="female";

if(gender=="female"){
console.log("she will be work only in urban areas");
}
if(gender=="male"){
if (age>=41 && age<=60){
console.log("he will work in urban areas only");
}else if( age>=20 && age<=40){
console.log("he will work in anywhere");
}
}else if(gender!=="female" && gender!=="male"){
console.log("ERROR");
}


const person={
    name:"shajith",
    age:22,
    gender:"Male"
}
for(let key in person){
	console.log(key+person[key])
}

for(i=1; i<=10; i++){
	console.log(i);
}