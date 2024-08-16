import express from 'express';
import {
  searchDocuments,
  getDocumentById,
  searchByFields,
} from './controllers/searchController.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('This is a search engine');
});

app.get('/search', searchDocuments);

app.get('/documents/:id', getDocumentById);

app.post('/search', searchByFields);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
