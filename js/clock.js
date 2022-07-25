let hoursArea = document.getElementById("hours"),
	minutesArea = document.getElementById("minutes"),
	dateArea = document.getElementById("date"),
	tfArea = document.getElementById("tff"),
	hourHand = document.getElementById("hour-hand"),
	minuteHand = document.getElementById("minute-hand"),
	secondHand = document.getElementById("second-hand"),
	timeFormat = localStorage.getItem("timeFormat");
null === timeFormat && (timeFormat = "twelve"), "twelve" != timeFormat && (tfArea.style.display = "none");
let initiater = () => {
	let e = new Date,
		t = e.getHours(),
		n = e.getMinutes();
	n = n < 10 ? "0" + n : n;
	let a = e.getSeconds();
	"twelve" == timeFormat && (tfArea.innerHTML = t > 12 ? "pm" : "am", 0 == (t = t > 12 ? t - 12 : t) && (t = 12)), hoursArea.innerHTML = t, minutesArea.innerHTML = n, dateArea.innerHTML = e.toDateString(), t = t > 12 ? t - 12 : t, hourHand.style.transform = `rotate(${30*t+n/2}deg)`, minuteHand.style.transform = `rotate(${6*n}deg)`, secondHand.style.transform = `rotate(${6*a}deg)`
};
setInterval(initiater, 1e3);