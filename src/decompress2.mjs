import { open } from 'node:fs/promises';

const decoder = new TextDecoder('utf-8');
const ds = new DecompressionStream("gzip");

const file = await open('./contact-ch24.txt.gz');
const fileStream = file.readableWebStream();

for await (const chunk of fileStream)
  console.log(decoder.decode(chunk));

await file.close();