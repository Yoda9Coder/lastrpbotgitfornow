(async()=>{
                let process = require('process');
                process.on('uncaughtException', function (err) {
                    console.log(`𝕖𝕣𝕣𝕠𝕣❕`);
                    console.log(err);
                  });
                  const events = require('events');
                  let Discord = require("discord.js")
                  const keep_alive = require('./keep_alive.js')
let Database  = require("easy-json-database")
let { MessageEmbed, MessageButton, MessageActionRow, Intents, Permissions, MessageSelectMenu }= require("discord.js")
let logs = require("discord-logs")
const os = require("os-utils");
const lyricsFinder = require('lyrics-finder');
let fs = require('fs');
                    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
                    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                    const s4d = {
                        Discord,
                        database: new Database(`./database.json`),
fire:null,
                        joiningMember:null,
                        reply:null,
                        tokenInvalid:false,
                        tokenError: null,
                        player:null,
                        manager:null,
                        Inviter:null,
                        message:null,
                        notifer:null,
                        checkMessageExists() {
                            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                        }
                    };
                    s4d.client = new s4d.Discord.Client({
                    intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
                    partials: ["REACTION", "CHANNEL"]
                    });
                    s4d.client.on('ready', () => {
                        console.log(s4d.client.user.tag + " is alive!")
                    })
                    logs(s4d.client);         
                    var arguments2, command;


await s4d.client.login('OTczMjYxOTQzNTQ2NzI4NTA4.Gwl80T.1m57YI7iC0eKgUvV36cbuc1e3XIHRYITLO4icM').catch((e) => {
        s4d.tokenInvalid = true;
        s4d.tokenError = e;
        if (e.toString().toLowerCase().includes("token")) {
            throw new Error("An invalid token was provided!")
        } else {
            throw new Error("Intents are not turned on!")
        }
    });

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == 'rp!character') {
    s4dmessage.channel.send({
                embeds: [new MessageEmbed()
    .setColor(String('#33cc00'))
    .setDescription(String((['**Name:** ',s4d.database.get(String(([(s4dmessage.mentions.members.first().user).id,' -name- ',(s4dmessage.guild || {}).id].join('')))),'\n','**Nickname:** ',s4d.database.get(String(([(s4dmessage.mentions.members.first().user).id,' -nickname- ',(s4dmessage.guild || {}).id].join('')))),'\n','**Birth date:** ',s4d.database.get(String(([(s4dmessage.mentions.members.first().user).id,' -born- ',(s4dmessage.guild || {}).id].join('')))),'\n','**Gender:** ',s4d.database.get(String(([(s4dmessage.mentions.members.first().user).id,' -gender- ',(s4dmessage.guild || {}).id].join('')))),'\n','**Personality:** ',s4d.database.get(String(([(s4dmessage.mentions.members.first().user).id,' -personality- ',(s4dmessage.guild || {}).id].join('')))),'\n','**Appearance:** ',s4d.database.get(String(([(s4dmessage.mentions.members.first().user).id,' -appearance- ',(s4dmessage.guild || {}).id].join('')))),'\n','**Godly parent:** ',s4d.database.get(String(([(s4dmessage.mentions.members.first().user).id,' -parent- ',(s4dmessage.guild || {}).id].join('')))),'\n','**Weapons:** ',s4d.database.get(String(([(s4dmessage.mentions.members.first().user).id,' -weapon- ',(s4dmessage.guild || {}).id].join('')))),'\n','**Demigod powers:** ',s4d.database.get(String(([(s4dmessage.mentions.members.first().user).id,' -power- ',(s4dmessage.guild || {}).id].join('')))),'\n','**Fatal flaw:** ',s4d.database.get(String(([(s4dmessage.mentions.members.first().user).id,' -flaw- ',(s4dmessage.guild || {}).id].join('')))),'\n','**Backstory:** ',s4d.database.get(String(([(s4dmessage.mentions.members.first().user).id,' -backstory- ',(s4dmessage.guild || {}).id].join('')))),'\n','**Pet:** ',s4d.database.get(String(([(s4dmessage.mentions.members.first().user).id,' -pet- ',(s4dmessage.guild || {}).id].join('')))),'\n','**Hometown:** ',s4d.database.get(String(([(s4dmessage.mentions.members.first().user).id,' -hometown- ',(s4dmessage.guild || {}).id].join(''))))].join(''))))
                ]
        });
  }

});

s4d.client.on('interactionCreate', async (interaction) => {
let member = interaction.guild.members.cache.get(interaction.member.user.id)
  if ((interaction.commandName) == 'ping') {
    await interaction.reply({ content: (['Pong!','\n',s4d.client.ws.ping].join('')), ephemeral: true || false, components: [] });
  }

});

s4d.client.on('interactionCreate', async (interaction) => {
let member = interaction.guild.members.cache.get(interaction.member.user.id)
  if ((interaction.commandName) == 'help') {
    await interaction.reply({ content: (['My commands:','\n','A bunch of slash commands; you can see what their function is when you use them.','\n','Every slash command can be used with the prefix **rp!**, except for help and ping. Any other slash command does not work (at the moment).','\n','rp!character [ping an user] --> Makes you see a character from the database.','\n','rp!start --> Creates your character. It\'s long, though.'].join('')), ephemeral: true || false, components: [] });
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == 'rp!start') {
    s4dmessage.channel.send({content:String('Hi. I\'ll guide you while you create your character. You\'ve got 15 minutes to answer each of the 13 questions.')});
    await delay(Number(1)*1000);
    (s4dmessage.channel).send(String('First of all, say your character\'s name (just the name, no dots nor other things, and the first letter in capital letters, please):')).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (15*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
     s4d.message = collected.first();
       s4d.database.set(String(([(s4dmessage.author).id,' -name- ',(s4dmessage.guild || {}).id].join(''))), (s4d.reply));
      await delay(Number(1)*1000);
      (s4dmessage.channel).send(String('And how are they called by their friends (Nickname)?:')).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (15*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
       s4d.message = collected.first();
         s4d.database.set(String(([(s4dmessage.author).id,' -nickname- ',(s4dmessage.guild || {}).id].join(''))), (s4d.reply));
        await delay(Number(1)*1000);
        (s4dmessage.channel).send(String('Ok. When was your character born?')).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (15*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
         s4d.message = collected.first();
           s4d.database.set(String(([(s4dmessage.author).id,' -born- ',(s4dmessage.guild || {}).id].join(''))), (s4d.reply));
          await delay(Number(1)*1000);
          (s4dmessage.channel).send(String('And what\'s their gender?')).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (15*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
           s4d.message = collected.first();
             s4d.database.set(String(([(s4dmessage.author).id,' -gender- ',(s4dmessage.guild || {}).id].join(''))), (s4d.reply));
            await delay(Number(1)*1000);
            (s4dmessage.channel).send(String('What\'s their personality?')).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (15*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
             s4d.message = collected.first();
               s4d.database.set(String(([(s4dmessage.author).id,' -personality- ',(s4dmessage.guild || {}).id].join(''))), (s4d.reply));
              await delay(Number(1)*1000);
              (s4dmessage.channel).send(String('And their physical appearance?')).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (15*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
               s4d.message = collected.first();
                 s4d.database.set(String(([(s4dmessage.author).id,' -appearance- ',(s4dmessage.guild || {}).id].join(''))), (s4d.reply));
                await delay(Number(1)*1000);
                (s4dmessage.channel).send(String('Who\'s their father/mother (Greek Gods)?')).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (15*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
                 s4d.message = collected.first();
                   s4d.database.set(String(([(s4dmessage.author).id,' -parent- ',(s4dmessage.guild || {}).id].join(''))), (s4d.reply));
                  await delay(Number(1)*1000);
                  s4dmessage.channel.send({content:String('Ok. Let\'s focus on other things.')});
                  await delay(Number(1)*1000);
                  (s4dmessage.channel).send(String('What **weapons** does your character have?')).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (15*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
                   s4d.message = collected.first();
                     s4d.database.set(String(([(s4dmessage.author).id,' -weapon- ',(s4dmessage.guild || {}).id].join(''))), (s4d.reply));
                    await delay(Number(1)*1000);
                    (s4dmessage.channel).send(String('And **demigod powers**?')).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (15*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
                     s4d.message = collected.first();
                       s4d.database.set(String(([(s4dmessage.author).id,' -power- ',(s4dmessage.guild || {}).id].join(''))), (s4d.reply));
                      await delay(Number(1)*1000);
                      (s4dmessage.channel).send(String('What\'s their fatal flaw?')).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (15*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
                       s4d.message = collected.first();
                         s4d.database.set(String(([(s4dmessage.author).id,' -flaw- ',(s4dmessage.guild || {}).id].join(''))), (s4d.reply));
                        await delay(Number(1)*1000);
                        (s4dmessage.channel).send(String('And do they have a backstory? If so, send it. And if they don\'t, write **unknown**, please.')).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (15*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
                         s4d.message = collected.first();
                           s4d.database.set(String(([(s4dmessage.author).id,' -backstory- ',(s4dmessage.guild || {}).id].join(''))), (s4d.reply));
                          await delay(Number(1)*1000);
                          (s4dmessage.channel).send(String('Does your character have a pet? If the answer is yes, describe it. If not, say **unknown**.')).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (5*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
                           s4d.message = collected.first();
                             s4d.database.set(String(([(s4dmessage.author).id,' -pet- ',(s4dmessage.guild || {}).id].join(''))), (s4d.reply));
                            await delay(Number(1)*1000);
                            (s4dmessage.channel).send(String('What\'s your character\'s hometown? If you don\'t know it, send **unknown**.')).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (5*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
                             s4d.message = collected.first();
                               s4d.database.set(String(([(s4dmessage.author).id,' -hometown- ',(s4dmessage.guild || {}).id].join(''))), (s4d.reply));
                              await delay(Number(1)*1000);
                              s4dmessage.channel.send({content:String('That would be all. Thanks for creating your character! Now, each time anyone needs to know something, they can use slash commands to see it. ')});
                              s4dmessage.channel.send({content:String('Enjoy!')});

                             s4d.reply = null; }).catch(async (e) => { console.error(e);   s4dmessage.channel.send({content:String('Operation aborted.')});
                             });
                            })

                           s4d.reply = null; }).catch(async (e) => { console.error(e);   s4dmessage.channel.send({content:String('Operation aborted.')});
                           });
                          })

                         s4d.reply = null; }).catch(async (e) => { console.error(e);   s4dmessage.channel.send({content:String('Operation aborted.')});
                         });
                        })

                       s4d.reply = null; }).catch(async (e) => { console.error(e);   s4dmessage.channel.send({content:String('Operation aborted.')});
                       });
                      })

                     s4d.reply = null; }).catch(async (e) => { console.error(e);   s4dmessage.channel.send({content:String('Operation aborted.')});
                     });
                    })

                   s4d.reply = null; }).catch(async (e) => { console.error(e);   s4dmessage.channel.send({content:String('Operation aborted.')});
                   });
                  })

                 s4d.reply = null; }).catch(async (e) => { console.error(e);   s4dmessage.channel.send({content:String('Operation aborted.')});
                 });
                })

               s4d.reply = null; }).catch(async (e) => { console.error(e);   s4dmessage.channel.send({content:String('Operation aborted.')});
               });
              })

             s4d.reply = null; }).catch(async (e) => { console.error(e);   s4dmessage.channel.send({content:String('Operation aborted.')});
             });
            })

           s4d.reply = null; }).catch(async (e) => { console.error(e);   s4dmessage.channel.send({content:String('Operation aborted.')});
           });
          })

         s4d.reply = null; }).catch(async (e) => { console.error(e);   s4dmessage.channel.send({content:String('Operation aborted.')});
         });
        })

       s4d.reply = null; }).catch(async (e) => { console.error(e);   s4dmessage.channel.send({content:String('Operation aborted.')});
       });
      })

     s4d.reply = null; }).catch(async (e) => { console.error(e);   s4dmessage.channel.send({content:String('Operation aborted.')});
     });
    })
  }

});

s4d.client.on('interactionCreate', async (interaction) => {
let member = interaction.guild.members.cache.get(interaction.member.user.id)
  if ((interaction.commandName) == 'born') {
    await interaction.reply({
                embeds: [new MessageEmbed()
    .setColor(String('#33cc00'))
    .setDescription(String((['The character was born on the following date: ',s4d.database.get(String(([(interaction.options.getUser('user')).id,' -born- ',(s4dmessage.guild || {}).id].join('')))),' You can do the math by yourself. 😜'].join(''))))
                ]
        });
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == 'rp!born') {
    s4dmessage.channel.send({
                embeds: [new MessageEmbed()
    .setColor(String('#33cc00'))
    .setDescription(String((['The character was born on the following date: ',s4d.database.get(String(([(s4dmessage.mentions.members.first().user).id,' -born- ',(s4dmessage.guild || {}).id].join('')))),' You can do the math by yourself. 😜'].join(''))))
                ]
        });
  }

});

s4d.client.on('interactionCreate', async (interaction) => {
let member = interaction.guild.members.cache.get(interaction.member.user.id)
  if ((interaction.commandName) == 'appearance') {
    await interaction.reply({
                embeds: [new MessageEmbed()
    .setColor(String('#33cc00'))
    .setDescription(String((String(s4d.database.get(String(([(interaction.options.getUser('user')).id,' -appearance- ',(s4dmessage.guild || {}).id].join(''))))))))
                ]
        });
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == 'rp!appearance') {
    s4dmessage.channel.send({
                embeds: [new MessageEmbed()
    .setColor(String('#33cc00'))
    .setDescription(String((String(s4d.database.get(String(([(s4dmessage.mentions.members.first().user).id,' -appearance- ',(s4dmessage.guild || {}).id].join(''))))))))
                ]
        });
  }

});

s4d.client.on('interactionCreate', async (interaction) => {
let member = interaction.guild.members.cache.get(interaction.member.user.id)
  if ((interaction.commandName) == 'backstory') {
    await interaction.reply({
                embeds: [new MessageEmbed()
    .setColor(String('#33cc00'))
    .setDescription(String((String(s4d.database.get(String(([(interaction.options.getUser('user')).id,' -backstory- ',(s4dmessage.guild || {}).id].join(''))))))))
                ]
        });
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == 'rp!backstory') {
    s4dmessage.channel.send({
                embeds: [new MessageEmbed()
    .setColor(String('#33cc00'))
    .setDescription(String((String(s4d.database.get(String(([(s4dmessage.mentions.members.first().user).id,' -backstory- ',(s4dmessage.guild || {}).id].join(''))))))))
                ]
        });
  }

});

s4d.client.on('interactionCreate', async (interaction) => {
let member = interaction.guild.members.cache.get(interaction.member.user.id)
  if ((interaction.commandName) == 'flaw') {
    await interaction.reply({
                embeds: [new MessageEmbed()
    .setColor(String('#33cc00'))
    .setDescription(String((String(s4d.database.get(String(([(interaction.options.getUser('user')).id,' -flaw- ',(s4dmessage.guild || {}).id].join(''))))))))
                ]
        });
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == 'rp!flaw') {
    s4dmessage.channel.send({
                embeds: [new MessageEmbed()
    .setColor(String('#33cc00'))
    .setDescription(String((String(s4d.database.get(String(([(s4dmessage.mentions.members.first().user).id,' -flaw- ',(s4dmessage.guild || {}).id].join(''))))))))
                ]
        });
  }

});

s4d.client.on('interactionCreate', async (interaction) => {
let member = interaction.guild.members.cache.get(interaction.member.user.id)
  if ((interaction.commandName) == 'gender') {
    await interaction.reply({
                embeds: [new MessageEmbed()
    .setColor(String('#33cc00'))
    .setDescription(String((String(s4d.database.get(String(([(interaction.options.getUser('user')).id,' -gender- ',(s4dmessage.guild || {}).id].join(''))))))))
                ]
        });
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == 'rp!gender') {
    s4dmessage.channel.send({
                embeds: [new MessageEmbed()
    .setColor(String('#33cc00'))
    .setDescription(String((String(s4d.database.get(String(([(s4dmessage.mentions.members.first().user).id,' -gender- ',(s4dmessage.guild || {}).id].join(''))))))))
                ]
        });
  }

});

s4d.client.on('interactionCreate', async (interaction) => {
let member = interaction.guild.members.cache.get(interaction.member.user.id)
  if ((interaction.commandName) == 'hometown') {
    await interaction.reply({
                embeds: [new MessageEmbed()
    .setColor(String('#33cc00'))
    .setDescription(String((String(s4d.database.get(String(([(interaction.options.getUser('user')).id,' -hometown- ',(s4dmessage.guild || {}).id].join(''))))))))
                ]
        });
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == 'rp!hometown') {
    s4dmessage.channel.send({
                embeds: [new MessageEmbed()
    .setColor(String('#33cc00'))
    .setDescription(String((String(s4d.database.get(String(([(s4dmessage.mentions.members.first().user).id,' -hometown- ',(s4dmessage.guild || {}).id].join(''))))))))
                ]
        });
  }

});

s4d.client.on('interactionCreate', async (interaction) => {
let member = interaction.guild.members.cache.get(interaction.member.user.id)
  if ((interaction.commandName) == 'name') {
    await interaction.reply({
                embeds: [new MessageEmbed()
    .setColor(String('#33cc00'))
    .setDescription(String((String(s4d.database.get(String(([(interaction.options.getUser('user')).id,' -name- ',(s4dmessage.guild || {}).id].join(''))))))))
                ]
        });
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == 'rp!name') {
    s4dmessage.channel.send({
                embeds: [new MessageEmbed()
    .setColor(String('#33cc00'))
    .setDescription(String((String(s4d.database.get(String(([(s4dmessage.mentions.members.first().user).id,' -name- ',(s4dmessage.guild || {}).id].join(''))))))))
                ]
        });
  }

});

s4d.client.on('interactionCreate', async (interaction) => {
let member = interaction.guild.members.cache.get(interaction.member.user.id)
  if ((interaction.commandName) == 'nickname') {
    await interaction.reply({
                embeds: [new MessageEmbed()
    .setColor(String('#33cc00'))
    .setDescription(String((String(s4d.database.get(String(([(interaction.options.getUser('user')).id,' -nickname- ',(s4dmessage.guild || {}).id].join(''))))))))
                ]
        });
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == 'rp!nickname') {
    s4dmessage.channel.send({
                embeds: [new MessageEmbed()
    .setColor(String('#33cc00'))
    .setDescription(String((String(s4d.database.get(String(([(s4dmessage.mentions.members.first().user).id,' -nickname- ',(s4dmessage.guild || {}).id].join(''))))))))
                ]
        });
  }

});

s4d.client.on('interactionCreate', async (interaction) => {
let member = interaction.guild.members.cache.get(interaction.member.user.id)
  if ((interaction.commandName) == 'parent') {
    await interaction.reply({
                embeds: [new MessageEmbed()
    .setColor(String('#33cc00'))
    .setDescription(String((String(s4d.database.get(String(([(interaction.options.getUser('user')).id,' -parent- ',(s4dmessage.guild || {}).id].join(''))))))))
                ]
        });
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == 'rp!parent') {
    s4dmessage.channel.send({
                embeds: [new MessageEmbed()
    .setColor(String('#33cc00'))
    .setDescription(String((String(s4d.database.get(String(([(s4dmessage.mentions.members.first().user).id,' -parent- ',(s4dmessage.guild || {}).id].join(''))))))))
                ]
        });
  }

});

s4d.client.on('interactionCreate', async (interaction) => {
let member = interaction.guild.members.cache.get(interaction.member.user.id)
  if ((interaction.commandName) == 'personality') {
    await interaction.reply({
                embeds: [new MessageEmbed()
    .setColor(String('#33cc00'))
    .setDescription(String((String(s4d.database.get(String(([(interaction.options.getUser('user')).id,' -personality- ',(s4dmessage.guild || {}).id].join(''))))))))
                ]
        });
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == 'rp!personality') {
    s4dmessage.channel.send({
                embeds: [new MessageEmbed()
    .setColor(String('#33cc00'))
    .setDescription(String((String(s4d.database.get(String(([(s4dmessage.mentions.members.first().user).id,' -personality- ',(s4dmessage.guild || {}).id].join(''))))))))
                ]
        });
  }

});

s4d.client.on('interactionCreate', async (interaction) => {
let member = interaction.guild.members.cache.get(interaction.member.user.id)
  if ((interaction.commandName) == 'pet') {
    await interaction.reply({
                embeds: [new MessageEmbed()
    .setColor(String('#33cc00'))
    .setDescription(String((String(s4d.database.get(String(([(interaction.options.getUser('user')).id,' -pet- ',(s4dmessage.guild || {}).id].join(''))))))))
                ]
        });
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == 'rp!pet') {
    s4dmessage.channel.send({
                embeds: [new MessageEmbed()
    .setColor(String('#33cc00'))
    .setDescription(String((String(s4d.database.get(String(([(s4dmessage.mentions.members.first().user).id,' -pet- ',(s4dmessage.guild || {}).id].join(''))))))))
                ]
        });
  }

});

s4d.client.on('interactionCreate', async (interaction) => {
let member = interaction.guild.members.cache.get(interaction.member.user.id)
  if ((interaction.commandName) == 'power') {
    await interaction.reply({
                embeds: [new MessageEmbed()
    .setColor(String('#33cc00'))
    .setDescription(String((String(s4d.database.get(String(([(interaction.options.getUser('user')).id,' -power- ',(s4dmessage.guild || {}).id].join(''))))))))
                ]
        });
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == 'rp!power') {
    s4dmessage.channel.send({
                embeds: [new MessageEmbed()
    .setColor(String('#33cc00'))
    .setDescription(String((String(s4d.database.get(String(([(s4dmessage.mentions.members.first().user).id,' -power- ',(s4dmessage.guild || {}).id].join(''))))))))
                ]
        });
  }

});

s4d.client.on('interactionCreate', async (interaction) => {
let member = interaction.guild.members.cache.get(interaction.member.user.id)
  if ((interaction.commandName) == 'weapon') {
    await interaction.reply({
                embeds: [new MessageEmbed()
    .setColor(String('#33cc00'))
    .setDescription(String((String(s4d.database.get(String(([(interaction.options.getUser('user')).id,' -weapon- ',(s4dmessage.guild || {}).id].join(''))))))))
                ]
        });
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == 'rp!weapon') {
    s4dmessage.channel.send({
                embeds: [new MessageEmbed()
    .setColor(String('#33cc00'))
    .setDescription(String((String(s4d.database.get(String(([(s4dmessage.mentions.members.first().user).id,' -weapon- ',(s4dmessage.guild || {}).id].join(''))))))))
                ]
        });
  }

});

s4d.client.on('interactionCreate', async (interaction) => {
let member = interaction.guild.members.cache.get(interaction.member.user.id)
  if ((interaction.commandName) == 'character') {
    await interaction.reply({
                embeds: [new MessageEmbed()
    .setColor(String('#33cc00'))
    .setDescription(String((['**Name:** ',s4d.database.get(String(([(interaction.options.getUser('user')).id,' -name- ',(s4dmessage.guild || {}).id].join('')))),'\n','**Nickname:** ',s4d.database.get(String(([(interaction.options.getUser('user')).id,' -nickname- ',(s4dmessage.guild || {}).id].join('')))),'\n','**Birth date:** ',s4d.database.get(String(([(interaction.options.getUser('user')).id,' -born- ',(s4dmessage.guild || {}).id].join('')))),'\n','**Gender:** ',s4d.database.get(String(([(interaction.options.getUser('user')).id,' -gender- ',(s4dmessage.guild || {}).id].join('')))),'\n','**Personality:** ',s4d.database.get(String(([(interaction.options.getUser('user')).id,' -personality- ',(s4dmessage.guild || {}).id].join('')))),'\n','**Appearance:** ',s4d.database.get(String(([(interaction.options.getUser('user')).id,' -appearance- ',(s4dmessage.guild || {}).id].join('')))),'\n','**Godly parent:** ',s4d.database.get(String(([(interaction.options.getUser('user')).id,' -parent- ',(s4dmessage.guild || {}).id].join('')))),'\n','**Weapons:** ',s4d.database.get(String(([(interaction.options.getUser('user')).id,' -weapon- ',(s4dmessage.guild || {}).id].join('')))),'\n','**Demigod powers:** ',s4d.database.get(String(([(interaction.options.getUser('user')).id,' -power- ',(s4dmessage.guild || {}).id].join('')))),'\n','**Fatal flaw:** ',s4d.database.get(String(([(interaction.options.getUser('user')).id,' -flaw- ',(s4dmessage.guild || {}).id].join('')))),'\n','**Backstory:** ',s4d.database.get(String(([(interaction.options.getUser('user')).id,' -backstory- ',(s4dmessage.guild || {}).id].join('')))),'\n','**Pet:** ',s4d.database.get(String(([(interaction.options.getUser('user')).id,' -pet- ',(s4dmessage.guild || {}).id].join('')))),'\n','**Hometown:** ',s4d.database.get(String(([(interaction.options.getUser('user')).id,' -hometown- ',(s4dmessage.guild || {}).id].join(''))))].join(''))))
                ]
        });
  }

});

                    return s4d
                    })();