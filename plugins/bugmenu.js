
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
