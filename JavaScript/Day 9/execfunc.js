var re = /d(b+)d/g; //i is for case insensitive
var arr = re.exec('adbbbdbdbdbbdbdbddddbbbbdbdsssdbbdbdbddbd');

console.log(arr);

// exec looks for match and returns index of first match


/* OUTPUT 
[
  'dbbbd',
  'bbb',
  index: 1,
  input: 'adbbbdbdbdbbdbdbddddbbbbdbdsssdbbdbdbddbd',
  groups: undefined
]
*/