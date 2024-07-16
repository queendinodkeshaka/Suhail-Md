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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_11_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDgyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTMsXG4gICAgICAgIDMsXG4gICAgICAgIDEyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDk0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDU1LFxuICAgICAgICA5MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDU0LFxuICAgICAgICA5MixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2MixcbiAgICAgICAgMTg3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNixcbiAgICAgICAgNDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDkzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTksXG4gICAgICAgIDExMixcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDEsXG4gICAgICAgIDE2LFxuICAgICAgICA1OCxcbiAgICAgICAgNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc3LFxuICAgICAgICA5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY2LFxuICAgICAgICA3NixcbiAgICAgICAgMTAyLFxuICAgICAgICA4LFxuICAgICAgICA4MixcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwLFxuICAgICAgICA2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDU1LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJuS3hNSUtPWkFPR1F4bkNDeVlhKzZOamJ1ZFZjRkw1dVFqYzQwR3pnaGhjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQQnJmdHZUS1RxSzNzclh0RTgtUjNRXCIsXG4gIFwicGhvbmVJZFwiOiBcImExODZhNmRmLTA1MDAtNGE4NC1iODllLTMwMjNhNzIxNTA4M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDIsXG4gICAgICA1LFxuICAgICAgOTAsXG4gICAgICA0MixcbiAgICAgIDYxLFxuICAgICAgMTgsXG4gICAgICAyMDAsXG4gICAgICAyMTMsXG4gICAgICAyMjYsXG4gICAgICAyMzEsXG4gICAgICAxNzgsXG4gICAgICAxMTQsXG4gICAgICAxNjEsXG4gICAgICAxODcsXG4gICAgICAxNDEsXG4gICAgICAyMzQsXG4gICAgICAxOSxcbiAgICAgIDEwOCxcbiAgICAgIDE1LFxuICAgICAgMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk5LFxuICAgICAgMTE1LFxuICAgICAgMTY4LFxuICAgICAgMTAzLFxuICAgICAgMTY0LFxuICAgICAgNjcsXG4gICAgICAxODAsXG4gICAgICA4OSxcbiAgICAgIDU4LFxuICAgICAgMjIxLFxuICAgICAgMTIyLFxuICAgICAgMTM3LFxuICAgICAgMjUxLFxuICAgICAgMjMwLFxuICAgICAgNSxcbiAgICAgIDIxNixcbiAgICAgIDIxMSxcbiAgICAgIDE5NSxcbiAgICAgIDk4LFxuICAgICAgMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWjcyNjREQkhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzc1MjU4NjU0OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3NzM4MzQ5MjExNzQ5OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3loMVBRSEVPemkyYlFHR0J3Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4a0doOHYzc3JIWlRHZHdwTzhoN2tZRWZscXlJaVRTd2l3c2krTlZNZXhrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm41RzBrSm15RSt5YTBSQ0NZa1ltaWtnRDlxamFlZXFYeFR4aDZDZDh4NEdRbDR0QWdFeWpHQTB3N3ljRWFETVE2ajNQK1cwUWxoTzBNblFSUXFEOERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInAySm84U205MVNPR20zZFV2STk2WlhTa2IrZ2sxdUVnMm42RjlIWks4Rnl2ekFBNmRBMWwvMmtJT2w2dnZhRFJHWTExQVIwRUZCTzRYVjNPTjRlRUNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzc1MjU4NjU0OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMTM1NDczXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
