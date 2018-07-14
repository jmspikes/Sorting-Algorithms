let bItems;
document.getElementById("bPress").addEventListener("click", function(){

	let numberToSort = document.getElementById("bucketArea");
	bItems = numberToSort.getElementsByTagName("div");
	let itemArray = [];
	for(let i = 0; i < bItems.length; i++){
		itemArray.push(Number(bItems[i].innerHTML));
	}
	bucket(itemArray);
});

bucket = function(itemArray){

	let n = itemArray.length;
	let max = Math.max.apply(Math, itemArray);
	let bucket = [];
	for(let i = 0; i < max+1; i++){
		bucket[i] = 0;
	}
	for(let i = 0; i < itemArray.length; i++){
		bucket[itemArray[i]]++;
	}
	let out = 0;
	for(let i = 0; i < bucket.length; i++){
		for(let j = 0; j < bucket[i]; j++){
			bItems[out].innerHTML = i;		
			$('#'+bItems[out].id).animate({height:i+'%'}, 800);
			itemArray[out++] = i;
		}
	}
}