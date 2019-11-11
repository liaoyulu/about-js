function countChar(string,target){
	var i,n=0;
	for(i = 0 ;i < string.length;i++){
		if(string.charAt(i)=target)
			n++;
	}
	return n;
}
console.log(countChar("kskskdjs","k"));
