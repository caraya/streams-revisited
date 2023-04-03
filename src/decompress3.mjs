const readableStream = await fetch('lorem.txt').then(
  (response) => response.body
);

const decompressedReadableStream = readableStream.pipeThrough(
  new DecompressionStream('gzip')
);