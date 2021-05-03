/* eslint-disable @typescript-eslint/no-var-requires */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ORIGINAL = path.join(__dirname, 'original');
const GREMS = path.join(__dirname, 'public', 'grems');
(async () => {
  for (const f of fs.readdirSync(ORIGINAL)) {
    const file = path.join(ORIGINAL, f);
    await sharp(file).resize({ height: 180 }).toFile(path.join(GREMS, f));
    console.log(`Resized ${f}`);
  }
})();
