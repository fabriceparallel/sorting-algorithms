function doQuickSort(listElement, left, right) {
	if (left >= right) {
		return listElement;
	}

	var pivot = listElement[Math.round((left+right)/2)];
	var splitingPoint = partition(listElement, left, right, pivot);

	if (right - left > 2) {
		var listElement = doQuickSort(listElement, left, splitingPoint-1);
		var listElement = doQuickSort(listElement, splitingPoint, right);
	}

	return listElement;
}

function partition(listElement, left, right, pivot) {
	while(left <= right) {
		while (listElement[left] < pivot) {
			left++;
		}

		while (listElement[right] > pivot) {
			right--;
		}

		if (left<=right) {
			listElement = swap(listElement, left, right);
			left++;
			right--;
		}
	}

	return left;
}

function swap(listElement, left, right) {
	var c = listElement[left];
	listElement[left] = listElement[right];
	listElement[right] = c;

	return listElement;
}

function quickSort(listElement) {
	return doQuickSort(listElement, 0, listElement.length-1);
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

