const fs = require("fs");
module.exports.config = {
        name: "TharKi",
    version: "1.1.1",
        hasPermssion: 0,
        credits: "JERRY", 
        description: "THIS BOT IS SHAAN",
        commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        let react = event.body.toLowerCase();
        if(react.includes("THARKI") ||
     react.includes("Tharki") || react.includes("tharki") || react.includes("𝐓𝐇𝐀𝐑𝐊𝐈") ||
react.includes("𝚃𝙷𝙰𝚁𝙺𝙸") ||
react.includes(" ＴＨＡＲＫＩ")) {
                var msg = {
                                body: `𝐓𝐔 𝐓𝐇𝐀𝐑𝐊𝐈 𝐓𝐄𝐑𝐈 𝐆𝐅 𝐓𝐇𝐀𝐑𝐊𝐈 𝐓𝐄𝐑𝐄 𝐀𝐀𝐍𝐄 𝐖𝐀𝐋𝐄 𝐁𝐀𝐂𝐇𝐇𝐄 𝐓𝐇𝐀𝐑𝐊𝐈  😏😏😼😼😼`,
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😆", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {
