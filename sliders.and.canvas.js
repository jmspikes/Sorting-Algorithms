//arrays to hold divs that are added to sorting canvas
//needed for reseting canvas as slider is moved
let quickArray = [];
let mergeArray = [];
let insertArray = [];
let heapArray = [];
let countArray = [];
let combArray = [];
let shellArray = [];
let bucketArray = [];

//initializes array of ints to be used by various sorting algorithms
let data = [];
for(let i = 0; i < 20; i++){
		//gets random value, 90 and 6 are a hack until a fix for
		//96-100 and 1-5 will fit graphically 
		 data.push(Math.floor(Math.random() * 90)+6);
}

//quicksort slider
let quick = document.getElementById("quickSlide");
let quickOutput = document.getElementById("quickNum");
quickOutput.innerHTML = quick.value;
//when slider is moved update sorting canvas
quick.oninput = function(){
	//resets holder array, slider has moved so need new values
	quickArray = [];
	//resets HTML of the canvas area
	let items = document.getElementById("quickArea");
	while(items.firstChild){
		items.innerHTML = "";
	} 
	quickOutput.innerHTML = this.value;
	updateArea(quickArray, "quick", this.value); 
}

//merge sort slider
let merge = document.getElementById("mergeSlide");
let mergeOutput = document.getElementById("mergeNum");
mergeOutput.innerHTML = merge.value;
merge.oninput = function(){
	mergeArray = [];
	let items = document.getElementById("mergeArea");
	while(items.firstChild){
		items.innerHTML = "";
	}
	mergeOutput.innerHTML = this.value; 
	updateArea(mergeArray, "merge", this.value);
}

//insert sort slider
let insert = document.getElementById("insertSlide");
let insertOutput = document.getElementById("insertNum");
insertOutput.innerHTML = insert.value;
insert.oninput = function(){
	insertArray = [];
	let items = document.getElementById("insertArea");
	while(items.firstChild){
		items.innerHTML = "";
	}
	insertOutput.innerHTML = this.value; 
	updateArea(insertArray, "insert", this.value);
}

//heapsort slider
let heap = document.getElementById("heapSlide");
let heapOutput = document.getElementById("heapNum");
heapOutput.innerHTML = heap.value;
heap.oninput = function(){
	heapArray = [];
	let items = document.getElementById("heapArea");
	while(items.firstChild){
		items.innerHTML = "";
	}
	heapOutput.innerHTML = this.value; 
	updateArea(heapArray, "heap", this.value);
}

//countingsort slider
let count = document.getElementById("countSlide");
let countOutput = document.getElementById("countNum");
countOutput.innerHTML = count.value;
count.oninput = function(){
	countArray = [];
	let items = document.getElementById("countArea");
	while(items.firstChild){
		items.innerHTML = "";
	}
	countOutput.innerHTML = this.value; 
	updateArea(countArray, "count", this.value);
}

//combsort slider
let comb = document.getElementById("combSlide");
let combOutput = document.getElementById("combNum");
combOutput.innerHTML = comb.value;
comb.oninput = function(){
	combArray = [];
	let items = document.getElementById("combArea");
	while(items.firstChild){
		items.innerHTML = "";
	}
	combOutput.innerHTML = this.value; 
	updateArea(combArray, "comb", this.value);
}

//shellsort slider
let shell = document.getElementById("shellSlide");
let shellOutput = document.getElementById("shellNum");
shellOutput.innerHTML = shell.value;
shell.oninput = function(){
	shellArray = [];
	let items = document.getElementById("shellArea");
	while(items.firstChild){
		items.innerHTML = "";
	}
	shellOutput.innerHTML = this.value; 
	updateArea(shellArray, "shell", this.value);
}

//bucketsort slider
let bucket = document.getElementById("bucketSlide");
let bucketOutput = document.getElementById("bucketNum");
bucketOutput.innerHTML = bucket.value;
bucket.oninput = function(){
	bucketArray = [];
	let items = document.getElementById("bucketArea");
	while(items.firstChild){
		items.innerHTML = "";
	}
	bucketOutput.innerHTML = this.value; 
	updateArea(bucketArray, "bucket", this.value);
}

//semi-anonymous function that will create new element
//generate a random value for the sort
//then attach it to the canvas area of calling sort
updateArea = function(arrayToUse, idName, amount){

	for(let i = 0; i < amount; i++){
		//creates a new div to be attached to the canvas
		let newItem = document.createElement("div");
		//creates id for div that matches calling function
		newItem.setAttribute("id", idName+(arrayToUse.length+1));
		//styles div
		//text size scales with amount on the slider
		newItem.style.fontSize = "15px";
		newItem.style.height = data[i]+"%";
		newItem.style.width = (100/amount)+"%";
		newItem.style.border = "3px outset #ffb50a";
		newItem.style.background = "#23579b";
		newItem.style.borderRadius = "2px";
		//assigns that value to new div
		newItem.innerHTML = data[i];
		//adds div to array of divs 
		arrayToUse.push(newItem);
		//used to attach div to canvas
		let element = document.getElementById(idName+"Area");
		element.appendChild(newItem);
	}
};