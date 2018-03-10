# cash
The library [cash](./cash) can be run using the following command:
"node /bin/index.js"

Before that we need to install some modules with the command "npm install".  
List of modules to install:  
"conf" : Simple config handling for your app or module,  
"chalk" : Terminal string styling done right,  
"update-notifier" : Update notifications for your CLI app,  
"got" : Simplified HTTP requests,  
"money" : Simple and tiny JavaScript library for realtime currency conversion and   exchange rate calculation, from any currency, to any currency,  
"ora" : Elegant terminal spinner.  


It creates an application that allows the users to convert money in different currencies, such as euro into us dollars, polish zloty into auro and australian dollars and more.   This library takes into account 32 currencies in total:  
"AUD": "Australian Dollar",  
"RUB": "Russian Rouble",  
"EUR": "Euro",  
"BGN": "Bulgarian Lev",  
"BRL": "Real Brazilian",  
"CAD": "Canadian Dollar",  
"CHF": "Swiss Franc",  
"CNY": "Chinese Yuan",  
"CZK": "Czech Koruna",  
"DKK": "Danish Krone",  
"GBP": "Pound Sterling",  
"HKD": "Hong Kong Dollar",  
"HRK": "Croatian Kuna",  
"HUF": "Hungarian Forint",  
"IDR": "Indonesian Rupiah",  
"ILS": "Israeli Shekel",  
"INR": "Indian Rupee",  
"JPY": "Japanes Yen",  
"KRW": "South Korean Won",  
"MXN": "Mexican Peso",  
"MYR": "Malaysian Ringgit",  
"NOK": "Norwegian Krone",  
"PHP": "Philippine Peso",  
"PLN": "Polish Zloty",  
"RON": "Romanian New Leu",  
"SEK": "Swedish Krona",  
"SGD": "Singapore Dollar",  
"THB": "Thai Baht",  
"TRY": "Turkish Lira",  
"USD": "US Dollar",  
"ZAR": "South African Rand",  
"NZD": "New Zealand Dollar".  

Based on what is written into the config.json file, the output on the command line changes.  
By default, the config.json file is:  
{  
  "defaultFrom": "usd",  
	"defaultTo": [  
	  "usd",  
	  "eur",  
	  "gbp",  
	]  
}  

Example:  

config.json : {  
	               "defaultFrom": "aud",  
	               "defaultTo": [  
		               "eur",  
		               "pln",  
		               "aud",  
		               "cny"  
	               ]  
              }  

intput : node bin/index.js 1  
output :√ 0.63 (EUR) Euro  
        √ 2.66 (PLN) Polish Zloty  
        √ 1.00 (AUD) Australian Dollar  
        √ 4.94 (CNY) Chinese Yuan  

When in the input we don't precise the currency, it follows the config.json, meaning that in the example above, it took the australian dollars as the current currency. But if we specify a currency, it will follow the currency written in the input.  

config.json : {  
	               "defaultFrom": "aud",  
	               "defaultTo": [  
		               "eur",  
		               "pln",  
		               "aud",  
		               "cny"  
	               ]  
              }  

intput : node bin/index.js 1  
output :√ 1.00 (EUR) Euro  
        √ 4.20 (PLN) Polish Zloty  
        √ 1.58 (AUD) Australian Dollar  
        √ 7.79 (CNY) Chinese Yuan  


To modify the config.json file, we have to use the --save or -s command.  
To know which version of the application we have, we have to use the --version or -v command.  
To get some help, we have to use the --help or -h command.  
