function validateBracketv2(bracketPayload) {
	bracketType = bracketPayload.replace(/\s+/g, '');

	let tempArray = [];


	for (let i = 0; i < bracketType.length; i++) {
		let bracket = bracketType[i];

		if (bracket == '(' || bracket == '[' || bracket == '{') {
			tempArray.push(bracket);
			continue;
		}


		if (tempArray.length == 0)
			return false;

		let char;
		switch (bracket) {
			case ')':
				char = tempArray.pop();
				if (char == '{' || char == '[')
					return false;
				break;

			case '}':
				char = tempArray.pop();
				if (char == '(' || char == '[')
					return false;
				break;

			case ']':
				char = tempArray.pop();
				if (char == '(' || char == '{')
					return false;
				break;
		}
	}

	return (tempArray.length == 0);

}


function main(bracketList) {

	let validate = validateBracketv2(bracketList);

	if (!validate) {
		return "bracket not valid"
	}

	return "bracket valid"
}


let bracketList = "([{} ] )";
console.log(main(bracketList));


/*
step pertama yang saya lakukan adalah untuk membuat request bracket yang masing-masing terdiri dari bracket pembuka dan bracket tertutup
step kedua saya membuat method main untuk memulai proses validasi serta memberikan result apakah bracket yang di diberikan oleh payload valida atau tidak valid
dalam step kedua ada satu method yang saya buat untuk memulai prosdes validasi dengan nama validateBracket
validasi yang di lakukan antara lain
    -   menghilangkan whitespace/space apabila dalam payload
    -   melakukan looping berdasarakan banyaknya character yang dikirim
    -   melakukan pengecekan bracket pembuka, apabila ditemukan akan dimaskukan ke dalam temporary array 
    -   melanjutkan proses switch  untuk menvalidasibracket penutup apabila di temukan pada dalam looping 
    -   menggukana .pop() untuk menghilangkan array di belakangnya yang ada di temporary array apabila tiketika data ayng di bandingakan ternyata bracket di buka  maka diangkat tidak valid
setelah melakukan validasi maka pada method main apabila true  maka di naytakan bracket valid dan sebalkuknya apabila valse maka dinyatakan tidak valid

*/
