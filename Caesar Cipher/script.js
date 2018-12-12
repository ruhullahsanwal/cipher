document.getElementById("encrypt").onclick = function () {
	string = document.getElementById("inputWords").value;
	shift = document.getElementById("shiftCharacters").value;
	var lowerString = string.toLowerCase();
	var alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
	var encryptedString = '';

	
	for (var i = 0; i < lowerString.length; i++) {
			var currentString = lowerString[i];
			if (currentString === ' ') {
				encryptedString += currentString;
				continue;
			}

			if (currentString === '\n') {
				encryptedString += currentString;
				continue;
			}

			if (!isNaN(currentString)) {
				encryptedString += currentString;
				continue;
			}

			var currentIndex = alphabets.indexOf(currentString);
			var newIndex = currentIndex + parseInt(shift);

			if (newIndex > 25) {
				newIndex = newIndex - 26;
			}
			if (newIndex < 0) {
				newIndex = newIndex + 26;
			}
			encryptedString += alphabets[newIndex];
		}

		document.getElementById("outputWords").value = encryptedString;
		console.log(encryptedString);
}


document.getElementById("decrypt").onclick = function () {
	string = document.getElementById("ecryptedInputWords").value;
	shift = document.getElementById("ecryptedShiftCharacters").value;
	var lowerString = string.toLowerCase();
	var alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
	var encryptedString = '';

	for (var i = 0; i < lowerString.length; i++) {
		var currentString = lowerString[i];
		if (currentString === ' ') {
			encryptedString += currentString;
			continue;
		}

		if (currentString === '\n') {
			encryptedString += currentString;
			continue;
		}

		var currentIndex = alphabets.indexOf(currentString);
		var newIndex = currentIndex - parseInt(shift);

		if (newIndex > 25) {
			newIndex = newIndex - 26;
		}
		if (newIndex < 0) {
			newIndex = newIndex + 26;
		}

		if (!isNaN(currentString)) {
			encryptedString += currentString;
			continue;
		}

		encryptedString += alphabets[newIndex];
	}
	document.getElementById("decryptedOutputWords").value = encryptedString;
	console.log(encryptedString);
}


document.getElementById("shiftCharacters").onchange = function () {
	shiftChar = document.getElementById("shiftCharacters").value;
	var regexn = /^[0-9]+$/;
	if (!shiftChar.match(regexn)) {
		alert("Only Numbers Allowed");
		document.getElementById("shiftCharacters").value = 0;
	}
	if (parseInt(shiftChar) < 0) {
		alert("Cannot be less than 0");
		document.getElementById("shiftCharacters").value = 0;
	}
	if (parseInt(shiftChar) > 25) {
		alert("Cannot be greater than 25");
		document.getElementById("shiftCharacters").value = 25;
	}
}

//console.log(letter);
//console.log(encrypt(letter, parseInt(shift)));