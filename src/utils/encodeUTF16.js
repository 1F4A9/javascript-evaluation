export function encodeUTF16(sourceCode) {
  let encodedStream = [];
  for (let i = 0; i < sourceCode.length; i++) {
    // creates 4 digit UTF-16 Code Points
    encodedStream[i] = formatUTF16ToHex(sourceCode.charCodeAt(i), 4);
  };
  return encodedStream;
};

function formatUTF16ToHex(UTF16codePoint, padding) {
  return UTF16codePoint.toString(16).padStart(padding, '0');
};
