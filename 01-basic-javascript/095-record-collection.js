/*
Record Collection:
You are given an object literal representing a part of your musical album collection.
Each album has a unique id number as its key and several other properties. Not all albums have complete information.
You start with an updateRecords function that takes an object literal, records, containing the musical album collection,
an id, a prop (like artist or tracks), and a value.
Complete the function using the rules below to modify the object passed to the function.
Your function must always return the entire record collection object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album.

Note: A copy of the recordCollection object is used for the tests.

- After updateRecords(recordCollection, 5439, "artist", "ABBA"), artist should be the string ABBA
- After updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracks should have the string Take a Chance on Me as the last element.
- After updateRecords(recordCollection, 2548, "artist", ""), artist should not be set
- After updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), tracks should have the string Addicted to Love as the last element.
- After updateRecords(recordCollection, 2468, "tracks", "Free"), tracks should have the string 1999 as the first element.
- After updateRecords(recordCollection, 2548, "tracks", ""), tracks should not be set
- After updateRecords(recordCollection, 1245, "albumTitle", "Riptide"), albumTitle should be the string Riptide
 */
// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only changed code below this line
const EMPTY_STRING = "";
const TRACKS = "tracks";

function updateRecords(records, id, prop, value) {
    if (prop !== TRACKS && value !== EMPTY_STRING) {
        records[id][prop] = value;
    } else if (prop === TRACKS && !records[id].hasOwnProperty(TRACKS)) {
        records[id].tracks = [value];
    } else if (prop === TRACKS && value !== EMPTY_STRING) {
        records[id].tracks.push(value);
    } else if (value === EMPTY_STRING) {
        delete records[id][prop];
    }

    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');