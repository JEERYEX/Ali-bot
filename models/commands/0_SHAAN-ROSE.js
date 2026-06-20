const fs = require("fs");
module.exports.config = {
  name: "rose",
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
  if(react.includes("rose") ||
     react.includes("Rose") || react.includes("ROSE") || react.includes("RosE") ||
react.includes("rose") ||
react.includes("🌹")) {
    var msg = {
        body: `🌹𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐑𝐎𝐒𝐄 𝐋𝐎🌹`,attachment: fs.createReadStream(__dirname + `/ARIF-BABU/ROSE.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌹", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
