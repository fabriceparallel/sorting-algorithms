/**
 * this is broken, need to fix it
 */
function quickSort(listElement, start, pivot) {
	var i = start;
	var y = i+1;

	if (start == pivot) {
		return listElement;
	}

	while(y < pivot){
		if (listElement[y] < listElement[pivot] ) {
			listElement[++i] += listElement[y];
			listElement[y] = listElement[i] - listElement[y];
			listElement[i] -= listElement[y];
		}
		y++;
	}
	listElement[++i] += listElement[pivot];
	listElement[pivot] = listElement[i] - listElement[pivot];
	listElement[i] -= listElement[pivot];

	listElement = quickSort(listElement, -1, i);
	listElement = quickSort(listElement, i-1, pivot);

	return listElement;
}


if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}
var listToSort = require('./testData.js');

console.log(listToSort.length + " elements");
var startTime = Date.now();
var result = quickSort(listToSort);
var endTime = Date.now();

console.log(endTime - startTime + " milliseconds");

