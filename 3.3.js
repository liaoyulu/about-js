
function countBs(string){
	var i,B=0;
	for(i=0;i <= string.length-1;i++){
		if(string.charAt(i)=="B")
			B++;
	}
	return B;
}
console.log(countBs("BAGSBBB"));

