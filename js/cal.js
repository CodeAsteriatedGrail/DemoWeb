/*document.getElementsByType('button').addEventListener("click", myFunction);*/
var numar = [""];
var sum =0;
/*數字按鈕:螢幕呈現數字,後端儲存數字*/
	function myFunction(num) {
		if(numar[0].length<9){
			numar[0]=numar[0]+num.toString();
		   document.getElementById("demo").innerHTML =numar[0];
		}
	   
		/*alert(num);
		numar.push(num)*/
	}

/*運算元按鈕: 運算元顯示圖示,後端儲存運算元*/
	var ifop = 0;
	var opi ;
	function oper(op){
		for (opi = 1;opi< 5;opi++){
			document.getElementById("ope-"+opi).style.visibility =" hidden";
		}
		document.getElementById("ope-"+op).style.visibility =" visible";		
		opersum(ifop);
		ifop=op;		
		/*Bug 將重複程式參數，設定為變數*/
		document.getElementById("de").innerHTML =sum;
		numar[0]="";
		document.getElementById("demo").innerHTML =numar[0];
		
	}
/*AC按鈕:萬物歸零*/
	function ac(){
		sum=0;
		numar[0]="";
		ifop=0;
		document.getElementById("de").innerHTML =sum;		
		document.getElementById("demo").innerHTML =numar[0];
		for (opi = 1;opi< 5;opi++){
			document.getElementById("ope-"+opi).style.visibility =" hidden";
		}
	}
/*後端:進行運算,返回運算結果*/
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
			/*Bug-1 造成第一個數字無法儲存*/
			default:
				sum=Number(numar[0]);
		}
		ifop=0;
	}

