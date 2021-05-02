import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import morgan from 'morgan';
import miniget from 'miniget';

import Routes from './routes';
import { Index, Config } from './types';

const PORT = 3001;
const indexPath = path.join(__dirname, 'indexes.json');
const gremsPath = path.join(__dirname, '..', 'src', 'public', 'grems');
const config = {
  sendIndexedEntry: false,
} as Config;

const indexes = {} as Record<string, Index>;
if (fs.existsSync(indexPath)) {
  try {
    const index = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
    Object.assign(indexes, index);
  } catch (e) {
    console.error(e);
  }
}

const files = fs.readdirSync(gremsPath);

const app = express();
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(Routes(indexes, files, config));
app.put('/dump', async (req, res) => {
  try {
    await fs.promises.writeFile(
      path.join(__dirname, '..', 'src', 'public', 'characters.json'),
      await miniget(`http://localhost:${PORT}/characters`).text()
    );
    await fs.promises.writeFile(
      path.join(__dirname, '..', 'src', 'public', 'characters-category.json'),
      await miniget(`http://localhost:${PORT}/characters?category=1`).text()
    );
    await fs.promises.writeFile(
      path.join(__dirname, '..', 'src', 'public', 'expressions.json'),
      await miniget(`http://localhost:${PORT}/expressions`).text()
    );

    await fs.promises.writeFile(indexPath, JSON.stringify(indexes));
    await fs.promises.copyFile(
      indexPath,
      path.join(__dirname, '..', 'src', 'public', 'index.json')
    );
    return res.json({
      message: 'Success',
    });
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
    console.error(e);
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
