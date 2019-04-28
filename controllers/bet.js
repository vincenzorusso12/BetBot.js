'use strict';

const Telegram = require('telegram-node-bot');

class BetController extends Telegram.TelegramBaseController {
	betHandler(s) {
		let input = s.message.text.split(' ');
		if (!input) return s.sendMessage('Sorry, pass number');

		var preNum = input[1];
		var number = 0;
	
		s.getUserSession('someKey').then(data => {
        if (!data) {
			console.log('è null')
		}
    })

		if (/^\d+$/.test(preNum)) {
			number = parseInt(preNum);
		}

		var Teams = ['Milan', 'Inter', 'Juve', 'Napoli', 'Real Madrid', 'Barcelona', 'Liverpool', 'Rome', 'Manchester City', 'Manchester Utd', 'PSG'];
		var Outcomes = ['1', 'X', '2'];
		var msg = '';

		for (let index = 0; index < number; index++) {
			var randTeam1 = Teams[Math.floor(Math.random() * Teams.length)];
			var randTeam2 = Teams[Math.floor(Math.random() * Teams.length)];
			var randOutcome = Outcomes[Math.floor(Math.random() * Outcomes.length)];
			msg = msg + randTeam1 + " - " + randTeam2 + "     " + randOutcome + "\n";
		}
		
		this.counter=this.counter+number

		s.sendMessage(msg);
		s.sendMessage('Total outcomes: '+number);
	}

	get routes() {

		return {
			'betCommand': 'betHandler'
		};

	}
}

module.exports = BetController;