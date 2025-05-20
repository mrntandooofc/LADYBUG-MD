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

async function autobioCommand(sock, chatId, message) {
    try {
        const start = Date.now();
        await sock.sendMessage(chatId, { text: 'Pong!' });
        const end = Date.now();
        const ping = Math.round((end - start) / 2);

        const uptimeInSeconds = process.uptime();
        const uptimeFormatted = formatTime(uptimeInSeconds);

        const botInfo = `
┏━━〔 🤖 𝙻𝙰𝙳𝚈𝙱𝚄𝙶-𝙼𝙳 〕━━┓
┃ ▰▰▰▱▱▱▱▱▱▱
┃ *🟢 ONLINE*

┃ 🚀 Ping     : ${ping} ms
┃ ⏱️ Uptime   : ${uptimeFormatted}
┃ 🔖 Version  : v${settings.version}


┃ 🤖 Botname : LADYBUG MD
┃ 👑 Dev 	: *{Mr Ntando Ofc√}*
┗━━━━━━━━━━━━━━━━━━━┛`.trim();
await this.updateProfileStatus(bio).catch(_ => _)
    setting.status = new Date() * 1
  };

        // Reply to the original message with the bot info
        await sock.sendMessage(chatId, { text: botInfo, quoted: message });

    } catch (error) {
        console.error('Error in autobio command:', error);
        await sock.sendMessage(chatId, { text: '❌ Failed to get bot status.' });
    }
}

module.exports = autobioCommand;
