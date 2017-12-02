self.addEventListener('message', function(e) {
	var sum;
	sum = e.data[0] + e.data[1];
	self.postMessage(sum)
});