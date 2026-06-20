const fs = require("fs");
module.exports.config = {
  name: "nacho",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "JERRY BABU", 
  description: "Just",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("nacho") ||
     react.includes("Nacho") || react.includes("NACHO") || react.includes("nicho") ||
react.includes("naco") ||
react.includes("NACO")) {
    var msg = {
        body: `𝐍𝐀𝐂𝐇𝐎 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐍𝐀𝐂𝐇𝐎 🙂🤟 ❜`,attachment: fs.createReadStream(__dirname + `/SHAN-KHAN/DANCE.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥳", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
