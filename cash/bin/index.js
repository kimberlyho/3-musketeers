#!/usr/bin/env node
/*Calling existing modules*/
const Conf = require('conf');
const helpers = require('./helpers.js');
const cash = require('./cash.js');

const config = new Conf();

/*Select the second element of the array in the object called process*/
const argv = process.argv.slice(2);

/*Display the helper of the application*/
helpers(argv);

/*Get the amount, the "from" currency and the "to" currency*/
const command = {
  'amount': argv[0] || 1,
  'from': argv[1] || config.get('defaultFrom', 'USD'),
  'to':
    argv.length > 2
      ? process.argv.slice(4)
      : config.get('defaultTo', ['USD', 'EUR', 'GBP'])
};

cash(command);
