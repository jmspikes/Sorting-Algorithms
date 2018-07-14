let iItems;
document.getElementById("iPress").addEventListener("click", function(){

	let numberToSort = document.getElementById("insertArea");
	iItems = numberToSort.getElementsByTagName("div");
	let itemArray = [];
	for(let i = 0; i < iItems.length; i++){
		itemArray.push(Number(iItems[i].innerHTML));
	}
	insert(itemArray);
});

insert = function(itemHolder){

	for(let i = 1; i < itemHolder.length; ++i){

		let current = itemHolder[i];
		let j = i-1;
		while(j>=0 && itemHolder[j] > current){
			itemHolder[j+1] = itemHolder[j];
			iItems[j+1].innerHTML = itemHolder[j];
			$('#'+iItems[j+1].id).animate({height:itemHolder[j]+'%'},800);
			j = j-1;
		}
		itemHolder[j+1] = current;
		iItems[j+1].innerHTML = current;
		$('#'+iItems[j+1].id).animate({height:current+'%'},800);
	}
}