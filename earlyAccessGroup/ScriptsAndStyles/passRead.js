function passProcess(){
	const pass = document.getElementById('keyPassFile').files[0];
	if(pass.size > 10000) {
		alert("File is too large.");
		return;
	}

	function readtxtFile() {
		var reader = new FileReader();
		
		reader.addEventListener('load', function (e) {
		var output = e.target.result;
		});
		
		reader.readAsBinaryString(keyPassFile);
	}

}
