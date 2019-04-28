'use strict';

const Telegram = require('telegram-node-bot'),

	tg = new Telegram.Telegram('yourTokem', {
		workers: 1
	});


const BetController = require('./controllers/bet'),
	OtherwiseController = require('./controllers/otherwise');


tg.router.when(new Telegram.TextCommand('/bet', 'betCommand'), new BetController())
	.otherwise(new OtherwiseController());