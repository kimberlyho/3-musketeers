/*eslint-disable no-process-exit*/
const chalk = require('chalk');
const updateNotifier = require('update-notifier');
const Conf = require('conf');
const pkg = require('../package.json');

const config = new Conf();

updateNotifier({pkg}).notify();

/**Set the default config.json file
  argv: array with the default currencies
*/
const saveCurrencies = argv => {
  config.set('defaultFrom', argv[1] || config.get('defaultFrom', 'USD'));
  config.set(
    'defaultTo',
    argv.length > 2
      ? process.argv.slice(4)
      : config.get('defaultTo', ['USD', 'EUR', 'GBP'])
  );
  console.log(chalk.green('Saved default currencies to ' + config.path));
  process.exit(1);
};

/**Set the version*/
const version = () => {
  console.log(pkg.version);
  process.exit(1);
};

/**Set the helper text where we can find all the commands available*/
const help = () => {
  console.log(`
Usage:

 $ ${chalk.cyan('node bin/index.js')} ${chalk.green('<amount>')} ${chalk.yellow(
  '<currency>'
)}

 $ ${chalk.cyan('node bin/index.js')} ${chalk.magenta('<command>')}

Commands:
${chalk.magenta('--save,  -s')}       Save currencies as default currencies
${chalk.magenta('--help,  -h')}       Display help message
${chalk.magenta('--version,  -v')}     Display version number

 List of currencies: http://akep.us/currencies

Examples:

 $ ${chalk.cyan('node bin/index.js')} ${chalk.green('1')} ${chalk.yellow('usd')}

 $ ${chalk.cyan('node bin/index.js')} ${chalk.green('1')} ${chalk.yellow('usd eur pln aud')}

 $ ${chalk.cyan('node bin/index.js')} ${chalk.magenta('--save')} ${chalk.green(
  'usd'
)} ${chalk.yellow('eur pln aud')}

 $ ${chalk.cyan('node bin/index.js')} ${chalk.magenta('--help')}
  `);
  process.exit(1);
};

/**Based on the input calling the helper it outputs either the version, the help or the save command*/
const helpers = argv => {
  // Version
  if (argv.indexOf('--version') !== - 1 || argv.indexOf('-v') !== - 1) {
    version();
  }

  // Help
  if (
    argv.indexOf('--help') !== - 1
    || argv.indexOf('-h') !== - 1
    || ! argv.length
  ) {
    help();
  }

  if (
    argv.indexOf('--save') !== - 1
    || argv.indexOf('-s') !== - 1
    || ! argv.length
  ) {
    saveCurrencies(argv);
  }
};

/*Export helper as a module*/
module.exports = helpers;
