function redo(){
	var a = parseFloat(document.querySelector("#value").value);
	var calculate;
if (((a*10**1)%1)*10>="5"){
calculate = ((Math.ceil((a % 1).toFixed(2)*10)+(Math.floor(a)*10))*10**-1).toFixed(1);
} 
	else if (((a*10**1)%1)*10<"5") {
	calculate = ((a)-(((a%1).toFixed(2)*10)-Math.floor((a%1).toFixed(2)*10))*(10**-1)).toFixed(1);
}

document.querySelector("#result").innerHTML=calculate;
console.log(calculate);
}

