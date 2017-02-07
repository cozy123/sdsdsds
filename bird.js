function Bird() {
	this.y = width/2;

	this.show = function() {
		fill(255)
		ellipse(this.x, this.y, 16, 16);
	}
}