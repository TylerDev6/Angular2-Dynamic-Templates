export class Engine {
	public size: string;
	public type: string;
	
	constructor(size: string, type: string) {
		this.size = size;
		this.type = type;
	}
	
	toString (): string {
		return this.size + " " + this.type;
	}
}
