import {
  open,
} from 'node:fs/promises';

const file = await open('./lorem-ipsum.txt');

for await (const chunk of file.readableWebStream())
  console.log(chunk);

await file.close();