async function githubCommand(sock, chatId) {
    const repoInfo = `*🤖 𝙻𝙰𝙳𝚈𝙱𝚄𝙶-𝙼𝙳*

*📂 GitHub Repository:*
https://github.com/mrntandooofc/LADYBUG-MD-V2

*📢 Official Channel:*
https://whatsapp.com/channel/0029Vb4yAGGIHphBnp4jaj2A

*🐞 Whatsapp group:*
https://chat.whatsapp.com/GcyHMvTJf8y5EytvfT8Jf0

*👑 My API Site:*
https://ntandoofc-api.vercel.app/

_Star ⭐ the repository if you like the bot!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '12036wsletter',
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