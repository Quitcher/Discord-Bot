const {
    Client,
    RichEmbed,
    Attachment
} = require('discord.js');
const config = require('./config.json');
const client = new Client;

client.on('ready', () => {
  console.log('i am ready')
});

client.on('message', (message) => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === 'message') {
    message.channel.send('Waluigi Time')
  }
  if (command === 'embed') {
    message.channel.send(new RichEmbed({
      author: {
        name: 'Waluigi',
        icon: 'https://cdn.vox-cdn.com/thumbor/CpNUG_xXvw51x8sE_He2plFUQbY=/0x0:1568x1136/1200x800/filters:focal(722x442:972x692)/cdn.vox-cdn.com/uploads/chorus_image/image/58280817/Mario_Party___Island_Tour_Waluigi_Artwork.0.png'
      },
      title: 'WtAChKo',
      description: 'Waaaaaa',
      image: {
        url: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Waluigi.png/180px-Waluigi.png'
      },
      thumbnail: {
        url:'https://cdn.vox-cdn.com/thumbor/CpNUG_xXvw51x8sE_He2plFUQbY=/0x0:1568x1136/1200x800/filters:focal(722x442:972x692)/cdn.vox-cdn.com/uploads/chorus_image/image/58280817/Mario_Party___Island_Tour_Waluigi_Artwork.0.png'
      }
    }).setColor([75,0,130]))
  }
  if (command === 'attachment') {
    message.channel.send(new Attachment('https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Waluigi.png/180px-Waluigi.png'))
  }
});

client.login(config.token)
