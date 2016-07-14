var DateBox= function(stage,width,height,text){
	this.stage=stage;
	this.div;
	this.width=width;
	this.height=height;
	this.text=text;
	var me=this;
	this.area;

	this.init=function(){
		this.div=document.createElement("div");
		this.div.style.overflow="hidden";
		this.div.style.float="left";
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.border="1px solid blue";
		if(this.text==0){
			this.text="";
		}
		var a=document.createElement("a");
		a.innerText=this.text;
		a.addEventListener("click", function(){
			me.showInput();	
		});
		this.div.appendChild(a);

		this.stage.appendChild(this.div);
	}

	this.showInput=function(){
		this.area=document.createElement("textarea");
		this.area.style.width=95+"%";
		this.area.style.height=45+"px";
		this.area.style.background="yellow";

		var input=document.createElement("input");
		input.type="button";
		input.value="등록";
		input.addEventListener("click", function(){
			me.regist();
		});
		this.div.appendChild(this.area);
		this.div.appendChild(input);
	}

	this.regist=function(){
		this.div.innerText+=this.area.value+"\n";	
	}
}