// JavaScript Document
var Dianji=0;
window.onload=function(){
	var buhao = document.getElementById("buhao");
	var hao = document.getElementById("hao");
	buhao.onclick=function(){
		Dianji++;
		if(Dianji==1){
	   			alert("为什么喜欢你啊？");
	   }else if(Dianji==2){
		   		alert("别想了，你一定会是我的！");
		   		
	   }else if(Dianji==3){
		   		alert("非要听啊");
		   		
	   }else if(Dianji==4){
		   		alert("在我眼里，世间万物，漫天星辰是你，湖边暖风是你，柳絮飘然是你");
		   		
	  }else if(Dianji==5){
		   		alert("道不尽的依旧是你");
	  }else if(Dianji==6){
		   		alert("嘻嘻，真当我是为说那些啊？还不是为了趁你不注意亲你一口吗？");
	  }else if(Dianji==7){
		   		alert("怎么就开始脸红了？不生气了？");
		  		Dianji=1;
	  }

	}
	hao.onclick=function(){
		alert("好了，那就乖乖到我怀里来吧");
	}
	

}