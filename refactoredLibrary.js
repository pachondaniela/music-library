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
             },
  printPlaylists: function() {

                  const listOfPlaylists = this.playlists
                  
                  for (let items in listOfPlaylists) {
                          console.log(`${items}: ${listOfPlaylists[items].name}: - ${listOfPlaylists[items].tracks.length} tracks`)
                  }
       
            },
  printTracks: function() {
                  const listOfTracks = this.tracks

                    for (let items in listOfTracks){
                            console.log(`${items}: ${listOfTracks[items].name} by ${listOfTracks[items].artist} (${listOfTracks[items].album})`)
                    }
            }, 
  printPlaylist: function(playlistId) {
                  const chosenPlaylist = this.playlists[playlistId]

                  if(!chosenPlaylist){
                      console.log("Playlist doesnt exist!");
                      return;
                      }
                  console.log(`${chosenPlaylist.id}: ${chosenPlaylist.name} - ${chosenPlaylist.tracks.length} tracks`)
                
                  const listOfTracks = chosenPlaylist.tracks
                  for(let track of listOfTracks){
                    console.log(`${this.tracks[track].id}: ${this.tracks[track].name} by ${this.tracks[track].artist} (${this.tracks[track].album})`)
                  }
              },
  addTrackToPlaylist: function(trackId, playlistId) {
                    const chosenPlaylist = this.playlists[playlistId].tracks
                    chosenPlaylist.push(this.tracks[trackId].id)
                    console.log(chosenPlaylist)
              },
  generateUid: function() {
                    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
              } ,
  addTrack: function(name, artist, album) {
              const tracksObject = this.tracks
              const id = this.generateUid()
              tracksObject[id] = {
                id: id,
                name: name,
                artist: artist,
                album: album
                }
                console.log(tracksObject)
              },
  addPlaylist: function(name) {
 
                const playlistObject =  this.playlists
                const id = this.generateUid()
                playlistObject[id] = {
                  id: id,
                  name: name,
                  tracks: ["t01" , "t03"]
                }
                console.log(playlistObject)
              }
};

library.printPlaylists()
library.printTracks()
library.printPlaylist("p01")
library.addTrackToPlaylist("t03","p01")
library.generateUid()
library.addTrack("Pies Descalzos", "Shakira", "Ojos Asi")


