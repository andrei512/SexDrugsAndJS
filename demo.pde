void setup() {
	size(400, 400);
}

void draw() {
	fill(255, 60, 60);
	for (int i = 0; i < 400; i += 40) {
	  for (int j = 0; j < 400; j += 40) {
	    rect(i, j, 32, 32);
	  }
	}
}