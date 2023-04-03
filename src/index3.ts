import { fetch } from 'undici';
import { TextDecoderStream } from 'node:stream/web';

async function fetchStream() {
  const response = await fetch('https://raw.githubusercontent.com/caraya/gulp-starter-2021/main/src/html-content/amdromeda1.html')
  const stream = response.body;
  const textStream = stream.pipeThrough(new TextDecoderStream());

  for await (const chunk of textStream) {
    console.log(chunk);
  }
}

fetchStream();