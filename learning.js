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
	
	// js string
	
	{
		let firstname="anbu";
		let lastname="selvan";
		let para="this is my paragraph my";
		let message="this is my message ";
		console.log(firstname +' '+ lastname)
		console.log(lastname.length)
		console.log(firstname.charAt(1))
		console.log(firstname.concat(" ",lastname))
		console.log(firstname.includes("an"))
		console.log(firstname.includes("na"))
		console.log(firstname.startsWith("an"))
		console.log(firstname.endsWith("an"))
		console.log(firstname.repeat(10))
		console.log(firstname.replace("anbu","shajith"))
		console.log(para.split(3))
		console.log(para.substr(5))
		console.log(message.trim())
		console.log(firstname.bold())
		console.log(firstname.search('b'))
		const stringObj = new String('shajith');
        console.log(stringObj.valueOf());
		let x="password";
		console.log(x.padEnd(10,"*"))
	}
	
	
	//Given a number from 1 to 4 (inclusive),
//	return a word representation of the number. 
//For example, given 2, return two. 
//If the number is greater than 4,
// return the phrase too large. 
//If the number is less than 1, 
//return the phrase too small.
	
	{
		let x=0;
		
		if(x>=1 && x<=4){			
			switch (x){
			case (1): console.log ('one');
			break;
			case (2): console.log ('two');
			break;
			case (3): console.log('three');
			break;
			case (4): console.log('four');
			break;
		}
		}else if(x>4){
			console.log("the phrase too large");
		}else{
			console.log("the pharse too small");
		}
	}
	
	
	// find Nth number of given number
	
	{
		let n=5;
		function findsum (n){
			let sum=0;
			for (let i=1;i<=n;i++)
				sum=sum+i;
			return sum;
		}
		console.log(findsum(n));
	}
	
	//reverse the given number in words
	
	{
	const given=[1,2,3,0,9,5];
		const reverse=given.reverse();
		console.log(reverse)
	
	for(let i=0;i<reverse.length;i++){
		switch(reverse[i]){
				case 1:
				console.log("one");
				break;
				case 2:
				console.log("two");
				break;
				case 3:
				console.log("three");
				break;
				case 4:
				console.log("four");
				break;
				case 5:
				console.log("five");
				break;
				case 6:
				console.log("six");
				break;
				case 7:
				console.log("seven");
				break;
				case 8:
				console.log("eight");
				break;
				case 9:
				console.log("nine");
				break;
				case 0:
				console.log("zero");
				break;
			}
		}
	}
	
	// function ex
	
	{
	function modulo(a,b){
		return a+b;
	}console.log(modulo(10,5))
	}	
	
	// Write a program to Check whether a date is a weekend date or not
	
	{
		let sat= 'Sat';
		let sun='Sun';
		let date = new Date();
		console.log(date);
		if(date.includes(sat) || date.includes(sun)){
			console.log('it is a weekend date')
		}else{
			console.log('it is not a weekend date')
		}
	}
	
	/////// final draft
	
	{
		
		let day = new Date();
	let x=day.getDay();
	console.log(x);
	
	if((x==0) || (x==6)){
		console.log('it is a weekend date')
	}else{
		console.log('it is not a weekend date')
	}
	
	}
	
	
	//////// sample
	
	{
		
		let de = new Date();
	const s = de.setDate(21);
	console.log(de);
	
	if(de.includes("Wed")==true){
		console.log('it is not a weekend date')
	}
		
		
	}
	
	
	let date = new Date();
	const ss = date.getDate();
	console.log(date);
	
	//date=Thu Sep 22 2022 15:45:02 GMT+0530 (India Standard Time)
	
console.log(date.includes("Thu"))


//// Write a program to Check whether a date is a weekend date or not


{
	
	let a=new Date();
	 a.setDate(24);
	  a.getDate();
	  let b=a.getDay();
	  
	  
	console.log(b)
		
		
		
	if((b==0)||(b==6)){
		console.log("this is weekend")
	}else{
		console.log("not a weekend")
	}
	
	
	
}

{
	let a=new Date();
	 a.setMonth(4);
	  a.getMonth();
	  a.setDate(26);
	  a.getDate();
	  let b=a.getDay();
	  
	  
	console.log(b)
		
		
		
	if((b==0)||(b==6)){
		console.log("this is weekend")
	}else{
		console.log("not a weekend")
	}
	
}