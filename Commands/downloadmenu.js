const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function downloadmenuCommand(sock, chatId, channelLink) {
    const menuMessage = `
┃◈╭─────────────────·๏
┃◈┃• 👑 Owner : *✧･ﾟ: ✧･ﾟ: 𝙼𝚛 𝙽𝚝𝚊𝚗𝚍𝚘 𝚘𝚏𝚌  :･ﾟ✧:･ﾟ✧ *
┃◈┃• ⚙️ Prefix : *[.]*
┃◈┃• 🌐 Platform : *Heroku*
┃◈┃• 📦 Version : *3.7.0 Bᴇᴛᴀ*
┃◈┃• 🤖 BotName : *LADYBUG MD*
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 📥 *DOWNLOAD MENU* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 🟦 .facebook
┃◈┃• 📁 .play
┃◈┃• 🎵 .play2 
┃◈┃• 🎵 .play3
┃◈┃• 📷 .instagram 
┃◈┃• 😘 .tiktok
┃◈┃• 🎵 .song
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷


╭─────────────···◈*
>  © 𝚙𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝙼𝚛 𝙽𝚝𝚊𝚗𝚍𝚘 𝚘𝚏𝚌 
╰─────────────╶╶···◈*

Join our channel for updates:`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.mp4');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363401903613460@newsletter',
                        newsletterName: '✧･ﾟ: ✧･ﾟ: 𝙼𝚛 𝙽𝚝𝚊𝚗𝚍𝚘 𝚘𝚏𝚌  :･ﾟ✧:･ﾟ✧',
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
                        newsletterJid: '120363401903613460@newsletter',
                        newsletterName: '✧･ﾟ: ✧･ﾟ: 𝙼𝚛 𝙽𝚝𝚊𝚗𝚍𝚘 𝚘𝚏𝚌  :･ﾟ✧:･ﾟ✧',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in downloadmenu command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = downloadmenuCommand;
