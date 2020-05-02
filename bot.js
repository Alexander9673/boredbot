const eris = require('eris');const cmds = new eris.Collection();function addCommand(name, obj){cmds.set(name, obj)};addCommand('help', {name:'help',run:function(msg){msg.channel.createMessage(`Commands: \`${cmds.map(c => c.name).join('`, `')}\``)}});addCommand('ping', { name: 'ping', run: function(msg){msg.channel.createMessage(`pong, \`${msg.channel.guild.shard.latency}ms\``)}});addCommand('info',{name:'info',run:function(msg){msg.channel.createMessage('I am a bot created by _alexander#9673 in one line. Legends say that he was bored.')}});addCommand('rand',{name:'rand',run:function(msg){let args=msg.content.slice(2).split(/ +/g);if(!args[0] || isNaN(args[0])){return msg.channel.createMessage('pls give max num to add from')};return msg.channel.createMessage(`i have chosen ${Math.floor(Math.random() * typeof(args[0])==='string'?parseInt(args[0]):args[0])}`)}});addCommand('dev',{name:'dev',run:function(msg){return msg.channel.createMessage('please give alexander the dev role kthxbai')}});addCommand('github',{name:'github',run:function(msg){return msg.channel.createMessage('From alexander: "i want to flex my github, here it is <https://github.com/Alexnader9673>"')}});const client=new eris('TOKEN');client.on('ready',()=>console.log('ready'));client.on('messageCreate',(msg)=>{if(!msg.channel.guild || msg.author.bot || !msg.content.startsWith('1.'))let args=msg.content.slice(2).split(/ +/g);let cmd = args[0]?args[0].toLowerCase():'';if(cmds.has(cmd)){cmds.get(cmd).run(msg)}});client.connect();
