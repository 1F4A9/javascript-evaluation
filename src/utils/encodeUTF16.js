export function encodeUTF16(sourceCodeString) {
  const stream = [];

  for (let i = 0; i < sourceCodeString.length; i++) {
    const codePoint = sourceCodeString.charCodeAt(i);

    const UTF16encodedCodePoint = convertAndFormatToUTF16(codePoint, 4);

    stream.push(UTF16encodedCodePoint);
  };

  return stream;
};

function convertAndFormatToUTF16(UTF16codePoint, padding) {
  return UTF16codePoint.toString(16).padStart(padding, '0');
};
