var name = 'inticoy';
var letter = 'Lorem ipsum dolor sit amet,' + name + ' consectetur adipisicing elit,' +
  name + ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' + name +
  ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\
\
aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa egoing qui officia deserunt mollit anim id est laborum.'

console.log(letter);
console.log("\noriginally, \n \\n to change line\n");

letter = `Lorem ipsum dolor sit amet, ${name} consectetur adipisicing elit,

${name} sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
${1+1}
' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa egoing qui officia deserunt mollit anim id est laborum.`

console.log(letter);