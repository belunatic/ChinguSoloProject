//Form input errro functionality
let urlInput = document.querySelector("#pen-url");
let errorMessage = document.querySelector(".error-message");

urlInput.addEventListener("input", function (e) {
	urlInput.classList.remove("error");
	errorMessage.style.display = "none";
});

function mysubmit(e) {
	let urlRegEx =
		/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;

	if (urlInput.value === "" || !urlRegEx.test(urlInput.value)) {
		urlInput.classList.add("error");
		errorMessage.style.display = "block";
	} else {
		urlInput.classList.remove("error");
		errorMessage.style.display = "none";
	}
}

//Timer

document.addEventListener("DOMContentLoaded", () => {
	let deadlineInterval = "";
	if (!deadlineInterval) deadlineInterval = setInterval(timer, 1000);
});

function timer() {
	let currentTime = new Date();
	let deadlineTime = new Date();
	//set deadlineTime to 5pm
	deadlineTime.setHours(17, 0, 0);

	// calculate the differences of the two times suing timestamp
	let timeDifference = deadlineTime.getTime() - currentTime.getTime();

	if (timeDifference < 0) {
		deadlineTime.setDate(deadlineTime.getDate() + 1);
		deadlineTime.setHours(17, 0, 0);
		timeDifference = deadlineTime.getTime() - currentTime.getTime();
	}

	//calculate the hours, minutes, and second to deadline
	let hour = Math.floor((timeDifference % 86400000) / 3600000);
	let min = Math.floor(((timeDifference % 86400000) % 3600000) / 60000);
	let sec = Math.floor(
		(((timeDifference % 86400000) % 3600000) % 60000) / 1000
	);

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	document.querySelector(".time-left").innerHTML = `${hour}:${min}:${sec}`;
}

//Switch Day Click
let penUrl = [
	{
		id: 0,
		url: "https://codepen.io/belunatic/embed/LYMVGBJ?default-tab=result",
		day: "#01",
	},
	{
		id: 1,
		url: "https://codepen.io/belunatic/embed/vYvqboN?default-tab=result",
		day: "#02",
	},
];

let nextDay = document.querySelector(".next-day");
let previousDay = document.querySelector(".previous-day");
let codeUrl = document.querySelector(".codepen-link");
let id = 0;
let day = document.querySelector(".day-number");

nextDay.addEventListener("click", function (e) {
	e.preventDefault();
	switchDays();
});
previousDay.addEventListener("click", function (e) {
	e.preventDefault();
	switchDays();
});

function switchDays() {
	if (id == 0) {
		let penIFrame = document.querySelectorAll("iframe");
		penIFrame.forEach((iframe) => {
			iframe.src = penUrl[1].url;
		});
		day.innerHTML = penUrl[1].day;
		codeUrl.href = penUrl[1].url;
		id = 1;
	} else if (id == 1) {
		let penIFrame = document.querySelectorAll("iframe");
		penIFrame.forEach((iframe) => {
			iframe.src = penUrl[0].url;
		});
		day.innerHTML = penUrl[0].day;
		codeUrl.href = penUrl[0].url;
		id = 0;
	}
}
