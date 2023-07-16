//your code here

let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

let touristSpotsWithOutArticle = touristSpots.map((elem,index) => {
	let arr = elem.split(" ");
	let obj = {};
	if(arr[0] == 'A' || arr[0] == 'An' || arr[0] == 'The'){
		arr.shift();
	}
	obj.idx = index;
	obj.value = arr[0];
	return obj;
})
// console.log(touristSpotsWithOutArticle);
// console.log(touristSpotsWithOutArticle);

touristSpotsWithOutArticle.sort((a,b) => {
	let str1 = a.value;
	let str2 = b.value;
	if(str1 > str2) return 1;
	else if(str1 === str2) return 0;
	else return -1;
})

let newArr = [];
for (let i in touristSpotsWithOutArticle) {
	let index = touristSpotsWithOutArticle[i].idx;
	newArr.push(touristSpots[index]);
}

touristSpots = newArr;
console.log(touristSpots);