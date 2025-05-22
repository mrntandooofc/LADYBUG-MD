const settings = require("../settings");
async function aliveCommand(sock, chatId) {
    try {
        const message = `*🤖 𝙻𝙰𝙳𝚈𝙱𝚄𝙶-𝙼𝙳 is Active!*\n\n` +
                       `*Version:* ${settings.version}\n` +
                       `*Status:* Online\n` +
                       `*Mode:* Public\n\n` +
                       `*🌟 Features:*\n` +
                       `• Group Management\n` +
                       `• Antilink Protection\n` +
                       `• Fun Commands\n` +
                       `• And more!\n\n` +
                       `Type *.menu* for full command list`;

        await sock.sendMessage(chatId, {
            text: message,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363401903613460@newsletter',
                    newsletterName: '𝙻𝙰𝙳𝚈𝙱𝚄𝙶-𝙼𝙳',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Bot is alive and running!' });
    }
}

module.exports = aliveCommand;