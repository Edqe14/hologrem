import { config } from 'dotenv';
import { Client } from 'discord.js';
import miniget from 'miniget';
import { createWriteStream, readdirSync } from 'fs';
config();

const client = new Client();

const guild = '629308845574979630';
const channel = '808348261948719134';
const first = '808348275895828540';

const fetchAll = () => {
  return new Promise((resolve) => {
    const files = readdirSync('./files').map(f => f.split('.').shift());

    (async () => {
      const g = await client.guilds.fetch(guild);
      if (!g) return;
      const c = g.channels.resolve(channel);
      if (!c) return;

      let id = first;

      const messages = [];
      const getter = setInterval(async () => {
        const msg = (await c.messages.fetch({
          after: id,
          limit: 100
        })).array();
        if (msg.length === 0) {
          clearInterval(getter);
          return resolve(messages);
        }

        id = msg[0].id;

        const attch = msg
          .filter(m => m.attachments.size !== 0)
          .map(m => m.attachments)
          .map(a => a.map(b => ({ url: b.url, proxy: b.proxyURL, id: b.id })))
          .flat()
          .filter(p => { return !files.includes(p.id); });
        messages.push(...attch);
        if (msg.length < 100) {
          clearInterval(getter);
          return resolve(messages);
        }
      }, 500 + Math.random() * 800);
    })();
  });
};

const sleep = (ms = 150) => new Promise((resolve) => setTimeout(resolve, ms));

client.on('ready', async () => {
  const messages = await fetchAll();
  if (messages.length === 0) {
    console.log('everything already exists');
    return process.exit(0);
  }

  for (const v of messages) {
    try {
      const stream = createWriteStream(`./files/${v.id}.png`);
      miniget(v.url).pipe(stream);

      console.log(`writing ${v.id}.png`);
      await sleep();
    } catch (e) {
      console.error(e);
    }
  }

  console.log('finished');
  client.destroy();
});

client.login(process.env.TOKEN);
