'use strict';

const Telegram = require('telegram-node-bot');

class BetController extends Telegram.TelegramBaseController {
	betHandler(s) {
		let number = s.message.text.split(' ').slice(1).join(' ');

		if (!number) return s.sendMessage('Sorry, pass number');

		var Teams = ['Milan', 'Inter', 'Juve', 'Napoli', 'Real Madrid', 'Barcelona', 'Liverpool', 'Rome', 'Manchester City', 'Manchester Utd', 'PSG'];
		var Outcomes = ['1', 'X', '2'];
		var msg = '';

		for (let index = 0; index < number; index++) {
			var randTeam1 = Teams[Math.floor(Math.random()*Teams.length)];
			var randTeam2 = Teams[Math.floor(Math.random()*Teams.length)];
			var randOutcome = Outcomes[Math.floor(Math.random()*Outcomes.length)];
			msg=msg+randTeam1+" - "+randTeam2+"     "+randOutcome+"\n";
		}

		s.sendMessage(msg);
	}

		get routes() {

			return {
				'betCommand': 'betHandler'
			};

		}
	}

module.exports = BetController;