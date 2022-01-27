function add(){
  ol(document.f1.t1.value,document.f1.t2.value,document.getElementById("t3").innerHTML = document.f1.t1.value*1 + document.f1.t2.value*1,"+");
}
function mul(){
  ol(document.f1.t1.value,document.f1.t2.value,document.getElementById("t3").innerHTML = document.f1.t1.value*1 * document.f1.t2.value*1,"*");
}
function div(){
  ol(document.f1.t1.value,document.f1.t2.value,document.getElementById("t3").innerHTML = document.f1.t1.value*1 / document.f1.t2.value*1,"/");
}
function sub(){
  ol(document.f1.t1.value,document.f1.t2.value,document.getElementById("t3").innerHTML = document.f1.t1.value*1 - document.f1.t2.value*1,"-");
}
function ol(a,b,c,op){
  document.getElementById("ol").innerHTML = "<li><p>" + a + " " + op + " " + b + " = " + c + "</p>" + document.getElementById("ol").innerHTML;
}