let mItems;
document.getElementById("mPress").addEventListener("click", function(){

	let numberToSort = document.getElementById("mergeArea");
	mItems = numberToSort.getElementsByTagName("div");
	let itemArray = [];
	for(let i = 0; i < mItems.length; i++){
		itemArray.push(Number(mItems[i].innerHTML));
	}

	mergeSort(itemArray, 0, itemArray.length-1);

});

merge = function(itemArr, left, middle, right){

	let number1 = middle - left + 1;
	let number2 = right - middle;

	let lArr = [];
	let rArr = [];

	for(let i = 0; i < number1; ++i)
		lArr[i] = itemArr[left + i];
	for(let j = 0; j < number2; ++j)
		rArr[j] = itemArr[middle + 1 + j];

	let i = 0;
	let j = 0;
	let k = left;
	while(i < number1 && j < number2){
		if(lArr[i] <= rArr[j]){
			itemArr[k] = lArr[i];
			mItems[k].innerHTML = lArr[i];
			$('#'+mItems[k].id).animate({height:lArr[i]+'%'},800);
			i++;
		}
		else{
			itemArr[k] = rArr[j];
			mItems[k].innerHTML = rArr[j];
			$('#'+mItems[k].id).animate({height:rArr[j]+'%'},800);
			j++;
		}
		k++;
	}

	while(i < number1){
		itemArr[k] = lArr[i];
		mItems[k].innerHTML = lArr[i];
		$('#'+mItems[k].id).animate({height:lArr[i]+'%'}, 800);
		i++;
		k++;
	}

	while(j < number2){
		itemArr[k] = rArr[j];
		mItems[k].innerHTML = rArr[j];		
		$('#'+mItems[k].id).animate({height:rArr[j]+'%'}, 800);
		j++;
		k++;
	}
}

mergeSort = function(itemArr, left, right){

	if(left < right){
		let middle = parseInt((left+right)/2);

		mergeSort(itemArr, left, middle);
		mergeSort(itemArr, middle+1, right);

		merge(itemArr, left, middle, right);
	}
}
