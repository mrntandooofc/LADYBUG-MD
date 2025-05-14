const fetch = require("node-fetch");
async function lyricsCommand(_0x398fcd, _0x1b85a9, _0x243589) {
  if (!_0x243589) {
    await _0x398fcd.sendMessage(_0x1b85a9, {
      'text': "🔍 Please enter the song name to get the lyrics! Usage: *lyrics <song name>*"
    });
    return;
  }
  try {
    const _0x2d39ce = 'https://some-random-api.com/lyrics?title=' + encodeURIComponent(_0x243589);
    const _0x24bed8 = await fetch(_0x2d39ce);
    if (!_0x24bed8.ok) {
      throw await _0x24bed8.text();
    }
    const _0x531461 = await _0x24bed8.json();
    if (!_0x531461.lyrics) {
      await _0x398fcd.sendMessage(_0x1b85a9, {
        'text': "❌ Sorry, I couldn't find any lyrics for \"" + _0x243589 + "\"."
      });
      return;
    }
    await _0x398fcd.sendMessage(_0x1b85a9, {
      'text': "🎵 *Song Lyrics* 🎶\n\n▢ *Title:* " + (_0x531461.title || _0x243589) + "\n▢ *Artist:* " + (_0x531461.author || "Unknown") + "\n\n📜 *Lyrics:*\n" + _0x531461.lyrics + "\n\nHope you enjoy the music! 🎧 🎶"
    });
  } catch (_0x13dbf6) {
    console.error("Error in lyrics command:", _0x13dbf6);
    await _0x398fcd.sendMessage(_0x1b85a9, {
      'text': "❌ An error occurred while fetching the lyrics for \"" + _0x243589 + "\"."
    });
  }
}
module.exports = {
  'lyricsCommand': lyricsCommand
};