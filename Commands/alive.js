const settings = require("../settings");

async function aliveCommand(sock, chatId) {
  try {
    const message = `*🤖 LADYBUG MD is Active!*\n\n` + 
                    `*Version:* ${settings.version}\n` + 
                    `*Status:* Online\n` + 
                    `*Mode:* Public\n\n` + 
                    `*🌟 Features:*\n` + 
                    `• Group Management\n` + 
                    `• Antilink Protection\n` + 
                    `• Fun Commands\n` + 
                    `• And more!\n\n` + 
                    `Type *.menu* for full command list`;

    const imageUrl = 'https://i.ibb.co/r2HHgh3Q/subzero-bot.jpg';
    const audioUrl = 'https://files.catbox.moe/a1w3a2.mp3'; // Replace with your audio URL

    await sock.sendMessage(chatId, {
      image: { url: imageUrl },
      caption: message,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363418886120432@newsletter',
          newsletterName: 'LADYBUG MD🚀',
          serverMessageId: -1
        }
      }
    });

    await sock.sendMessage(chatId, {
      audio: { url: audioUrl },
      mimetype: 'audio/mp4'
    });
  } catch (error) {
    console.error('Error in alive command:', error);
    await sock.sendMessage(chatId, { text: 'Bot is alive and running!' });
  }
}

module.exports = aliveCommand;