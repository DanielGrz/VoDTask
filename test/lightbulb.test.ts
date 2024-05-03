import { LightBulb } from "../src/lightbulb/lightbulb";

describe('LightBulb', () => {
    let lightBulb: LightBulb;

    beforeEach(() => {
        lightBulb = new LightBulb();
    });

    test('should turn on and off', () => {
        lightBulb.turnOn();
        expect(lightBulb.isOn).toBe(true);
        lightBulb.turnOff();
        expect(lightBulb.isOn).toBe(false);
    });

    test('should break and repair', () => {
        lightBulb.breakBulb();
        expect(lightBulb.isBroken).toBe(true);
        lightBulb.repairBulb();
        expect(lightBulb.isBroken).toBe(false);
    });
});