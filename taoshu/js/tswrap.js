$(".text_sea").click=function(){
			this.previousElementSibling.style.display="none";
		} 
		$(".text_sea").blur=function(){
			this.previousElementSibling.style.display="block";
		}

	let lidoms=$(".index_li");
		let hiddenbox=$(".hiddenbox");
		let  index_inf=$(".index_inf");
		for(let i=0;i<index_inf.length;i++){ 
			index_inf[i].style.backgroundPosition=`${-25*i}px -115px`;
		 	}
		for(let i=0;i<lidoms.length;i++){
			lidoms[i].onmouseover=function(){
				hiddenbox[i].style.display="block";
				lidoms[i].style.backgroundColor="green";
				index_inf[i].style.backgroundPosition=`${-25*i}px -140px`;
			} 
			lidoms[i].onmouseout=function(){
				hiddenbox[i].style.display="none";
				index_inf[i].style.backgroundPosition=`${-25*i}px -115px`;
				lidoms[i].style.backgroundColor="#FFFFFF";
	
			}
		}
	let lisdom=$(".lis");
	let hiddom=$(".hiddiv");
	for(let i=0;i<lisdom.length;i++){
	lisdom[i].onmouseover=function(){ 
		for(let j=0;j<hiddom.length;j++){
			if(j==i){
				hiddom[j].style.display="block";
			}else{
				hiddom[j].style.display="none";
			}
		}
		
		
		} 
	} 
