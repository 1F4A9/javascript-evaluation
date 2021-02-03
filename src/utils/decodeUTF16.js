export function decodeUTF16(encodedStream) {
  let characters = [];

  for (let i = 0; i < encodedStream.length; i++) {
    const codePoint = parseInt(encodedStream[i], 16);

    const character = String.fromCodePoint(codePoint);

    characters.push(character);
  };

  return characters.join('');
};
