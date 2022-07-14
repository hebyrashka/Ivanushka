const Discord = require("discord.js");

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

const prefix = "!";

client.on("ready", function() {
    let egor = client.users.fetch('581817387364646922');
    egor.then(function(user) {
        const channel = client.channels.cache.get('796687404445597730');
        channel.send(`${user} Иди нахуй!`);
        setInterval(() => {
            const channel = client.channels.cache.get('796687404445597730');
            channel.send(`${user} Иди нахуй!`);
        }, 3600000);
    });
});

client.login("OTk3MTk4NDg3MDY4MzQ4NDQ2.GssWuU.Y5yZKG1ZzEJX-Sfm1HQpo5Q_lYiFKuVi9oWnUw");