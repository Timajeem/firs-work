// Task1
let UserName=['Вася','Петя','Вова','Олег'];
for(let i=0; i<UserName.length; i+=1){
	console.log(UserName[i])
}

// Task2
function hello() {
    var name= "Василий";
    var name;
    alert("Привет, " + name);
    if (name === underfined)
    {
        alert=("Привет, гость");
    }
}
hello();


// Task3
let numbers = [1, 2, 3, 4];
let doubles = numbers.map(function(num) {
  return num + 1;
});
console.log(doubles);

// Task4
for(let i = 0; true; i++) if(Math.random() > 0.9) {
    alert(++i);
    break;

}

// Task7
let a = [1, 'hello',2,3,4,'5','6',7,null];

console.log(a[0]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[7]);


// Task8 (с видосика все делал)) 
for(i=1; i<=9 ; i=i+1){
	for(j=0; j<=9; j=j+1){
		number=i *j
		document.write(' ' + number + ' ')
	}
	document.write('<br>')
}

























