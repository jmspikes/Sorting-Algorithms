let hItems;
document.getElementById("hPress").addEventListener("click", function(){

	let numberToSort = document.getElementById("heapArea");
	hItems = numberToSort.getElementsByTagName("div");
	let itemArray = [];
	for(let i = 0; i < hItems.length; i++){
		itemArray.push(Number(hItems[i].innerHTML));
	}
	heap(itemArray);
});

heap = function(itemArray){

	let n = itemArray.length;
	for(let i = parseInt(n/2-1); i >=0; i--){
		makeHeap(itemArray, n, i);
	}
	for(let i = n-1; i >=0; i--){
		let temp = itemArray[0];
		itemArray[0] = itemArray[i];
		hItems[0].innerHTML = itemArray[i];
		$('#'+hItems[0].id).animate({height:itemArray[i]+'%'},800);
		itemArray[i] = temp;
		hItems[i].innerHTML = temp;
		$('#'+hItems[i].id).animate({height:temp+'%'},800);
		makeHeap(itemArray, i, 0);
	}
}

makeHeap = function(itemArray, n, i){

	let max = i;
	let l = 2*i+1;
	let r = 2*i+2;
	if(l < n && itemArray[l] > itemArray[max])
		max = l;
	if(r < n && itemArray[r] > itemArray[max])
		max = r;
	if(max != i){
		let swap = itemArray[i];
		itemArray[i] = itemArray[max];
		hItems[i].innerHTML = itemArray[max];
		$('#'+hItems[i].id).animate({height:itemArray[max]+'%'},800);		
		itemArray[max] = swap;
		hItems[max].innerHTML = swap;
		$('#'+hItems[max].id).animate({height:swap+'%'},800);		
		makeHeap(itemArray, n, max);
	}
}