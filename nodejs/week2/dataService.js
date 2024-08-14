import { readFile } from 'node:fs/promises';

export async function loadDocuments() {
  try {
    const filePath = new URL('./documents.json', import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });
    return JSON.parse(contents);
  } catch (error) {
    console.error(error);
  }
}
