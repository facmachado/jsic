

// carrgar(arquivo)

// listar(linhas_opcional)

// rodar(contexto, linhas_opcional)

// salvar()


import { Console } from '../lib/Console';
import { Page } from '../lib/Page';

const
  KEYWORDS = {
    abs: 'abs',
    and: 'and',
    asc: 'asc',
    asm: 'asm',
    bload: 'bload',
    bsave: 'bsave',
    bye: 'bye',
    call: 'call',
    chr$: 'chr$',
    clear: 'clear',
    cload: 'cload',
    cls: 'cls',
    csave: 'csave',
    cos: 'cos',
    data: 'data',
    dim: 'dim',
    else: 'else',
    end: 'end',
    exit: 'exit',
    fn: 'fn',
    for: 'for',
    gosub: 'gosub',
    goto: 'goto',
    if: 'if',
    input: 'input',
    instr: 'instr',
    int: 'int',
    key: 'key',
    left$: 'left$',
    len: 'len',
    let: 'let',
    load: 'load',
    mid$: 'mid$',
    mod: 'mod',
    next: 'next',
    not: 'not',
    or: 'or',
    print: 'print',
    quit: 'quit',
    randomize: 'randomize',
    read: 'read',
    rem: 'rem',
    return: 'return',
    right$: 'right$',
    rnd: 'rnd',
    save: 'save',
    screen: 'screen',
    sin: 'sin',
    sqr: 'sqr',
    step: 'step',
    str$: 'str$',
    string$: 'string$',
    system: 'system',
    tan: 'tan',
    then: 'then',
    timer: 'timer',
    to: 'to',
    val: 'val',
    wend: 'wend',
    while: 'while',
    xor: 'xor',
  },
  JSIC = {
    console: new Console(),
    page: new Page(),
  };

if (typeof module !== 'undefined') {
  module.exports = {
    KEYWORDS,
    JSIC
  };
} else {
  let module = {};
}

/** Disable context menu and drag **/
document.oncontextmenu = _ => false;
document.ondragstart = _ => false;

/** Block browser back button **/
history.pushState(null, null, document.location.href);
window.onpopstate = _ => history.go(+1);
