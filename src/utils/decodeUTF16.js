export function decodeUTF16(encodedStream) {
  let decodedStream = [];
  for (let i = 0; i < encodedStream.length; i++) {
    decodedStream[i] = String.fromCodePoint(parseInt(encodedStream[i], 16));
  };
  return decodedStream;
};
