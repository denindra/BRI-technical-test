 function calculateWeight(char) {
        return char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
 }


function parsingAndCalculateChar(groupData) {

	let dataWeight = new Set();

	for (let i = 0; i < groupData.length; i++) {
		const subarray = groupData[i];
		let weight = 0;
		for (let j = 0; j < subarray.length; j++) {
			const element = subarray[j];
			weight += calculateWeight(element);
			dataWeight.add(weight);
		}
	}

	return dataWeight;

}

function groupingCharacter(arr) {
	let grouped = [];
	let currentGroup = [];

	for (let i = 0; i < arr.length; i++) {
		if (currentGroup.length === 0 || arr[i] === currentGroup[0]) {
			currentGroup.push(arr[i]);
		} else {
			grouped.push(currentGroup);
			currentGroup = [arr[i]];
		}
	}

	if (currentGroup.length > 0) {
		grouped.push(currentGroup);
	}

	return grouped;
}

function validateWeight(weights, queries) {
	return queries.map(query => (weights.has(query) ? "Yes" : "No"));
}

function main(string, queries) {
	let getGroupingCharacter = groupingCharacter(string);
    let getParsingChar = parsingAndCalculateChar(getGroupingCharacter);
	return validateWeight(getParsingChar, queries);
}

const string = "abbcccd";
const queries = [1, 3, 9, 8];
console.log(main(string, queries));
