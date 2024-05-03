import { Room } from "../src/room/room";

describe('Room', () => {
    test('should open and close door', () => {
        const room: Room = new Room();
        room.openDoor();
        expect(room.isDoorOpen).toBe(true);
        room.closeDoor();
        expect(room.isDoorOpen).toBe(false);
    });

    test('should change light bulb color', () => {
        const room: Room = new Room();
        const newColor = "red";
        room.changeLightBulb(newColor);
        expect(room.lightBulb).toEqual({ isBroken: false, isOn: false, newColor: newColor });
    });
});