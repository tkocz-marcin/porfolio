const popup = {
	generate : function() {
		let popupBack = document.createElement('div'),
			popupBox = document.createElement('div'),
			body = document.querySelector('body'),
			btn = document.createElement('div'),
			title = document.createElement('h1'),
			p = document.createElement('p');

			popupBack.setAttribute('class', 'infoBox--back');
			popupBox.setAttribute('class', 'infoBox');
			btn.setAttribute('class', 'btn btn__close');

			title.innerHTML = 'Dzień <span class="text--primaryColor">Dobry !</span>';
			p.innerHTML = 'Strona została stworzona <br/> aby zaprezentować <span class="text--primaryColor">kilka</span> <br/>wykonanych przez <span class="text--primaryColor">siebie</span> prac'

			popupBox.appendChild(btn);
			popupBox.appendChild(title);
			popupBox.appendChild(p);

			popupBack.appendChild(popupBox);
			body.appendChild(popupBack);

			popupBack.addEventListener('click', () => popupBack.remove());
		}

}


window.onload = function () {
	popup.generate();
}