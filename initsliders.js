//event listeners for sliders, will revise this in future to have 
//single function for sliders

//quicksort slider
let quick = document.getElementById("quickSlide");
let quickOutput = document.getElementById("quickNum");
quickOutput.innerHTML = quick.value;
quick.oninput = function(){
	quickOutput.innerHTML = this.value; 
}

//merge sort slider
let merge = document.getElementById("mergeSlide");
let mergeOutput = document.getElementById("mergeNum");
mergeOutput.innerHTML = merge.value;
merge.oninput = function(){
	mergeOutput.innerHTML = this.value; 
}

//insert sort slider
let insert = document.getElementById("insertSlide");
let insertOutput = document.getElementById("insertNum");
insertOutput.innerHTML = insert.value;
insert.oninput = function(){
	insertOutput.innerHTML = this.value; 
}

//heapsort slider
let heap = document.getElementById("heapSlide");
let heapOutput = document.getElementById("heapNum");
heapOutput.innerHTML = heap.value;
heap.oninput = function(){
	heapOutput.innerHTML = this.value; 
}

//countingsort slider
let count = document.getElementById("countSlide");
let countOutput = document.getElementById("countNum");
countOutput.innerHTML = count.value;
count.oninput = function(){
	countOutput.innerHTML = this.value; 
}

//combsort slider
let comb = document.getElementById("combSlide");
let combOutput = document.getElementById("combNum");
combOutput.innerHTML = comb.value;
comb.oninput = function(){
	combOutput.innerHTML = this.value; 
}

//shellsort slider
let shell = document.getElementById("shellSlide");
let shellOutput = document.getElementById("shellNum");
shellOutput.innerHTML = shell.value;
shell.oninput = function(){
	shellOutput.innerHTML = this.value; 
}

//heapsort slider
let bucket = document.getElementById("bucketSlide");
let bucketOutput = document.getElementById("bucketNum");
bucketOutput.innerHTML = bucket.value;
bucket.oninput = function(){
	bucketOutput.innerHTML = this.value; 
}