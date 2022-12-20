numberingDivs = document.querySelectorAll(".button-number");

numberingDivs.forEach((div) => {
	let plusButton = div.querySelector("button:first-child");
	let itemNumber = div.querySelector(".item-number");
	let minusButton = div.querySelector("button:last-child");

	plusButton.addEventListener("click", () => {
		let num = Number(itemNumber.textContent);
		num += 1;
		itemNumber.textContent = `${num}`;
	});
	minusButton.addEventListener("click", () => {
		let num = Number(itemNumber.textContent);
		if (num <= 1) return;
		num -= 1;
		itemNumber.textContent = `${num}`;
	});
});

const colorSwitcher = document.querySelector("#theme-switcher");

colorSwitcher.addEventListener("click", () => {
	if (document.documentElement.classList.contains("light")) {
		document.documentElement.classList.remove("light");
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
		document.documentElement.classList.add("light");
	}
});
