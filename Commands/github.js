async function githubCommand(sock, chatId) {
    const repoInfo = `*🤖 𝙻𝙰𝙳𝚈𝙱𝚄𝙶-𝙼𝙳*

*📂 GitHub Repository:*
https://github.com/mrntandooofc/LADYBUG-MD

*📢 Official Channel:*
https://whatsapp.com/channel/0029Vb4yAGGIHphBnp4jaj2A

*🤖 LADYBUG BOT INC:*
https://chat.whatsapp.com/GcyHMvTJf8y5EytvfT8Jf0

*🇿🇼Dev:*
Mr Ntando ofc 

*💙 Support'*
+263771629199

_Star ⭐ the repository if you like the bot!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363401903613460@newsletter',
                    newsletterName: '𝙻𝙰𝙳𝚈𝙱𝚄𝙶-𝙼𝙳',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 