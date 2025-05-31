const fs = require('fs');
const path = require('path');
const config = require('../settings')
const {cmd , commands} = require('../command')


// Composing (Auto Typing)
cmd({
    on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {
    if (config.AUTO_TYPING === 'true') {
        await conn.sendPresenceUpdate('composing', from); // send typing 
    }
});
