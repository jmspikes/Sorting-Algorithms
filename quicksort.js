let items;
document.getElementById("qPress").addEventListener("click", function(){

	let numberToSort = document.getElementById("quickArea");
	items = numberToSort.getElementsByTagName("div");
	let itemArray = [];
	for(let i = 0; i < items.length; i++){
		itemArray.push(Number(items[i].innerHTML));
	}

	quickSort(0, itemArray.length-1, itemArray);



	

});

partition = function(low, high, itemArr){

	let piv = itemArr[high];
	let i = (low-1);

	for(let j = low; j <= high-1; j++){

		if(itemArr[j] <= piv){
			i++;
			swap(i, j, itemArr);
		}
	}
	swap(i+1, high, itemArr);
	return(i+1);

}

quickSort = function(low, high, itemArr){

	if(low < high){

		let pivot = partition(low, high, itemArr);

		quickSort(low, pivot-1, itemArr);
		quickSort(pivot+1, high, itemArr);
	}

}

swap = function(val1, val2, holder){

	let temp = holder[val1];
	holder[val1] = holder[val2];
	items[val1].innerHTML = holder[val2];
	$('#'+items[val1].id).animate({height:holder[val2]+"%"}).delay(100);
	//items[val1].style.height = holder[val2]+"%";
	holder[val2] = temp;
	items[val2].innerHTML = temp;
	$('#'+items[val2].id).animate({height:temp+"%"}).delay(100);
	//$('#'+items[val2].id).animate({height})
	//items[val2].style.height = temp+"%";


}
