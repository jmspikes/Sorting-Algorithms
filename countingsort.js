let cItems;
document.getElementById("cPress").addEventListener("click", function(){

	let numberToSort = document.getElementById("countArea");
	cItems = numberToSort.getElementsByTagName("div");
	let itemArray = [];
	for(let i = 0; i < cItems.length; i++){
		itemArray.push(Number(cItems[i].innerHTML));
	}
	count(itemArray);
});

count = function(itemArray){

	let holder = [];
	let sorted = [];
	let k = 0;
	for(let i = 0; i < itemArray.length; i++){
		k = Math.max(k, itemArray[i]);
	}
	for(let i = 0; i < k+1; i++){
		holder[i] = 0;
	}
	for(let i = 0; i < itemArray.length; i++){
		holder[itemArray[i]]++;
	}
	let j = 0;
	for(let i = 0; i <=k; i++){
		let temp = holder[i];
		while(temp--){
			sorted[j] = i;
			cItems[j].innerHTML = i;
			$('#'+cItems[j].id).animate({height:sorted[j]+'%'},800);
			j++;
		}
	}
}