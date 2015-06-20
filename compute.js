console.log("hello world");

function calculate() {
	console.log("The button was clicked!");
	var numberText = document.getElementById("numberTextArea").value
	if (numberText == ""){
		console.log("There was no text!")
		return;
	}

	document.getElementById("numberTextArea").value="";
	console.log(numberText)
	var numbersArray = []
	var numbersStringArray = numberText.split(",");
	for (var i=0; i< numbersStringArray.length; i++){

		numbersArray[i]=parseInt(numbersStringArray[i]);
	}
	console.log(numbersArray);

	addRow(numbersArray);

}


function addRow(arr) {
	var table = document.getElementById("stats");
	console.log(table);
	var row = table.insertRow();

	var input = row.insertCell(0);
	input.innerHTML = arr;

	var avg = row.insertCell(1);
	avg.innerHTML = computeAverage(arr);

	var p25 = row.insertCell(2);
	p25.innerHTML = computePercentile(arr,.25);

	var p75 = row.insertCell(3);
	p75.innerHTML = computePercentile(arr,.75);

	var stdev = row.insertCell(4);
	stdev.innerHTML = computeStDev(arr);
}

function computeAverage(arr) {
	var sum = 0;
	for (var i=0; i< arr.length; i++){
		sum += arr[i];

		console.log("sum is " + sum);
	}
	var average = sum/arr.length;
	console.log(average.toFixed(2));
	console.log(arr);

	return average.toFixed(2);
}

function computeStDev(arr) {
	var average = computeAverage(arr);
	var total = 0;
	var finalanswer = 0;

	for (var i= 0; i<arr.length; i++){
		total += sigma(arr[i],average);
	}

	total = total/arr.length;
	finalanswer = Math.sqrt(total);

	return finalanswer.toFixed(2);

}

function sigma(value, average) {
	var answer = 0;
	answer = value - average;
	answer = answer*answer;
	return answer;

}

function computePercentile(arr, percentile) {
	var sortedArr = arr.sort();
	var index = Math.round(percentile * arr.length);
	return sortedArr[index];
}



