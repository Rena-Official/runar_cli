const client = require('../../index')
const yellow = '\u001b[33m';
const blue = '\u001b[34m';
const magenta = '\u001b[35m';
const cyan = '\u001b[36m';
const white = '\u001b[37m';
const config = client.config

client.on('ready', () => {
    const version = ` | ${process.argv[2]} | `
    client.user.setActivity(`/help${version}${client.guilds.cache.size}guilds | 14/16 Shadrs | ${client.ws.ping}`, { type: 'PLAYING' })

    console.log(`
    ${white}[INFO] ${cyan}My Name: ${yellow}${client.user.tag}
    ${white}[INFO] ${cyan}My ID: ${yellow}${client.user.id}
    ${white}[INFO] ${cyan}My Token: ${yellow}${client.token}
    ${magenta}[DATA] ${cyan}Config: ${yellow}/${blue}src/${blue}data${yellow}/${blue}config${yellow}/${blue}config.json${yellow}/
    ${magenta}[DATA] ${cyan}Index: ${yellow}/${blue}index.js${yellow}/
    ${magenta}[DATA] ${cyan}Commands ${yellow}/${blue}src${yellow}/${blue}commands${yellow}/${cyan}\${dir}${yellow}/${cyan}\${commands}${yellow}/
    ${white}[CNFG] ${cyan}Prefix: ${yellow}${config.prefix}
    ${white}[CNFG] ${cyan}MongooseConnectionString: ${yellow}${config.mongooseConnectionString}
    ${cyan}[ABOUT] ${cyan}AddServer: ${yellow}${client.guilds.cache.size}
    ${white}`)

});