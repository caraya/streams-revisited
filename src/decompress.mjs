import { open } from 'node:fs/promises';
import { ReadableStream } from 'node:stream/web';

async function decompressStreamDemo() {
  if (!'DecompressionStream' in globalThis) {
    // We don't support Decompression Streams
    // bail since this is not going to work
    console.error("Your browser doesn't support decompression streams!")
  } else {
    const readableStream = await open('contact-ch24.txt.gz').then(
      (response) => response.body
    );
    const outputReadableStream = readableStream.pipeThrough(
      new DecompressionStream('gzip')
    );
    const textStream = outputReadableStream.pipeThrough(new TextDecoderStream());
  
    for await (const chunk of textStream) {
      console.log(chunk);
    }
  }
}

decompressStreamDemo();