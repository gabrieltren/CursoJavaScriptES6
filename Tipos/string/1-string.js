// Criando uma String
const textString =  'Texto';

// Retorna o tamanho da string
const tanString = textString.length;

// Retorna um array quebrando a string por um deliminador 
const splittedString = textString.split('x');

// Busca um valor e substitui por outro
const replaceString = textString.replace('Tex', 'eTx');

// Retorna a "fatua" de um valor
const lastChar = textString.slice(-1);

const allWithoutLastChar = textString.slice(0, -1);

const secondToEnd = textString.slice(1);

// Retorna N caracteres a partir de uma posicao
const twoCharsBeforeFirstPos = textString.substr(0, 2);
