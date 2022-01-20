// Task1
// let user = {
// 	name:"Tim",
// 	birthday:"2003.04.21",
// }
// function firstbirth(value) {
// 	console.log(this.birthday +value,"this.birthday")
// }
// function bind(doo,read){
// 	if(typeof doo=="function"){
// 		return doo.bind(read);
// 	}
// 	return"not"
// }
// console.log(user);


// Task2
// function Key(){
// 	return Object.keys(this).lenght;
// }
// console.log(Key.call(name));

// Task3
// let valObject0={
// 	value:[1,'2',4,8,'8',3,10,null,false]
// }
// function getNewArray(){
// 	let get=[];
// 	for(let i=0; i<this.value.lenght;i++){
// 		let a=this.value[i];
// 		if((typeof a=='number') && (a<10) && (a % 2 ==0 )){
// 			get.push(a);
// 		}
// 	}
// 	return get;
// }
// console.log(getNewArray.call(valObject0));

// Task5
// let persen =new Date(2003,04,21)
// let now=new Date()
// let year=now.getFullYear()-persen.getFullYear();
// let month=(now-persen)/(1000*60*60*24*30);
// let day=(now-persen)/(1000*60*60*24);
// let hours=(now-persen)/(1000*60*60);
// if(month<0 ||(month==0 && now.getDate()<persen.getDate())){
// 	year--;
// }
// console.log(year);



















