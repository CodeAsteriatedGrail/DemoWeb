function myFunction() {
	var y = document.getElementById("que-2").value;
    var x = document.getElementById("que-1").value;
	var rdbtn = document.getElementById("yes");
	var result=document.getElementById("demo");
	if(rdbtn.checked = true){
		result.innerHTML = "YES，理由："+x+"在"+y+"上班";}
	else{
		result.innerHTML = "NO，理由："+x+"，目前在"+y+"上班";
	}
    
}