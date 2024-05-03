import { LightBulb } from "../lightbulb/lightbulb";

export class Room {

    isDoorOpen: boolean;
    lightBulb: LightBulb;

    constructor() {
        this.lightBulb = new LightBulb();
        this.isDoorOpen = false;
    }

    openDoor(): void {
        this.isDoorOpen = true;
    }

    closeDoor(): void {
        this.isDoorOpen = false;
    }

    changeLightBulb(newColor: string): void{
        this.lightBulb = new LightBulb(newColor);
        console.log(`The light bulb color was change to ${newColor}`);
    }

}