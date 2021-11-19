import { Item } from "./item";
import { PhotoOrientation } from "./photo-orientation";

export class Picture extends Item {
	public constructor(id: number, title: string, private date: string, private orientation: PhotoOrientation) {
		super(id, title);
	}
	public toString() {
		return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
	}
}