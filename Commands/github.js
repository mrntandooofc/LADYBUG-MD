async function githubCommand(sock, chatId) {
    const repoInfo = `*🟢ＬＡＤＹＢＵＧ－ＭＤ ＳＣＲＩＰＴ🟢*
    
*📂 ʀᴇᴘᴏꜱɪᴛᴏʀʏ:* *ʟᴀᴅʏʙᴜɢ-ᴍᴅ* 
*👤 ᴅᴇᴠᴇʟᴏᴘᴇʀ:* *ᴍʀɴᴛᴀɴᴅᴏᴏᴏꜰᴄ*
*🔗 ᴜʀʟ:* https://github.com/mrntandooofc/LADYBUG-MD

*ꜱᴛᴀᴛᴜꜱ:* *ʟᴀᴅʏʙᴜɢ ɪꜱ ᴏɴʟɪɴᴇ😎*

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ɴᴛᴀɴᴅᴏ ᴏꜰᴄ (🇿🇼)*

*📥 ᴅᴏᴡɴʟᴏᴀᴅ:*
▸ ZIP Download(https://github.com/mrntandooofc/LADYBUG-MD/archive/refs/heads/main.zip)


_Star ⭐ the repository if you like the bot!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363418886120432@newsletter',
                    newsletterName: 'LADYBUG MD🚀|by Mr Ntando Ofc😎',
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