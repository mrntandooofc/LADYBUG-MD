const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, channelLink) {
    const helpMessage = `
╔═══════════════════╗
   *🐞 ${settings.botName || '𝙻𝙰𝙳𝚈𝙱𝚄𝙶-𝙼𝙳🇿🇼'}*  
   Version: *${settings.version || '2.0.0'}*
   by ${settings.botOwner || 'Mr Ntando ofc'}
   Developer: ᴍʀ ɴᴛᴀɴᴅᴏ ᴏꜰᴄ🇿🇼 
   Developer2: 𝚃𝚑𝚛𝚒_𝙸𝚜_𝙺𝚒𝚍
╚═══════════════════╝

*🐞𝙻𝙰𝙳𝚈𝙱𝚄𝙶-𝙼𝙳 commands 🐞:*
*🐞ᴍʀ ɴᴛᴀɴᴅᴏ ᴏꜰᴄ and 𝚃𝚑𝚛𝚒_𝙸𝚜_𝙺𝚒𝚍

╔═══════════════════╗
🐞 *🐞General Commands🐞*:
║ 🐞 .help or .menu
║ 🐞 .ping
║ 🐞 .alive
║ 🐞 .tts <text>
║ 🐞 .owner
║ 🐞 .joke
║ 🐞 .quote
║ 🐞 .fact
║ 🐞 .weather <city>
║ 🐞 .news
║ 🐞 .attp <text>
║ 🐞 .lyrics <song_title>
║ 🐞 .8ball <question>
║ 🐞 .groupinfo
║ 🐞 .staff or .admins 
║ 🐞 .vv
║ 🐞 .pair or .rent
╚═══════════════════╝

╔═══════════════════╗
🐞 *🐞Image/Sticker Commands🐞*:
║ 🐞 .blur <image>
║ 🐞 .simage <reply to sticker>
║ 🐞 .sticker <reply to image>
║ 🐞 .tgsticker <Link>
║ 🐞 .meme
║ 🐞 .take <packname> 
║ 🐞 .emojimix <emj1>+<emj2>
╚═══════════════════╝   

╔═══════════════════╗
🐞 *🐞Admin Commands🐞*:
║ 🐞 .ban @user
║ 🐞 .promote @user
║ 🐞 .demote @user
║ 🐞 .mute <minutes>
║ 🐞 .unmute
║ 🐞 .delete or .del
║ 🐞 .kick @user
║ 🐞 .warnings @user
║ 🐞 .warn @user
║ 🐞 .antilink
║ 🐞 .antibadword
║ 🐞 .clear
║ 🐞 .tag <message>
║ 🐞 .tagall
║ 🐞 .chatbot
║ 🐞 .resetlink
╚═══════════════════╝

╔═══════════════════╗
🐞 *🐞Owner Commands🐞*:
║ 🐞 .mode
║ 🐞 .autostatus
║ 🐞 .clearsession
║ 🐞 .antidelete
╚═══════════════════╝

╔═══════════════════╗
🐞 *🐞Github Commands🐞:*
║ 🐞 .git
║ 🐞 .github
║ 🐞 .sc
║ 🐞 .script
║ 🐞 .repo
╚═══════════════════╝

╔═══════════════════╗
🐞 *🐞Game Commands🐞*:
║ 🐞 .tictactoe @user
║ 🐞 .hangman
║ 🐞 .guess <letter>
║ 🐞 .trivia
║ 🐞 .answer <answer>
║ 🐞 .truth
║ 🐞 .dare
╚═══════════════════╝

╔═══════════════════╗
🐞 *🐞Fun Commands🐞*:
║ 🐞 .compliment @user
║ 🐞 .insult @user
║ 🐞 .flirt 
║ 🐞 .character @user
║ 🐞 .wasted @user
║ 🐞 .ship @user
║ 🐞 .simp @user
║ 🐞 .stupid @user [text]
╚═══════════════════╝

╔═══════════════════╗
🐞 *🐞Textmaker🐞*:
║ 🐞 .metallic <text>
║ 🐞 .ice <text>
║ 🐞 .snow <text>
║ 🐞 .impressive <text>
║ 🐞 .matrix <text>
║ 🐞 .light <text>
║ 🐞 .neon <text>
║ 🐞 .devil <text>
║ 🐞 .purple <text>
║ 🐞 .thunder <text>
║ 🐞 .leaves <text>
║ 🐞 .1917 <text>
║ 🐞 .arena <text>
║ 🐞 .hacker <text>
║ 🐞 .sand <text>
║ 🐞 .blackpink <text>
║ 🐞 .glitch <text>
║ 🐞 .fire <text>
╚═══════════════════╝

╔═══════════════════╗
🐞 *🐞Downloader🐞*:
║ 🐞 .play <song_name>
║ 🐞 .song <song_name>
╚═══════════════════╝

ᴩᴏᴡᴇʀᴇᴅ ʙy ᴍʀ ɴᴛᴀɴᴅᴏ ᴏꜰᴄ ᴀɴᴅ ᴛʜʀɪ_ɪꜱ_ᴋɪᴅ:`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '',
                        newsletterName: '𝙻𝙰𝙳𝚈𝙱𝚄𝙶-𝙼𝙳 🇿🇼',
                        serverMessageId: -1
                    }
                }
            });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '',
                        newsletterName: 'Mr Ntando ofc 🇿🇼',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
