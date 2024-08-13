import express, { json } from 'express';
import { readFile } from 'node:fs/promises';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let documents = [];
try {
  const filePath = new URL('./documents.json', import.meta.url);
  const contents = await readFile(filePath, { encoding: 'utf8' });
  documents = JSON.parse(contents);
} catch (err) {
  console.error(err.message);
}

const searchByKeyword = (array, keyword) => {
  return array.filter((doc) =>
    Object.values(doc).some((item) =>
      item.toString().toLowerCase().includes(keyword.toLowerCase())
    )
  );
};

app.get('/', (req, res) => {
  res.send('This is a search engine');
});

app.get('/search', (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.json(documents);
  } else {
    const foundDocuments = searchByKeyword(documents, q);
    res.json(foundDocuments);
  }
  console.log(q);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
