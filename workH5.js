//JavaScript Document
function id(element) {
	return document.getElementById(element);
}
function bind(obj,ev,fn) {
	if(obj.addEventListener){ //判断是否有这个方法
		obj.addEventListener(ev,fn,false);
	} else{
		obj.attachEvent('on' + ev,function(){
			fn.call(obj);
		});
	}
}
function view(){
	return {
		w: document.documentElement.clienWidth,
		h: document.documentElement.clienHeight
	};
}
function addClass(obj,sClass) {
	var aClass = obj.className.split(' ');
	if(!obj.className) {
		obj.className = sClass;
		return;
	}
	for (var i = 0; i < aClass.length; i++){
		if(aClass[i] === sClass) return;
	}
	obj.className += ' ' + sClass;
}

function removeClass(obj,sClass){
	var aClass = obj.className.split(' ');
	if(!obj.className) return;
	for (var i = 0;i < aClass.length; i++){
		if(aClass[i] === sClass){
			aClass.splice(i,1);
			obj.className = aClass.join(' ');
				break;
		}
	}
}

/***首页*****/

var firstPage = id("firstPage");
var workPage = id("workPage");
var linkPage = id("linkPage");
function first(){
	var openBtn = id("openBtn");
	bind(openBtn,"touchstart",turn1);
	function turn1(){
		// workPage.style.backgroundSize = "120%";
		removeClass(firstPage,"pageShow");
		addClass(workPage,"pageShow");

	}
}
function second () {
	var linkBtn = id("linkBtn");
	bind(linkBtn,"touchstart",turn2);
	function turn2(){
		removeClass(workPage,"pageShow");
		addClass(linkPage,"pageShow");
	}
}
function three () {
	 var backFirstBtn = id("backFirstBtn");
	 bind(backFirstBtn,"touchstart",turn3);
	 function turn3(){
	 	removeClass(linkPage,"pageShow");
	 	addClass(firstPage,"pageShow")
	 }
}
