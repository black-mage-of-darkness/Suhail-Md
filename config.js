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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_41_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE1LFxuICAgICAgICA4NixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDYwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA5NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjksXG4gICAgICAgIDU4LFxuICAgICAgICA2NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQyLFxuICAgICAgICAzLFxuICAgICAgICAyMixcbiAgICAgICAgMTc3LFxuICAgICAgICA4MixcbiAgICAgICAgMTYsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDU3LFxuICAgICAgICAzMixcbiAgICAgICAgMTU4LFxuICAgICAgICA2NyxcbiAgICAgICAgODcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY5LFxuICAgICAgICA5NixcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyLFxuICAgICAgICAxOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcyLFxuICAgICAgICA3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDgxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODUsXG4gICAgICAgIDg0LFxuICAgICAgICAxOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM5LFxuICAgICAgICA1OCxcbiAgICAgICAgOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMSxcbiAgICAgICAgMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NCxcbiAgICAgICAgODMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NixcbiAgICAgICAgMTcyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODksXG4gICAgICAgIDg0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA1NixcbiAgICAgICAgMTE4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MixcbiAgICAgICAgMTA0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk1LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidDJ1WERiV09tUHVtUCtESE9EVDZpdzdEZTZzZ0FwcUpBeTRmb0dQbkt0WT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWmxoMTJ3Y05UaXV1dEVyLXVERmo2d1wiLFxuICBcInBob25lSWRcIjogXCJhMzhlZGZiNC00YjM0LTQ1NDQtYWJmMi1jY2E2Njc3ZTcyMDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODgsXG4gICAgICAxODksXG4gICAgICA5NSxcbiAgICAgIDE5LFxuICAgICAgOCxcbiAgICAgIDIzMixcbiAgICAgIDE1NyxcbiAgICAgIDE4NixcbiAgICAgIDI0LFxuICAgICAgMTk0LFxuICAgICAgMTU0LFxuICAgICAgMTIxLFxuICAgICAgMTU3LFxuICAgICAgMjI2LFxuICAgICAgMTksXG4gICAgICAxMTUsXG4gICAgICAxNjAsXG4gICAgICAyMzcsXG4gICAgICA4NCxcbiAgICAgIDE0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTIsXG4gICAgICAyMCxcbiAgICAgIDEzMCxcbiAgICAgIDI0OCxcbiAgICAgIDEsXG4gICAgICAxODAsXG4gICAgICAxNjAsXG4gICAgICAxMzQsXG4gICAgICA2OCxcbiAgICAgIDExNixcbiAgICAgIDMzLFxuICAgICAgMjM5LFxuICAgICAgMzEsXG4gICAgICAyNTEsXG4gICAgICAyMDUsXG4gICAgICAxODEsXG4gICAgICA3NCxcbiAgICAgIDI0NCxcbiAgICAgIDM4LFxuICAgICAgMjM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldQUloxRDgyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjY3NTYyMzMzMzo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi6qeB8J2UnPCdlJ7wnZSq8J2Upn7mmpfpl4d+8J2UlvCdlLLwnZSo8J2UovCdlKXwnZSm8J2Ur/CdlKzqp4JcIixcbiAgICBcImxpZFwiOiBcIjI1ODM1NTIxODExNjc1MTo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09mOHY1WUNFTmVZb2JRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiS1FXblRqTWs5WXU4V3RPOTdsQTExOUdSUnpNNW1YalBpdHFTZnJWeUlrUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJTUSsybm9OQ1JYb1pXY0dmMlY5T08yWW5aOXc4SlhnSzZ6d3hxWTdSR0FBbWk1bS8yNHFpRlJtbVRYMWV6L0R2Y1VXd2UwNGtmMEZDeEtNdkduckhEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmT0RGUFdoS1pxbkxVVGJ6MDVybjJ5WDRid2IxT2w4OFBGOSt4MFJuM2VZRTBWLzBGUTVUeGhnYmRmaTUrcTNrcVgyUjJWTXhxM3R6LzYwalRjd1lCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjY3NTYyMzMzMzo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDIwODQ3NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlzOVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSXM5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwicXhYWHFpOHg3T3hNY05CbzduSzY0eUpab1lUN0pWMURMZE42ZHVLaUxPcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1ODQwNTY0MjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTEyODUwODk4OVwifSIKfQ=="  // PUT your SESSION_ID 


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
