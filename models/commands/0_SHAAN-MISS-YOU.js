const fs = require("fs");
module.exports.config = {
  name: "miss",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "JERRY BABU", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("MISS") ||
     react.includes("miss") || react.includes("याद") || react.includes("Miss") ||
react.includes("miss you") ||
react.includes("MISS YOU")) {
    var msg = {
        body: `‌𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐓𝐎 𝐌𝐀𝐑𝐈 𝐉𝐀𝐀𝐍 😇`,attachment: fs.createReadStream(__dirname + `/SHAN-KHAN/MISS-YOU.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😻", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
