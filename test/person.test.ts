import { Person } from "../src/person/person";
import { Room } from "../src/room/room";

describe('Person', () => {
    let person: Person;

    beforeEach(() => {
        person = new Person("John");
    });

    test('should enter and leave room', () => {
        const room: Room = new Room();
        person.enterRoom(room);
        expect(room.isDoorOpen).toBe(true);
        person.leaveRoom(room);
        expect(room.isDoorOpen).toBe(false);
    });

    test('should switch light on and off', () => {
        const room: Room = new Room();
        person.switchLight(room, true);
        expect(room.lightBulb.isOn).toBe(true);
        person.switchLight(room, false);
        expect(room.lightBulb.isOn).toBe(false);
    });
});