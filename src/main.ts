import { Person } from "./person/person";
import { Room } from "./room/room";

const rooms: Room[] = [new Room(), new Room(), new Room()];

const person = new Person('Dan');

console.log("Task 1:");
person.enterRoom(rooms[0]);
rooms[0].changeLightBulb('red');
person.switchLight(rooms[0], true);
person.leaveRoom(rooms[0]);


console.log("\nTask 3:");

const color: string[] = ['red','green','blue'];

rooms.forEach((room, index) =>{
    person.enterRoom(room);
    room.changeLightBulb(color[index]);
    person.switchLight(room, true);
});


console.log("\nTask 2:");
rooms.forEach(room => {
    person.enterRoom(room);
    person.switchLight(room, true);
});


const interval = setInterval(() =>{
    const randomRoomIndex = Math.floor(Math.random() * rooms.length);
    const randomRoom = rooms[randomRoomIndex];
    randomRoom.lightBulb.breakBulb();
    
    rooms.forEach(room =>{
        person.enterRoom(room);
        console.log(room.lightBulb.isBroken ? "The bulb is broken" : " The bulb is working");
        if(room.lightBulb.isBroken){
            room.lightBulb.repairBulb();
        }
    });
},10000);


setTimeout(() =>{
    clearInterval(interval);
}, 60000);

