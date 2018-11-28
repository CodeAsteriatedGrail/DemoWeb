function myFunction() {
	var y = document.getElementById("que-2").value;
    var x = document.getElementById("que-1").value;
	var rdbtn = document.querySelector('input[name="yn"]:checked').value;
	if(x == ""){
		console.log(x);
		document.getElementById("ned-1").style.backgroundColor = "red";
	}
	
	console.log(rdbtn);
	console.log("理由"+y+"，目前在"+x+"上班");	
    
}