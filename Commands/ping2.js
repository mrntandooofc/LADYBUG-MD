const os = require('os');
const settings = require('../settings.js');

function formatTime(seconds) {
  const days = Math.floor(seconds / (24 * 60 * 60));
  seconds = seconds % (24 * 60 * 60);
  const hours = Math.floor(seconds / (60 * 60));
  seconds = seconds % (60 * 60);
  const minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);
  let time = '';
  if (days > 0) time += `${days}d `;
  if (hours > 0) time += `${hours}h `;
  if (minutes > 0) time += `${minutes}m `;
  if (seconds > 0 || time === '') time += `${seconds}s`;
  return time.trim();
}

async function pingCommand(sock, chatId, message) {
  try {
    const start = Date.now();
    await sock.sendMessage(chatId, { text: 'Pong!' });
    const end = Date.now();
    const ping = Math.round((end - start) / 2);
    const uptimeInSeconds = process.uptime();
    const uptimeFormatted = formatTime(uptimeInSeconds);
    const botInfo = ` ┏━━〔 🤖 🄻🄰🄳🅈🄱🅄🄶-🄼🄳-🄱🄾🅃 〕━━┓ ┃ ▰▰▰▱▱▱▱▱▱▱ ┃ *🟢 Ｏｎｌｉｎｅ* ┃ ┃ ✅ *ᴀʟɪᴠᴇ* : *ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴋɪᴄᴋɪɴɢ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ɴᴛᴀɴᴅᴏ ᴏꜰᴄ* ┃ 🚀 *ᴘɪɴɢ* : *${ping} ᴍꜱ* ┃ ⏱️ *ᴜᴘᴛɪᴍᴇ* : *${uptimeFormatted}* ┃ 🔖 *ᴠᴇʀꜱɪᴏɴ* : *v${settings.version}* ┃ ┃ 🤖 *Ｂｏｔｎａｍｅ* : *ʟᴀᴅʏʙᴜɢ-ᴍᴅ* ┃ 🧑‍💻 *Ｃｒｅａｔｏｒ* : *ᴍʀ ɴᴛᴀɴᴅᴏ ᴏꜰᴄ (🇿🇼)* ┃ 💜 *Ｓｕｐｐｏｒｔ* : *263771629199* ┃ ┃ ▰▰▰▱▱▱▱▱▱▱ ┃ *🟢 Ｏｎｌｉｎｅ* ┗━━━━━━━━━━━━━━━━━━━┛`.trim();

    const imageUrl = 'https://i.ibb.co/r2HHgh3Q/subzero-bot.jpg'; // Replace with your image URL
    const audioUrl = 'https://files.catbox.moe/a1w3a2.mp3'; // Replace with your audio URL

    await sock.sendMessage(chatId, {
      image: { url: imageUrl },
      caption: botInfo,
      quoted: message
    });

    await sock.sendMessage(chatId, {
      audio: { url: audioUrl },
      mimetype: 'audio/mp4',
      quoted: message
    });
  } catch (error) {
    console.error('Error in ping command:', error);
    await sock.sendMessage(chatId, { text: '❌ Failed to get bot status.' });
  }
}

module.exports = pingCommand;