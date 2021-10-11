let Btn = document.getElementById('btn');
let URLinput = document.querySelector('.URL-input');
let select = document.querySelector('.opt');
let serverURL = 'http://192.168.0.172:4000'; //Changing and Adding my local Ip address to use locally: change this to localhost or 127.0.0.1 if you want to use only by you.

Btn.addEventListener('click', () => {
	if (!URLinput.value) {
		swal("Opss!", "  Youtube URL input is Empty ", "error")
	} else {
		if (select.value == 'mp3') {
			downloadMp3(URLinput.value);
			
			
		} else if (select.value == 'mp4') {
			downloadMp4(URLinput.value);
		}
	}
});

async function downloadMp3(query) {
	const res = await fetch(`${serverURL}/downloadmp3?url=${query}`);
	if(res.status == 200) {
		var a = document.createElement('a');
  		a.href = `${serverURL}/downloadmp3?url=${query}`;
  		a.setAttribute('download', '');
		
		a.click(swal("Congrats!", " Is now Downloading...", "success")); 
		 
		
	} else if(res.status == 400) {
		swal("Opss!", " Invalid url ", "error");
	}
}

async function downloadMp4(query) {
	const res = await fetch(`${serverURL}/downloadmp4?url=${query}`);
	if(res.status == 200) {
		var a = document.createElement('a');
  		a.href = `${serverURL}/downloadmp4?url=${query}`;
  		a.setAttribute('download', '');
		a.click(swal("Congrats!", " Is now Downloading...", "success"));
		
	} else if(res.status == 400) {
		swal("Opss!", " Invalid url ", "error");
	}
}
