async function fetchAndLogStream() {
  const response: Response = await fetch('https://raw.githubusercontent.com/caraya/gulp-starter-2021/main/src/md-content/Deber-del-poeta.md');
  const stream = response.body;
  const textStream = stream.pipeThrough(new TextDecoderStream());

  for await (const chunk of textStream) {
    console.log(chunk);
  }
}

fetchAndLogStream();
