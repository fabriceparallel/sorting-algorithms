function selectionSort(listElement) {
	var firstElement = 0;

	while (firstElement < listElement.length) {
		var smallestValue = firstElement;
		for (var i = firstElement;i<listElement.length;i++) {
			if (listElement[smallestValue] > listElement[i]) {
				smallestValue = i;
			}
		}

		var c = listElement[firstElement];
		listElement[firstElement] = listElement[smallestValue];
		listElement[smallestValue] =c;

		firstElement++;
	}
	return listElement;
}


if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}
var listToSort = require('./testData.js');
console.log(listToSort.length + " elements");
var startTime = Date.now();
var result = selectionSort(listToSort);
var endTime = Date.now();

console.log(endTime - startTime + " milliseconds");