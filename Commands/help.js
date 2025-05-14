const settings = require("../settings");
const fs = require('fs');
const path = require("path");
async function helpCommand(_0x388974, _0x215cfa, _0x360cff) {
  const _0x27840d = "\n    \n> badness_loaded\n╭─────────────···◈ \n*┋*   *🤖 Creator || 'Mr Ntando Ofc🇿🇼*  \n*┋* Version: *" + (settings.version || "2.0.0") + "*\n*┋*   by " + (settings.botOwner || "Mr Ntando Ofc") + "\n*┋*  RAM: 89:00MB/15993MB\n*┋* Prefix: .\n*┋* 𝚛𝚞𝚗𝚝𝚒𝚖𝚎: ${runtime(process.uptime())}╰─────────────╶╶···◈*\n\n> ｌａｄｙｂｕｇ－ＭＤ－Ｂｏｔ🤖\n\n╰─────────────╶╶···◈*\n\n*Available Commands:*\n\n>𝙻𝙰𝙳𝚈𝙱𝚄𝙶-𝙼𝙳:\n╭─────────────···◈ \n*┋* ➤ .ntando or .menu\n*┋* ➤ .ping\n*┋* ➤ .alive\n*┋* ➤ .tts <text>\n*┋* ➤ .owner\n*┋* ➤ .joke\n*┋* ➤ .quote\n*┋* ➤ .fact\n*┋* ➤ .weather <city>\n*┋* ➤ .news\n*┋* ➤ .attp <text>\n*┋* ➤ .lyrics <song_title>\n*┋* ➤ .8ball <question>\n*┋* ➤ .groupinfo\n*┋* ➤ .staff or .admins \n*┋* ➤ .vv\n*┋* ➤ .pair or .rent\n╰─────────────╶╶···◈*\n\n> 𝙻𝙰𝙳𝚈𝙱𝚄𝙶 𝙸𝚖𝚊𝚐𝚎/𝚂𝚝𝚒𝚌𝚔𝚎𝚛 𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜:\n╭─────────────···◈ \t\n*┋* ➤ .blur <image>\n*┋* ➤ .simage <reply to sticker>\n*┋* ➤ .sticker <reply to image>\n*┋* ➤ .tgsticker <Link>\n*┋* ➤ .meme\n*┋* ➤ .take <packname> \n*┋* ➤ .emojimix <emj1>+<emj2>\n╰─────────────╶╶···◈*   \n\n> 𝙻𝙰𝙳𝚈𝙱𝚄𝙶 𝙰𝚍𝚖𝚒𝚗 𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜:\n╭─────────────···◈\n*┋* ➤ .ban @user\n*┋* ➤ .promote @user\n*┋* ➤ .demote @user\n*┋* ➤ .mute <minutes>\n*┋* ➤ .unmute\n*┋* ➤ .delete or .del\n*┋* ➤ .kick @user\n*┋* ➤ .warnings @user\n*┋* ➤ .warn @user\n*┋* ➤ .antilink\n*┋* ➤ .antibadword\n*┋* ➤ .clear\n*┋* ➤ .tag <message>\n*┋* ➤ .tagall\n*┋* ➤ .chatbot\n*┋* ➤ .resetlink\n╰─────────────╶╶···◈*\n\n> 𝙻𝙰𝙳𝚈𝙱𝚄𝙶 𝙾𝚠𝚗𝚎𝚛 𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜:\n╭─────────────···◈ \n*┋* ➤ .mode\n*┋* ➤ .autostatus\n*┋* ➤ .clearsession\n*┋* ➤ .antidelete\n*┋* ➤ .cleartmp\n*┋* ➤ .setpp <reply to image>\n╰─────────────╶╶···◈*\n\n> 𝙻𝙰𝙳𝚈𝙱𝚄𝙶 𝙶𝚒𝚝𝚑𝚞𝚋 𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜:\n╭─────────────···◈ \n*┋* ➤ .mrntando\n*┋* ➤ .github\n*┋* ➤ .sc\n*┋* ➤ .script\n*┋* ➤ .ofc\n╰─────────────╶╶···◈*\n\n> 𝙻𝙰𝙳𝚈𝙱𝚄𝙶 𝙶𝚊𝚖𝚎 𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜:\n╭─────────────···◈ \n*┋* ➤ .tictactoe @user\n*┋* ➤ .hangman\n*┋* ➤ .guess <letter>\n*┋* ➤ .trivia\n*┋* ➤ .answer <answer>\n*┋* ➤ .truth\n*┋* ➤ .dare\n╰─────────────╶╶···◈*\n\n> 𝚕𝚊𝚍𝚢𝚋𝚞𝚐 𝙰𝙸 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜:\n╭─────────────···◈ \n*┋* ➤ .gpt <question>\n*┋* ➤ .gemini <question>\n╰─────────────╶╶···◈*\n\n> 𝙻𝙰𝙳𝚈𝙱𝚄𝙶 𝙵𝚞𝚗 𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜:\n╭─────────────···◈ \n*┋* ➤ .compliment @user\n*┋* ➤ .insult @user\n*┋* ➤ .flirt \n*┋* ➤ .character @user\n*┋* ➤ .wasted @user\n*┋* ➤ .ship @user\n*┋* ➤ .simp @user\n*┋* ➤ .stupid @user [text]\n╰─────────────╶╶···◈*\n\n> 𝙻𝙰𝙳𝚈𝙱𝚄𝙶 𝚃𝚎𝚡𝚝𝚖𝚊𝚔𝚎𝚛\n╭─────────────···◈ \n*┋* ➤ .metallic <text>\n*┋* ➤ .ice <text>\n*┋* ➤ .snow <text>\n*┋* ➤ .impressive <text>\n*┋* ➤ .matrix <text>\n*┋* ➤ .light <text>\n*┋* ➤ .neon <text>\n*┋* ➤ .devil <text>\n*┋* ➤ .purple <text>\n*┋* ➤ .thunder <text>\n*┋* ➤ .leaves <text>\n*┋* ➤ .1917 <text>\n*┋* ➤ .arena <text>\n*┋* ➤ .hacker <text>\n*┋* ➤ .sand <text>\n*┋* ➤ .blackpink <text>\n*┋* ➤ .glitch <text>\n*┋* ➤ .fire <text>\n╰─────────────╶╶···◈*\n\n> 𝙻𝙰𝙳𝚈𝙱𝚄𝙶 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍𝚎𝚛:\n╭─────────────···◈ \n*┋* ➤ .play <song_name>\n*┋* ➤ .song <song_name>\n*┋* ➤ .instagram <link>\n*┋* ➤ .facebook <link>\n*┋* ➤ .tiktok <link>\n*┋* ➤ .play2\n*┋* ➤ .play3\n ╰─────────────╶╶···◈*\n\n\n*━━━━━━━━━━━━━━━━━━━━\n> 𝙼𝙰𝙳𝙴 𝙱𝚈 𝙼𝚁 𝙽𝚃𝙰𝙽𝙳𝙾 𝙾𝙵𝙲\n*━━━━━━━━━━━━━━━━━━━━\n\nJoin our channel for updates:";
  try {
    const _0x1b0cc6 = path.join(__dirname, "../assets/bot_image.jpg");
    if (fs.existsSync(_0x1b0cc6)) {
      const _0x486c9b = fs.readFileSync(_0x1b0cc6);
      await _0x388974.sendMessage(_0x215cfa, {
        'image': _0x486c9b,
        'caption': _0x27840d,
        'contextInfo': {
          'forwardingScore': 0x1,
          'isForwarded': true,
          'forwardedNewsletterMessageInfo': {
            'newsletterJid': '120363401903613460@newsletter',
            'newsletterName': "𝙻𝙰𝙳𝚈𝙱𝚄𝙶-𝙼𝙳 by Mr Ntando Ofc",
            'serverMessageId': -0x1
          }
        }
      });
    } else {
      console.error("Bot image not found at:", _0x1b0cc6);
      await _0x388974.sendMessage(_0x215cfa, {
        'text': _0x27840d,
        'contextInfo': {
          'forwardingScore': 0x1,
          'isForwarded': true,
          'forwardedNewsletterMessageInfo': {
            'newsletterJid': "120363401903613460@newsletter",
            'newsletterName': "𝙻𝙰𝙳𝚈𝙱𝚄𝙶-𝙼𝙳 by Mr Ntando Ofc",
            'serverMessageId': -0x1
          }
        }
      });
    }
  } catch (_0x316384) {
    console.error("Error in help command:", _0x316384);
    await _0x388974.sendMessage(_0x215cfa, {
      'text': _0x27840d
    });
  }
}
module.exports = helpCommand;