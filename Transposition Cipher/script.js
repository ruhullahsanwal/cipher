document.getElementById("encrypt").onclick = function () {
	string = document.getElementById("plaintText").value;
	keyword = document.getElementById("keyword").value;
	pc = document.getElementById("padText").value;

	var lowerString = string.toLowerCase();
	var chars = 'abcdefghijklmnopqrstuvwxyz'.split('');
	var alphabets = 'abcdefghijklmnopqrstuvwxyz';
	var encryptedString = '';
	var newString = '';
	var newArrayString = '';
	var lowerKeyword = keyword.toLowerCase();
	var j = 1;
	var columnArray = [];
	var keywordsArray = [];
	var duplicateKeywordsArray = [];

	if (pc == "") {
		pc = "x"; //checking if there is no pad character.
	}

	lowerString = lowerString.replace(/ /g,''); // removing any space from the plain text
	while (lowerString.length % lowerKeyword.length != 0) {
		lowerString += pc.charAt(0); // adding pad character to the spaces left
	}


	for (var i = 0; i < lowerString.length; i++) {
		var currentString = lowerString[i];
		if (currentString === ' ') {
			continue;
		}
		newString += currentString;
		newArrayString += currentString;
		if (j == lowerKeyword.length) {
			j = 1;
			columnArray.push(newArrayString.split('')); // creating 2D array
			newArrayString = '';
			newString += '\n';
		} else {
			j++;
		}
	}

	for (i = 0; i < lowerKeyword.length; i++) { //making two arrays one is sorted and one is not having alphabet values
		keywordsArray.push(alphabets.indexOf(lowerKeyword[i])); 
		duplicateKeywordsArray.push(alphabets.indexOf(lowerKeyword[i]));
	}
	//cancatenating encrypted text to a string

	for (i = 0; i < lowerKeyword.length; i++) {
		for(j = 0; j < columnArray.length; j++) {
			encryptedString += columnArray[j][keywordsArray.indexOf(duplicateKeywordsArray.sort((a, b) => a - b)[i])];
		}
	}

	document.getElementById("cipherText").value = encryptedString;

	console.log(encryptedString);
	console.log(lowerString);
	console.log(keyword.toUpperCase());
	console.log(newString);
}

document.getElementById("decrypt").onclick = function () {
	string = document.getElementById("cipherText2").value;
	keyword = document.getElementById("keyword2").value;
	var lowerString = string.toLowerCase();
	var chars = 'abcdefghijklmnopqrstuvwxyz'.split('');
	var alphabets = 'abcdefghijklmnopqrstuvwxyz';
	var decryptedString = '';
	var newString = '';
	var newArrayString = '';
	var lowerKeyword = keyword.toLowerCase();
	var j = 1;
	var columnArray = [];
	var keywordsArray = [];
	var duplicateKeywordsArray = [];
	var newColumnArray = [];
	var newLowerString = '';


	for (var i = 0; i < lowerString.length; i++) {
		var currentString = lowerString[i];
		if (currentString === ' ') {
			continue;
		}
		newString += currentString;
		newArrayString += currentString;
		if (j == lowerKeyword.length) {
			j = 1;
			columnArray.push(newArrayString.split('')); // creating 2D array
			newArrayString = '';
			newString += '\n';
		} else {
			j++;
		}
	}

	var one = 0;
	var two = columnArray.length;



	for (i = 0; i < lowerKeyword.length; i++) { //making two arrays one is sorted and one is not having alphabet values
		keywordsArray.push(alphabets.indexOf(lowerKeyword[i])); 
		duplicateKeywordsArray.push(alphabets.indexOf(lowerKeyword[i]));
	}

	for(i = 0; i < lowerKeyword.length; i++) {
		while (one < two) {
			newLowerString += lowerString[one];
			one++;
		}
		two += columnArray.length;
		newColumnArray.push(newLowerString.split(''));
		newLowerString = '';
	}

	//cancatenating encrypted text to a string


	var duplicateColumnArray = [];
	var duplicateLowerString = '';

	for (i = 0; i < columnArray.length; i++) {
		for (j = 0; j < lowerKeyword.length; j++) {
			duplicateLowerString += newColumnArray[j][i];
		}
		duplicateColumnArray.push(duplicateLowerString.split(''));
		duplicateLowerString = '';
	}

	for (i = 0; i < columnArray.length; i++) {
		for(j = 0; j < lowerKeyword.length; j++) {
			decryptedString += duplicateColumnArray[i][duplicateKeywordsArray.sort((a, b) => a - b).indexOf(keywordsArray[j])];
		}
	}

	document.getElementById("plainText2").value = decryptedString;

	console.log(decryptedString);
}