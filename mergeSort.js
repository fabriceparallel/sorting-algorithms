function mergeSort(listElement) {

	if (listElement.length > 1) {
		var middle = Math.round(listElement.length / 2);
		
		var sortedLeft = mergeSort(listElement.splice(0,middle));
		var sortedRight = mergeSort(listElement);


		listElement = merge(sortedLeft, sortedRight);

	}

	return listElement;	
}

function merge(left, right) {
	var mergeList = [];
	var x = 0;
	var y = 0;

	while(right.length > y || left.length > x) {
		if (right.length == 0 || y == right.length) {
			mergeList = mergeList.concat(left.splice(x, left.length-x));
			break;
		} else if (left.length == 0 || x == left.length) {
			mergeList = mergeList.concat(right.splice(y, right.length-y));
			break;
		}

		if (left[x] < right[y]) {
			mergeList.push(left[x++]);
		} else {
			mergeList.push(right[y++]);
		}
	}

	return mergeList;
}

// function merge (a,b) {
//     var result = [];
//     while (a.length >0 && b.length >0)
//         result.push(a[0] < b[0]? a.shift() : b.shift());
//     return result.concat(a.length? a : b);
// }


if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}
var listToSort = require('./testData.js');
console.log(listToSort.length + " elements");
var startTime = Date.now();
var result = mergeSort(listToSort);
var endTime = Date.now();

console.log(endTime - startTime + " milliseconds");