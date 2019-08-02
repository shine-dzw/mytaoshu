let lis=$(".login_menu")[0].children;
		for(let i=0;i<lis.length-1;i++){
			lis[i].onmouseover=function(){
				this.firstElementChild.style.color="red";
				this.firstElementChild.style.textDecoration="underline";
			} 
			lis[i].onmouseout=function(){
				this.firstElementChild.style.color="#666";
				this.firstElementChild.style.textDecoration="none";
			}
		} 
		$(".login_menu02")[0].onmouseover = function(){
			$(".login_menu02")[0].lastElementChild.style.display="block";
			$(".login_menu02")[0].lastElementChild.style.backgroundColor="white";
		}
		$(".login_menu02")[0].onmouseout = function(){
			$(".login_menu02")[0].lastElementChild.style.display="none";
		} 
		$(".bigbox")[0].onmouseover=function(){
			$(".smallbox")[0].style.display="none";
		 $(".hidden_box")[0].style.display="block";	
		 $(".hidden_box")[0].style.background="#FFFFFF";	
		 $(".hidden_box")[0].style.zIndex="12";	
		} 
		$(".bigbox")[0].onmouseout=function(){
		$(".smallbox")[0].style.display="block";
		 $(".hidden_box")[0].style.display="none";	
		}  