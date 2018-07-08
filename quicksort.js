//array to hold divs in quicksort canvas
let qItems;
document.getElementById("qPress").addEventListener("click", function(){
	//gets all items in the quicksort area
	let numberToSort = document.getElementById("quickArea");
	//finds each div
	qItems = numberToSort.getElementsByTagName("div");
	//array to hold values in divs
	let itemArray = [];
	for(let i = 0; i < qItems.length; i++){
		itemArray.push(Number(qItems[i].innerHTML));
	}
	//starts quicksort, initial partition
	quickSort(0, itemArray.length-1, itemArray);
});

partition = function(low, high, itemArr){
	//selects right most element for sort
	let piv = itemArr[high];
	//low-1 so that it'll always be the leftmost element, low is iterated later
	let i = (low-1);
	//loops from left to one less than the pivot
	for(let j = low; j <= high-1; j++){
		//if item is less than pivot it'll need to be swapped
		if(itemArr[j] <= piv){
			i++;
			swap(i, j, itemArr);
		}
	}
	//swap pivot into it's fianl position
	swap(i+1, high, itemArr);
	//i+1 to be used in next sort call
	return(i+1);
}

quickSort = function(low, high, itemArr){
	//checks if we're at the end of sort
	if(low < high){
		//initializes pivot
		let pivot = partition(low, high, itemArr);
		//sorts to the left of pivot
		quickSort(low, pivot-1, itemArr);
		//sorts to the right of pivot
		quickSort(pivot+1, high, itemArr);
	}
}

swap = function(val1, val2, holder){

	//basic swap logic
	let temp = holder[val1];
	holder[val1] = holder[val2];
	qItems[val1].innerHTML = holder[val2];
	$('#'+qItems[val1].id).animate({height:holder[val2]+'%'},800);
	holder[val2] = temp;
	qItems[val2].innerHTML = temp;
	$('#'+qItems[val2].id).animate({height:temp+'%'},800);

}
