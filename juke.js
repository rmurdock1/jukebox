//$(document).ready(function() {
//console.log("ready!");

/*
  $('#play').click(function() {
    var song = [];
    song = new Audio('music/Bob_Marley_Waiting_In_Vain.mp3', 'music/Childish Gambino - Red Bone.mp3', 'music/Kanye West - Heard Em Say.mp3');
    song.play();

  });
});
*/
//song constructor
var Song = function(path) {
  this.src = source;
  //this.src = ('music/Bob_Marley_Waiting_In_Vain.mp3');
  //this.src = ('music/Childish Gambino - Red Bone.mp3');
  //this.src = ('music/Kanye West - Heard Em Say.mp3');

};

class Jukebox {
  constuctor() {
    this.player = document.createElement('audio');
    this.playlist = [];
    this.playlist.push(new Song('music/Bob_Marley_Waiting_In_Vain.mp3'));
    //this.audio = $('#player')[0]
  }

  /*
    this.playlist = ['song1.mp3', 'song2.mp3', 'song3.mp3', 'song4.mp3']
    this.currentIndex = 0
    this.audio = $('#player')[0]
    this.audio.src = this.playlist[this.currentIndex]

    // console.log(this.audio)
  */
  displayPlaylist() {
    document.getElementById('player').innerHTML = '';
    this.playlist.forEach(function(current, index) {
      var html = '<div id="song-@id@">@path@</div>';
      html = html.replace('@id@', index);
      html = html.replace('@path@', current.src);
      document.getElementById('player').insertAdjacentHTML('beforeend', html);
    });

  }

  displayappendAudio() {
    this.player.src = this.playlist[0].src;
    document.getElementById('audio').appendChild(this.player);
    this.setUICurrent();
  };

  setNewSong() {
    this.player.src = this.playlist[this.playlist.length - 1].src;
  }

  //Determine what song is playing based on what is in the audio src
  setUICurrent() {
    var path = document.getElementById('audio').childNodes[0].src;
    path = path.split('/');
    path = 'music/' + path[path.length - 1];
    var sources = [];
    this.playlist.forEach(function(current) {
      sources.push(current.src);
    });
    document.getElementById('song-' + sources.indexOf(path)).classList.add('current');
  }

  play() {
    this.audio.play();
    // console.log(this.currentIndex)
  }

  pause() {
    this.audio.pause();
  }

  stop() {
    this.audio.stop();
    this.audio.currentTime = 0;
  }
  upload() {
    var newPath = document.getElementById('upload').value;
    newPath = newPath.split('/');
    newPath = 'music/' + newPath.pop();
    this.playlist.push(new Song(newPath));
    this.displayPlaylist();
    this.setNewSong();
  }
  /*
    this.next = function() {
      this.audio.pause();
      this.currentIndex++;
      if (this.currentIndex == this.playlist.length) {
        this.currentIndex = 0
      };
      this.audio.src = this.playlist[this.currentIndex];
      this.play();
    }
    this.prev = function() {
      this.audio.pause();
      this.currentIndex--;
      if (this.currentIndex <= 0) {
        this.currentIndex = this.playlist.length - 1
      };
      this.audio.src = this.playlist[this.currentIndex];
      this.play();
    }

  }
  */
  } //end jukebox

function init() {
    var jukebox = new Jukebox();

    jukebox.displayPlaylist();
    jukebox.displayappendAudio();

    //pass the play function by reference
    document.getElementById('play').addEventListener('click', function() {
      jukebox.play()
    });
    //$('#play').click(function() {
    //jukebox.play()
    //});
    /*
          $('#pause').click(function() {
            jukebox.pause()
          });
          $('#stop').click(function() {
            jukebox.stop()
          });
          $('#upload').click(function() {
            jukebox.upload()
          });
          /*$('#prevBtn').click(function() {
            thisIsMyJukebox.prev()
          })
          $('#nextBtn').click(function() {
          thisIsMyJukebox.next()
          })*/

  } //end init function
  init();




//}); //end jquery
