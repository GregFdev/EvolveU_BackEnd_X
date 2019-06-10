console.log('Hello World from intro.js V3');

window.onload = onWindowHasLoaded;


async function onWindowHasLoaded() {
	console.log('The page has finished loading V3');
	let response;
	try {
		response = await fetch('/customers');
		if (response.status != 200)
			throw 'Invalid HTTP Response:' + response.status;
		console.log('Response:', response);
	      const data = await response.text();
	      console.log('Data:', data);
	} catch (error) {
		console.log('*** We Have and error onWindowHasLoaded:', error);
		console.log('Response:', response);
	}
}
