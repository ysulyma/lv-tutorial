export default class JSInterpreter {
  read(filename: string) {
  }

  async run(code: string) {
    try {
      return this.runSync(code);
    } catch (e) {
      throw e;
    }
  }

  runSync(code: string) {
    const disableVars = [
      "window", "print", "document"
    ];

    const func = new Function("console", ...disableVars, code);
    const output = [];

    // console
    const fakeConsole = new FakeConsole(output);

    func(fakeConsole, ...new Array(disableVars.length));
    return output;
  }
}

class FakeConsole {
  output: string[];

  constructor(output) {
    this.output = output;
  }

  // to be implemented:
  //   'log',                 'warn',
  // 'dir',                 'time',
  // 'timeEnd',             'timeLog',
  // 'trace',               'assert',
  // 'clear',               'count',
  // 'countReset',          'group',
  // 'groupEnd',            'table',
  // 'debug',               'info',
  // 'dirxml',              'error',
  // 'groupCollapsed',      '_stdout',
  // '_stderr',             '_stdoutErrorHandler',
  // '_stderrErrorHandler', '_ignoreErrors',
  // '_times',              'Console',
  // 'profile',             'profileEnd',
  // 'timeStamp',           'context'

  log(...args) {
    this.output.push(args.map(_ => {
      // sneaky :-)
      if (typeof _ === "undefined")
        return _;
      return `${_}`;
    }).join(" ")+"\n");
  }
}

