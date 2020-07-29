token = ""//توكن


owner = ""//ايدي 


prefix = ""


game = "DEFAULT"


status = ONLINE


songinstatus=false

altprefix = "NONE"


success = "🎶"
warning = "💡"
error = "🚫"
loading = "⌚"
searching = "🔎"


help = help


npimages = false


stayinchannel = true


maxtime = 0


playlistsfolder = "Playlists"


// By default, the bot will DM the owner if the bot is running and a new version of the bot
// becomes available. Set this to false to disable this feature.

updatealerts=true


// Changing this changes the lyrics provider
// Currently available providers: "A-Z Lyrics", "Genius", "MusicMatch"
// At the time of writing, I would recommend sticking with A-Z Lyrics or MusicMatch,
// as Genius tends to have a lot of non-song results and you might get something 
// completely unrelated to what you want.
// If you are interested in contributing a provider, please see
// https://github.com/jagrosh/JLyrics

lyrics.default = "A-Z Lyrics"


// These settings allow you to configure custom aliases for all commands.
// Multiple aliases may be given, separated by commas.
//
// Example 1: Giving command "play" the alias "p":
// play = [ p ]
//
// Example 2: Giving command "search" the aliases "yts" and "find":
// search = [ yts, find ]

aliases {
  // General commands
  settings = [ status ]

  // Music commands
  lyrics = []
  nowplaying = [ np, current ]
  play = [p]
  playlists = [ pls ]
  queue = [ list ]
  remove = [ delete ]
  scsearch = []
  search = [ ytsearch ]
  shuffle = []
  skip = [ voteskip ]

  // Admin commands
  prefix = [ setprefix ]
  setdj = []
  settc = []
  setvc = []

  // DJ Commands
  forceremove = [ forcedelete, modremove, moddelete ]
  forceskip = [ modskip ]
  movetrack = [ move ]
  pause = []
  playnext = []
  repeat = []
  skipto = [ jumpto ]
  stop = []
  volume = [ vol ]
}

// If you set this to true, it will enable the eval command for the bot owner. This command
// allows the bot owner to run arbitrary code from the bot's account.
//
// WARNING:
// This command can be extremely dangerous. If you don't know what you're doing, you could
// cause horrific problems on your Discord server or on whatever computer this bot is running
// on. Never run this command unless you are completely positive what you are running.
//
// DO NOT ENABLE THIS IF YOU DON'T KNOW WHAT THIS DOES OR HOW TO USE IT
// IF SOMEONE ASKS YOU TO ENABLE THIS, THERE IS AN 11/10 CHANCE THEY ARE TRYING TO SCAM YOU

eval=false
