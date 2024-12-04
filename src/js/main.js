window.addEventListener("DOMContentLoaded", () => {
const menuBtn = document.querySelector(".header-menu__btn");
const menuMobile = document.querySelector(".header-mobile__wrapper");

menuBtn.addEventListener("click", (e) => {
	e.currentTarget.classList.toggle("header-menu__btn--active");
	// menuMobile.classList.toggle('header-menu--mobile-active')
	if (e.currentTarget.classList.contains("header-menu__btn--active")) {
	menuMobile.style.display = "block";
	setTimeout(() => {
		menuMobile.style.maxHeight = "600px";
	}, 100);
	} else {
	menuMobile.style.maxHeight = "0px";
	setTimeout(() => {
		menuMobile.style.display = "none";
	}, 700);
	}
});
});


const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		const blockID = anchor.getAttribute("href").substr(1);

		document.getElementById(blockID).scrollIntoView({
		behavior: "smooth",
		block: "start",
		});
	});
}

      
