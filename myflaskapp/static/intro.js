
console.log('Hello World from intro.js V2');

window.onload = onWindowHasLoaded;  // waits to load after DOM loaded

async function onWindowHasLoaded() {  // starts second thread of processing
	console.log('The page has finished loading.');
	let response;
	try {  //fetch returns a promise
		response = await fetch('/info');  //must have an async func to use await
		if (response.status != 200) 
			throw 'Invalid HTTP Response:' + response.status; // throw forces into catch
		console.log('Response:', response);
	    const data = await response.text();
	    console.log('Data:', data);
	} catch (error) {
		console.log('*** We Have an error with onWindowHasLoaded:', error);
		console.log('Response:', response);
    }
    console.log('end of async and response is', response.status);

}
console.log('out of func');