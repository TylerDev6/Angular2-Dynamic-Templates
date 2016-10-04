export class Car {
	make: string;
	model: string;
	year: string;
	engine: string;
	
	constructor(make: string, model: string, year: string = "", engine: string = "") {
		this.make = make;
		this.model = model;
		this.year = year;
		this.engine = engine;
	}
}