function bubbleSort(listElement) {
	var listLength = listElement.length;
	for (var i = 0; i < listLength - 1; i++) {
		var didSwap = false;
		for (var y = 0; y < listLength - i; y++) {
			if (listElement[y] > listElement[y+1]) {

				listElement[y] += listElement[y+1];
				listElement[y+1] = listElement[y] - listElement[y+1];
				listElement[y] -= listElement[y+1];
				didSwap = true;
			}
		}

		if (!didSwap) {
			break;
		}
	}

	return listElement;
}


if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}
var listToSort = require('./testData.js');
console.log(listToSort.length + " elements");
var startTime = Date.now();
result = bubbleSort(listToSort);
var endTime = Date.now();
console.log(result);
console.log(endTime - startTime + " milliseconds");