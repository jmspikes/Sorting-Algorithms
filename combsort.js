let coItems;
document.getElementById("coPress").addEventListener("click", function(){

	let numberToSort = document.getElementById("combArea");
	coItems = numberToSort.getElementsByTagName("div");
	let itemArray = [];
	for(let i = 0; i < coItems.length; i++){
		itemArray.push(Number(coItems[i].innerHTML));
	}
	comb(itemArray);
});

comb = function(itemArray){

	let n = itemArray.length;
	let gap = n;
	let swapped = true;
	while(gap!=1 || swapped == true){
		gap = nextGap(gap);
		swapped = false;
		for(let i =0; i < n-gap; i++){
			if(itemArray[i] > itemArray[i+gap]){
				let temp = itemArray[i];
				itemArray[i] = itemArray[i+gap];
				coItems[i].innerHTML = itemArray[i];
				$('#'+coItems[i].id).animate({height:itemArray[i]+'%'}, 800);
				itemArray[i+gap] = temp;
				coItems[i+gap].innerHTML = itemArray[i+gap];
				$('#'+coItems[i+gap].id).animate({height:itemArray[i+gap]+'%'}, 800);
				swapped = true;
			}
		}
	} 
}

nextGap = function(gap){
	gap = parseInt((gap*10)/13);
	if(gap<1)
		return 1;
	return gap;
}