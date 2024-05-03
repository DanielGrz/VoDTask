# How to install project locally
## How to install packages

Run *npm install* at the root of the repository -> this will installall the dependencies from  package.json.

## How to run the application and tests

Tun the following commands at root of the repository:

1. To launch the application -> npm run app
2. To run the tests -> npm run test


# VoDTask

Task 1:
Create a small project as a valid git repository that will show us your TypeScript knowledge. The project should consist of at least 3 classes. You can create as many interfaces, classes, or other files as you prefer. You can create more methods than we are listing here. If you want to provide better results you can also provide tests for the functionality. Functionality that we would like to see from that project:


1.	1 class named Person

    a.	with methods

        i.	to enter/leave the room
        ii.	to check if the light bulb is turned off or on
        iii.	to turn the light bulb off or on

    b.	fields are up to you

2.	1 class named LightBulb

    a.	with methods:

        i.	to know if the light bulb is turned off or on
        ii.	to know if the light bulb is broken

    b.	fields are up to you
    c.	the light bulb can’t be turned on when it is broken

3.	1 class named Room

    a.	with methods

        i.	to change light bulb in the room

    b.	fields are up to you

The core program should provide the solution for those problems:

1.	Person should enter 1 room, check if the light bulb is there. Then change it to a red light bulb. Switch that light bulb on. Leave the room and close the door of the room.

2.	Person should enter 3 rooms. Turn on light bulbs in all of them. Then after 10 seconds one of the light bulbs should break randomly. Human should enter all the rooms and provide information if the light bulb is broken. It should also change all broken light bulbs to new ones. The process should continue for 60 seconds.

3.	Person should turn on light bulbs in 3 rooms. In one room it should be red, in another green and last blue.

You can slightly change the above interpretation or solution if you think that it is not correct. You can also extend the functionality if needed as we can see that we did not cover every possible case here. We are only listing minimum elements and you need to figure out the rest by yourself.
