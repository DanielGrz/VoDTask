import { Room } from "../room/room";

export class Person {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    enterRoom(room: Room): void {
        room.openDoor();
        console.log(`${this.name} entered the room`);
    }

    leaveRoom(room: Room): void {
        room.closeDoor();
        console.log(`${this.name} left the room`);
    }

    checkLightStatus(room: Room): void {
        if (room.lightBulb.isOn) {
            console.log(`Light Bulb is on`);
        } else {
            console.log(`Light Bulb is off`);
        }
    }

    switchLight(room: Room, state: boolean): void {
        if (state) {
            room.lightBulb.turnOn();
        } else {
            room.lightBulb.turnOff();
        }
        console.log(`${this.name} switched the light ${state ? "On": "Off"}`);
    }
}

