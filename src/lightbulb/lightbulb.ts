export class LightBulb {

    isOn: boolean;
    isBroken: boolean;
    newColor?: string;

    constructor(color?: string) {
        this.isOn = false;
        this.isBroken = false;
        this.newColor = color;
    }

    turnOn(): void {
        if (!this.isBroken) {
            this.isOn = true;
        } else {
            console.log(`Can't turn on the light bulb because is broken!`)
        }
    }

    turnOff(): void {
        this.isOn = false;
    }

    breakBulb(): void {
        this.isBroken = true;
        console.log(`The bulb is broken`);
    }

    repairBulb(): void {
        this.isBroken = false;
        console.log(`The bulb is fixed`);
    }
}