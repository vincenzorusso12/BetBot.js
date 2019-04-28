'use strict';

const Telegram = require('telegram-node-bot');

class OtherwiseController extends Telegram.TelegramBaseController {
	handle(s) {
		s.sendMessage('I dont know');
	}


}

module.exports = OtherwiseController;