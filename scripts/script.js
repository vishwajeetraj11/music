new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "One Dance",
          artist: "Drake, WizKid, Kyla",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/1.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/1.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Lean On",
          artist: "Major Lazer, MØ, DJ Snake",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/2.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/2.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Sunflower - Spider-Man: Into the Spider-Verse",
          artist: "Post Malone, Swae Lee",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/3.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/3.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Can't Hold Us - feat. Ray Dalton",
          artist: "Macklemore & Ryan Lewis",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/4.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/4.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Somebody That I Used To Know",
          artist: "Gotye, Kimbra",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/5.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/5.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Rolling in the Deep",
          artist: "Adele",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/6.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/6.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "7 rings",
          artist: "Ariana Grande",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/7.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/7.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Wake Me Up",
          artist: "Avicii",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/8.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/8.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Love The Way You Lie",
          artist: "Eminem, Rihanna",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/9.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/9.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Shape of You",
          artist: "Ed Sheeran",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/10.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/10.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "bad guy",
          artist: "Billie Eilish",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/11.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/11.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Rather Be (feat. Jess Glynne)",
          artist: "Clean Bandit, Jess Glynne",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/12.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/12.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Call Me Maybe",
          artist: "Carly Rae Jepsen",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/13.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/13.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "We Are Young (feat. Janelle Monáe)",
          artist: "fun., Janelle Monáe",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/14.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/14.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Closer",
          artist: "The Chainsmokers, Halsey",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/15.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/15.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "See You Again (feat. Charlie Puth)",
          artist: "Wiz Khalifa, Charlie Puth",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/16.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/16.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Grenade",
          artist: "Bruno Mars",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/17.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/17.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Cheerleader - Felix Jaehn Remix",
          artist: "OMI, Felix Jaehn",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/18.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/18.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Radioactive",
          artist: "Imagine Dragons",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/19.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/19.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Señorita",
          artist: "Shawn Mendes, Camila Cabello",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/20.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/20.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Airplanes (feat. Hayley Williams of Paramore)",
          artist: "B.o.B, Hayley Williams",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/21.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/21.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "SAD!",
          artist: "XXXTENTACION",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/1.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/22.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Thrift Shop (feat. Wanz)",
          artist: "Macklemore, Ryan Lewis, Wanz",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/2.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/23.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Thinking out Loud",
          artist: "Ed Sheeran",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/3.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/24.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Summer",
          artist: "Calvin Harris",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/4.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/25.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "God's Plan",
          artist: "Drake",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/5.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/26.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Don't Let Me Down",
          artist: "The Chainsmokers, Daya",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/6.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/27.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "rockstar (feat. 21 Savage)",
          artist: "Post Malone, 21 Savage",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/7.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/28.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "I Took A Pill In Ibiza - Seeb Remix",
          artist: "Mike Posner, Seeb",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/8.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/29.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Despacito",
          artist: "Luis Fonsi, Daddy Yankee",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/9.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/30.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "HUMBLE.",
          artist: "Kendrick Lamar",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/10.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/31.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Old Town Road - Remix",
          artist: "Lil Nas X, Billy Ray Cyrus",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/11.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/32.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Waka Waka (This Time for Africa)",
          artist: "Shakira, Freshlyground",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/12.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/33.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Danza Kuduro",
          artist: "Don Omar, Lucenzo",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/13.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/34.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Dark Horse",
          artist: "Katy Perry, Juicy J",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/14.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/35.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Cheap Thrills",
          artist: "Sia",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/15.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/36.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Uptown Funk (feat. Bruno Mars)",
          artist: "Mark Ronson, Bruno Mars",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/16.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/37.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Despacito - Remix",
          artist: "Luis Fonsi, Daddy Yankee, Justin Bieber",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/17.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/38.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Only Girl (In The World)",
          artist: "Rihanna",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/18.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/39.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Psycho (feat. Ty Dolla $ign)",
          artist: "Post Malone, Ty Dolla $ign",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/19.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/40.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Happy - From Despicable Me 2",
          artist: "Pharrell Williams",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/20.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/41.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "On The Floor - Radio Edit",
          artist: "Jennifer Lopez, Pitbull",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/21.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/42.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Starships",
          artist: "Nicki Minaj",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/1.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/43.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Whistle",
          artist: "Flo Rida",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/2.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/44.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Party Rock Anthem",
          artist: "LMFAO, Lauren Bennett, GoonRock",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/3.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/45.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Something Just Like This",
          artist: "The Chainsmokers, Coldplay",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/4.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/46.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "All of Me",
          artist: "John Legend",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/5.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/47.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Let Her Go",
          artist: "Passenger",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/6.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/48.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Not Afraid",
          artist: "Eminem",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/7.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/49.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "In My Feelings",
          artist: "Drake",
          cover: "https://raw.githubusercontent.com/rishiraj/music/main/img/8.jpg",
          source: "https://raw.githubusercontent.com/rishiraj/music/main/mp3/50.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Mekanın Sahibi",
          artist: "Norm Ender",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/1.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Everybody Knows",
          artist: "Leonard Cohen",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/10.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/2.mp3",
          url: "https://www.youtube.com/watch?v=Lin-a2lTelg",
          favorited: true
        },
        {
          name: "Extreme Ways",
          artist: "Moby",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/11.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/3.mp3",
          url: "https://www.youtube.com/watch?v=ICjyAe9S54c",
          favorited: false
        },
        {
          name: "Butterflies",
          artist: "Sia",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/12.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/4.mp3",
          url: "https://www.youtube.com/watch?v=kYgGwWYOd9Y",
          favorited: false
        },
        {
          name: "The Final Victory",
          artist: "Haggard",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/13.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/5.mp3",
          url: "https://www.youtube.com/watch?v=0WlpALnQdN8",
          favorited: true
        },
        {
          name: "Genius ft. Sia, Diplo, Labrinth",
          artist: "LSD",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/14.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/6.mp3",
          url: "https://www.youtube.com/watch?v=HhoATZ1Imtw",
          favorited: false
        },
        {
          name: "The Comeback Kid",
          artist: "Lindi Ortega",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/15.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/7.mp3",
          url: "https://www.youtube.com/watch?v=me6aoX0wCV8",
          favorited: true
        },
        {
          name: "Overdose",
          artist: "Grandson",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/16.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/8.mp3",
          url: "https://www.youtube.com/watch?v=00-Rl3Jlx-o",
          favorited: false
        },
        {
          name: "Rag'n'Bone Man",
          artist: "Human",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/17.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
