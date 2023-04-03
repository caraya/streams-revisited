// import the open method from fs/promises package
import { open } from 'node:fs/promises';

// Crete a new decoder
const decoder = new TextDecoder('utf-8');

// Open the file
const file = await open('./lorem-ipsum.txt');

for await (const chunk of file.readableWebStream()) {
  // do something with each chunk
  // in this case we use decoder.decode
  // to process the uint8 array and
  // convert it to text before logging
  // it to console
  console.log(decoder.decode(chunk));
} 

// Close the open file
await file.close();