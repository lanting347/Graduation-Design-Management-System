
 
 var xmlHttpRequest;
 var clickNum  = 0;
 function addMajor(){
 	clickNum++;
 	if (window.XMLHttpRequest) {
		xmlHttpRequest = new XMLHttpRequest();
	} else {
		xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlHttpRequest.onreadystatechange = callBack;
	url="/BSManager/getAllMajor";
	xmlHttpRequest.open("POST", url, true);
	xmlHttpRequest.send();
 }
 
 function callBack(){
 	if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
 		var majors = xmlHttpRequest.responseText;
 		var maj = eval("("+majors+")");
 		var mm = document.getElementById("major");
 		
 		
 		if(clickNum%2==0){
 			for(var i=0;i<maj.length;i++){
 				var id = maj[i].id;
 				var name = maj[i].majorName;
	 		 	mm.options.add(new Option(name,id));
	 		}
 		}else if(clickNum%2==1){
 			mm.options.length = 0;
 			for(var i=0;i<maj.length;i++){
 				var id = maj[i].id;
 				var name = maj[i].majorName;
	 		 	mm.options.add(new Option(name,id));
	 		}
 		}
 		
 	}
 }