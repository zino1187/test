/*적군을 정의한다!!*/
var Enemy=function(stage,width,height,x,y,src){
	this.stage=stage;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.img;
	this.src=src;
	this.st;
	this.flag=true; //setTimeout 을 실행할지 여부를 결정하는 스위치!!

	this.init=function(){
		this.img=document.createElement("img");
		this.img.src=this.src;
		
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";

		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		this.stage.appendChild(this.img);
	}

	this.move=function(){
		var me=this;
		this.st=setTimeout(function(){
			me.move();
		},100);

		if(!this.flag){
			clearTimeout(this.st);
			return;
		}
	}

	//움직임 멈출수 있도록 제공되는 함수!!
	this.stop=function(){
		clearTimeout(this.st);
	}
}