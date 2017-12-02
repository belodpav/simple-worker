function _(id) {
	return document.getElementById(id);
}

var inputFirst = _('input__first'),
	inputSecond = _('input__second'),
	btn = _('btn'),
	output = _('output');

if (window.Worker) {
	var sumWorker = new Worker('worker.js');
	
	sumWorker.addEventListener('message', function(e) {
		output.innerText = e.data;
	});

	btn.addEventListener('click', function(e) {
		var a = +inputFirst.value,
			b = +inputSecond.value;

		if ((a || a === 0) && (b || b === 0)) {
			sumWorker.postMessage([a, b]);
		}
	});
}