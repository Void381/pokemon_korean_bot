const discord = require('discord.js');
config = require('./config');  //config file is not included in GIthub
const CommandSystem = require('./commandSystem')

const Client = new discord.Client();

Client.on('ready', () => {
    console.log(`Bot is ready, logged in as '${Client.user.username}#${Client.user.discriminator}'`);
    CommandSystem(Client);

    Client.user.setPresence({
        activity: { name: '.help / 지금 ' + Client.guilds.cache.size + '개의 서버와 함께하고 있어요!' },
        status: 'idle' 
    });

    // Oh no! It'S oVeR :(((
});

Client.on('guildCreate', () => {
    Client.user.setPresence({
        activity: { name: '.help / 지금 ' + Client.guilds.cache.size + '개의 서버와 함께하고 있어요!' },
        status: 'idle' 
    });
});

Client.on('guildDelete', () => {
    Client.user.setPresence({
        activity: { name: '.help / 지금 ' + Client.guilds.cache.size + '개의 서버와 함께하고 있어요!' },
        status: 'idle' 
    });
});

Client.login(config.token);
