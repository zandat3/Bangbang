//base by Malibu
//re-upload? recode? copy code? give credit ya :)
//YouTube: @non
//Instagram: _m.a.l.i.b.u__
//Telegram: t.me/theetechpalace
//GitHub: @owlai01
//WhatsApp: +254712703241
//want more free bot scripts? subscribe to my telegram channel: https://t.me/+cBmC5dzy78Y2YzA0

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: _m.a.l.l.i.b.u__" //ur yt chanel name
global.socialm = "GitHub: owlai01" //ur github or insta name
global.location = "Kenya, Nairobi, Umoja" //ur location

//new
global.botname = 'BangBang Bot MD V11' //ur bot name
global.ownernumber = '254712703241' //ur owner number
global.ownername = '𝐌𝐀𝐋𝐈𝐁𝐔' //ur owner name
global.websitex = "https://t.me/+cBmC5dzy78Y2YzA0"
global.wagc = "https://chat.whatsapp.com/H3T9SI97DnOIgXc4VkuXSz"
global.themeemoji = '😂'
global.wm = "BangBang Bot Inc."
global.botscript = 'https://github.com/owlai01/Bangbang' //script link
global.packname = "Sticker By"
global.author = "𝐌𝐀𝐋𝐈𝐁𝐔\n\n+254712703241"
global.creator = "254712703241@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["254712703241"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
