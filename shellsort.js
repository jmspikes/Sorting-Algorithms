let sItems;
document.getElementById("sPress").addEventListener("click", function(){

	let numberToSort = document.getElementById("shellArea");
	sItems = numberToSort.getElementsByTagName("div");
	let itemArray = [];
	for(let i = 0; i < sItems.length; i++){
		itemArray.push(Number(sItems[i].innerHTML));
	}
	shell(itemArray);
});

shell = function(itemArray){

	let n = itemArray.length;
	for(let gap = parseInt(n/2); gap > 0; gap = parseInt(gap/2)){
		for(let i = gap; i < n; i+=1){
			let temp = itemArray[i];
			let j;
			for(j = i; j>=gap && itemArray[j-gap] > temp; j-=gap){
				itemArray[j] = itemArray[j-gap];
				sItems[j].innerHTML = itemArray[j];
				$('#'+sItems[j].id).animate({height:itemArray[j]+'%'},800);
			}
			itemArray[j] = temp;
			sItems[j].innerHTML = temp;
			$('#'+sItems[j].id).animate({height:itemArray[j]+'%'},800);
		}
	}
}