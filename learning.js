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

// if task (review)
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

// for-in loop (review)
const person={
    name:"shajith",
    age:22,
    gender:"Male"
}
for(let key in person){
	console.log(key+person[key])
}

// for loop (review)
for(i=1; i<=10; i++){
	console.log(i);
}

// js Object
{
let person={
	name:"Rocky",
	age:"30",
	address:"india"
}
console.log(person)
console.log(person.name)
}

// js array
{
let favcolors=["red","blue","green"]
console.log(favcolors)
console.log(favcolors[1])
}



// functions
{
	let no1=50;
	let no2=20;
	const addno=function addno(){
		let result= no1+no2;
	};addno();
}
let x;
	let add=function add(no1,no2){
		 return "answer" + "x =",+no1+no2;
	}
	add(50,50);	
	
	{
		let x = add(5 ,5 );
		function add(a,b){
			return a+b;
		}console.log(x + 5)
	}
	{
		let a=check(2) ;
		function check(a){
			if(a<0){
				console.log("given num is negative")
			}else{
				console.log("given num is positive")
			}
		}
	}
	{
		function add (a,b){
			return a+b;
		}
		let sh=add(10,20)
		console.log(sh);
	}
	
	{
		function add(a,b){
			return a+b;
		}
		let x=add(2,3)
		console.log(x)
	}
	
	
	// Print numbers in words in reverse order
	
	{
		let name="shajith";
		console.log(name.charAt(6)+name.charAt(5)+name.charAt(4)+name.charAt(3)+name.charAt(2)+name.charAt(1)+name.charAt(0))
	}
	
	{
		/*let 1="one";
		let 2="two";
		let 3="three";
		let 4="four";
		let 5="five";
		while*/
	}
	
	// #Given two strings, write a program that finds which string has more vowels
	
	
	 {
		var a = "mohamed";
	  
	    var b = "aeiou";
		
      function isVowel(ch) {
        ch = ch.toUpperCase();
        return ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U";
      }
	  
	  
      function countVowels(a)
      {
        var count = 0;
        for (var i = 0; i < a.length; i++)
          if (isVowel(a[i]))
           
            count++;
        return count;
      }
      /*console.log(countVowels(a));*/
	  
	  
      function isVowel(ch) {
        ch = ch.toUpperCase();
        return ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U";
      }
	  
      function countVowels(b)
      {
        var count = 0;
        for (var i = 0; i < b.length; i++)
          if (isVowel(b[i]))
           
            count++;
        return count;
      }
 
      
      /*console.log(countVowels(b));*/
	  
	  if (countVowels(b)>countVowels(a)){
		  console.log(b)
	  }else{
		  console.log(a)
	  }
	  
	} 
	
	
	
	// task-5
	
	// pirates program 
	
	{
		let gold=80;
		let pirates=30;
		if(gold>=pirates){
			if(gold+pirates>100){
				console.log("flase");
			}else{
				console.log("true")
			}
		}
	}
	
	// print sum of given N numbers
	{	
		let sum=0;
		let n=5;
		function findsum(){
				for(let i=1;i<=n;i++)
			sum=sum+i;
		return sum;
		}
		console.log(findsum(n));
	}
	
	// 
	 
	 {
		 let x="shajith";
		 let a="mohamed";
		 console.log(x.length)
		 console.log(x.concat(a))
		 console.log(x.includes("a"))
		 console.log(x.lastIndexOf(a))
		 console.log(x.match("s"))
	 }
	 
	 
	 /*
	 let d = new Date();
	d.getDate();
	console.log(d);
	
	*/
	let time = new Date();
	time.getTime();
	console.log(time);
	
	let year = new Date();
	year.getFullYear();
	console.log(year);
	
	let de = new Date();
	const s = de.setDate(21);
	console.log(de);
	
	let t = new Date(); 
	console.log(t.toLocaleTimeString());
	
	let p="shajith";
	console.log(p)