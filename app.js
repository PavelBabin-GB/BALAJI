
document.querySelectorAll('.basket-btn .basket-btn-minus').forEach(function (element) {
	element.addEventListener('click', function(event) {
		event.preventDefault();
		let input = this.parentElement.querySelector('.count-input');
		let count = parseInt(input.value) - 1;
		count = count < 1 ? 1 : count;
		input.value = count;
	});
});

document.querySelectorAll('.basket-btn .basket-btn-plus').forEach(function (element) {
	element.addEventListener('click', function(event) {
		event.preventDefault();
		let input = this.parentElement.querySelector('.count-input');
		let count = parseInt(input.value) + 1;
		count = count > parseInt(input.dataset.maxCount) ? parseInt(input.dataset.maxCount) : count;
		input.value = parseInt(count);
	});
});

