const byteSize = (str) => {
  // write your code here
	let s="";
	for(let i=0;i<str.length;i++){
			s[i] = str[i]-'a';
		}
if(str=="")return 0;
		return s.length;
	
};

// Do not cha nge the code below
//const str = prompt("Enter some string.");
//alert(byteSize(str));
