const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function(library) {

       const listOfPlaylists = library.playlists
       
       for (let items in listOfPlaylists) {
              console.log(`${items}: ${listOfPlaylists[items].name}: - ${listOfPlaylists[items].tracks.length} tracks`)
       }
       
}

////////////////////////////////////////////////////////////////////////////////

printPlaylists(library)  //Test out function. 

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function(library) {
     const listOfTracks = library.tracks

       for (let items in listOfTracks){
              console.log(`${items}: ${listOfTracks[items].name} by ${listOfTracks[items].artist} (${listOfTracks[items].album})`)
       }
}

printTracks(library) // Test function above


////////////////////////////////////////////////////////////////////////////////


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  const chosenPlaylist = library.playlists[playlistId]

  if(!chosenPlaylist){
    console.log("Playlist doesnt exist!");
    return;
  }
  console.log(`${chosenPlaylist.id}: ${chosenPlaylist.name} - ${chosenPlaylist.tracks.length} tracks`)
 
  const listOfTracks = chosenPlaylist.tracks
  for(let track of listOfTracks){
   
    console.log(`${library.tracks[track].id}: ${library.tracks[track].name} by ${library.tracks[track].artist} (${library.tracks[track].album})`)
  }
}

printPlaylist("p01")


////////////////////////////////////////////////////////////////////////////////


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  const chosenPlaylist = library.playlists[playlistId].tracks
  chosenPlaylist.push(library.tracks[trackId].id)

  console.log(chosenPlaylist)
}

addTrackToPlaylist("t03","p01")
addTrackToPlaylist("t02","p02")


////////////////////////////////////////////////////////////////////////////////


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {
  const tracksObject = library.tracks
  const id = generateUid()
  tracksObject[id] = {
    id: id,
    name: name,
    artist: artist,
    album: album
}
console.log(tracksObject)
}


addTrack("Pies Descalzos", "Shakira", "Ojos Asi")

////////////////////////////////////////////////////////////////////////////////


// adds a playlist to the library
const addPlaylist = function(name) {
 
  const playlistObject =  library.playlists
  const id = generateUid()
  playlistObject[id] = {
    id: id,
    name: name,
    tracks: ["t01" , "t03"]
  }
  console.log(playlistObject)
}


addPlaylist("Ojos Asi")


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}