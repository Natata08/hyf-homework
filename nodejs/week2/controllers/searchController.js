import { loadDocuments } from '../dataService.js';
import { searchByKeyword, searchById, filterArrayByFields } from '../utils.js';

let documents = [];

loadDocuments()
  .then((data) => {
    documents = data;
  })
  .catch((error) => {
    console.error(error);
  });

export const searchDocuments = (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.json(documents);
  } else {
    const foundDocuments = searchByKeyword(documents, q);
    res.json(foundDocuments);
  }
};

export const getDocumentById = (req, res) => {
  const docId = parseInt(req.params.id);
  const foundDocument = searchById(documents, docId);
  if (!foundDocument) {
    res.status(404).json({ message: 'Document not found' });
  } else {
    res.json(foundDocument);
  }
};

export const searchByFields = (req, res) => {
  const { q } = req.query;
  const { fields } = req.body;
  if (q && fields) {
    return res.status(400).json({
      message:
        'Cannot provide both query parameter and fields in the request body',
    });
  }
  if (q) {
    const foundDocuments = searchByKeyword(documents, q);
    return res.json(foundDocuments);
  }
  if (fields) {
    const foundDocuments = filterArrayByFields(documents, fields);
    return res.json(foundDocuments);
  }
};
