


//=====================================//
module.exports = zyren = async (zyren, m, chatUpdate, store) => {
const qtod = m.quoted? true : false
require("./database")(zyren, m)
try{

//=====================================//
const onlyOwner = async () => {
if (db.data.settings[botNumber].autovn) {
zyren.sendVn(m.chat, gakmau, m)
} else if (db.data.settings[botNumber].autosticker) {
zyren.sendSticker(m.chat, khususowner, m)
} else {
setReply(mess.owner)
}
}
//===================MENU==============//
switch(command) {

case "santed":
if (!isCreator) return onlyOwner()
if (!Input) return setReply("Reply pesan/Tag orang/Nomer")
if (mentionByReply) {
require("../basetzy/santed/indexByReply")(zyren, m, prefix, command, mentionByReply)
} else if (mentionByTag[0] && m.isGroup) {
require("../basetzy/santed/indexByTag")(zyren, m, prefix, command, mentionByTag)
} else if (text.split("|")[0] && !text.split("|")[1] && !text.split("|")[2]) {
require("../basetzy/santed/indexByNumber")(zyren, m, prefix, command, text)
} else if (text.split("|")[0] && text.split("|")[1] && !text.split("|")[2]) {
require("../basetzy/santed/indexOrg")(zyren, m, prefix, command, text)
} else if (text.split("|")[0] && text.split("|")[1] && text.split("|")[2]) {
require("../basetzy/santed/santed")(zyren, setReply, text, sleep)
}
break
}

}
