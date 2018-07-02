document.getElementById("qPress").addEventListener("click", function(){

	let numberToSort = document.getElementById("quickArea");
	let items = numberToSort.getElementsByTagName("div");
	let itemArray = [];
	for(let i = 0; i < items.length; i++){
		itemArray.push(items[i].innerHTML);
	}


	if(itemArray.length > 0){
	let pivot = getPivot(itemArray);
	sort(pivot, itemArray);

	}

});

//returns end of array to act as pivot
getPivot = function(data){
	let end = data[(data.length-1)];
	return data.indexOf(end);
}

sort = function(pivot, itemArr){
	let iterator = pivot-1;
	sortVal = itemArr[pivot];
	while(sortVal < itemArr[iterator]){
		let temp = itemArr[iterator];
		itemArr[iterator] = sortVal; 
		itemArr[pivot] = temp;
		iterator-=1;
		pivot-=1;
	}
}