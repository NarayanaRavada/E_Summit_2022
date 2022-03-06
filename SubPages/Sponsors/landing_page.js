var __sf = $(".sponsorsFooter ul span");
var __sf_cont = $(".sponsorsFooter ul");
var __title = $("#sponsorTitle");

__sf.mouseenter(function() {
  $(this).addClass('hover');
  __sf_cont.addClass('enter');
  var __setTitle = $(this).attr("data-group-title");
  __title.html(__setTitle);
}).mouseleave(function() {
  $(this).removeClass('hover');
  __sf_cont.removeClass('enter');
  var __setTitle = $(__title).attr("data-default-title");
  __title.html(__setTitle);
});


if ($(window).width() > 1000) {
	var sec = document.getElementById("sec");
	var nav = document.getElementById("navigation");
	var tog_button = document.getElementById("toggle");
	nav.classList.toggle("active");
	sec.classList.toggle("active");
	tog_button.classList.toggle("active");
 }




















var starry_background = document.querySelector(".starry_background");
var w = window.innerWidth;
var h = window.innerHeight;
let isToggled = false;

var star_count = (w / 1920) * 300;

class star {
	constructor() {
		this.is = document.createElement("div");
		this.is.classList.add("star");
		this.x = Math.floor((Math.random() * 1.4 - 0.2) * w);
		this.y = Math.floor((Math.random() * 1.4 - 0.2) * h);
		this.r = Math.random() * 4 + 1;
	}
}

var stars = [];

function Create_stars() {
	for (let i = 0; i < star_count; i++) {
		stars.push(new star());

		s = stars[i];
		s.is.style.top = `${s.y}px`;
		s.is.style.left = `${s.x}px`;
		s.is.style.width = `${s.r}px`;
		s.is.style.height = `${s.r}px`;
		starry_background.appendChild(s.is);
	}
}

Create_stars();

document.querySelector(".intro").addEventListener("mousemove", (e) => {
	var mousex = e.clientX;
	var mousey = e.clientY;
	for (let i = 0; i < stars.length; i++) {
		var tx = (mousex / w) * stars[i].r * 20;
		var ty = (mousey / h) * stars[i].r * 20;
		if (tx + stars[i].is.style.left > 0.6 * w) {
			stars[i].is.style.background = `#04183D`;
		}
		stars[i].is.style.transform = `translate(${tx}px,${ty}px)`;
	}
});


window.addEventListener('scroll', () => {
	if( (!isToggled) && window.scrollY > document.body.offsetHeight - window.innerHeight*3/2) {
		isToggled = true;
		setTimeout(() =>
		{
		document.getElementById('navigation').classList.add('active');
		document.getElementById('toggle').classList.add('active');
		document.getElementById('sec').classList.add('active');
		}, 8000);
	}
});
