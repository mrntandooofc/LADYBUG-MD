const yts = require('yt-search'); 
const axios = require('axios');
async function videoCommand(sock, chatId, message) {
 try {
  const text = message.message?.conversation || message.message?.extendedTextMessage?.text;
  const searchQuery = text.split(' ').slice(1).join(' ').trim();
  
  if (!searchQuery) { 
   return await sock.sendMessage(chatId, { text: "download video ya nini shamwari yangu?" });
  }
  // Search for the video
  const { videos } = await yts(searchQuery);
  if (!videos || videos.length === 0) {
   return await sock.sendMessage(chatId, { text: "Video haijapatikana!" });
  }
  // Send loading message
  await sock.sendMessage(chatId, { text: "_Tafadhali subiri, video yako inapakuliwa_" });
  // Get the first video result
  const video = videos[0];
  const urlYt = video.url;
  // Fetch video data from API
  const response = await axios.get(`https://apis.davidcyriltech.my.id/download/ytmp4?url=${urlYt}&format=mp4`);
  
  const data = response.data;
  
  if (!data || !data.status || !data.result || !data.result.downloadUrl) {
   return await sock.sendMessage(chatId, { text: "volts jt shamwari yangu" });
  }
  const videoUrl = data.result.downloadUrl;
  const title = data.result.title;
  // Send the video
  await sock.sendMessage(chatId, { 
    video: { url: videoUrl }, 
    mimetype: "video/mp4", 
    fileName: `${title}.mp4` 
  }, { quoted: message });
 } catch (error) {
  console.error('Error in video command:', error);
  await sock.sendMessage(chatId, { text: "Kupak