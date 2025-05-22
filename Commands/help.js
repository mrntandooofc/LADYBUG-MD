const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, channelLink) {
    const helpMessage = `
    
>    *ᒪᗩᗪYᗷᑌG ᗰᗪ ᗷOT🤍*
>	 *𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : 𝟹.𝟽.𝟶 𝚋𝚎𝚝𝚊 🤍*


┃★╭──────────────
┃★│ 👑 Owner : *ᴍʀ ɴᴛᴀɴᴅᴏ ᴏꜰᴄ 🤍*
┃★│ 🤖 Baileys : *Multi Device*
┃★│ 💻 Type : *NodeJs*
┃★│ 🚀 Platform : *Heroku*
┃★│ ⚙️ Mode : *[Public]*
┃★│ 🔣 Prefix : *[.]*
┃★│ 🏷️ Version : *3.7.0 Bᴇᴛᴀ*
┃★│ 🤖 Botname : *ᒪᗩᗪYᗷᑌG ᗰᗪ ᗷOT 𝔅𝔢𝔱𝔞*
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
╭━━〔 *Menu List* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈│1️⃣  📥 *.Download Menu*
┃◈│2️⃣  👥 *.Group Menu*
┃◈│3️⃣  😄 *.Fun Menu*
┃◈│4️⃣  👑 *.Owner Menu*
┃◈│5️⃣  🤖 *.AI Menu*
┃◈│6️⃣  🎎 *.Anime Menu*
┃◈│7️⃣  🔄 *.Convert Menu*
┃◈│8️⃣  📌 *.Other Menu*
┃◈│9️⃣  💞 *.Reactions Menu*
┃◈│🔟  🏠 *.Main Menu*
┃◈╰───────────┈⊷
╰──────────────┈⊷

╭─────────────···◈ 
> 𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝙼𝚛 𝙽𝚝𝚊𝚗𝚍𝚘 𝚘𝚏𝚌 🇿🇼
╰─────────────╶╶···◈*

> ᒪᗩᗪYᗷᑌG ᗰᗪ ᗷOT🤍
> 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : 𝟹.𝟽.𝟶 𝚋𝚎𝚝𝚊



╭━━〔 📥 *DOWNLOAD MENU* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 📁 .play
┃◈┃• 🎵 .song
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷


╭─────────────···◈ 
>𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝙼𝚛 𝙽𝚝𝚊𝚗𝚍𝚘 𝚘𝚏𝚌 🇿🇼
╰─────────────╶╶···◈*



> Ｌａｄｙｂｕｇ ＭＤ🤍
> 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : 𝟹.𝟽.𝟶 𝚋𝚎𝚝𝚊

╭━━〔 👥 *GROUP MENU* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 🔗 antilink
┃◈┃• 👢 kick @user
┃◈┃• ⬆️ promote
┃◈┃• ⬇️ demote
┃◈┃• 🗑️ delete or .del
┃◈┃• ⚠️ .warmings @user
┃◈┃• ⚠️ .warn @user
┃◈┃• 🚷 .antibadword 
┃◈┃• 🏃 .ban @user
┃◈┃• 🔇 mute
┃◈┃• 🔊 unmute
┃◈┃• #️⃣ tag
┃◈┃• ️⃣ tagall
┃◈┃• ☢️ .resetlink
┃◈┃• 🔀 .clear
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷


╭─────────────···◈ 
>𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝙼𝚛 𝙽𝚝𝚊𝚗𝚍𝚘 𝚘𝚏𝚌 🇿🇼
╰─────────────╶╶···◈*

> Ｌａｄｙｂｕｇ ＭＤ🤍
> 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : 𝟹.𝟽.𝟶 𝚋𝚎𝚝𝚊


━━〔 🎉 *FUN MENU* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 🤪 .compliment @user
┃◈┃• ⭐ .insult @user
┃◈┃• 😊 .firt
┃◈┃• 💘 .wasted @user
┃◈┃• 🎭 .character
┃◈┃• 😇 .ship @user
┃◈┃• 😆 .simp @user
┃◈┃• ❤️ .stupid @user [text]
┃◈╰────────────

╭─────────────···◈ 
>𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝙼𝚛 𝙽𝚝𝚊𝚗𝚍𝚘 𝚘𝚏𝚌 🇿🇼
╰─────────────╶╶···◈*

> Ｌａｄｙｂｕｇ ＭＤ🤍
> 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : 𝟹.𝟽.𝟶 𝚋𝚎𝚝𝚊


╭━━〔 👑 *OWNER MENU* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 📜 .menu
┃◈┃• 📜 .arise ladybug
┃◈┃• 📊 .vv
┃◈┃• ♻️ .clearsession
┃◈┃• ✅ .autostatus 
┃◈┃• 📦 .repo
┃◈┃• 🚫 .ban
┃◈┃• ✅ .unban
┃◈┃• 🖼️ .antidelete 
┃◈┃• 📸 .setpp
┃◈┃• ♻️ .cleartmp
┃◈┃• 🤖 .mode
┃◈┃• 🎵 .play2
┃◈┃• 🎵 .play3
┃◈┃• 🟦 .facebook
┃◈┃• 📷 .instagram 
┃◈┃• 😘 .tiktok
┃◈┃• 🤖 .chatbot on/off
┃◈╰────────────

╭─────────────···◈ 
>𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝙼𝚛 𝙽𝚝𝚊𝚗𝚍𝚘 𝚘𝚏𝚌 🇿🇼
╰─────────────╶╶···◈*

> Ｌａｄｙｂｕｇ ＭＤ🤍
> 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : 𝟹.𝟽.𝟶 𝚋𝚎𝚝𝚊


╭━━〔 🤖 *AI MENU* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 🧠 .ntandoai
┃◈┃• 🤖 .gpt
┃◈┃• 🤖 .ladybugai
┃◈╰────────────

╭─────────────···◈ 
>𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝙼𝚛 𝙽𝚝𝚊𝚗𝚍𝚘 𝚘𝚏𝚌 🇿🇼
╰─────────────╶╶···◈*

> Ｌａｄｙｂｕｇ ＭＤ🤍
> 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : 𝟹.𝟽.𝟶 𝚋𝚎𝚝𝚊


╭─────────────···◈
> 𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝙼𝚛 𝙽𝚝𝚊𝚗𝚍𝚘 𝚘𝚏𝚌 🇿🇼
╰─────────────╶╶···◈*

Join our channel for updates:`;

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
                        newsletterJid: '120363401903613460@newsletter',
                        newsletterName: 'LADYBUG',
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
                        newsletterName: 'Ladybug',
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
