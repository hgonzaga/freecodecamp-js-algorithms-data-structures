/*
Golf Code:
In the game of golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order
to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is
a different nickname.
Your function will be passed par and strokes arguments.
Return the correct string according to this table which lists the strokes in order of priority;
top (highest) to bottom (lowest):

      Strokes	    |      Return
    1	            |   "Hole-in-one!"
    <= par - 2	    |   "Eagle"
    par - 1	        |   "Birdie"
    par	            |   "Par"
    par + 1         |   "Bogey"
    par + 2         |   "Double Bogey"
    >= par + 3	    |   "Go Home!"

par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.

- golfScore(4, 1) should return the string Hole-in-one!
- golfScore(4, 2) should return the string Eagle
- golfScore(5, 2) should return the string Eagle
- golfScore(4, 3) should return the string Birdie
- golfScore(4, 4) should return the string Par
- golfScore(1, 1) should return the string Hole-in-one!
- golfScore(5, 5) should return the string Par
- golfScore(4, 5) should return the string Bogey
- golfScore(4, 6) should return the string Double Bogey
- golfScore(4, 7) should return the string Go Home!
- golfScore(5, 9) should return the string Go Home!
 */
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only changed code below this line
    if (strokes === 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes === par - 1) {
        return names[2];
    } else if (strokes === par) {
        return names[3];
    } else if (strokes === par + 1) {
        return names[4];
    } else if (strokes === par + 2) {
        return names[5];
    } else {
        return names[6];
    }
    // Only changed code above this line
}

golfScore(5, 4);