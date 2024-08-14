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
} catch (error) {
  console.error(error);
}

const searchByKeyword = (array, keyword) => {
  return array.filter((obj) =>
    Object.values(obj).some((item) =>
      item.toString().toLowerCase().includes(keyword.toLowerCase())
    )
  );
};

const searchById = (array, id) => array.find((obj) => obj.id === id);

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
});

app.get('/documents/:id', (req, res) => {
  const docId = parseInt(req.params.id);
  const foundedDocuments = searchById(documents, docId);
  if (foundedDocuments.length === 0) {
    res.status(404).json({ message: 'Document not found' });
  } else {
    res.json(foundedDocuments);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
