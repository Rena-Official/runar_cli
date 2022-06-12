const client = require('../index.js')

// ready
/* Emitted when the client becomes ready to start working.    */
client.on("ready", () => {
    console.log(`the client becomes ready to start`);
	console.log(`I am ready! Logged in as ${client.user.tag}!`);
	console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`); 

  	client.user.setActivity("the upright organ");
	client.generateInvite(['SEND_MESSAGES', 'MANAGE_GUILD', 'MENTION_EVERYONE'])
	.then(link => {
		console.log(`Generated bot invite link: ${link}`);
		inviteLink = link;
	});
});