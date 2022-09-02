let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
┌─「 Donasi • Pulsa 」
│ • *Indosat:* [${085882802642}]
│ • *Indosat:* [${085715334760}]
❏────

┌─「 Donasi • Non Pulsa 」
│ • *Dana:* [${085882802642}]
│ • *OVO:* [${085882802642}]
❏────
`
const templateButtons = [
    {index: 2, urlButton: {displayText: '🧸 Instagram', url: https://www.instagram.com/putraskyz__/}},
    {index: 3, urlButton: {displayText: '🇮🇩 Group Telegram', url: https://t.me/Grup_Cari_Teman_Virtual}},
    {index: 4, quickReplyButton: {displayText: 'Menu', id: '.menu'}},
    {index: 5, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
