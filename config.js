const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_54_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNixcbiAgICAgICAgOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEwLFxuICAgICAgICA5MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTgsXG4gICAgICAgIDY5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjYsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MyxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDgwLFxuICAgICAgICA1NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDk2LFxuICAgICAgICA5NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzksXG4gICAgICAgIDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDksXG4gICAgICAgIDUxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDc5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4LFxuICAgICAgICA0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNixcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMyLFxuICAgICAgICA4NCxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDgyLFxuICAgICAgICAyNixcbiAgICAgICAgMjAyLFxuICAgICAgICA1LFxuICAgICAgICA0NyxcbiAgICAgICAgODMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTksXG4gICAgICAgIDk2LFxuICAgICAgICAxNzksXG4gICAgICAgIDU4LFxuICAgICAgICAxNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDk1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODMsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEwLFxuICAgICAgICAzMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDg1LFxuICAgICAgICA0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQyLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3LFxuICAgI
"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
