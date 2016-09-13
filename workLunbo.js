var timer;
var main=document.getElementById("main");
var a=document.getElementById("a");
var b=document.getElementById("b");
var c=document.getElementById("c");
var d=document.getElementById("d");
var e=document.getElementById("e");
function play(){
	timer=setInterval(next,6000);
}
function stop(){
	clearInterval(timer);
}
function fun1(){stop();
	function fun(){if(a.style.top!="0%"){funs();
	
	}func();
if(parseInt(a.style.top)<=0){
	
	a.style.top="0%";
	
	
}
if(parseInt(a.style.top)>0){
	
			setTimeout(fun,25);
}else{
	e.style.top="100%";
b.style.top="29.8%";
c.style.top="53.2%";
	d.style.top="76.6%";
	a.style.top="0%";
	
}


}	
	fun();play();
}

function fun2(){stop();
		function fun(){if(b.style.top!="0%"){
	funs();
	}
func();
if(parseInt(b.style.top)<=0){b.style.top="0%";

}
if(parseInt(b.style.top)>0){
	
			setTimeout(fun,25);
}
else{	a.style.top="100%";
	b.style.top="0%";
	c.style.top="29.8%";
	d.style.top="53.2%";
	e.style.top="76.6%";}

}	

	fun();play();

	

}
function fun3(){stop();
	function fun(){if(c.style.top!="0%"){
	funs();
	}
func();
if(parseInt(c.style.top)>0){
	
			setTimeout(fun,25);
}
else{b.style.top="100%";
d.style.top="29.8%";
	e.style.top="53.2%";
	a.style.top="76.6%";
c.style.top="0%";}


}	
	fun();play();
}
function fun4(){stop();
function fun(){if(d.style.top!="0%"){
	funs();
	}func();
if(parseInt(d.style.top)<=0){
	
	d.style.top="0%";
	
}
if(parseInt(d.style.top)>0){
	
			setTimeout(fun,25);
}else{c.style.top="100%";
e.style.top="29.8%";
	a.style.top="53.2%";
	b.style.top="76.6%";d.style.top="0%";
}

}	
	fun();play();
}
function fun5(){stop();function fun(){if(e.style.top!="0%"){
	funs();
	}func();
if(parseInt(e.style.top)<=0){e.style.top="0%";
	
	e.style.top="0%";
	
}
if(parseInt(e.style.top)>0){
	
			setTimeout(fun,25);
}else{d.style.top="100%";
a.style.top="29.8%";
	b.style.top="53.2%";
	c.style.top="76.6%";e.style.top="0%";}

}	
	fun();play();
}
play();
container.ontouchstart=stop;
container.ontouchend=play;
function next(){
	if(parseInt(a.style.top)==0){b.click();}
	if(parseInt(b.style.top)==0){fun3();}
	if(parseInt(c.style.top)==0){fun4();}
	if(parseInt(d.style.top)==0){fun5();}
	if(parseInt(e.style.top)==0){fun1();}
}
function funs(){
	if(parseInt(a.style.top)<25&&parseInt(a.style.top)>=0){	
	a.style.top=parseInt(a.style.top)-4+"%";
	a.style.width="100%";a.style.height="25.5%";a.style.left="0%";

}
else{a.style.top=parseInt(a.style.top)-3+"%";
if(parseInt(a.style.top)<0){

	a.style.width="75%";a.style.height="19%";a.style.left="12.5%";
}
}
if(parseInt(b.style.top)<25&&parseInt(b.style.top)>=0){	
	b.style.top=parseInt(b.style.top)-4+"%";
	b.style.width="100%";b.style.height="25.5%";b.style.left="0%";

}
else{b.style.top=parseInt(b.style.top)-3+"%";
if(parseInt(b.style.top)<0){

	b.style.width="75%";b.style.height="19%";b.style.left="12.5%";
}
}
if(parseInt(c.style.top)<25&&parseInt(c.style.top)>=0){	
	c.style.top=parseInt(c.style.top)-4+"%";
	c.style.width="100%";c.style.height="25.5%";c.style.left="0%";

}
else{c.style.top=parseInt(c.style.top)-3+"%";
if(parseInt(c.style.top)<0){

	c.style.width="75%";c.style.height="19%";c.style.left="12.5%";
}
}
if(parseInt(d.style.top)<25&&parseInt(d.style.top)>=0){	
	d.style.top=parseInt(d.style.top)-4+"%";
	d.style.width="100%";d.style.height="25.5%";d.style.left="0%";

}
else{d.style.top=parseInt(d.style.top)-3+"%";
if(parseInt(d.style.top)<0){

	d.style.width="75%";d.style.height="19%";d.style.left="12.5%";
}
}
if(parseInt(e.style.top)<25&&parseInt(e.style.top)>=0){	
	e.style.top=parseInt(e.style.top)-4+"%";
	e.style.width="100%";e.style.height="25.5%";e.style.left="0%";

}
else{e.style.top=parseInt(e.style.top)-3+"%";
if(parseInt(e.style.top)<0){

	e.style.width="75%";e.style.height="19%";e.style.left="12.5%";
}
}
}
function func(){
	if(parseInt(a.style.top)<-23.4){
	a.style.top="100%";
}
if(parseInt(c.style.top)<-23.4){
	c.style.top="100%";
}
if(parseInt(d.style.top)<-23.4){
	d.style.top="100%";
}
if(parseInt(b.style.top)<-23.4){
	b.style.top="100%";
}
if(parseInt(e.style.top)<-23.4){
	e.style.top="100%";
}
}
