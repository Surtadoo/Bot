/*
Olá usuário do bot, eu sou o LC, e apresento essa versão da Karen Bot com comandos simples. Sei que nem todos tem condições de comprar ou alugar um Bot, por isso foi criada essa versão.

Sinta-se livre pra editar o nome e as coisas no Bot, porém deixem pelo menos meus créditos por favor.

Se tiver algum problema fale comigo ou com o Meliodas, que tbm me deu uma ajudinha com o Bot, deixarei o link de nossos ctts abaixo:

Şr. ŁĆ 💛⃝⃒⃤⁩ ⸝͟๏︠🍃
wa.me/5511954738489

Meliodas-rai
wa.me/558981029418
*/
const { default: makeWASocket, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, MediaType, areJidsSameUser, WAMessageStatus, AuthenticationState, GroupMetadata, initInMemoryKeyStore,getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode,	WAMetric,	ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto,	WAGroupMetadata, ProxyAgent,	waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage,	Browsers, GroupSettingChange, delay, DisconnectReason, WASocket, getStream, WAProto, isBaileys, AnyMessageContent, fetchLatestBaileysVersion } = require('@adiwajshing/baileys');
const usedCommandRecently = new Set()
//**************[ MÓDULOS ]****************//
const { getBuffer, getGroupAdmins, getRandom, getExtension, banner } = require('./lib/funções.js'); const P = require('pino'); const fs = require('fs'); const os = require('os');const hx = require('hxz-api'); const crypto = require('crypto'); const util = require('util'); const { Boom }  = require('@hapi/boom'); const axios = require('axios'); const qrterminal = require('qrcode-terminal'); const encodeUrl = require('encodeurl'); const linkfy = require('linkifyjs'); const request = require('request'); const cheerio = require('cheerio'); const ms = require('ms'); const chalk = require('chalk'); const moment = require('moment-timezone'); const ffmpeg = require('fluent-ffmpeg'); const { exec } = require('child_process'); const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) }; const yts = require('yt-search'); const imgbb = require('imgbb-uploader'); const googleImage = require('g-i-s'); const googleIt = require('google-it'); const fetch = require('node-fetch'); const imageToBase64 = require('image-to-base64'); const thiccysapi = require('textmaker-thiccy'); 
const pix = require('pix-utils')
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const data = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
const speed = require('performance-now')
var keyapi = "key-do-victor-ofc-2.6"
const ytttts = require("yt-search");
const yttts = require("yt-search");
const uber = require('uberduck-api')
const gis = require('./lib/gimage.js')
const { upload, nit } = require('./arquivos/tourl');
//*******************************************//

//*************[ CONSTS JSON ]************//
const espere = JSON.parse(fs.readFileSync('./database/grupos/espere.json')); const roleta = JSON.parse(fs.readFileSync('./database/grupos/cassino.json')); const porcentagem = JSON.parse(fs.readFileSync('./database/grupos/porcentagem.json')); const logoslink = JSON.parse(fs.readFileSync('./menu/logos.json')); const infobot = JSON.parse(fs.readFileSync('./info/infobot.json')); const donos = JSON.parse(fs.readFileSync('./database/dono/donos.json')); const premium = JSON.parse(fs.readFileSync('./database/premium/premiuns.json'));
const registros = JSON.parse(fs.readFileSync('./arquivos/registros.json'))
const countMessage = JSON.parse(fs.readFileSync('./database/grupos/countmsg.json'));
const backup = JSON.parse(fs.readFileSync('./simih/backup.json'))
const joguinhodavelhajs = JSON.parse(fs.readFileSync('./arquivos/joguinhodavelha.json'));
const joguinhodavelhajs2 = JSON.parse(fs.readFileSync('./arquivos/joguinhodavelha2.json'));
const forca = JSON.parse(fs.readFileSync('./arquivos/forca.json'));
const puppet = JSON.parse(fs.readFileSync('./arquivos/puppet_forca.json'));
const memes = JSON.parse(fs.readFileSync('./arquivos/memes.json'));
const antifake = JSON.parse(fs.readFileSync('./surtado/antifake.json'))
const antiaudio = JSON.parse(fs.readFileSync('./surtado/antiaudio.json'))
const antipv = JSON.parse(fs.readFileSync('./surtado/antipv.json'))
//*******************************************//

//****************[ MENU ]******************//
const { menu } = require('./menu/menu.js');
const { conselhob } = require('./arquivos/amor/conselhob.js');
const { ytv } = require('./arquivos/amor/y2mate.js')
const { cantadas } = require('./arquivos/amor/cantadas.js');
const { pinterest } = require('./database/lib/srch')
const { fetchJson } = require('./database/lib/fetcher')
const { palavrasANA, quizanime, quizanimais } = require('./arquivos/amor/jogos.js');
const {adivinha} = require('./arquivos/amor/adivinha.js');

const { ia } = require('./arquivos/amor/ia.js')
const { getGPTResponse,getImageDalle} = require('./arquivos/amor/ia.js');
const { climaDl } = require('./database/lib/clima')
const grupo = 'wa.me/5521979047347';
const Owner = ["5521979047347@s.whatsapp.net"]
const { convertSticker } = require("./arquivos/swm.js");
const { tabela } = require('./arquivos/amor/tabela.js');
const { ttthelp } = require('./arquivos/ttt/TTTconfig/ttthelp');
const { tttme } = require('./arquivos/ttt/TTTconfig/tttme');

const tttset = require('./arquivos/ttt/TTTconfig/tttset.json');
const { validmove, setGame } = require('./tictactoe/index.js');

const esp = require('./arquivos/ttt/TTTconfig/tttframe.json');
const { WinnerX, WinnerO, Tie,} = require('./arquivos/ttt/TTTconfig/tttexp.js'); // JOGO DA VELHA TTT COM MAQUINA
//*******************************************//

//********[ DEFINIÇÕES DO MENU ]*********//
prefixo = infobot.prefixo
status = 'Online'
baileys = 'Multi Device (MD)'
emoji = '⚡'
emoji2 = '🔥'
nomeDono = infobot.nomeDono
nomeBot = infobot.nomeBot
numeroBot = infobot.numeroBot
numeroDono = infobot.numeroDono
logo = logoslink.logo
//*******************************************//
function kyun(seconds){
function pad(s){ return (s < 10 ? '0' : '') + s;}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos` }
const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
if (bytes == 0) {
return "n/a"
}
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
if (i == 0) {
return bytes + " " + sizes[i]
}
return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
}
//***********[ CONEXÃO DO BOT ]**********//
const store = makeInMemoryStore({ logger: P().child({ level: 'debug', stream: 'store' }) })
store.readFromFile('./_store.json')
//salvar dps de 10s
setInterval(() => { store.writeToFile('./GOKU-BOT_store.json') }, 10000)
//início c
const { state, saveState } = useSingleFileAuthState('./GOKU-BOT_info.json')
async function Commencer() {
const { version, isLatest } = await fetchLatestBaileysVersion()
console.log(`usando WA v${version.join('.')}, é mais recente: ${isLatest}`)
console.log(banner.string)
console.log(color("GOKU BOT conectada Chefe!!!"))
const conn = makeWASocket({ version,  logger: P({ level: 'silent' }),
printQRInTerminal: true,
browser: ['GOKU-BOT ', 'Sr.LC', '1.0.0'], auth: state })
store.bind(conn.ev)
conn.ev.on('chats.set', () => {
console.log(store.chats.all())})
conn.ev.on('contacts.set', () => {
console.log(Object.values(store.contacts))})
conn.ev.on('creds.update', saveState);
conn.ev.on('messages.upsert', async (msg) => {
  try {
//*******************************************//

//***************[ FUNÇÕES ]***************//
const info = msg.messages[0]
  if (!info.message) return 
  if (info.key && info.key.remoteJid == 'status@broadcast') return
const type = Object.keys(info.message)[0] == 'senderKeyDistributionMessage' ? Object.keys(info.message)[2] : (Object.keys(info.message)[0] == 'messageContextInfo') ? Object.keys(info.message)[1] : Object.keys(info.message)[0]
const content = JSON.stringify(info.message);
const altpdf = Object.keys(info.message)
global.prefix
const from = info.key.remoteJid
var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''
const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''
const isGroup = info.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? info.key.participant : info.key.remoteJid
const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const pushname = info.pushName ? info.pushName : ''
//multi prefixo
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const numeroBot = conn.user.id.split(':')[0]+'@s.whatsapp.net'
const isOwner = sender.includes(numeroDono)
const args = body.trim().split(/ +/).slice(1);
const isCmd = body.startsWith(prefixo);
const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null 
const reply = (text) => {
  conn.sendMessage(from, {text: text}, {quoted: info})
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? conn.sendMessage(from, {text: teks.trim(), mentions: memberr}) : conn.sendMessage(from, {text: teks.trim(), mentions: memberr})}
if(!isGroup && isCmd) {console.log(chalk.hex("#1cfcff").bold("[ COMANDO ]", chalk.hex("#ff1c5a").bold(`${command}`), chalk.hex("#1cfcff").bold(" DE "), chalk.hex("#ff1c5a").bold(`${sender.split("@")[0]}`)))}
  if(!isGroup && !isCmd && !info.key.fromMe){
    if (info.message.conversation.length <= 10) {
    console.log(chalk.hex("#1cfcff").bold("[ MENSAGEM ]", chalk.hex("#ff1c5a").bold(`${info.message.conversation}`), chalk.hex("#1cfcff").bold(" DE "), chalk.hex("#ff1c5a").bold(`${sender.split("@")[0]}`)))}
    else {console.log(chalk.hex("#1cfcff").bold("[ MENSAGEM ]", chalk.hex("#1cfcff").bold(` DE `), chalk.hex("#ff1c5a").bold(`${sender.split("@")[0]}`)))}}
const argss = body.split(/ +/g)
const q = args.join(' ')
const text = args.join(' ')
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}
const menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant

const menc_jid = args.join(" ").replace("@", "") + "@s.whatsapp.net"
  // GRUPO
if(isGroup && !isCmd && !info.key.fromMe){
    if (info.message.conversation.length <= 10) {console.log(chalk.hex("#1cfcff").bold("[ MENSAGEM ]", chalk.hex("#ff1c5a").bold(`${info.message.conversation}`), chalk.hex("#1cfcff").bold(" DE "), chalk.hex("#ff1c5a").bold(`${sender.split("@")[0]}`, chalk.hex("#1cfcff").bold("NO GRUPO"), chalk.hex("#ff1c5a").bold(groupName))))}
    else {console.log(chalk.hex("#1cfcff").bold("[ MENSAGEM ]", chalk.hex("#1cfcff").bold(` DE `), chalk.hex("#ff1c5a").bold(`${sender.split("@")[0]}`), chalk.hex("#1cfcff").bold("NO GRUPO "), chalk.hex("#ff1c5a").bold(groupName)))}}
  if(isCmd && isGroup){console.log(chalk.hex("#1cfcff").bold("[ COMANDO ]"), chalk.hex("#ff1c5a").bold(command), chalk.hex("#1cfcff").bold(" DE "), chalk.hex("#ff1c5a").bold(`${sender.split("@")[0]}`, chalk.hex("#1cfcff").bold("NO GRUPO ", chalk.hex("#ff1c5a").bold(`${groupName}`))))}
  //isQuoted 
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
return buffer}
//*******************************************//

//***************[ BOTÕES ]****************//
//botão
const sendBtext = async (id, text1, desc1, but = [], vr) => {
buttonMessage = { text: text1, footer: desc1, buttons: but, headerType: 1 }
conn.sendMessage(id, buttonMessage, {quoted: vr}) }
//botão com imagem 
const sendBimg = async (id, img1, text1, desc1, but = [], vr) => {
buttonMessage = { image: {url: img1}, caption: text1, footerText: desc1, buttons: but, headerType: 4 }
conn.sendMessage(id, buttonMessage, {quoted: vr}) }
//botão de template 
const sendBimgT = async (id, img1, text1, desc1, but = [], vr) => { templateMessage = { image: {url: img1}, caption: text1, footer: desc1, templateButtons: but, }
conn.sendMessage(id, templateMessage, {quoted: vr}) }
//menu com gif
const sendGifButao = async (id, gif1, text1, desc1, but = [], vr) => { buttonMessage = { video: {url: gif1}, caption: text1, gifPlayback: true, footerText: desc1, buttons: but, headerType: 4 }
conn.sendMessage(id, buttonMessage, {quoted: vr}) }

//*******************************************//
//========(CONTADOR-DE-MENSAGENS)========\\

const groupIdscount = []
const numbersIds = []
for(let obj of countMessage) {
groupIdscount.push(obj.groupId)
}
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.id)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
countMessage[ind].numbers[indnum].messages += 1
countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
fs.writeFileSync('./database/grupos/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = 1
const cmd_messages = isCmd ? 1 : 0
countMessage[ind].numbers.push({
id: sender,
messages: messages,
cmd_messages: cmd_messages
})
fs.writeFileSync('./database/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
} else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
cmd_messages: isCmd ? 1 : 0
}]
})
fs.writeFileSync('./database/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}

// Contato do dono
const vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ 'FN:SURTADO NEH VIDA \n' // Nome completo
+ 'ORG:Lwa Company;\n' // A organização do contato
+ 'TEL;type=CELL;type=VOICE;waid=5521979047347:+55 21 979047347\n' // WhatsApp ID + Número de telefone
+ 'END:VCARD' // Fim do ctt

//======================================\\
//******[ DEFINIÇÃO DE MENSAGENS ]*****//
var esperee = espere[Math.floor(Math.random() * espere.length)] 
enviar = {
espere: `${esperee}`,
successo: '️*❬ ✔ ❭ Sucesso*',
error: '*Falhou, tente novamente ^_^*',
msg: {
dono: '*『❗』Esse comando só pode ser utilizado pelo meu Dono!*',
adm: '*『❗』Esse comando só pode ser utilizado pelos Adms do Grupo!*',
Badmin: '*『❗』Esse comando só pode ser utilizado quando o bot se torna Adm!*',
grupo: '*『❗』Esse comando só pode ser utilizado em Grupos!*',
premium: '*『❗』Esse comando só pode ser utilizado por usuários PREMIUNS!*',
registro: `*🧸Olá ${pushname}, não encontrei seu login fassa registro utilizado ${prefixo}rg. ☺*`,
org: '*🧸 Oops, não e possível ter mais de um registro. 😅*',
banido: '*『❗』Vc é um usuário banido!*'}}
//*******************************************//

//************[ DONO OFICIAL ]**************//
const donoOficial = [`5521979047347@s.whatsapp.net`] 
//*******************************************//
const antilink = JSON.parse(fs.readFileSync('./surtado/domina/antilink.json'))
//***[ CONSTS DONO, PREMIUM, ADM...]***//
const isAntiLink = isGroup ? antilink.includes(from) : false
const isAntifake = isGroup ? antifake.includes(from) : false
const isAntiAudio = isGroup ? antiaudio.includes(from) : false	
const isAntiPv = (antipv.indexOf('Ativado') >= 0) ? true : false	
const SoDono = donoOficial.includes || donos.includes(sender)
const isRegistro = registros.includes(sender)
const isPremium = premium.includes(sender)
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isBotGroupAdmins = groupAdmins.includes(numeroBot) || false
const isJoguin = isGroup ? joguinhodavelhajs.includes(sender) : false

//*******************************************//
// FUNCAO DE ANTILINK \\

if (budy.includes("https://chat.whatsapp.com/")){

if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* VC É ADMIN POR ISSO NÃO VOU TE BANIR`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*ELIMINADO DO GRUPO EM 3 SEGUNDOS 😈*`)
	     	}, 100)
	     	reply(`*_「 LINK  DETECTADO 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {
conn.groupSettingUpdate(from, 'announcement')
sleep(30000);
conn.groupSettingUpdate(from, 'not_announcement')  
conn.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
if (budy.includes("Https//")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* VC É ADMIN POR ISSO NÃO VOU TE BANIR`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*ELIMINADO DO GRUPO EM 3 SEGUNDOS 😈*`)
	     	}, 100)
	     	reply(`*_「 LINK  DETECTADO 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
conn.groupSettingUpdate(from, 'announcement')
sleep(30000);
conn.groupSettingUpdate(from, 'not_announcement')  
conn.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
if (budy.includes("HTTPS//")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* VC É ADMIN POR ISSO NÃO VOU TE BANIR`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*ELIMINADO DO GRUPO EM 3 SEGUNDOS 😈*`)
	     	}, 100)
	     	reply(`*_「 LINK  DETECTADO 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
conn.groupSettingUpdate(from, 'announcement')
sleep(30000);
conn.groupSettingUpdate(from, 'not_announcement')  
conn.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
if (budy.includes("google.com")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* VC É ADMIN POR ISSO NÃO VOU TE BANIR`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*ELIMINADO DO GRUPO EM 3 SEGUNDOS 😈*`)
	     	}, 100)
	     	reply(`*_「 LINK  DETECTADO 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
conn.groupSettingUpdate(from, 'announcement')
sleep(30000);
conn.groupSettingUpdate(from, 'not_announcement')  
conn.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
if (budy.includes("Https//YouTube.com")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* VC É ADMIN POR ISSO NÃO VOU TE BANIR`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*ELIMINADO DO GRUPO EM 3 SEGUNDOS 😈*`)
	     	}, 100)
	     	reply(`*_「 LINK  DETECTADO 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
conn.groupSettingUpdate(from, 'announcement')
sleep(30000);
conn.groupSettingUpdate(from, 'not_announcement')  
conn.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
 if (budy.includes("https//YouTube.com")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* VC É ADMIN POR ISSO NÃO VOU TE BANIR`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*ELIMINADO DO GRUPO EM 3 SEGUNDOS 😈*`)
	     	}, 100)
	     	reply(`*_「 LINK  DETECTADO 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
conn.groupSettingUpdate(from, 'announcement')
sleep(30000);
conn.groupSettingUpdate(from, 'not_announcement')  
conn.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
 if (budy.includes("http://ww.youtube.com")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* VC É ADMIN POR ISSO NÃO VOU TE BANIR`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*ELIMINADO DO GRUPO EM 3 SEGUNDOS 😈*`)
	     	}, 100)
	     	reply(`*_「 LINK  DETECTADO 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
conn.groupSettingUpdate(from, 'announcement')
sleep(30000);
conn.groupSettingUpdate(from, 'not_announcement')  
conn.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
if (budy.includes("wa.me")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* VC É ADMIN POR ISSO NÃO VOU TE BANIR`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*ELIMINADO DO GRUPO EM 3 SEGUNDOS 😈*`)
	     	}, 100)
	     	reply(`*_「 LINK  DETECTADO 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
conn.groupSettingUpdate(from, 'announcement')
sleep(30000);
conn.groupSettingUpdate(from, 'not_announcement')  
conn.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
if (budy.includes("http://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* VC É ADMIN POR ISSO NÃO VOU TE BANIR`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*ELIMINADO DO GRUPO EM 3 SEGUNDOS 😈*`)
	     	}, 100)
	     	reply(`*_「 LINK  DETECTADO 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {
conn.groupSettingUpdate(from, 'announcement')
sleep(30000);
conn.groupSettingUpdate(from, 'not_announcement')  
conn.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }

// ==================================== \\

const isFiltered = (from) => !!usedCommandRecently.has(from)
const addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => usedCommandRecently.delete(from), delayantispamcmd * 1000)
}

// ==================================== \\

const stealCmd = new Set()
const isFilteredSteal = (from) => !!stealCmd.has(from)
const addFilterSteal = (from) => {
    stealCmd.add(from)
    setTimeout(() => stealCmd.delete(from), delaystealcmd * 1000)
}

// ==================================== \\

const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00"){
var tempo = 'Boa madrugada'
                                        } 
if(time2 > "05:30:00"){
var tempo = 'Bom dia'
                                        }
if(time2 > "12:00:00"){
var tempo = 'Boa tarde'
                                        }
if(time2 > "19:00:00"){
var tempo = 'Boa noite'
                                        }

//*************[ VERIFICADO ]**************//
const selo = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ... {}}, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}}
const ContatVR = {key : {participant : '0@s.whatsapp.net'},message: {contactMessage:{displayName: `${pushname}`}}}
//*******************************************//
const allForcaId = []

for(let obj of forca) allForcaId.push(obj.id)

const isPlayForca = allForcaId.indexOf(sender) >= 0 ? true : false
async function randompalavra() {

return new Promise(async (resolve, reject) => {

fetch('https://www.palabrasaleatorias.com/palavras-aleatorias.php?fs=1&fs2=0&Submit=Nova+palavra',).then(async function (res, err) {
if(err) reject(err)
var $ = cheerio.load(await res.text())
resolve($('body > center > center > table:nth-child(4) > tbody > tr > td > div')[0].children[0].data)
})
}) 
}

const calcularExpressao = (expressao) => {
const operacoes = expressao.match(/([+\-*/])/g)
const numeros = expressao.split(/[+\-*/]/).map(parseFloat)
let resultado = numeros[0]
for (let i = 0; i < operacoes.length; i++) {
const operacao = operacoes[i]
const proximoNumero = numeros[i+1]
if (operacao === '+') {
resultado += proximoNumero
} else if (operacao === '-') {
resultado -= proximoNumero
} else if (operacao === '*') {
resultado *= proximoNumero
} else if (operacao === '/') {
resultado /= proximoNumero
}
}
return resultado
}
// ==================================== \\

//////////_FUNÇÕES DO JOGO DA VELHA_//////
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if (fs.existsSync(`./tictactoe/json/${from}.json`)) {
const boardnow = setGame(`${from}`);
if (
budy.toLowerCase() == "s" ||
budy.toLowerCase() == "sim" ||
budy.toLowerCase() == "yes"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply('O jogo já começou antes!');
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./tictactoe/json/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
mentions(chatAccept);
}
} else if (
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "não" ||
budy.toLowerCase() == "no"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply('O jogo já começou!');
fs.unlinkSync(`./tictactoe/json/${from}.json`);
mention(`@${boardnow.X} *_Infelizmente seu oponente não aceitou o desafio ❌😕_*`)
}
}
}

if (arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if (!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda...`)
if (
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
     
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if (moving.isWin) {
if (moving.winner == "SERI") {
const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Jogo termina empatado 😐
`;
reply(chatEqual);
fs.unlinkSync(`./tictactoe/json/${from}.json`);
return;
}
const abt = Math.ceil(Math.random() + 4000)
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 1) + 10;
const limLoose = Math.floor(Math.random() * 1) + 5;
const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
O vencedor é: @${winnerJID}. 😎👑
`;
reply(chatWon);
setTimeout( () => {
if (fs.existsSync("./tictactoe/json/" + from + ".json")) {
 fs.unlinkSync("./tictactoe/json/" + from + ".json");
 reply(`*🕹️JOGO DA VELHA RESETADO...🕹️*`);
 } else {
console.log('[ EXPIRADO ] Jogo da velha expirado');
 }
}, 1000000) //10 minutos  
fs.unlinkSync(`./tictactoe/json/${from}.json`);
} else {
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
❌ : @${moving.X}
⭕ : @${moving.O}

Sua vez : @${moving.turn == "X" ? moving.X : moving.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
mentions(chatMove);
}
}
//=================================\\
//=================================\\
//JOGO DO ADIVINHA
if(isGroup && fs.existsSync(`./arquivos/amor/adivinha-${from}.json`)){
let dataadivinha = JSON.parse(fs.readFileSync(`./arquivos/amor/adivinha-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataadivinha.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataadivinha .original) return reply('está perto')
xp = Math.floor(Math.random() * 14) + 3000
if(budy.toUpperCase() == dataadivinha.original) { conn.sendMessage(from, {text: `parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra : ${dataadivinha.original}\nIniciando o proximo jogo em 5 segundos...`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./arquivos/amor/adivinha-${from}.json`)		
addLevelingXp(sender, xp)
recompensa = `🎉🎉RECOMPENSA🎉🎉\nVocê ganhou ${xp} em *xp*`
reply(recompensa)
		setTimeout(async() => {
fs.writeFileSync(`./arquivos/amor/adivinha-${from}.json`, `${JSON.stringify(adivinha[Math.floor(Math.random() * adivinha.length)])}`)
let dataadivinha2 = JSON.parse(fs.readFileSync(`./arquivos/amor/adivinha-${from}.json`))
conn.sendMessage(from, {text:`
╭─────≽「 👾 ADIVINHA 👾 」
│➽ ADIVINHA OS EMOJI
│➽ ADIVINHA: ${dataadivinha2.embaralhada}
│➽ DICA: ${dataadivinha2.dica}
╰────────────────────────
`}) 
}, 5000)
}}
//========================================\\
		//JOGO DO ANAGRAM
if(isGroup && fs.existsSync(`./arquivos/amor/jogos-${from}.json`)){
let dataAnagrama = JSON.parse(fs.readFileSync(`./arquivos/amor/jogos-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
xp = Math.floor(Math.random() * 14) + 3000
if(budy.toUpperCase() == dataAnagrama.original) { conn.sendMessage(from, {text: `parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra : ${dataAnagrama.original}\nIniciando o proximo jogo em 5 segundos...`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./arquivos/amor/jogos-${from}.json`)		
addLevelingXp(sender, xp)
recompensa = `🎉🎉RECOMPENSA🎉🎉\nVocê ganhou ${xp} em *xp*`
reply(recompensa)
		setTimeout(async() => {
fs.writeFileSync(`./arquivos/amor/jogos-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./arquivos/amor/jogos-${from}.json`))
conn.sendMessage(from, {text:`
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${dataAnagrama2.embaralhada}
│➽ DICA: ${dataAnagrama2.dica}
╰────────────────────────
`}) 
}, 5000)
}}

//========================================\\
//========================================\\
	//JOGO QUIZ
if(isGroup && fs.existsSync(`./amor/jogo/jogos-${from}.json`)){
let dataAnagramaa = JSON.parse(fs.readFileSync(`./amor/jogo/jogos-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagramaa.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagramaa.original) return reply('está perto')
if(budy.toUpperCase() == dataAnagramaa.original) { 
conn.sendMessage(from,{text: `Parabéns ${pushname} você acertou\n${dataAnagramaa.original}\nProximo em 5 segundos...`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./amor/jogo/jogos-${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./amor/jogo/jogos-${from}.json`, `${JSON.stringify(quizanimais[Math.floor(Math.random() * quizanimais.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./amor/jogo/jogos-${from}.json`))
imagemtexto =`                             「❓Quiz❓」`
conn.sendMessage(from, {image: {url: dataAnagrama2.foto}, caption: imagemtexto, thumbnail: wew}, {quoted: selo})
}, 5000)
}
}

switch(command){
//****[ INÍCIO COMANDOS DE PREFIXO ]***//

case 'registrar':
case 'rg':
if (isRegistro) return reply(enviar.msg.org)
try {
registros.push(sender)
fs.writeFileSync('./arquivos/registros.json', JSON.stringify(registros))
} catch(e) {
console.log(e)
reply(enviar.erro)
}
await conn.sendMessage(from, { react: { text: '✅', key: info.key }})    
await delay(3000)
conn.sendMessage(from, { text: `*⚙️️ Registrado com sucesso*

・➤ 👤 *Nome*: ${pushname} (${sender.split("@")[0]})
・➤ 🗓️ *Data De Registro*:${data},
️・➤ ⌚ *Hora De Registro*:${hora},
Seu registro foi efetuado com sucesso. 😉*_`}, {quoted: selo})
break
case 'limparrg':
if(!isGroup) return reply("Apenas em grupo")
await conn.sendMessage(from, { react: { text: `♻️`, key: info.key }})
reply("limpando aguarde")
var LMPID = JSON.parse(fs.readFileSync("./arquivos/registros.json"))
LMPID.splice([])
fs.writeFileSync("./arquivos/registros.json", JSON.stringify(LMPID))
reply("Limpo com sucesso")
break
case 'menu':
await conn.sendMessage(from, { react: { text: '😊', key: info.key }}) 
  return reply(`
━━━━━━❯✷❮━━━━━━
┎┳━┅┅┄┈┄✧┈┈✦❖✦
┋┃${emoji},📱 *Prefixo:* 「 ${prefixo} 」
┋┃${emoji},✅ *Status:* ${status}
┋┃${emoji}, 🤴 *By:* ${nomeDono} 
┋┃${emoji}, ⛰ *User:*  ${pushname}
┋┃${emoji}, 🗓️ *DATA:* ${data}
┋┃${emoji}, 🕒 *HORA:* ${hora}
┋┖
━┅┅┄┈┄✧┈┈✦❖✦
┋${"\u200B".repeat(4000)}
┖┳━┅┅┄┈┄✧┈┈✦❖✦
┎┫ *_《 DIVERSÃO 》_*
┋┣━━━━━━━
┋┃${emoji2}  *${prefixo}sticker*
┋┃➣ Faz fig marcando a img
┋┃${emoji2} *${prefixo}roubar*
┋┃➣ roubar figurinhas
┋┃${emoji2} *${prefixo}metadinha*
┋┃➣ pra mandar fotos de casal
┋┃${emoji2} *${prefixo}metadinha2*
┋┃➣ mandar fotos de casal 2
┋┃${emoji2} *${prefixo}rankgay*
┋┃➣ Ranking aleatório
┋┃${emoji2} *${prefixo}rankcorno*
┋┃➣ Ranking aleatório
┋┃${emoji2} *${prefixo}rankhetero*
┋┃➣ Ranking aleatório
┋┃${emoji2} *${prefixo}dado*
┋┃➣ Comando de dado
┋┃${emoji2} *${prefixo}cassino*
┋┃➣ Jogo do cassino 
┋┃${emoji2} *${prefixo}ppt*
┋┃➣ Jogo da pedra,papel, tesoura 
┋┃${emoji2} *${prefixo}jogodavelha (@)*
┋┃➣ jogar com amigos 
┋┃${emoji2} *${prefixo}adivinha*
┋┃➣ Jogo do adivinha
┋┃${emoji2} *${prefixo}anagrama*
┋┃➣ Jogo do anagrama
┋┃${emoji2} *${prefixo}anime*
┋┃➣Jogo do anime
┋┃${emoji2} *${prefixo}quizanimais*
┋┃➣ Jogo dos animais
┋┃${emoji2} *${prefixo}akinator*
┋┃➣Jogo de perguntas
┋┃${emoji2} *${prefixo}forca*
┋┃➣ Jogo da forca
┋┃${emoji2} *${prefixo}roleta-russa*
┋┃➣ Jogo de tirar do grupo
┋┃${emoji2} *${prefixo}enquete*
┋┃➣ pra fazer votos
┋┃${emoji2} *${prefixo}rladv*
┋┃➣ mostras a resposta certa
┋┃${emoji2} *${prefixo}revelaranimal*
┋┃➣mostra a resposta certa 
┋┃${emoji2} *${prefixo}respaki*
┋┃➣quem souber me fala kkk
┋┃${emoji2} *${prefixo}resetaraki*
┋┃➣ resetar o jogo akinator 
┋┃${emoji2} *${prefixo}resetarvelha*
┋┃➣resetar o jogo da velha
┋┃${emoji2} *${prefixo}resetarforca*
┋┃➣resetar o jogo da forca
┋┃${emoji2} *${prefixo}tttme*
┋┃➣
┋┃${emoji2} *${prefixo}tttrank*
┋┃➣
┋┃${emoji2} *${prefixo}jogodaforca*
┋┃➣
┋┃${emoji2} *${prefixo}jogar*
┋┃➣
┋┃${emoji2} *${prefixo}ttt*
┋┃➣
┋┃${emoji2} *${prefixo}ttthelp*
┋┃➣
┋┖━┅┅┄┈┄✧┈┈✦❖✦
┋
┖┳━┅┅┄┈┄✧┈┈✦❖✦
┎┫ *_《 GRUPOS 》_*
┋┣━━━━━━━
┋┃${emoji2} *${prefixo}marcar* (texto)
┋┃➣ Marca todos do grupo
┋┃${emoji2} *${prefixo}promover* (@)
┋┃➣ Promove o membro a Adm
┋┃${emoji2} *${prefixo}rebaixar* (@)
┋┃➣ Rebaixa a membro comum
┋┃${emoji2} *${prefixo}
┋┃➣
┋┃${emoji2} *${prefixo}banir (msg)*
┋┃➣ banir marcando a msg
┋┃${emoji2} *${prefixo}entrar (link)*
┋┃➣ coloque o comando com o link
┋┃${emoji2} *${prefixo}listadmins*
┋┃➣ pra ver quantos adm tem
┋┃${emoji2} *${prefixo}papof*
┋┃➣ msg pra colocar na descrição do gp
┋┃${emoji2} *${prefixo} apr*
┋┃➣ msg pras pessoas se apresentarem
┋┃${emoji2} *${prefixo}mudarnm*
┋┃➣ mudar nome do bot
┋┃${emoji2} *${prefixo}clear*
┋┃➣ limpar msg
┋┃${emoji2} *${prefixo}mudardk*
┋┃➣ mudar descrição 
┋┃${emoji2} *${prefixo}resetarlink*
┋┃➣ resetar o link do grupo 
┋┃${emoji2} *${prefixo}antilink 1*
┋┃➣ pra não divulgarem no grupo
┋┃${emoji2} *${prefixo}bloquear*
┋┃➣ bloquear pessoas no pv
┋┃${emoji2} *${prefixo}sair*
┋┃➣ sair do grupo
┋┃${emoji2} *${prefixo}desbloquear*
┋┃➣ desbloquear pessoas no pv
┋┃${emoji2} *${prefixo}nomegp*
┋┃➣mudar nome do grupo
┋┃${emoji2} *${prefixo}fotogp* 
┋┃➣mudar a foto do grupo
┋┃${emoji2} *${prefixo}marcawa*
┋┃➣ Marca todos do grupo
┋┃${emoji2} *${prefixo}grupolink*
┋┃➣ mandar o link do grupo
┋┃${emoji2} *${prefixo}digt*
┋┃➣ mostra qual level vc pode ser 
┋┃${emoji2} *${prefixo}antifake*
┋┃➣ pra tirar os fakes do grupo
┋┃${emoji2} *${prefixo}grupo abrir*
┋┃➣ pra abrir o grupo 
┋┃${emoji2} *${prefixo}grupo fechar*
┋┃➣ pra fechar o grupo
┋┃${emoji2} *${prefixo}grupo livrar*
┋┃➣ nunca testei esse comando 
┋┃${emoji2} *${prefixo}grupo limitar*
┋┃➣nunca testei esse comando 
┋┃${emoji2} *${prefixo}listafilmes*
┋┃➣ pra amostrar os filmes 
┋┃${emoji2} *${prefixo}listaseries*
┋┃➣pra amostrar as séries
┋┃${emoji2} *${prefixo}infogp*
┋┃➣mostrar informações do grupo
┋┃${emoji2} *${prefixo}listajogos*
┋┃➣pra amostrar os jogos 
┋┃${emoji2} *${prefixo}listaapps*
┋┃➣pra amostrar os apps
┋┃${emoji2} *${prefixo}seradm*
┋┃➣ pra vc ser adm do gp
┋┃${emoji2} *${prefixo}sermembro*
┋┃➣pra vc ser membro comum
┋┖━┅┅┄┈┄✧┈┈✦❖✦
┋
┖┳━┅┅┄┈┄✧┈┈✦❖✦
┎┫ *_《 PREMIUM 》_*
┋┣━━━━━━━
┋┃${emoji2} *${prefixo}meme*
┋┃➣pra ver os memes
┋┃${emoji2} *${prefixo}clima*
┋┃➣pra ver o clima da sua cidade
┋┃${emoji2} *${prefixo}ping*
┋┃➣pra ver se o bot tá rapido
┋┃${emoji2} *${prefixo}Retirarsp*
┋┃➣retirar número do spam
┋┃${emoji2} *${prefixo}Retirarsp2*
┋┃➣retirar número do spam2
┋┃${emoji2} *${prefixo}bandesban*
┋┃➣ desbanir número 
┋┃${emoji2} *${prefixo}mtddesban*
┋┃➣ métodos de desbanir
┋┃${emoji2} *${prefixo}mtddesban2*
┋┃➣ métodos de desbanir2
┋┃${emoji2} *${prefixo}menos1*
┋┃➣ métodos de sair do  menos1
┋┃${emoji2} *${prefixo}menos2*
┋┃➣ métodos de sair do menos 2
┋┃${emoji2} *${prefixo}menos3*
┋┃➣ métodos de sair do menos 1
┋┃${emoji2} *${prefixo}mtdban*
┋┃➣ métodos de banir
┋┃${emoji2} *${prefixo}mtdbanmtdban*
┋┃➣ métodos de banir
┋┃${emoji2} *${prefixo}desbanir*
┋┃➣ métodos de desbanir
┋┃${emoji2} *${prefixo}gerarcpf*
┋┃➣ geradores de cpf
┋┃${emoji2} *${prefixo}
┋┃➣
┋┖━┅┅┄┈┄✧┈┈✦❖✦
┋
┖┳━┅┅┄┈┄✧┈┈✦❖✦
┎┫ *_《 OUTROS 》_*
┋┣━━━━━━━
┋┃${emoji2} *${prefixo}ping*
┋┃➣ Velocidade de resposta
┋┃${emoji2} *${prefixo}dono*
┋┃➣ Dono do Bot
┋┃${emoji2} *${prefixo}criador*
┋┃➣ Criador do Bot
┋┃${emoji2} *${prefixo}tagme*
┋┃➣ Marca o usuário
┋┃${emoji2} *${prefixo} ia (texto)*
┋┃➣ escre algo pro bot pesquisar
┋┃${emoji2} *${prefixo}Registrar*
┋┃➣ pra vc se registrar no bot
┋┃${emoji2} *${prefixo}nick*
┋┃➣ criar seu nick
┋┃${emoji2} *${prefixo}perfil*
┋┃➣pra vc ver o seu perfil
┋┃${emoji2} *${prefixo}ddd*
┋┃➣ ver o ddd do seus pais ou estado
┋┃${emoji2} *${prefixo}criartabela*
┋┃➣criar uma tabela 
┋┃${emoji2} *${prefixo}tabela*
┋┃➣ tabela de nick que foi criada 
┋┃${emoji2} *${prefixo}tabelagp*
┋┃➣ tabela de nick só em grupo
┋┃${emoji2} *${prefixo}conselhobiblico*
┋┃➣ te dar conselhos bons 
┋┃${emoji2} *${prefixo}emoji*
┋┃➣ pra vc diverti mais vc 
┋┃${emoji2} *${prefixo}calculadora*
┋┃➣ calcular suas contas
┋┃${emoji2} *${prefixo}cantada*
┋┃➣pra passar uma cantada nas minas
┋┃${emoji2} *${prefixo}correio*
┋┃➣ mandar msg anônima no pv da pessoa 
┋┖━┅┅┄┈┄✧┈┈✦❖✦
┋
┖┳━┅┅┄┈┄✧┈┈✦❖✦
┎┫ *_《 DONO 》_*
┋┣━━━━━━━
┋┃${emoji2} *${prefixo}adddono* (@)
┋┃➣ Adiciona o ctt como dono
┋┃${emoji2} *${prefixo}deldono* (@)
┋┃➣ Remove o ctt como dono
┋┃${emoji2} *${prefixo}addpremium* (@)
┋┃➣ O ctt vira premium no Bot
┋┃${emoji2} *${prefixo}delpremium* (@)
┋┃➣ Remove o ctt de premium
┋┃${emoji2} *${prefixo}donolist*
┋┃➣ Lista dos Donos
┋┃${emoji2} *${prefixo}premiumlist*
┋┃➣ Lista dos Premiuns
┋┃${emoji2} *${prefixo}execut (command)* 
┋┃➣ Execute code
┋┃${emoji2} *${prefixo}reiniciar* 
┋┃➣ Reinicia o Bot
┋┃${emoji2} *${prefixo}transmitir ou bc*
┋┃➣transmitir msg 
┋┃${emoji2} *${prefixo}bot*
┋┃➣pra fazer teste
┋┃${emoji2} *${prefixo}teste*
┋┃➣ pra testar o comando 
┋┃${emoji2} *${prefixo}troll*
┋┃➣trolar as pessoas 
┋┃${emoji2} *${prefixo}desban*
┋┃➣tirar da lista do ban 
┋┃${emoji2} *${prefixo}banlist*
┋┃➣pra ver quem tá na lista de ban
┋┃${emoji2} *${prefixo}serpremium*
┋┃➣pra pessoa se torna premium
┋┃${emoji2} *${prefixo}eval*
┋┃➣pra testar comandos 
┋┃${emoji2} *${prefixo}aluguel*
┋┃➣ pra ver os preços do bot
┋┃${emoji2} *${prefixo}cmd*
┋┃➣ manutenção de comando 
┋┃${emoji2} *${prefixo}msg*
┋┃➣ pra mandar msg no pv 
┋┃${emoji2} *${prefixo}limparid*
┋┃➣limpar os ids 
┋┃${emoji2} *${prefixo}limparrg*
┋┃➣limpar os registros 
┋┖━┅┅┄┈┄✧┈┈✦❖✦
┋
┖┻━┅┅┄┈┄✧┈┈✦❖✦
┎┫ *_《 DOWNLOAD 》_*
┋┣━━━━━━━
┋┃${emoji2} *${prefixo}tiktok*
┋┃➣ baixar vídeos do tiktok 
┋┃${emoji2} *${prefixo}pinterest*
┋┃➣ baixar fotos do pinterest 
┋┃${emoji2} *${prefixo}mediafire*
┋┃➣ baixar qualquer coisa do mediafire 
┋┃${emoji2} *${prefixo}play*
┋┃➣ baixar músicas e vídeos 
┋┃${emoji2} *${prefixo}play2*
┋┃➣ baixar músicas do YouTube 
┋┃${emoji2} *${prefixo}gruposwa*
┋┃➣pesquisar links de grupos
┋┖━┅┅┄┈┄✧┈┈✦❖✦
┋
┖┻━┅┅┄┈┄✧┈┈✦❖✦
┎┫ *_《 SUGESTÃO DE COMANDOS 》_*
┋┣━━━━━━━
┋┃${emoji2} *${prefixo}novocmd*
┋┃➣ falar qual comando vc que no bot
┋┃${emoji2} *${prefixo}bug*
┋┃➣ pra avisar meu dono de bug ou erro
┖┻━┅┅┄┈┄✧┈┈✦❖✦`)

conn.sendMessage(from, {image: await getBuffer('./menu/foto.jpg'), caption: menu},{quoted: selo})
break
case "help":
case "start":
case "bot":
if (!isOwner) return reply('somente meu dono')
return reply('sim mestre oque vc deseja ?')
break
case 'off'://case by Venom
reply(`sim mestre irei desligar 😔`)
conn.sendMessage(from, (exec(index0)));          
break

case 'créditos': case 'creditos': case 'criador':
try {
ppimg = await conn.profilePictureUrl(`https://telegra.ph/file/f0169d660bff8735ed482.jpg`, 'image')
} catch {
ppimg = 'https://telegra.ph/file/f0169d660bff8735ed482.jpg'
}
const creditoos = `
      *《 CRIADOR DO BOT 》*
┎┳━┅┅┄┈┄✧┈┈✦❖✦
┋┃ *_Developed by:_*
┋┃ *Şr.  SURTADO💛⃝⃒⃤⁩ ⸝͟๏︠🍃*
┋┃ wa.me/5521979047347
┖┻━┅┅┄┈┄✧┈┈✦❖✦`
daftarimg = await getBuffer(ppimg)
conn.sendMessage(from, {image: daftarimg, caption: creditoos}, {quoted: selo})
break

case 'dono':
const lczin = `*╭────  〘INFO〙 ───*
*│╭───────────*
*││▷ _Dono:_*
*││* ⊷️ ${nomeDono}
*││▷ _Número do Dono:_*
*││* ⊷️ wa.me/${numeroDono}
*││▷ _Nome do Bot:_*
*││* ⊷️ ${nomeBot}
*││▷ _Número do Bot:_*
*││* ⊷️ wa.me/${numeroBot}
*│╰───────────*
*╰────────────*`
conn.sendMessage(from, {text: lczin}, {quoted: selo})
break
    //==========(comandos de download)=============\\
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


case 'xvideos': // @Vitinho 
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
sendMsg = await conn.sendMessage(from, {react: {text: `✅`, key: info.key}})
anu = await fetchJson(`https://surtadoo.onrender.com/api/download/xvideos?url=${q}&apikey=APIKEY`)
reply('*⬇️ Baixando, aguarde um instante...*')
conn.sendMessage(from, { video: { url: anu.resultado.link }, mimetype: 'video/mp4', fileName: `${nomeBot}.mp4`, caption: `Pronto *${pushname}* 🔞` }, { quoted: selo })
break
case 'play3':
if (args.length < 1) return reply('Qual o nome da pesquisa?')
play = await fetchJson(`https://surtadoo.onrender.com/api/yt/playmp3?query=${q}&apikey=APIKEY`)
infoplay = `Titulo: ${play.title}
Canal: ${play.channel}
Views: ${play.views}
Publicado: ${play.published}`
btplay = [{ buttonId: `${prefixo}video ${play.title}`, buttonText: { displayText: 'Video️' }, type: 1 }, { buttonId: `${prefixo}musica ${play.title}`, buttonText: { displayText: 'Música'}, type: 1 }]
conn.sendMessage(from, {image: await getBuffer(play.thumb), caption: infoplay, footer: 'Footer', buttons: btplay}, {quoted: selo})
break
case 'musica':
if (args.length < 1) return reply(`❌ Erro! Use assim ${prefixo + command} [Nome da Música]`);
som = await fetchJson(`https://surtadoo.onrender.com/api/yt/playmp3?query=${text}&apikey=APIKEY`)
conn.sendMessage(from, {audio: {url: som.url}})
break
case 'video':
if (args.length < 1) return reply(`❌ Erro! Use assim ${prefixo + command} [Nome do Vídeo]`);
vid = await fetchJson(`https://surtadoo.onrender.com/api/yt/playmp4?query=${text}&apikey=APIKEY`)
conn.sendMessage(from, {video: {url: vid.url}})
break

    //==========(efeito de áudios)=============\\

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
case 'eminem':
if(!q) return reply('estou enviando docinho...')
if(args.length < 1) return reply('Escreva o texto de deseje que fale')

teks = body.slice(7)
uber.getAudioUrl('pub_mgqgxwvhxsukcqqawy', 'pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f', 'eminem', teks).then(async res => {
buff = await getBuffer(res)
conn.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'}, { quoted: selo })
})
break
case 'faustao':
if(!q) return reply('estou enviando docinho...')
if(args.length < 1) return reply('Escreva o texto de deseje que fale')
teks = body.slice(7)
uber.getAudioUrl('pub_mgqgxwvhxsukcqqawy', 'pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f', 'faustao', teks).then(async res => {
buff = await getBuffer(res)
conn.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'}, { quoted: selo })
})
break
case 'chapolin':
if(!q) return reply('estou enviando docinho...')
if(args.length < 1) return reply('Escreva o texto de deseje que fale')
teks = body.slice(7)
uber.getAudioUrl('pub_mgqgxwvhxsukcqqawy', 'pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f', 'chapolin-br', teks).then(async res => {
    buff = await getBuffer(res)
    conn.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'}, { quoted: selo })
})
break
case 'patolino':
if(!q) return reply('estou enviando docinho...')
if(args.length < 1) return reply('Escreva o texto de deseje que fale')
teks = body.slice(7)
uber.getAudioUrl('pub_mgqgxwvhxsukcqqawy', 'pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f', 'chapolin-br___', teks).then(async res => {
    buff = await getBuffer(res)
    conn.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'}, { quoted: selo })
})
break
case 'ibere':
reply('estou enviando docinho...')
if(args.length < 1) return reply('Escreva o texto de deseje que fale')
teks = body.slice(7)
uber.getAudioUrl('pub_mgqgxwvhxsukcqqawy', 'pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f', 'ibere', teks).then(async res => {
    buff = await getBuffer(res)
    conn.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'}, { quoted: selo})
})
break
//=============(comandos de admin)==============\\
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
case 'gp':
case 'grupo':
if (!isRegistro) return reply(enviar.msg.registro)
if (!isGroup) return reply(enviar.msg.grupo)
if (!groupAdmins) return reply(enviar.msg.adm)
if (isBotGroupAdmins) return reply(enviar.msg.botadm)
try {
if (q == 'abrir') {
await conn.groupSettingUpdate(from, 'not_announcement')
reply('🧸 Grupo aberto com sucesso 💣')
}
if (q == 'fechar') {
await conn.groupSettingUpdate(from, 'announcement')
reply('🧸 Grupo fechado com sucesso 😣')
}
if (q == 'livrar') {
await conn.groupSettingUpdate(from, 'unlocked')
reply('🧸 Grupo livre com sucesso 🌺')
}
if (q == 'limitar') {
await conn.groupSettingUpdate(from, 'locked')
reply('🧸 Grupo limitado com sucesso 😒')
}
} catch(e) {
console.log(e)
reply(enviar.msg.erro)
}
break
case 'infogp':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isRegistro) return reply(resposta.registro)
if (!isGroup) return reply(enviar.msg.grupo)
if (isBotGroupAdmins) return reply(enviar.msg.botadm)
reply(`
🧸 Nome : ${groupName}
🌺 Descrição : ${groupDesc}
🔥️ Id : ${from}
🗓 Data : ${data}
🧭 Horário : ${hora}
`)
break
case 'grupolink':
if (!isGroupAdmins && !isOwner) return reply(enviar.msg.adm)
if (!isGroup) return reply(enviar.msg.grupo)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
linkgc = await conn.groupInviteCode(from)
reply(`Olá *${pushname}*, aqui está o link do grupo: https://chat.whatsapp.com/`+linkgc)
break
case 'nomegp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
await conn.groupUpdateSubject(from, `${body.slice(9)}`)
await conn.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: selo})
break

case 'antiaudio':
if (!isGroupAdmins) return reply('so adm po')
if (!isBotGroupAdmins) return reply('preciso ser ADM')
					if (args.length < 1) return reply('digite 1 para ativar ou 0 para desativar ')
					if (Number(args[0]) === 1) {
						if (isAntiAudio) return reply('『❗』Ativou com sucesso o recurso de anti audio neste grupo.️')
						antiaudio.push(from)
						fs.writeFileSync('./surtado/antiaudio.json', JSON.stringify(antiaudio))
						reply('O antiaudio foi ativo no grupo ✔️')
					} else if (Number(args[0]) === 0) {			
						antiaudio.splice(from, 1)
						fs.writeFileSync('./surtado/antiaudio.json', JSON.stringify(antiaudio))
						reply('『❗』Desativou com sucesso o recurso de antiaudio neste grupo.️')
						if (!isAntiAudio) return reply('Já está desativado.')
					} else {
						reply('1 para ativar, 0 para desativar ')
					}
					break
case 'antilink':

if (!isGroupAdmins) return reply('so adm po')

if (!isBotGroupAdmins) return reply('preciso ser ADM')
					if (args.length < 1) return reply('digite 1 para ativar ou 0 para desativar ')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('o anti-link está ativo')
						antilink.push(from)
						fs.writeFileSync('./surtado/domina/antilink.json', JSON.stringify(antilink))
						reply('O anti-link foi ativo no grupo ✔️')
					} else if (Number(args[0]) === 0) {			
						antilink.splice(from, 1)
						fs.writeFileSync('./surtado/domina/antilink.json', JSON.stringify(antilink))
						reply('O anti-link foi desativado com sucesso neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar ')
					}
					break
					
				
                case 'bc': case 'bcgroup': case 'transmitir': case 'transmissão': {
if (!isGroupAdmins) return reply('Apenas admins')
if (!q) return reply( `Texto onde?\n\nExemplo : ${prefixo + command} BOA VISTA `)
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
for (let i of anu) {
await sleep(1500)
let txt = `「 TRANSMISSÃO DO BOT 」\n\n ${q}`
conn.sendMessage(i, {text: txt})
}
reply(`Enviando com sucesso `)
}
break
case 'ping':
r = (Date.now() / 1000) - info.messageTimestamp
uptime = process.uptime()
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
bla = `
*╭────〘 SPEED 〙 ──*
*│╭───────────*
*││▷ Horário:* ${hora1} 
*││▷ Velocidade:* ${String(r.toFixed(3))}
*││▷ Tempo Ativo:* ${kyun(uptime)}
*│╰───────────*
*╰────────────*
*𝐵𝑦: ${nomeDono}*`
await conn.sendMessage(from, {text: bla}, {quoted: selo})
break
case 'gpwhatsapp':
case 'gruposwhats':
case 'grupos': 
if(!isGroupAdmins) return reply('somente admins seu lerdo 🤦🏻‍♂️')
if(!q) return reply("Cadê o título da pesquisa?")
axios.get(`https://marcos025.onrender.com/api/pesquisa/gpwhatsapp?nome=${q}&apikey=XANAX-VNCS$`)
.then(e => {
try{
d = e.data;
txt = '';
no = 0;
for (let i of d) {
no += 1;
txt += `✓ 🏷 𝘕𝘰𝘮𝘦⧽ ${i.nome}\n× 🈹 𝘋𝘦𝘴𝘤𝘳𝘪𝘤̧𝘢̃𝘰⧽ ${i.descrição}\n× 🔗 𝘓𝘪𝘯𝘬⧽ ${i.link}\n\n`;
}
conn.sendMessage(from, {image:{url: `${logo}`}, caption:txt})
}catch(err){
reply(`Nenhum resultado foi encontrado.`)
}
}).catch(err => {
reply('Ops, eu acho que a api ou módulo caiu!')
console.log(err);
});
break
case 'seradm':

if(!isGroupAdmins) return reply("Só dono pode executar este comando.")

mentions(`@${sender.split("@")[0]} Pronto - Agora você é um administrador..`, [sender], true)
conn.groupParticipantsUpdate(from, [sender], "promote")
break 
case 'sermembro':
if(!isGroupAdmins) return reply("Só dono pode executar este comando.")
mentions(`@${sender.split("@")[0]} Pronto - Agora você é um membro comum novamente..`, [sender], true)
conn.groupParticipantsUpdate(from, [sender], "demote")
break

case 'marcar':
try {
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm) 
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
mentions(teks, members_id, true)
} catch {
reply('ERROR!!')
}
break
case 'resetarlink':
if (!isRegistro && !isGroupAdmins) return reply(resposta.msg.registro)
await conn.sendMessage(from, { react: { text: '🤗', key: info.key }})    
if (!isGroup) return reply(resposta.msg.grupo)
if (!groupAdmins) return reply(resposta.msg.adm)
if (isBotGroupAdmins) return reply(resposta.msg.botadm)
try {
await conn.groupRevokeInvite(from)
reply('🧸 Link de convite resetado com sucesso 🤭')
} catch(e) {
console.log(e)
reply(resposta.msg.erro)
}
break
case 'promover': 
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (info.message.extendedTextMessage == undefined || info.message.extendedTextMessage == null) return reply(`Marque a mensagem!`)
mentioned = info.message.extendedTextMessage.contextInfo.participant
if (mentioned.length >= 1) {
conn.sendMessage(from, {text: `@${mentioned.split("@")[0]} foi promovido(a) para Adm com sucesso ✅`, mentions: [mentioned]})
conn.groupParticipantsUpdate(from, [mentioned], "promote")  
} else {
if(q.length > 15) return reply('Só pode promover uma pessoa por vez!')
mentioned2 = args.join(" ").replace("@", "") + "@s.whatsapp.net"
conn.sendMessage(from, {text: `@${mentioned2.split("@")[0]} foi promovido(a) a Adm com sucesso ✅`, mentions: [mentioned2]})
conn.groupParticipantsUpdate(from, [mentioned2], "promote")
}
break

case 'rebaixar': 
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (info.message.extendedTextMessage == undefined || info.message.extendedTextMessage == null) return reply(`Marque a mensagem!`)
mentioned = info.message.extendedTextMessage.contextInfo.participant
if (mentioned.length >= 1) {
conn.sendMessage(from, {text: `@${mentioned.split("@")[0]} foi rebaixado(a) para Membro Comum com sucesso ✅`, mentions: [mentioned]})
conn.groupParticipantsUpdate(from, [mentioned], "demote")  
} else {
if(q.length > 15) return reply('Só pode rebaixar uma pessoa por vez..')
mentioned2 = args.join(" ").replace("@", "") + "@s.whatsapp.net"
conn.sendMessage(from, {text: `@${mentioned2.split("@")[0]} foi rebaixado(a) para Membro Comum com sucesso ✅`, mentions: [mentioned2]})
conn.groupParticipantsUpdate(from, [mentioned2], "demote")
}
break
case 'ban': case 'banir': case 'kick':
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
if(!isBotGroupAdmins) return reply('O Bot Precisa ser ADM pra executar essa ação.')
try {
if(!budy.includes("@")) {
if (info.message.extendedTextMessage == undefined || info.message.extendedTextMessage == null) return reply(`Marque a mensagem do usuário que deseja remover ele ou marque com ${prefixo}ban @marcar-ele`)
if(!JSON.stringify(groupMembers).includes(menc_prt)) return reply("Este usuário já foi removido do grupo.")
if(numeroBot.includes(menc_prt)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numeroDono.includes(menc_prt)) return reply('Não posso remover meu dono 🤧')
conn.sendMessage(from, {text: `@${menc_prt.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) -`, mentions: [menc_prt]})
conn.groupParticipantsUpdate(from, [menc_prt], "remove")  
} else {
if(q.length > 15) return reply('Só pode remover uma pessoa por vez..')
if(numeroBot.includes(menc_jid)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numeroDono.includes(menc_jid)) return reply('Não posso remover meu dono 🤧')
if(!JSON.stringify(groupMembers).includes(menc_jid)) return reply("Este usuário já foi removido do grupo.")
conn.sendMessage(from, {text: `@${menc_jid.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) - `, mentions: [menc_jid]})
conn.groupParticipantsUpdate(from, [menc_jid], "remove")
}
} catch (e) {
console.log(e)
}
break
case 'convite':
if(!budy.includes("chat.whatsapp.com")) return reply("Cadê o link do grupo que você deseja que eu entre?")
cnvt = args.join(" ")
reply(`O convite para o bot entrar em seu grupo, foi enviado, espere o dono aceitar..`)
sendBtext(`${numeroDono}@s.whatsapp.net`,`˚₊· ͟͟͞͞➳❥ 𝐂𝐎𝐍𝐕𝐈𝐓𝐄 𝐏/ 𝐄𝐍𝐓𝐑𝐀𝐑 𝐄𝐌 𝐆𝐏 🎖️\n▢ Link do grupo: ${cnvt}\n▢ Enviado por: wa.me/${sender.split("@")[0]}`, `${nomeBot}️`, [
{buttonId: `${prefixo}entrar ${cnvt}`, buttonText: {displayText: `Aceitar ✅`}, type: 1},
{buttonId: `${prefixo}recusar ${sender}`, buttonText: {displayText: `Recusar ❌`}, type: 1}], selo)
break
case 'recusar':
  await conn.sendMessage(from, { react: { text: '👎🏻', key: info.key }})
if(!isOwner) return reply("Só dono...")
conn.sendMessage(q, {text: `Olá Amigo(a), sinto muito dizer, mas seu convite foi recusado 🥺`})
break
case 'esperar':
  await conn.sendMessage(from, { react: { text: '🤚🏻', key: info.key }})
if(!isGroupAdmins) return reply('somente adms')
reply("Olá Amigo(a), Obgd pelo convite irei notificar o meu mestre, aguarde até ele te responder...😊")
break
case 'pinterest': 
  await conn.sendMessage(from, { react: { text: '😊', key: info.key }})
if (!isGroup && !isGroupAdmins && !isRegistro) return reply(enviar.msg.registro)
if (args.length < 1) return reply(`Exemplo:\n ${prefixo + comando} anime`)
anu = await pinterest(q)
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{
buttonId: `${prefixo}pinterest ${q}`, 
buttonText: 
{
displayText: '☕ Próxima imagem ⚘'
},
type: 1
}
]
let buttonMessage4 = {
image: { url: result },
caption: `🧸 Olá ${pushname}, aqui está sua imagem 🎲`,
footer: '',
buttons: buttons,
headerType: 4
}
conn.sendMessage(from, buttonMessage4, { quoted: selo})

break

case 'join': case 'entrar':
  await conn.sendMessage(from, { react: { text: '😊', key: info.key }})
if (!SoDono) return reply('Somente proprietário!')
string = args.join(' ')
if (!string) return reply('Insira um link de convite ao lado do comando.')
if (string.includes('chat.whatsapp.com/') || reply('Ops, verifique o link que você inseriu.') ) {
link = string.split('app.com/')[1]
try {
await conn.groupAcceptInvite(`${link}`)
} catch(erro) {
if (String(erro).includes('resource-limit') ) {
reply('O grupo já está com o alcance de 257 membros.')
}
if (String(erro).includes('not-authorized') ) {
reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
}
}
}
break
case 'atividade':
case 'atividades':  
try{
if(!isGroupAdmins && !issupre && !ischyt) return reply(enviar.msg.adm)
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
teks = `🗣 *Atividade dos membros do grupo:*\n\n`
mem = []
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.id) >=0) {
var indnum = numbersIds.indexOf(obj.id)
teks += `× Nº. do Participante⧽ @${obj.id.split('@')[0]}\n× Comandos realizados no grupo⧽ ${countMessage[ind].numbers[indnum].cmd_messages}\n× Mensagens enviadas no grupo⧽ ${countMessage[ind].numbers[indnum].messages}\n\n`
} else {
teks += `× Nº. do Participante⧽ @${obj.id.split('@')[0]}\n× Comandos realizados no grupo⧽ 0\n× Mensagens enviadas no grupo⧽ 0\n\n`
}
mem.push(obj.id)
}
conn.sendMessage(from, {text: teks, contextInfo:{mentionedJid: mem}}, {quoted: selo})
} else return reply('*Nada foi encontrado*')
} catch (e){
console.log(e)
}
break
case 'rankativo':
case 'rankativos':  
if (!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if(countMessage[ind].numbers.length < 3) return reply('Necessita do registro de 3 usuarios')
countMessage[ind].numbers.sort((a, b) => (a.messages < b.messages) ? 1 : -1)
mentioned_jid = []
boardi = '🗣 *Ranking dos membros mais ativos:*\n\n'
try {
for (let i = 0; i < 5; i++) {
if (i == 0) boardi += `*${i + 1}º 🥇:  @${countMessage[ind].numbers[i].id.split('@')[0]}*\n× Mensagens Enviadas⧽ ${countMessage[ind].numbers[i].messages}\n× Comandos Realizados⧽ ${countMessage[ind].numbers[i].cmd_messages}\n`
else if (i == 1) boardi += `*${i + 1}º 🥈: @${countMessage[ind].numbers[i].id.split('@')[0]}*\n× Mensagens Enviadas⧽ ${countMessage[ind].numbers[i].messages}\n× Comandos Realizados⧽ ${countMessage[ind].numbers[i].cmd_messages}\n`
else if (i == 2) boardi += `*${i + 1}º 🥉: @${countMessage[ind].numbers[i].id.split('@')[0]}*\n× Mensagens Enviadas⧽ ${countMessage[ind].numbers[i].messages}\n× Comandos Realizados⧽ ${countMessage[ind].numbers[i].cmd_messages}\n`
else if (i == 3) boardi += `*${i + 1}º 🥉: @${countMessage[ind].numbers[i].id.split('@')[0]}*\n× Mensagens Enviadas⧽ ${countMessage[ind].numbers[i].messages}\n× Comandos Realizados⧽ ${countMessage[ind].numbers[i].cmd_messages}\n`	
else if (i == 4) boardi += `*${i + 1}º 🥉: @${countMessage[ind].numbers[i].id.split('@')[0]}*\n× Mensagens Enviadas⧽ ${countMessage[ind].numbers[i].messages}\n× Comandos Realizados⧽ ${countMessage[ind].numbers[i].cmd_messages}\n`			
				
mentioned_jid.push(countMessage[ind].numbers[i].id)
} 
mentions(boardi, mentioned_jid, true)
} catch (err) {
			console.log(err)
await conn.sendMessage(from, {text: `É necessário 5 jogadores para se construir um ranking`}, {quoted: selo})
}
break

case 'videourl':
case 'gerarlink':
case 'videopralink':
case 'imgpralink':
try {
  await conn.sendMessage(from, { react: { text: '😊', key: info.key }})
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) { 
reply(enviar.espere)
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
reply(res) 
} else if ((isMedia && info.message.videoMessage.seconds < 30 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 30) && args.length == 0) { 
reply(enviar.espere)
boij = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quoted','m')).message.extendedTextMessage.contextInfo.message.videoMessage : info.message.videoMessage
owgi = await getFileBuffer(boij, 'video')
res = await upload(owgi)
reply(res)
} else {
reply("Você deve marcar uma imagem, ou um vídeo de até 30 segundos..")
}
} catch {
reply('Ocorreu algum Error, desculpe 😔/ O limite do tamanho de vídeo que gero o link, é até 30 segundos.')
}
break
case 'rename':
case 'roubar':  ////__JAPA////
await conn.sendMessage(from, { react: { text: '😊', key: info.key }})
if (!isQuotedSticker) return reply('Marque uma figurinha...')
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
var kls = q
var pack = kls.split("/")[0];
var author2 = kls.split("/")[1];
if (!q) return reply('*E o autor e o nome do pacote?*')
/////jJAPA DEV/////
if (!pack) return reply(`*por favor escreve o formato certo: ${prefixo + command} sad/bla*`)
if (!author2) return reply(`*por favor escreve o formato certo: ${prefixo + command} sad/dms*`)
reply(enviar.espere)
bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
var sti = new Buffer.from(mantap, 'base64');
conn.sendMessage(from, {sticker: sti, contextInfo: { externalAdReply:{title: `${pack}|${author2}`,body:"", previewType:"PHOTO",thumbnail: sti}}}, {quoted: selo})
.catch((err) => {
reply(`❎ Error, tenta mais tarde`); 
})
break

//===========(comandos aleatorio)============\\
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
  case 'bot1':
  return reply (`Olá amigos!
Para continuar com este projeto incrível, peço a colaboração de vocês para ajudar a mantê-lo sempre em pé! Uma quantia de 2, 3... reais vai ajudar muito com a hospedagem que é paga.

Basta pegar a chave pix aqui que vou deixar aqui em baixo, e assim ajudá-lo a sempre melhorar mais e mais. d1ae33f7-338b-4099-aedf-b19c89258f5f`)
                break
case 'correio':
{
txt = args.join(" ")
if(!txt) return reply(`Exemplo: ${prefixo + command} +55 00.../Oi amor, sdds`)
let txt1 = txt.split("/")[0].replace(/\D/g,'');
let txt2 = txt.split("/")[1];
if(!txt1) return reply('Cade o número da pessoa?')
if(!txt2) return reply('Cade a mensagem do correio??')
let [result] = await conn.onWhatsApp(txt1)
if(!result) return reply(`Número inválido`)
bla = 
`╭┄━┄━┄━┄━┄━┄━┄━┄━┄━➤
┞ ⸙. ͎۪۫ Correio Anônimo💌 ː͡₊ꞋꞌꞋꞌ
┞ Uma mensagem anônima foi 
┞ enviada para vc, veja abaixo:
┞
┞┧Mensagem: ${txt2}
┞┧
╰┄━┄━┄━┄━┄━┄━┄━┄━┄━➤`
conn.sendMessage(result.jid, {text: bla})
reply(`Mensagem enviada com sucesso para wa.me/${result.jid.split("@")[0]}`)
}
break
case 'idiomas':
case 'idioma':
txt = `  
IDIOMAS DO GTTS OU DO TRADUTOR

EXEMPLO :

>> ${prefixo}gtts pt (texto)

o PT que coloquei, é a linguagem, então pode por no lugar as 2 letras que define a linguagem, iguais os exemplos e os idiomas abaixo.

'af': 'Afrikaans',
'sq': 'Albanian',
'ar': 'Arabic',
'hy': 'Armenian',
'ca': 'Catalan',
'hr': 'Croatian',
'cs': 'Czech',
'da': 'Danish',
'nl': 'Dutch',
'en': 'English',
'eo': 'Esperanto',
'fi': 'Finnish',
'fr': 'French',
'de': 'German',
'el': 'Greek',
'ht': 'Haitian Creole',
'hi': 'Hindi',
'hu': 'Hungarian',
'is': 'Icelandic',
'id': 'Indonesian',
'it': 'Italian',
'ja': 'Japanese',
'ko': 'Korean',
'la': 'Latin',
'lv': 'Latvian',
'mk': 'Macedonian',
'no': 'Norwegian',
'pl': 'Polish',
'pt': 'Portugues',
'ro': 'Romanian',
'ru': 'Russian',
'sr': 'Serbian',
'sk': 'Slovak',
'es': 'Spanish',
'sw': 'Swahili',
'sv': 'Swedish',
'ta': 'Tamil',
'th': 'Thai',
'tr': 'Turkish',
'vi': 'Vietnamese',
'cy': 'Welsh'
 
🔥${infobot.nomeBot}🔥`

conn.sendMessage(from, {text: txt}, {quoted: selo})
break

case 'gtts':
if (args.length < 1) return reply(`Cade o texto?, digite algo Exemplo:\n${prefixo}gtts PT Oi`) 
const gtts = require('./arquivos/gtts')(args[0])
if (args.length < 2) return reply('Falta colocar o código do idioma!')
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
if(dtt.length > 4000) return reply('Para reduzir spam o máximo de letras permitidas são 4000!')
gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buffer = fs.readFileSync(rano)
conn.sendMessage(from, {audio: buffer, ptt:true}, {quoted: selo})
fs.unlinkSync(rano)
})
})
break
case 'chatgpt':
case 'ia':
  await conn.sendMessage(from, { react: { text: '😊', key: info.key }})
if (!q) return reply('Qual a sua pergunta? 🤔');
reply('🤖 Respondendo');
let pergunta = q;
getGPTResponse(`${pergunta}`).then(text => reply(text));
break
case 'grloc':
  await conn.sendMessage(from, { react: { text: '😊', key: info.key }})
reply(`Gerando localização com o texto: ${q}`);
const gerarloc = ["@By SURTADOO Ϟ"];
conn.sendMessage(sender, {
location: {
degreesLatitude: 50.2000,
degreesLongitude: 50.2000,
name: `${q}\n\n${gerarloc}`}})
await delay(1500);
conn.sendMessage(sender, { text: `Foi enviado no privado com sucesso✓` }, { quoted: selo})
break
case 'nick': case 'styletext': {
  await conn.sendMessage(from, { react: { text: '😊', key: info.key }})
		let { styletext } = require('./database/lib/scraper')
		if (!text) throw 'Digite seu nick!'
                let anu = await styletext(text)
                let teks = `𝑵𝒊𝒄𝒌𝒔 𝒋𝒆𝒓𝒂𝒅𝒐𝒔 𝒄𝒐𝒎 𝒔𝒖𝒄𝒆𝒔𝒔𝒐 𝒏𝒊𝒄𝒌= ${text}\n\n`
                for (let i of anu) {
                    teks += `➥𝑭𝒐𝒏𝒕𝒆𝒔 *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
case 'tabela':
  if(!isGroup) return reply('somente em grupo')
await conn.sendMessage(from, {text: tabela(prefixo, nomeBot)}, {quoted: selo})
break 
case 'criartabela': case 'criartbl': case 'criartab':
if(!isGroup) return reply("Só mente em grupo")
msgz = args.join(" ")

msgtmpol = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

var blarpty = {
Horario: msgtmpol, 
Data: datinhaofc, 
Tabela: msgz
}

if(!fs.existsSync(`./arquivos/amor/tabela-${from}.json`)) {
fs.writeFileSync(`./arquivos/amor/tabela-${from}.json`,
JSON.stringify(blarpty, null, 2));
} else {
if (fs.existsSync("./arquivos/amor/tabela-" + from + ".json")) {
fs.unlinkSync("./arquivos/amor/tabela-" + from + ".json");
fs.writeFileSync(`./arquivos/amor/tabela-${from}.json`,
JSON.stringify(blarpty, null, 2));
}
}
reply(`Tabela do grupo foi criada com sucesso..`)
break

case 'tabelagp': case 'tabeladogp': case 'tabelinha': 
if(!isGroup) return reply('somente em grupo otario kkk')
if(!fs.existsSync(`./arquivos/amor/tabela-${from}.json`)) {
reply(`Cade a tabela, cria ela com o comando\nExemplo : ${prefixo}criartabela lindas do grupo : e etc ..`)
}
const tabelagpofc = JSON.parse(fs.readFileSync(`./arquivos/amor/tabela-${from}.json`)); 

blity = `- ⏰ Horário que criou a Tabela : ${tabelagpofc.Horario}\n\n- 🗓️ Data que criou a Tabela : ${tabelagpofc.Data}\n\n - Tabela : ${tabelagpofc.Tabela}`

conn.sendMessage(from, {text: blity}, {quoted: selo})
break

case 'conselhobiblico':
case 'conselhosbiblico':  
case 'conselhosb':   
case 'conselhob':  
sendMsg = await conn.sendMessage(from, {react: {text: `✅`, key: info.key}})
var conselhosb = conselhob[Math.floor(Math.random() * conselhob.length)]   
jr = `${tempo} ${pushname} 

Conselhos Bíblico para você: 

- ${conselhosb} 

> Hora: ${hora}
> Bot: ${nomeBot}
> Grupo: ${groupName}`
await conn.sendMessage(from, {text: jr}, {quoted:selo, contextInfo: {"mentionedJid": jr}})
break
case 'cantada':
case 'cantadas': {
var pipoquinha = cantadas[Math.floor(Math.random() * cantadas.length)]   
let buttons = [
                    {buttonId: `${prefixo + command}`, buttonText: {displayText: '✰ۣۜۜ͜͡𝐏𝐑𝐎́𝐗𝐈𝐌𝐀-𝐂𝐀𝐍𝐓𝐀𝐃𝐀💸'}, type: 1}]
                let bb = {
                    text: `*Uma cantada para conquistar a novinha:* ${pipoquinha}`,
                    footer: `By: ${nomeBot}`,
                   buttons: buttons,
                   headerType: 2
                }
                conn.sendMessage(from, bb, {quoted: selo})
            }
break
case 'perfil':
if (!isRegistro && !isGroup) return reply(enviar.msg.registro)
try {
ppimg = await conn.profilePictureUrl(`${sender.split('@')[0]}@s.whatsapp.net`, 'image')
} catch(e) {
ppimg = logo
}
perfil = await getBuffer(ppimg)
reply(enviar.msg.espere)
try {
conn.sendMessage(from, {
image: perfil,
caption: `┏━❒ 「 *Seu Perfil* 」 ❒
┃ *🧸‍ Nome:* ${pushname}
┃ *🧩 Número:* @${sender.split('@')[0]}
┃ *🔖 Presença:* Online
┃ *☕ Registros:* ${registros.length}
┃ *📞 Plataforma:* ${info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'IOS' : 'WhatsApp web'}
┗━❏`
}, {quoted: ContatVR})
} catch(e) {
console.log(e)
reply(resposta.msg.erro)
}
break
case 'anime': {
  await conn.sendMessage(from, { react: { text: '😊', key: info.key }})
if (!isRegistro) return reply(enviar.msg.registro)
                if (!text) return reply('Digite o que vc esta atrais amigo')
		let { wallpaper } = require('./database/lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `${prefixo + command} ${text}`, buttonText: {displayText: '🌠Proxima Imagem🌠'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ titulo : ${result.title}\n⭔ categoria : ${result.type}\n⭔ detalhe : ${result.source}\n⭔ Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: `GOKU-BOT`,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo })
            }
break
case 'ttp':
case 'attp':
try {
reply('estou enviando')
string = args.join(' ') || 'Texto indefinido'
post = `https://nezsab-apis.fly.dev/api/ttp?texto=${string}&apikey=${keyapi}`
sendStickerFromUrl(from, post, {quoted: selo})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'attpp':		
case 'attp3': 
case 'attp4':
case 'attp5': 
case 'attp6':  
try {
if (q < 1) return reply(`_Coloque o texto_\n*Exemplo: ${prefixo}attp Sabrina`)
reply('estou enviando')
url = await getBuffer(`https://nezsab-apis.fly.dev/api/${command}?texto=${q}&apikey=${keyapi}`)
await conn.sendMessage(from, {sticker: url}, {quoted: selo})
} catch {
reply('ERROR')
}
break	

case 'attp1':
await conn.sendMessage(from, { react: { text: '😊', key: info.key }})
if(!q) return reply(`Exemplo: ${prefixo}attp surtado <3`)
await conn.sendMessage(from, { react: { text: '👍🏻', key: info.key }})   
var pollttp = body.slice(5).trim()
reply('Carregando...⌛')
url = encodeURI(`https://api.xteam.xyz/attp?file&text=${pollttp}`)
textofigu = await getBuffer(url)
conn.sendMessage(from,{sticker: textofigu ,quoted: selo})
break
case 'attp2':
await conn.sendMessage(from, { react: { text: '😊', key: info.key }})
if (!q) return reply('*Cade o texto??*');
await conn.sendMessage(from, { react: { text: 'enviando ✅', key: info.key }})   
const bkl = await getBuffer(`https://api.brizaloka-api.tk/ttp/attp1?apikey=brizaloka&text=${q}`);
conn.sendMessage(from, {sticker: bkl}, {quoted: selo});
break;
case "calcular":  /// créditos do bkz\\\
await conn.sendMessage(from, { react: { text: '😊', key: info.key }})
if (!q) { reply(`Por favor, informe uma expressão matemática para calcular. Exemplo: ${prefixo + comando} 2+2*2`)
} else if(!/^[0-9+\-*/().\s]+$/.test(q)) {
reply(`Por favor, informe uma expressão matemática válida para calcular. Exemplo: ${prefixo + comando} 2+2*2`)
} else {
try {
const resultado = calcularExpressao(q)
conn.sendMessage(from, { text: `O resultado é: ${resultado}`}, {quoted: selo})
} catch (e) {
reply(`Ocorreu um erro ao calcular a expressão: ${e.message}`)}}
break
case 'clima':
if (!isRegistro && !isPremium && !isOwner) return reply(enviar.msg.registro)
await conn.sendMessage(from, { react: { text: '😊', key: info.key }})
if (q < 3) return reply('Insira o nome da sua cidade.')
try {
res = await climaDl(q)
desc = `🌞 Clima 🌥\n\n🌇 Local: ${res[0].lugar}\n🌐 Continente: ${res[0].continente}\n☁️ Clima: ${res[0].clima}\n🌡 Temperatura: ${res[0].temperatura}\n🔥 Temperatura Max: ${res[0].temperatura_max}\n❄ Temperatura Minima: ${res[0].temperatura_minima}\n🌘 Visibilidade: ${res[0].visibilidade}\n🌧 Umidade: ${res[0].umidade}\n🌫 Velocidade Vento: ${res[0].vento}`
conn.sendMessage(from, { text: desc }, {quoted: selo})
} catch(e) {
console.log(e)
reply(enviar.msg.erro)
}
break
case 'programado':
case 'suporte':
case 'dono':
if (!isRegistro) return reply(enviar.msg.registro)
reply(enviar.msg.espere)
await delay(5000)
try {
conn.sendMessage(sender, { contacts: { displayName: `${nomeDono}`, contacts: [{ vcard }]
}})
} catch(e) {
console.log(e)
reply(enviar.msg.erro)
}
break
 
case 'sticker': case 's': case 'f': case 'fig': case 'figurinhas':
  await conn.sendMessage(from, { react: { text: '😊', key: info.key }})
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
reply(enviar.espere)
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('GOKU-BOT','Sr.LC')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
reply(enviar.espere)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
conn.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(rano)
})
} else if ((isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('GOKU-BOT', 'Sr.LC')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
conn.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(rano)
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break
case 'togif':
if (!isQuotedSticker) return reply('*[ ❗ ] Marque a figurinha animada!*')
if ((isMedia && !info.message.videoMessage || isQuotedSticker) && args.length == 0) {
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply('*「 ❗ 」 Aguarde, convertendo a figu em gif...*')
a = await webp_mp4(buff)
conn.sendMessage(from, {video: {url: a}, gifPlayback: true, fileName: `stick.gif`}, {quoted: selo})
fs.unlinkSync(buff)
}
break
case 'backup':
if(!isOwner) return reply('só meu dono amigoシ')
await conn.sendMessage(from, { react: { text: '☺', key: info.key }})
bk = backup.toString()
reply(bk)
break
    //==========(case dos Premiuns)=============\\
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
case 'gerarcpf':
if(!isGroup && !isPremium) return reply(enviar.msg.grupo)
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
await conn.sendMessage(from, {text: `CPF gerado com sucesso : ${cpf}`}, {quoted: selo})
break
case "meme":
try{
  if(!isPremium) return reply('somente premium')
conn.sendMessage(from, { react: { text: '🎭', key: info.key }})
const fot = JSON.parse(fs.readFileSync("./arquivos/memes.json"))
meme = fot[Math.floor(Math.random() * fot.length)]
let buttons = [
{buttonId: `${prefixo}${command}`, buttonText: {displayText: '🎭 Próximo meme➪'},type: 1}
]
let buttonMessage4 = {
video: await getBuffer(meme),
caption: `🎭 Olá ${pushname}, Aqui Está o seu meme 🎲`,
footer: 'GOKU-BOT',
buttons: buttons,
headerType: 4
}
conn.sendMessage(from, buttonMessage4, { quoted: selo })
}catch (e) {
console.log(e)
return reply("Não Achei o meme, Tente Novamente Mais Tarde")
}
break
case 'menos1': case '-1':
if (!isPremium) return reply('somente quem é premium')
return reply (` 

assunto:
Não recebo código de verificação 

resposta: 

Alguém solicitou meu código por engano, e agora não consigo entrar no meu whatsapp, peço que o suporte do whatsapp redefina o meu tempo para que eu possa pedir SMS e ligação Número: +55 82 9999-9999 

`) 

break
case 'menos2': 
  if (!isPremium) return reply('somente quem é premium')
return reply(` 

Assunto: Não consigo entrar no whatsapp! 

resposta: Eu nao consigo entrar no whatsapp , meu número esta -1 , solicito que resetem minha verificação de número!
Número: +55 99 9999-9999 

`) 

break 

case 'mtdban':
  if (!isPremium) return reply('somente quem é premium')
return reply(` 

Assunto: Usuário violando os termos de uso do whatsapp usando versões modificadas de whatsapps. 

resposta: Olá, hojé eu percebi que um homem estava usando whatsapp modificado, falei para ele que talvez a conta dele poderia ser banida mais ele nem ligou, pesquisei no Google e vi que whatsapp modificados dão ban, então peço que o suporte dê ban nesta conta por estar usando whatsapp modificado. 

Número: +55 99899
`) 

break



case 'mtddesban':
  if (!isPremium) return reply('somente quem é premium')
return reply(` 

Assunto: Roubado/perdido 

Desativem a minha conta +55 999999555 

`) 

break 

case 'mtddesban2':
  if (!isPremium) return reply('somente quem é premium')
return reply(` 

Assunto: Número Banido 

resposta: Ola suporte do whatsapp , meu numero ,(+55 9999999) foi banido injustamente do whatsapp , estou solicitando o desbanimento imediato de meu número 

`)
break 

case 'mtddesban3':
  if (!isPremium) return reply('somente quem é premium')
return reply(` 

Assunto: Número banido injustamente 

olá meu nome é Ricardo, trabalho com vendas no aplicativo Whatsapp. Recentemente me eu número foi algo de um grupo de web terroristas e a 3 dias atrás ele foi banido injustamente por favor verifiquem! 

(Após o support responder você envia o número completo com +55 etc..) 

`) 

break 
    //==========(case de jogos)=============\\
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
case 'roleta':
case 'roletarussa':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
jds = []
 A2 = groupMembers
 B2 = groupMembers
 TAMBOR = ["na perna.","na cabeça.","no pescoço.","no peito.","no olho.","no estômago.","na boca.","na perna.","na testa.","no braço."]
  C2 = A2[Math.floor(Math.random() * A2.length)]
if(C2 === sender || C2 === numeroBot+"@s.whatsapp.net") {
return reply(`*Escolhi* @${C2.id.split('@')[0]} mas infelizmente correu de covardia...*`)
}
 tpa = TAMBOR[Math.floor(Math.random() * (TAMBOR.length))]	 		
 reply(`A escolha é minha! 1 membro irá morrer, que os jogos comecem...`)
 setTimeout( () => {
D1 = `Que pena... você não sobreviveu ao meu jogo *@${C2.id.split('@')[0]}*, hora de enterrar o cadáver, infelizmente morreu com tiro *${tpa}*`             			
mentions(D1, jds, true)
}, 5000)
 jds.push(C2.id)				  
setTimeout( () => {
jds.push(C2.id)
conn.groupParticipantsUpdate(from, [C2.id], "remove")
}, 6000) 
break
case 'dado':
const dadus = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
dador = fs.readFileSync('./database/dado/' + dadu + '.webp')
conn.sendMessage(from, {sticker: dador}, {quoted: info})
break

case 'cassino':
//Cassino By: Şr. ŁĆ 💛⃝⃒⃤⁩ ⸝͟๏︠🍃		
const cassino = roleta.cassino.roleta[Math.floor(Math.random() * roleta.cassino.roleta.length)]
const vitoriass = roleta.vitoria.ganhou[Math.floor(Math.random() * roleta.vitoria.ganhou.length)]
const percass = roleta.vitoria.perdeu[Math.floor(Math.random() * roleta.vitoria.perdeu.length)]
if ((cassino == '⟮ ♥ ⟯⟮ ♥ ⟯⟮ ♥ ⟯') ||(cassino == '⟮ ♦ ⟯⟮ ♦ ⟯⟮ ♦ ⟯') ||(cassino == '⟮ ♣ ⟯⟮ ♣ ⟯⟮ ♣ ⟯') ||(cassino == '⟮ ♠ ⟯⟮ ♠ ⟯⟮ ♠ ⟯')) {
var Vitória = `${vitoriass}`
} else {
var Vitória = `${percass}`
}
const cassino2 = `
╭━━━━❪  🎰  ❫━━━━
┃     💰  𝘾𝘼𝙎𝙎𝙄𝙉𝙊 💰
┣━━━━━━━━━━━
┃=➤ *${cassino}*
┣━━━━━━━━━━━
┃ *${Vitória}*
┗━━━━❪  💰  ❫━━━━`
conn.sendMessage(from, {text: cassino2}, {quoted: info})
break
case 'quizanimais':
if (!isGroup) return reply('Comando apenas para grupos')
const animaisquiz = Math.floor(Math.random() * quizanimais.length)
if (!isGroupAdmins) return reply('Comando apenas para admins')
if (args.length == 0) return reply('use 1 para ativar o jogo \npara desativar use quizanimais 0')
if (args.join(' ') === '1') {
if (fs.existsSync(`./arquivos/amor/jogos-${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./arquivos/amor/jogos-$-${from}.json`))
imagemtexto =`                             「❓Quiz❓」`
await conn.sendMessage(from, {image: {url: dataAnagrama2.foto}, caption: imagemtexto, thumbnail: dataAnagrama2.foto}, {quoted: selo})
} else {
fs.writeFileSync(`./arquivos/amor/jogos-${from}.json`, `${JSON.stringify(quizanimais[animaisquiz])}`)
imagemtexto =`                             「❓Quiz❓」`
await conn.sendMessage(from, {image: {url: dataAnagrama2.foto}, caption: imagemtexto, thumbnail: wew}, {quoted: selo})
}
} else if (args.join(' ') ==='0') {
if (!fs.existsSync(`./arquivos/amor/jogos-${from}.json`)) return reply('Não tem como desativar o jogo pôs ele não foi ativado')
fs.unlinkSync(`./arquivos/amor/jogos-${from}.json`)
reply("Desativado com sucesso")
}
break
case 'anagrama':
if (!isGroup) return reply('Comando apenas para grupos')
const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
if (!isRegistro) return reply('comando apenas para admins')
if (args.length == 0) return reply('use 1 para ativar o jogo do anagrama\npara desativar use anagrama 0')
if (args.join(' ') === '1') {
if (fs.existsSync(`./arquivos/amor/jogos-${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./arquivos/amor/anagrama-${from}.json`))
reply(`o jogo já foi iniciado neste grupo:
palavra: ${dataAnagrama2.embaralhada}
dica: ${dataAnagrama2.dica}
`)} else {
fs.writeFileSync(`./arquivos/amor/jogos-${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
conn.sendMessage(from, {text: `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${palavrasANA[anaaleatorio].embaralhada}
│➽ DICA: ${palavrasANA[anaaleatorio].dica}
╰────────────────────────
`})
}
} else if (args.join(' ') ==='0') {
if (!fs.existsSync(`./arquivos/amor/jogos-${from}.json`)) return reply('não tem como desativar o jogo do anagrama pôs ele não foi ativado')
fs.unlinkSync(`./arquivos/amor/jogos-${from}.json`)
reply("desativado com sucesso")
}

break
case 'revelaranime':
case 'revelaanime':  
if (!isGroupAdmins) return reply ('somente adms')
let dataAnagrama = JSON.parse(fs.readFileSync(`./arquivos/amor/jogos-${from}.json`))
reply (`${dataAnagrama.original}`)
break
case 'revelaranimal':
case 'revelaanimal':  
if (!isGroupAdmins) return reply ('somente adms')
let dataAnagramaa = JSON.parse(fs.readFileSync(`./arquivos/amor/jogos-${from}.json`))
reply (`${dataAnagramaa.original}`)
break
const adivinhaaleatorio = Math.floor(Math.random() * adivinha.length)
case 'adivinha':
if (!isGroup) return reply ('Comando apenas para grupos')
if (!isRegistro) return reply ('comando apenas para admins')
if (args.length == 0) return reply ('use 1 para ativar o jogo do adivinha \npara desativar use adivinha 0')
if (args.join(' ') === '1') {
if (fs.existsSync(`./arquivos/amor/adivinha-${from}.json`)) {
let fadivinha = JSON.parse(fs.readFileSync(`./arquivos/amor/adivinha-${from}.json`))
reply(`o jogo já foi iniciado neste grupo:
palavra: ${fadivinha.embaralhada}
dica: ${fadivinha.dica}
`)} else {
const adivinhaaleatorio = Math.floor(Math.random() * adivinha.length)
fs.writeFileSync(`./arquivos/amor/adivinha-${from}.json`, `${JSON.stringify(adivinha[adivinhaaleatorio])}`)
conn.sendMessage(from, {text: `
╭─────≽「 👾 ADIVINHA 👾 」
│➽ ADIVINHE OS EMOJI
│➽ ADIVINHA: ${adivinha[adivinhaaleatorio].embaralhada}
│➽ DICA: ${adivinha[adivinhaaleatorio].dica}
╰──────────────────────
`})
}
} else if (args.join(' ') ==='0') {
if (!fs.existsSync(`./arquivos/amor/adivinha-${from}.json`)) return reply('não tem como desativar o jogo do adivinha pôs ele não foi ativado')
fs.unlinkSync(`./arquivos/amor/adivinha-${from}.json`)
reply("desativado com sucesso")
}
await limitAdd(sender)
break
case 'revelaradivinha':
case 'rladv':
if (!isGroupAdmins) return reply ('somente adms')
let dataadivinha = JSON.parse(fs.readFileSync(`./arquivos/amor/adivinha-${from}.json`))
reply (`${dataadivinha.original}`)
break
case 'resetar':
case 'resetforca':
if(!isPlayForca) return reply(`*Você não iniciou uma partida, para iniciar dê o comando ${prefixo}jogodaforca*`)
pla_pos = allForcaId.indexOf(sender)
forca.splice(pla_pos, 1)
fs.writeFileSync('./arquivos/forca.json', JSON.stringify(forca, null, 2))
reply(`*Jogo da forca reiniciado com sucesso. Para iniciar outra partida dê o comando ${prefixo}jogodaforca*`)
break
case 'forca':
if(!isPlayForca) return reply(`*Você não iniciou uma partida, para iniciar dê o comando ${prefixo}jogodaforca*`)
if(args.length < 1) return reply(`*Dê o comando mais a letra para advinhar*`)
if(args[0].trim().length < 2) {
    p_pos = allForcaId.indexOf(sender)
    find = forca[p_pos].word.match(args[0].toLowerCase())
    is_correct = false 
    while(find != null) {
res_tmp = forca[p_pos].word.indexOf(args[0].toLowerCase())
forca[p_pos].array_under_word[res_tmp] = args[0].toLowerCase()
forca[p_pos].array_word[res_tmp] = 0
forca[p_pos].word = forca[p_pos].word.replace(args[0].toLowerCase(), 0)
find = forca[p_pos].word.match(args[0].toLowerCase())
is_correct = true
    }
    if(is_correct) {
str_under = ''
for(i=0;i<forca[p_pos].array_under_word.length;++i) str_under += forca[p_pos].array_under_word[i]
attempts = forca[p_pos].attempts
if(str_under == forca[p_pos].word_original) {
reply(`*Parabéns, Você venceu o jogo!✅🥳*\n\n${puppet[attempts]}\n\n_*Palavra: ${str_under.split('').join(' ')}*_`)
forca.splice(p_pos, 1)
fs.writeFileSync('./arquivos/forca.json', JSON.stringify(forca, null, 2))
} else {
reply(`*Você acertou!✅*\n\n${puppet[attempts]}\n\n_*Palavra: ${str_under.split('').join(' ')}*_\n*Você tem ${attempts} chances*`)
fs.writeFileSync('./arquivos/forca.json', JSON.stringify(forca, null, 2))
}
    } else  {
str_under = ''
for(i=0;i<forca[p_pos].array_under_word.length;++i) str_under += forca[p_pos].array_under_word[i]
forca[p_pos].attempts -= 1
attempts = forca[p_pos].attempts
if(forca[p_pos].attempts <= 0) {
forca.splice(p_pos, 1)
fs.writeFileSync('./arquivos/forca.json', JSON.stringify(forca, null, 2))
reply(`*Você perdeu o jogo!❌*\n\n${puppet[attempts]}\n\n*Palavra: ${str_under.split('').join(' ')}*\n*Suas chances se esgotaram*`)
} else {
reply(`*Você errou!❌*\n\n${puppet[attempts]}\n\n*Palavra: ${str_under.split('').join(' ')}*\n*Você tem ${attempts} chances*`)
fs.writeFileSync('./arquivos/forca.json', JSON.stringify(forca, null, 2))
}
    }
} else {
    p_pos = allForcaId.indexOf(sender)
    if(forca[p_pos].word_original == args[0].toLowerCase()) {
attempts = forca[p_pos].attempts
reply(`*Parabéns, Você venceu o jogo!✅🥳*\n\n${puppet[attempts]}\n\n_*Palavra: ${forca[p_pos].word_original.split('').join(' ')}*_`)
forca.splice(p_pos, 1)
fs.writeFileSync('./arquivos/forca.json', JSON.stringify(forca, null, 2))
    } else {
str_under = ''
for(i=0;i<forca[p_pos].array_under_word.length;++i) str_under += forca[p_pos].array_under_word[i]
forca[p_pos].attempts -= 1
attempts = forca[p_pos].attempts
if(forca[p_pos].attempts <= 0) {
forca.splice(p_pos, 1)
fs.writeFileSync('./arquivos/forca.json', JSON.stringify(forca, null, 2))
reply(`*Você perdeu o jogo!❌*\n\n${puppet[attempts]}\n\n*Palavra: ${str_under.split('').join(' ')}*\n*Suas chances se esgotaram*`)
} else {
reply(`*Você errou!❌*\n\n${puppet[attempts]}\n\n*Palavra: ${str_under.split('').join(' ')}*\n*Você tem ${attempts} chances*`)
fs.writeFileSync('./arquivos/forca.json', JSON.stringify(forca, null, 2))
}
    }
}
break
case 'jogodaforca':
if(isPlayForca) return reply(`*Termine a partida iniciada para jogar uma nova, ou dê o comando ${prefixo}resetforca*`)
word_correct = (await randompalavra()).slice(1).normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
under_word = '-'.repeat(word_correct.length)
forca.push({
    id: sender,
    word_original: word_correct,
    word: word_correct,
    under_word: under_word,
    array_word: Array.from(word_correct),
    array_under_word: Array.from(under_word),
    tam: word_correct.length,
    attempts: 6
})
fs.writeFileSync('./arquivos/forca.json', JSON.stringify(forca, null, 2))
reply(`*Jogo da forca iniciado!✅*\n\n*Palavra: ${under_word.split('').join(' ')}*\n*Para advinhar uma letra , dê o comando ${prefixo}forca mais a letra*`)
break
case 'jogodavelha':
if(!isGroup) return reply('comando apenas para grupos')
joguinhodavelhajs.push(sender)
fs.writeFileSync('./arquivos/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.push(from)
fs.writeFileSync('./arquivos/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
if (fs.existsSync(`./tictactoe/json/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
     
[❗] Alguém está jogando no momento...\n\n@${boardnow.X} VS @${boardnow.O}
     
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
     
 Sua vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
mentions(chatMove);
return;
}
if (argss.length === 1)
return reply(`*⟅❗⟆ Jogue com Alguem!!!!*
*para inicar a partida : ${prefixo + comando} @membro do gp*`);
const boardnow = setGame(`${from}`);
console.log(`Start Tictactore ${boardnow.session}`);
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
fs.writeFileSync(`./tictactoe/json/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `*『📌ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ⚔️』*
     
@${sender.replace("@s.whatsapp.net",
"")} _está te desafiando para uma partida de jogo da velha._
_[ ${argss[1]} ] Use *『S』* para aceitar ou *『N』* para recusar..._
     `;
mentions(strChat); 
conn.sendMessage(from, {text: strChat, mentions: [blabord]}, {quoted: info});
break

case 'resetarvelha':
case 'resetavelha':
case 'rst':
if (!isGroup) return reply('SÓ EM GRUPO');
if (fs.existsSync("./tictactoe/json/" + from + ".json")) {
fs.unlinkSync("./tictactoe/json/" + from + ".json");
reply(`*🕹️JOGO DA VELHA RESETADO🕹️*`);
} else {
reply(`_Não há nenhuma sessão em andamento._`);
}
break
//=======(JOGO-DA-VELHA-COM-MAQUINA)=======\\

case 'tttme':
if (!isGroup) return reply('SÓ EM GRUPO')
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
conn.sendMessage(from, {text: tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender))}, {quoted: info})
break

case 'tttrank':
if (!isGroup) return reply(enviar.msg.grupo)
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '*🔥Ranking dos melhores players🔥*\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].id.split('@')[0]}\n➻❥ *Ganhou: ${tictactoe[i].wins}*\n➻❥ *Perdeu: ${tictactoe[i].defeats}*\n➻❥ *Empates: ${tictactoe[i].ties}*\n*➻❥ Pontuação: ${tictactoe[i].points}*\n\n`

} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].id.split('@')[0]}\n➻❥ *Ganhou: ${tictactoe[i].wins}*\n➻❥ *Perdeu: ${tictactoe[i].defeats}*\n➻❥ *Empates: ${tictactoe[i].ties}*\n*➻❥ Pontuação: ${tictactoe[i].points}*\n\n`
  
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].id.split('@')[0]}\n➻❥ *Ganhou: ${tictactoe[i].wins}*\n➻❥ *Perdeu: ${tictactoe[i].defeats}*\n➻❥ *Empates: ${tictactoe[i].ties}*\n*➻❥ Pontuação: ${tictactoe[i].points}*\n\n`
  
}
mentioned_jid.push(tictactoe[i].id)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await conn.sendMessage(from, {text: `*É necessário 3 jogadores para se construir um ranking*`}, {quoted: info})
}
break

case 'jogar':
tttset.playertest = sender
if (!isGroup) {
reply(ptbr.group())
} else if (tttset.tttstatus == "off") {
reply(`*O jogo não foi iniciado*\n*Digite ${prefixo}ttt <dificukdade> para iniciar*`)
} else if (tttset.player != tttset.playertest) {
reply(`*O jogo já foi iniciado por outro player, aguarde ele terminar...*`)
  
} else if (tttset.tttantibug == "on") {
reply(`Aguarde a ação anterior ser concluída...`)

} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' && coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`*Diga a cordenada*\nExemplo: ${prefix}jogar a1`)
tttset.tttantibug = "off"
} else {
  
switch (args[0]) {
  
case 'a1':
if (esp.a1 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'a2':
if (esp.a2 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'a3':
if (esp.a3 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'b1':
if (esp.b1 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'b2':
if (esp.b2 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'b3':
if (esp.b3 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'c1':
if (esp.c1 != "🔲") {
 reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'c2':
if (esp.c2 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'c3':
if (esp.c3 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

}
tttset.reActivate1 = "on"
reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
            
if (WinnerX()) {
if (isCmd) {
switch (tttset.tttdifficulty) {
              
case "EASY":
randomTTTXP = Math.floor(Math.random() * 25) + 25
addLevelingXp(tttset.player, randomTTTXP)
break

case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 75) + 75
addLevelingXp(tttset.player, randomTTTXP)
break

case "HARD":
randomTTTXP = Math.floor(Math.random() * 200) + 200
addLevelingXp(tttset.player, randomTTTXP)
break
                
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 1000) + 1000
addLevelingXp(tttset.player, randomTTTXP)
break
}
conn.sendMessage(from, {text: `*VOCÊ VENCEU, PARABENS*\n\n *VOCÊ GANHOU ${randomTTTXP}XP*`})
} else {
conn.sendMessage(from,{text: `*VOCÊ VENCEU, PARABENS*`},)
}

const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
				  
if (isCmd) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(tttset.player, randomTTTXP)
break
					
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomTTTXP)
break
					
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 25)
addLevelingXp(tttset.player, randomTTTXP)
break
					
case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break

}	
conn.sendMessage(from, {text: `*Você perdeu*\n\n AGORA VC PAGARÁ: ${randomTTTXP}XP`})
	
} else {
conn.sendMessage(from, {text: `*Você perdeu*`})
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
				
} else if (Tie()) {
if (isCmd) {
conn.sendMessage(from, {text: `*JOGO EMPATADO, NÃO HOUVE PERDAR*`})
} else {
conn.sendMessage(from, {text: `*JOGO, EMPATADO, TENHA UM BOM DIA*`})
}

const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break
				
case 'ttt':
const limitrl = getLimit(sender, daily)
if (!isGroup) {
reply(enviar.espere)
} else if (tttset.tttstatus == "on") {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.waitingTime == "on") {
reply(`Alguém jogou recentemente\nPor favor aguarde o tempo de espera...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
reply(`Defina a dificuldade\nEx.: ${prefixo}ttt easy\n\nDificuldades: easy, normal, hard e impossible`)

} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = info
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
blat =  `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`
conn.sendMessage(from, {text: `${blat}\n\nCaso não saiba como jogar digite: ${prefixo}ttthelp`})
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 12000) //2 minutos
addLimit(sender, daily)
}
break

case 'ttthelp':
conn.sendMessage(from, {text: ttthelp(prefixo)})
break
case 'eununca':
if(!isGroup) return reply(resposta.grupo)
var blars = JSON.parse(fs.readFileSync("./arquivos/euja.json"));
       blarnd = blars[Math.floor(Math.random() * blars.length)]
    buttons = [
      { buttonId: `${prefixo}eujaa`, buttonText: { displayText: '🎭 Eu Já 🎭' }, type: 1 },
      { buttonId: `${prefixo}nuncaaa`, buttonText: { displayText: '🎭 Eu Nunca 🎭' }, type: 1 },
      { buttonId: `${prefixo}eununca`, buttonText: { displayText: '🎭 Continuar 🎭' }, type: 1 }]
    
    buttonMessage = {
      text: blarnd,
      footer: `${nomeBot}️`,
      buttons: buttons,
      headerType: 1
    }
    sendMsg = await conn.sendMessage(from, buttonMessage, { quoted: info })
    break
    
  case 'eujaa':
    reagirMensagemm = {
      react: {
text: "🌚",
key: info.key
      }
    }
    sendMsg = await conn.sendMessage(from, reagirMensagemm)
    break
    
  case 'nuncaaa':
    reagirMensagemmm = {
      react: {
text: "🌝",
key: info.key
      }
    }
    sendMsg = await conn.sendMessage(from, reagirMensagemmm)
    break

case 'rankgay':
if(!isGroup) return reply(enviar.msg.grupo)
membr = []
const gay1 = groupMembers
const gay2 = groupMembers
const gay3 = groupMembers
const gay4 = groupMembers
const gay5 = groupMembers
var porcent = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
var porcent2 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent3 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent4 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent5 = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
const gays1 = gay1[Math.floor(Math.random() * gay1.length)]
const gays2 = gay2[Math.floor(Math.random() * gay2.length)]
const gays3 = gay3[Math.floor(Math.random() * gay3.length)]
const gays4 = gay4[Math.floor(Math.random() * gay4.length)]
const gays5 = gay5[Math.floor(Math.random() * gay5.length)]
rankzingay = `
*Esses são os Gays🏳️‍🌈 do grupo:*\n${groupName}\n
*╭────────────*
*│* 🏳️‍🌈 @${gays1.id.split('@')[0]}
*│➥ ${porcent} Gay Padrão*
*│* 🏳️‍🌈 @${gays2.id.split('@')[0]}
*│➥${porcent2}Gay Incubado*
*│* 🏳️‍🌈 @${gays3.id.split('@')[0]}
*│➥ ${porcent3} Gay Barbie*
*│* 🏳️‍🌈 @${gays4.id.split('@')[0]}
*│➥ ${porcent4} Gay Ativo*
*│* 🏳️‍🌈 @${gays5.id.split('@')[0]}
*│➥ ${porcent5} Gay Passivo*
*╰────────────*
\n*🔥${nomeBot}🔥*`
membr.push(gays1.id)
membr.push(gays2.id)
membr.push(gays3.id)
membr.push(gays4.id)
membr.push(gays5.id)
conn.sendMessage(from, {text: rankzingay, mentions: membr}, {quoted: info})
break

case 'rankcorno':
if(!isGroup) return reply(enviar.msg.grupo)
membr = []
const corno1 = groupMembers
const corno2 = groupMembers
const corno3 = groupMembers
const corno4 = groupMembers
const corno5 = groupMembers
var porcent = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
var porcent2 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent3 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent4 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent5 = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
const cornos1 = corno1[Math.floor(Math.random() * corno1.length)]
const cornos2 = corno2[Math.floor(Math.random() * corno2.length)]
const cornos3 = corno3[Math.floor(Math.random() * corno3.length)]
const cornos4 = corno4[Math.floor(Math.random() * corno4.length)]
const cornos5 = corno5[Math.floor(Math.random() * corno5.length)]
rankzincorno = `
*Esses são os Cornos🐂 do grupo:*\n${groupName}\n
*╭────────────*
*│* 🐂 @${cornos1.id.split('@')[0]}
*│➥ ${porcent} Corno Comum*
*│* 🐂 @${cornos2.id.split('@')[0]}
*│➥ ${porcent2} Corno Manso*
*│* 🐂 @${cornos3.id.split('@')[0]}
*│➥ ${porcent3} Corno Conformado*
*│* 🐂 @${cornos4.id.split('@')[0]}
*│➥ ${porcent4} Corno Hiper-Chifrudo*
*│* 🐂 @${cornos5.id.split('@')[0]}
*│➥ ${porcent5} Mestre Do Free Fire*
*╰────────────*
\n*🔥${nomeBot}🔥*`
membr.push(cornos1.id)
membr.push(cornos2.id)
membr.push(cornos3.id)
membr.push(cornos4.id)
membr.push(cornos5.id)
conn.sendMessage(from, {text: rankzincorno, mentions: membr}, {quoted: info})
break

case 'rankhetero':
if(!isGroup) return reply(enviar.msg.grupo)
membr = []
const hetero1 = groupMembers
const hetero2 = groupMembers
const hetero3 = groupMembers
const hetero4 = groupMembers
const hetero5 = groupMembers
var porcent = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
var porcent2 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent3 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent4 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent5 = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
const heteros1 = hetero1[Math.floor(Math.random() * hetero1.length)]
const heteros2 = hetero2[Math.floor(Math.random() * hetero2.length)]
const heteros3 = hetero3[Math.floor(Math.random() * hetero3.length)]
const heteros4 = hetero4[Math.floor(Math.random() * hetero4.length)]
const heteros5 = hetero5[Math.floor(Math.random() * hetero5.length)]
rankzinhetero = `
*Esses são os Héteros💥 do grupo:*\n${groupName}\n
*╭────────────*
*│* 💥 @${heteros1.id.split('@')[0]}
*│➥ ${porcent} Hétero Comum*
*│* 💥 @${heteros2.id.split('@')[0]}
*│➥ ${porcent2} Hétero Mandrake*
*│* 💥 @${heteros3.id.split('@')[0]}
*│➥ ${porcent3} Hétero Curioso*
*│* 💥 @${heteros4.id.split('@')[0]}
*│➥ ${porcent4} Hétero Top*
*│* 💥 @${heteros5.id.split('@')[0]}
*│➥ ${porcent5} Hétero Cis*
*╰────────────*
\n*🔥${nomeBot}🔥*`
membr.push(heteros1.id)
membr.push(heteros2.id)
membr.push(heteros3.id)
membr.push(heteros4.id)
membr.push(heteros5.id)
conn.sendMessage(from, {text: rankzinhetero, mentions: membr}, {quoted: info})
break
//===============(comandos de travas )=============\\
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


//===========(comandos de Dono)============\\
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
case 'nome-bot':
if (!isOwner) return reply(enviar.msg.dono)  
nomeBot = args.join(" ") 
infobot.nomeBot = nomeBot
fs.writeFileSync('./info/infobot.json', JSON.stringify(infobot, null, '\t'))
reply(`O nome do seu bot foi alterado com sucesso para : ${infobot.nomeBot}`)
break
case 'cmd':
  await conn.sendMessage(from, { react: { text: '🚩', key: info.key }})
reply(`Comando em manutenção! 🚩`)
break
case 'execut':
if(!isOwner) return reply(enviar.msg.dono)
try{
return eval(`(async() => { ${args.join(' ')}})()`)
}catch (e) {
reply(`${e}`)
}
break
case 'prefixo':
if (!isOwner) return enviar(resposta.msg.dono)
if (args.length !== 1) return reply(`Use o comando ${prefixo + command} seguido pelo novo prefixo.`)  
prefixo = args[0]
conn.sendMessage(from, { text: `O prefixo do bot foi atualizado com sucesso. para "${prefixo}"`}, {quoted: selo })
break
case 'desligar':
  await conn.sendMessage(from, { react: { text: '😔', key: info.key }})
if (!isOwner) return reply(enviar.msg.dono)
reply(`Desligando...`)
let shouldRestart = false
await sleep(2000)
process.exit()
break
case 'fotomenu':
case 'fundomenu':
if (!isOwner && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem 2 vez com esse comando..')
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(boij, 'image')
owgi = Buffer.from([])
for await(const send of imagem) { owgi = Buffer.concat( [ owgi, send ] ) }
res = await upload(owgi)
logoslink.logo = logo
logo = res
fs.writeFileSync('./menu/logos.json', JSON.stringify(logoslink, null, '\t'))
reply(`A foto do menu foi alterada com sucesso para: ${logo}`)
} else {
reply(`Mande uma imagem/vídeo com a legenda ${prefixo + command}`)
}
break
case 'alugar':
  await conn.sendMessage(from, { react: { text: '🤑', key: info.key }})
timestampe = speed();
latensie = speed() - timestampe
uptime = process.uptime()
 sections = [
{
title: `🎭 ${nomeBot} 🎭`,
rows: [
{title: "[🤑] Falar Com O Dono [🤑]", rowId: `${prefixo}dono`}
]
},
]
const listMessage2 = {
text: `
5 R$ = 1 Semana 

15 R$ = 1 Mês

50$ = Permante
`,
footer: `
╭─╼━══━━━━━━━━━━━━══━╾─➤
╎⚡ 𝗩𝗲𝗹𝗼𝗰𝗶𝗱𝗮𝗱𝗲: ${latensie.toFixed(4)}
╰─╼━══━━━━━━━━━━━━══━╾─➤`,
title: `〘${nomeBot}〙`,
buttonText: `➤ Falar Com O Dono ➤` ,
sections
}
sendMsg = await conn.sendMessage(from, listMessage2, {quoted: selo})
break
case 'criargp':
if (!isOwner) return reply('Este comando é somente pro meu criador! 🕴🏻')
const gp = args.join(' ')
if (!gp) return reply('*Escreva o nome do grupo que vc quer criar....*')
await conn.groupCreate(`${gp}`, [sender])
reply(`*Grupo criado com sucesso!*\n*Nome:* ${gp}`)
break

case 'adddono':
  await conn.sendMessage(from, { react: { text: '😃', key: info.key }})
if (!isGroup) return reply(enviar.msg.grupo)
if (!isOwner  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.dono)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.participant 
if (mentioned.length >= 1) {
blai = donos.includes(mentioned)
if(blai) return reply("*_Este número já está incluso!_*")  
donos.push(`${mentioned}`)
fs.writeFileSync('./database/dono/donos.json', JSON.stringify(donos))
conn.sendMessage(from, {text: `*_@${mentioned.split("@")[0]} foi adicionado como dono!_*`, mentions: [mentioned]}, {quoted: info})  
} else { 
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
blai = donos.includes(mentioned)
if(blai) return reply("*_Este número já está incluso!_*")  
donos.push(`${mentioned}`)
fs.writeFileSync('./database/dono/donos.json', JSON.stringify(donos))
conn.sendMessage(from, {text: `*_@${mentioned.split("@")[0]} foi adicionado como dono ✔_*`, mentions: [mentioned]}, {quoted: info})
}
break 

case 'deldono':
  await conn.sendMessage(from, { react: { text: '😌', key: info.key }})
if (!isGroup) return reply(enviar.msg.grupo)
if (!isOwner && !isnit && !issupre && !ischyt && !info.key.fromMe) return  reply(enviar.msg.dono)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
num = info.message.extendedTextMessage.contextInfo.participant 
if (num.length >= 1) {
blai = isOwner.includes(num)
if(!blai) return reply("*_Este número não está como dono!_*")  
pesquisar = num
processo = donos.indexOf(pesquisar)
while(processo >= 0){
donos.splice(processo, 1)
processo = donos.indexOf(pesquisar)
}
fs.writeFileSync('./database/dono/donos.json', JSON.stringify(donos))
conn.sendMessage(from, {text: `*_${mentioned.split("@")[0]} foi retirado como dono!_*`}, {quoted: info})
} else {
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
blai = donos.includes(mentioned)
if(!blai) return reply("*_Este número não está incluso na lista de donos!_*")  
pesquisar = mentioned
processo = donos.indexOf(pesquisar)
while(processo >= 0){
donos.splice(processo, 1)
processo = donos.indexOf(pesquisar)
}
fs.writeFileSync('./database/dono/donos.json', JSON.stringify(donos))
conn.sendMessage(from, {text: `*_@${mentioned.split("@")[0]} foi retirado como dono ✔_*`, mentions: [mentioned]}, {quoted: info})
}
break

case 'donolist':
  await conn.sendMessage(from, { react: { text: '🤔', key: info.key }})
if(!isOwner) return reply(enviar.msg.dono)   
tkks = '╭────「 𝘿𝙤𝙣𝙤𝙨 」\n│𝘿𝙤𝙣𝙤 𝙊𝙛𝙞𝙘𝙞𝙖𝙡\n'
for (let V of donoOficial) {
tkks += `│@${V.split('@')[0]}\n`
}
tkks += `│𝙏𝙤𝙩𝙖𝙡: ${donoOficial.length}\n│\n│𝙊𝙪𝙩𝙧𝙤𝙨 𝘿𝙤𝙣𝙤𝙨\n`
for (let V of donos) {
tkks += `│@${V.split('@')[0]}\n`
}
tkks += `│𝙏𝙤𝙩𝙖𝙡: ${donos.length}\n╰────「 𝙆𝙖𝙧𝙚𝙣 𝘽𝙤𝙩 」`
reply(tkks.trim())
break
case 'admins':
case 'listadmins':  
case 'listaadmins':   
if (!isGroup && !isGroupAdmins) return reply(enviar.msg.grupo)
ytb = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(ytb, groupAdmins, true)
break

case 'serpremium':
case 'serprem':  
if (!isOwner) return reply(`Apenas o meu Dono pode usar esse CMD`)
await conn.sendMessage(from, { react: { text: '🤭', key: info.key }})
premium.push(`${numeroDono}@s.whatsapp.net`)
fs.writeFileSync('./database/premium/premiuns.json', JSON.stringify(premium))
reply(`Pronto ${numeroDono} você foi adicionado na lista premium.`)
break
case 'addpremi':
case 'addpremium':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.dono)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.participant 
if (mentioned.length >= 1) {
blai = premium.includes(mentioned)
if(blai) return reply("*_Este número já está incluso!_*")  
premium.push(`${mentioned}`)
fs.writeFileSync('./database/premium/premiuns.json', JSON.stringify(premium))
conn.sendMessage(from, {text: `*_@${mentioned.split("@")[0]} foi adicionado à lista de usuários premium com sucesso!_*`, mentions: [mentioned]}, {quoted: info})  
} else { 
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
blai = premium.includes(mentioned)
if(blai) return reply("*_Este número já está incluso!_*")  
premium.push(`${mentioned}`)
fs.writeFileSync('./database/premium/premiuns.json', JSON.stringify(premium))
conn.sendMessage(from, {text: `*_@${mentioned.split("@")[0]} foi adicionado à lista de usuários premium com sucesso ✔_*`, mentions: [mentioned]}, {quoted: info})
}
break 
case 'delpremi':
case 'delpremium':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return  reply(enviar.msg.dono)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
num = info.message.extendedTextMessage.contextInfo.participant 
if (num.length >= 1) {
blai = premium.includes(num)
if(!blai) return reply("*_Este número não está incluso na lista premium!_*")  
pesquisar = num
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./database/premium/premiuns.json', JSON.stringify(premium))
conn.sendMessage(from, {text: ` ${mentioned.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
} else {
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
blai = premium.includes(mentioned)
if(!blai) return reply("*_Este número não está incluso na lista premium!_*")  
pesquisar = mentioned
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./database/premium/premiuns.json', JSON.stringify(premium))
conn.sendMessage(from, {text: `*_@${mentioned.split("@")[0]} foi tirado da lista premium com sucesso ✔_*`, mentions: [mentioned]}, {quoted: info})
}
break

case 'premiumlist':
if(!isPremium) return reply(enviar.msg.premium)   
tkks = '╭────「 𝙐𝙨𝙪𝙖𝙧𝙞𝙤𝙨 𝙋𝙧𝙚𝙢𝙞𝙪𝙢 」\n'
for (let V of premium) {
tkks += `│+  @${V.split('@')[0]}\n`
}
tkks += `│+ Total : ${premium.length}\n╰────「 𝙆𝙖𝙧𝙚𝙣 𝘽𝙤𝙩 」`
reply(tkks.trim())
break

case 'tagme':
const tagme = `@${sender.split("@")[0]}`
await mentions(tagme, [sender], true)
break

case 'reiniciar':
if(!SoDono) return reply("enviar.msg.dono")
reply(`Reiniciando...`)
await sleep(2000)
process.exit()
break
    //==========(comandos de sugestão)=============\\

////////////////////////////////////////////////////////////////////////////////////////////////////////////
case 'report':
case 'bug':
if (!q) return reply('Ex: bug no menu..')
reply(`Obrigada pela colaboração, o bug foi reportado ao meu criador...
<♨️>bugs falsos nao serão respondidos`)
let templateMesssage = {
image: {url: './menu/logo.jpg',
quoted: selo},
caption: `♨️𝗨𝗺 𝗕𝘂𝗴♨️\nDo Número: @${sender.split('@')[0]},\nReportou:\n${q}`,
footer: 'GOKU-BOT'
}
conn.sendMessage("5521979047347@s.whatsapp.net",templateMesssage)
break
case 'novocmd':
if (!q) return reply('Ex: novocmd coloca antilink')
reply(`Obrigada pela colaboração, a sua idea foi reportada ao meu criador 😊`)
qp = args.join(" ")
let templateMessage = {
image: {url: './menu/logo.jpg',
quoted: selo},
caption: `♨️IDEIA DE CMD♨️\nDo Número: @${sender.split("5521979047347@s.whatsapp.net")[0]},\nA Ideia É:\n ${q}`,
footer: 'GOKU-BOT'
}
conn.sendMessage("5521979047347@s.whatsapp.net",templateMessage)
break
//*****[ FINAL COMANDOS DE PREFIXO]*****//

default:
if(budy.includes(budy)) {
backup.push(`\nmensagem em grupo
grupo : ${groupName}
nome : ${pushname}
mensagem : ${budy}\n`)
fs.writeFileSync('./simih/backup.json',JSON.stringify(backup))}
// ======= || Interações || ========= \\
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()

if (budy.match(`ban`) || (budy.match(`ban`))) {
      sendMsg = await conn.sendMessage(from, {react: {text: `️ 🚫`, key: info.key}})
conn.sendMessage(from, {sticker: fs.readFileSync('./stickers/ban.webp')});
            }
            
            
if (budy.match(`Boa noite`) || (budy.match(`Boa noite grupo`))) {
conn.sendMessage(from, {sticker: fs.readFileSync('./stickers/Boa noite.webp')});
    sendMsg = await conn.sendMessage(from, {react: {text: `️‍🌜`, key: info.key}})
            }
            
            if (budy.match(`Oie`) || (budy.match(`Oie`))) {
      sendMsg = await conn.sendMessage(from, {react: {text: `️😊`, key: info.key}})
conn.sendMessage(from, {sticker: fs.readFileSync('./stickers/Oie.webp')});
            }
            
         if (budy.match(`Bot`) || (budy.match(`Bot`))) {
      sendMsg = await conn.sendMessage(from, {react: {text: `️‍☺`, key: info.key}})
conn.sendMessage(from, {sticker: fs.readFileSync('./stickers/Bot.webp')});
            }
            
            if (budy.match(`Olha o kick`) || (budy.match(`Olha o ban`))) {
      sendMsg = await conn.sendMessage(from, {react: {text: `️🤨`, key: info.key}})
conn.sendMessage(from, {sticker: fs.readFileSync('./stickers/Olha o kick.webp')});
            }
            
            if (budy.match(`Ixi`) || (budy.match(`Ixi`))) {
      sendMsg = await conn.sendMessage(from, {react: {text: `️‍😎`, key: info.key}})
conn.sendMessage(from, {sticker: fs.readFileSync('./stickers/Ixi.webp')});
            }
            
            if (budy.match(`Calma ai`) || (budy.match(`Calma ai`))) {
      sendMsg = await conn.sendMessage(from, {react: {text: `️‍😂`, key: info.key}})
conn.sendMessage(from, {sticker: fs.readFileSync('./stickers/Calma ai.webp')});
            }
            
            if (budy.match(`serio`) || (budy.match(`serio`))) {
      sendMsg = await conn.sendMessage(from, {react: {text: `️🤫`, key: info.key}})
conn.sendMessage(from, {sticker: fs.readFileSync('./stickers/serio.webp')});
            }
            
            if (budy.match(`Boa tarde`) || (budy.match(`Boa tarde`))) {
      sendMsg = await conn.sendMessage(from, {react: {text: `️😑`, key: info.key}})
conn.sendMessage(from, {sticker: fs.readFileSync('./stickers/Boa tarde.webp')});
            }
            if (budy.match(`Bom dia`) || (budy.match(`Bom dia`))) {
      sendMsg = await conn.sendMessage(from, {react: {text: `️‍🌤`, key: info.key}})
conn.sendMessage(from, {sticker: fs.readFileSync('./stickers/Bom dia.webp')});
            }
            
// Resposta quando o comando não é encontrado
if (isCmd){
reply('*O comando não foi encontrado... 😣*')
delay(1000)
conn.sendMessage(from, { react: { text: '💣', key: info.key }})     
}
//************[ CONEXÃO FINAL ]************//
}
} catch (e) {console.log(e)}})

conn.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update
 
fs.watchFile('./index.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color("[❗] A index.js ACABOU DE SER EDITADA, REINICIANDO...", "yellow"));
process.exit()
}
})

fs.watchFile('./menu/menu.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color("[❗] O menu.js ACABOU DE SER EDITADO, REINICIANDO...", "yellow"));
process.exit()
}
})

if(fs.existsSync("GOKU-BOT_store.json")) {
statsObj = fs.statSync('./GOKU-BOT_store.json')  

if(convertBytes(statsObj.size) >= "10 MB") {
exec("rm GOKU-BOT_store.json")
}
}

if(connection === 'close') {
var shouldReconnect = ((lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut)
if(String(lastDisconnect.error).includes("Stream Errored")) {
console.log(color("Stream Errored, CASO ESTA MENSAGEM CONTINUE SE REPETINDO, FORCE A PARADA NO TERMUX, ABRA NOVAMENTE E LIGUE, CASO CONTRÁRIO APENAS IGNORE...", "yellow"))
} else if(String(lastDisconnect.error).includes("Connection Failure")) {
exec("rm GOKU-BOT_info.json")  
exec("rm GOKU-BOT_store.json")
console.log(color("VOCÊ NÃO ESCANEOU CORRETAMENTE O QRCODE, OU ELE DESCONECTOU DO WHATSAPP, IREI APAGAR ELE E GERAR UM NOVO QRCODE...", "yellow"))
process.exit()
} else if(String(lastDisconnect.error).includes("Restart Required")) {
console.log(color("SE FOR NECESSÁRIO REINICIE, ESCANEIE O QRCODE EM UM AMBIENTE MAIS ESCURO PARA QUE O FOCO DA CÂMERA FUNCIONE MELHOR, CASO NÃO CONECTAR O QRCODE, SÓ SEGUIR ESSE PROCEDIMENTO BÁSICO...", "yellow"))
} else if(String(lastDisconnect.error).includes("Connection was lost")){
console.log(color("SUA CONEXÃO ESTÁ FRACA, NÃO SE PREOCUPE, EM BREVE VOLTA AO NORMAL...", "yellow"))
} else if(String(lastDisconnect.error).includes("Connection Terminated")){
console.log(color("CONEXÃO ESTÁ QUERENDO CAIR, MAS RELAXE, EM BREVE RECONECTA AUTOMATICAMENTE...", "yellow"))
} else {
console.log('Conexão fechada devido a ', lastDisconnect.error, ', Reconectar ', shouldReconnect)
}
if(lastDisconnect?.error) {
Commencer()
}}
if(update.isNewLogin) {
 Commencer()
}
})
}
Commencer()