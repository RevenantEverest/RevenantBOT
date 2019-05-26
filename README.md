# FiresideBOT  
A Music, Economy, & Admin Discord Bot written in Node.js  

###### Current Version: v1.4.0  
[HelpDocs](help.firesidebot.com) || [Invite](https://discordapp.com/oauth2/authorize?client_id=441338104545017878&response_type=code&permissions=8&scope=bot) || [Online Control Panel](firesidebot.com)  

---  

## Table of Contents  

| Category                 | Subcategory
| -------------            |:-------------
| [Commands](#Commands)    | [Admin](#Admin), [Economy](#Economy), [Fun](#Fun), [GameStats](#GameStats), [Info](#Info), [Music](#Music), [Other](#Other), [Support](#Support), 

---  

# Features  

---  

### Commands  
`<param>` indicates a required parameter while `[param]` indicates an optional parameter  

---  

<a id="Admin"></a>  

#### Admin  

- [Ban](https://help.firesidebot.com/commands/ban) `<param>`  
**Desc**: Bans a user  
**Aliases**:   
**Params**: Tag 
 Optional Param  
**Example**: `?ban @RevenantEverest 5 His memes are low tier`  

- [Config](https://help.firesidebot.com/commands/config) `[param]`  
**Desc**: Configure FiresideBOT  
**Aliases**:   
**Params**:   
**Flags**: `-p` `-cn` `-cir`   
**Example**: `?config`  

- [Purge](https://help.firesidebot.com/commands/purge) `[param]`  
**Desc**: Bulk delete messages  
**Aliases**:   
**Params**: @Tag / Amount  
**Example**: `?purge @RevenantEverest 20`  

- [RemoveTracker](https://help.firesidebot.com/commands/removetracker) `<param>`  
**Desc**: Deletes a Tracker  
**Aliases**: `rtracker` `rt`   
**Params**: Tracker ID  
**Flags**: `-t`   
**Example**: `?removetracker -t 53`  

- [TwitchTracker](https://help.firesidebot.com/commands/twitchtracker) `<param>`  
**Desc**: Creates a tracker for a Twitch User that posts when they're live to a text channel  
**Aliases**: `tt` `ttracker`   
**Params**: Twitch Username / #Channel Tag / @Role Tag  
**Example**: `?twitchtracker RevenantEverest #bot-commands`  

  

--- 

<a id="Economy"></a>  

#### Economy  

- [Balance](https://help.firesidebot.com/commands/balance)   
**Desc**: Displays currenct balance for Server  
**Aliases**: `bal`   
**Example**: `?balance`  

- [Gamble](https://help.firesidebot.com/commands/gamble) `<param>`  
**Desc**: Test your luck and win big  
**Aliases**:   
**Params**: An amount to wager  
**Example**: `?gamble 10`  

- [Give](https://help.firesidebot.com/commands/give) `<param>`  
**Desc**: Gives a currency amount to desired recipient, from your balance  
**Aliases**:   
**Params**: Mention / Amount  
**Example**: `?give @YourFavoritePerson 100`  

  

--- 

<a id="Fun"></a>  

#### Fun  

- [8Ball](https://help.firesidebot.com/commands/8ball) `<param>`  
**Desc**: Returns a Yes or No style response  
**Aliases**: `eightball` `fortune`   
**Params**: Question  
**Example**: `?8ball Am I a good developer?`  

- [Pokemon](https://help.firesidebot.com/commands/pokemon) `[param]`  
**Desc**: Displays a random or specific Pokemon  
**Aliases**:   
**Params**: ID or Name  
**Flags**: `-i`   
**Example**: `?pokemon Manaphy -i`  

- [Roll](https://help.firesidebot.com/commands/roll) `[param]`  
**Desc**: Rolls any number sided dice (Default is 6)  
**Aliases**: `dice`   
**Params**: Number  
**Example**: `?roll 20`  

  

--- 

<a id="GameStats"></a>  

#### GameStats  

- [Apex](https://help.firesidebot.com/commands/apex) `<param>`  
**Desc**: Displays relevant stats for your most recent Apex Legend  
**Aliases**:   
**Params**: Username, Platform  
**Example**: `?apex RevenantEverest pc`  

- [Fortnite](https://help.firesidebot.com/commands/fortnite) `<param>`  
**Desc**: Displays relevant Fortnite stats  
**Aliases**: `fn`   
**Params**: Username, Platform  
**Example**: `?fortnite RevenantEverest pc`  

- [Overwatch](https://help.firesidebot.com/commands/overwatch) `<param>`  
**Desc**: Displays relevant Competitive and Quick Play stats for Overwatch  
**Aliases**: `ow`   
**Params**: Region, Platform, Battletag  
**Example**: `?overwatch pc us Revenant#11470`  

- [RainbowSix](https://help.firesidebot.com/commands/rainbowsix) `<param>`  
**Desc**: Displays relevant stats for your most recent Apex Legend  
**Aliases**: `r6` `rainbowsix` `rainbowsix`   
**Params**: Username, Platform  
**Example**: `?apex RevenantEverest uplay`  

  

--- 

<a id="Info"></a>  

#### Info  

- [BotInfo](https://help.firesidebot.com/commands/botinfo)   
**Desc**: Displays relevant Bot info  
**Aliases**: `stats` `bi`   
**Example**: `?botinfo`  

- [Poll](https://help.firesidebot.com/commands/poll) `<param>`  
**Desc**: Creates a new Poll  
**Aliases**:   
**Params**:   
**Flags**: `-q` `-a` `-t`   
**Example**: `?poll -q How is everyone enjoying FiresideBOT? -a It's amazing -a It's okay -a Developer is bad :eyes: -t 60`  

- [Roles](https://help.firesidebot.com/commands/roles)   
**Desc**: Displays availale Roles  
**Aliases**:   
**Example**: `?roles`  

- [ServerInfo](https://help.firesidebot.com/commands/serverinfo)   
**Desc**: Displays relevant Server Info  
**Aliases**: `si`   
**Example**: `?serverinfo`  

- [Trackers](https://help.firesidebot.com/commands/trackers)   
**Desc**: Displays available Trackers  
**Aliases**:   
**Example**: `?trackers`  

- [TwitchInfo](https://help.firesidebot.com/commands/twitchinfo) `<param>`  
**Desc**: Displays relevant info about a Twitch User  
**Aliases**: `ti` `twitch`   
**Params**: Twitch Username  
**Example**: `?twitchinfo RevenantEverest`  

- [UserInfo](https://help.firesidebot.com/commands/userinfo)   
**Desc**: Displays relevant User Info  
**Aliases**: `ui`   
**Example**: `?userinfo`  

- [Weather](https://help.firesidebot.com/commands/weather) `<param>`  
**Desc**: Displays the current weather for the spcified City  
**Aliases**: `w`   
**Params**: City Name  
**Example**: `?weather New York`  

  

--- 

<a id="Music"></a>  

#### Music  

- [AddSong](https://help.firesidebot.com/commands/addsong) `<param>`  
**Desc**: Adds a song to your playlist from  
**Aliases**:   
**Params**: Playlist Name and/or Song Request  
**Example**: `?addsong Chillstep Better Now Post Malone`  

- [Autoplay](https://help.firesidebot.com/commands/autoplay)   
**Desc**: Enables or Disables music recommendations  
**Aliases**:   
**Example**: `?autoplay`  

- [Clear](https://help.firesidebot.com/commands/clear)   
**Desc**: Clears the current queue  
**Aliases**:   
**Example**: `?clear`  

- [CreatePlaylist](https://help.firesidebot.com/commands/createplaylist) `<param>`  
**Desc**: Create a playlist  
**Aliases**: `cp`   
**Params**: Name  
**Example**: `?createplaylist Lo-Fi`  

- [DeletePlaylist](https://help.firesidebot.com/commands/deleteplaylist) `<param>`  
**Desc**: Deletes a Playlist  
**Aliases**: `dp` `delplaylist` `delplay`   
**Params**: Name  
**Example**: `?deleteplaylist Lo-Fi`  

- [Delsong](https://help.firesidebot.com/commands/delsong) `<param>`  
**Desc**: Deletes a song from the queue  
**Aliases**: `ds`   
**Params**: ID  
**Example**: `?delsong 4`  

- [Loop](https://help.firesidebot.com/commands/loop)   
**Desc**: Toggles queue looping  
**Aliases**:   
**Example**: `?loop`  

- [Lyrics](https://help.firesidebot.com/commands/lyrics) `[param]`  
**Desc**: Displays lyrics for a song along with relevant song info  
**Aliases**:   
**Params**: Song name  
**Example**: `?lyrics Trust in me Mr Fijiwiji`  

- [MusicOptions](https://help.firesidebot.com/commands/musicoptions) `[param]`  
**Desc**: Displays current Music Options  
**Aliases**: `mo`   
**Params**: undefined  
**Flags**: `-l` `-r`   
**Example**: `?musicoptions`  

- [NP](https://help.firesidebot.com/commands/np)   
**Desc**: Displays the Current Song  
**Aliases**: `currentsong` `nowplaying` `cs`   
**Example**: `?np`  

- [Pause](https://help.firesidebot.com/commands/pause)   
**Desc**: Pauses music  
**Aliases**:   
**Example**: `?pause`  

- [Play](https://help.firesidebot.com/commands/play) `<param>`  
**Desc**: Plays request  
**Aliases**: `p`   
**Params**: YouTube Link or Search Request  
**Example**: `?play kingdom hearts sanctuary`  

- [Playlist](https://help.firesidebot.com/commands/playlist) `[param]`  
**Desc**: Displays available playlists or requests your Playlist to the queue  
**Aliases**: `playlists`   
**Params**: Playlist Name  
**Flags**: `-i` `-s`   
**Example**: `?playlist Chillstep -s`  

- [PlayNext](https://help.firesidebot.com/commands/playnext) `<param>`  
**Desc**: Requests a song to play next in queue  
**Aliases**: `pn`   
**Params**: YouTube link or search  
**Example**: `?playnext bring me the horizon can you feel my heart`  

- [Promote](https://help.firesidebot.com/commands/promote) `<param>`  
**Desc**: Promotes a song to next in queue  
**Aliases**:   
**Params**: ID  
**Example**: `?promote 7`  

- [Queue](https://help.firesidebot.com/commands/queue)   
**Desc**: Displays the queue  
**Aliases**: `q`   
**Example**: `?queue`  

- [RemoveSong](https://help.firesidebot.com/commands/removesong) `<param>`  
**Desc**: Removes a song from a playlist  
**Aliases**:   
**Params**: Name / ID  
**Example**: `?removesong 189`  

- [Resume](https://help.firesidebot.com/commands/resume)   
**Desc**: Resumes any previously paused music  
**Aliases**: `unpause`   
**Example**: `?resume`  

- [ServerPlaylist](https://help.firesidebot.com/commands/serverplaylist) `[param]`  
**Desc**: Mmm mmm good  
**Aliases**:   
**Params**: Playlist Name  
**Example**: `?serverplaylist MyFavoriteSongs`  

- [Skip](https://help.firesidebot.com/commands/skip)   
**Desc**: Skips to next song in queue  
**Aliases**:   
**Example**: `?skip`  

- [SongInfo](https://help.firesidebot.com/commands/songinfo) `<param>`  
**Desc**: Displays relevant info about a song  
**Aliases**:   
**Params**: Song Name  
**Example**: `?songinfo Beartooth Clever`  

- [Stop](https://help.firesidebot.com/commands/stop)   
**Desc**: Stops and clears the queue  
**Aliases**:   
**Example**: `?stop`  

- [Volume](https://help.firesidebot.com/commands/volume) `[param]`  
**Desc**: Displays current volume or sets volume  
**Aliases**: `vol`   
**Params**: Number  
**Example**: `?volume 20`  

  

--- 

<a id="Other"></a>  

#### Other  

- [Emojis](https://help.firesidebot.com/commands/emojis)   
**Desc**: Displays the servers custom emojis  
**Aliases**:   
**Example**: `?emojis`  

- [Leave](https://help.firesidebot.com/commands/leave)   
**Desc**: Removes Fireside from your server  
**Aliases**:   
**Example**: `?leave`  

- [Ping](https://help.firesidebot.com/commands/ping)   
**Desc**: Pong  
**Aliases**:   
**Example**: `?undefined`  

  

--- 

<a id="Support"></a>  

#### Support  

- [Feedback](https://help.firesidebot.com/commands/feedback) `<param>`  
**Desc**: Submit feedback to the Fireside Dev Team  
**Aliases**:   
**Params**: Message you'd like to send as Feedback  
**Example**: `?feedback This bot could be better`  

- [Help](https://help.firesidebot.com/commands/help) `[param]`  
**Desc**: Displays Help embed  
**Aliases**:   
**Params**: Category or Command  
**Example**: `?help economy`  

- [Support](https://help.firesidebot.com/commands/support)   
**Desc**: Sends a link to the Support Discord Server  
**Aliases**:   
**Example**: `?support`  

  

--- 

