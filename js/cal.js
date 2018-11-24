/*document.getElementsByType('button').addEventListener("click", myFunction);*/
var numar = [""];
var sum =0;
function myFunction(num) {
	if(numar[0].length<9){
		numar[0]=numar[0]+num.toString();
	   document.getElementById("demo").innerHTML =numar[0];
	}
   
	/*alert(num);
	numar.push(num)*/
}

/* ope 待縮減 控制運算*/
var ifop = 0;
function oper(op){
	opersum(ifop);
	document.getElementById("add").style.visibility =" hidden";
	document.getElementById("sub").style.visibility =" hidden";
	document.getElementById("mult").style.visibility =" hidden";
	document.getElementById("mod").style.visibility =" hidden";	
	switch(op){			
		case 1:
			ifop=1;			
			document.getElementById("add").style.visibility =" visible";
			break;
		case 2:
			ifop=2;
			document.getElementById("sub").style.visibility =" visible";
			break;
		case 3 :
			ifop=3;
			document.getElementById("mult").style.visibility =" visible";
			break;
		case 4 :
			ifop=4;
			document.getElementById("mod").style.visibility =" visible";
			break;
		default:
		numar[0]="";
		sum=0;
			document.getElementById("de").innerHTML =numar[0];
			}
	document.getElementById("de").innerHTML =sum;
	numar[0]="";
	document.getElementById("demo").innerHTML =numar[0];	
}

function opersum(ope){
	switch(ope){		
		case 1:
			sum+=Number(numar[0]);			
			break;
		case 2:
			sum-=Number(numar[0]);
			break;
		case 3 :
			sum*=Number(numar[0]);
			break;
		case 4 :
			sum/=Number(numar[0]);				
			break;
		default:
			ifop=0;
	}
	ifop=0;
}

