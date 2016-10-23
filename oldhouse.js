var oldhouse = [];
var imgurl=window.document.getElementById('portrait')
var imgName=window.document.getElementById('portraitName')
var imgSpeech=window.document.getElementById('portraitSpeech')
var goodDeeds=0
oldhouse[0] = function() {
	var title = "Log Cabin";
	var description = "";
	var exitsDescription = "";
	var visited = false;
	

	this.actions = function(command, commandData) {
		if (typeof (this[command]) == "function") {
			return this[command](commandData);
		}
		return false;
	};
	this.enter = function() {
		system.title(title);
		system.println("<strong>" + title + "</strong>");
		if (!visited) {
			system.println(description);
			system.println(exitsDescription);
			visited = true;
		}
	};
	this.north = function() {
		system.println("You walk north.");
		system.println("");
		player.setPosition(0, 1);

		return true;
	};
	this.n = this.north;

	this.south = function() {
		system.println("You walk south.");
		system.println("");
		player.setPosition(0, 2);
		return true;
	};
	this.s = this.south;
	this.look = function(commandData) {
		if (commandData.length <= 0) {
			system.println("You look around.");
			system.println("");
			system.println(description);
			system.println(exitsDescription);
		}
		return false;
	};
	this.l = this.look;
};
oldhouse[1] = function() {
	var title = "A darkened hallway";
	var description = "The heavy dark drapes over the eastern windows bring a sense of closeness to the hallway. The worn red carpet smells a little like mould.";
	var exitsDescription = "The hallway looks brighter to the <strong>south</strong>. An open oak door to the <strong>east</strong> leads out into the garden. There is a large and well-lit room to the <strong>north</strong>.";
	var visited = false;
	this.actions = function(command, commandData) {
		if (typeof (this[command]) == "function") {
			return this[command](commandData);
		}
		return false;
	};
	this.enter = function() {
		system.title(title);
		system.println("<strong>" + title + "</strong>");
		if (!visited) {
			system.println(description);
			system.println(exitsDescription);
			visited = true;
		}
	};
	this.south = function() {
		system.println("You walk south.");
		system.println("");
		player.setPosition(0, 0);
		return true;
	};
	this.s = this.south;
	this.east = function() {
		system.println("You walk through the door and out into the garden, blinking in the sudden harsh light.");
		system.println("");
		player.setPosition(1, 0);
		return true;
	};
	this.e = this.east;

	this.north = function() {
		system.println("You walk north.");
		system.println("");
		player.setPosition(0, 3);
		return true;
	};
	this.n = this.north;

	this.look = function(commandData) {
		if (commandData.length <= 0) {
			system.println("You look around.");
			system.println("");
			system.println(description);
			system.println(exitsDescription);
		}
		return false;
	};
	this.l = this.look;
};
oldhouse[2] = function() {
	var title = "Log Cabin";
	var description = "<i>You are awoken by a sharp pain on your neck, noticing the deadliest spider of Massachusetts has bitten you. Because of your savvy outdoorsmanship, you come to the understanding you have around 24 hours left to live. You also regret passing up on the industrial insulation that would have kept spiders out of your home.  </i><br>";
	var exitsDescription = "You consider <u>Stand</u>ing up from your <u>bed</u> to evaluate the situation. ";
	var visited = false;

	this.actions = function(command, commandData) {
		if (typeof (this[command]) == "function") {
			return this[command](commandData);
		}
		return false;
	};
	this.enter = function() {
		system.title(title);
		system.println("<strong>" + title + "</strong>");
		if (!visited) {
			system.println(description);
			system.println(exitsDescription);
			visited = true;
		}
	};
	this.stand = function() {
		system.println("...");
		system.println("<i>You stand up and take a deep breath. The morning sunlight streams in through the curtainless windows, causing dust particles in the air to glimmer. Wally starts barking at you, hes probably hungry. On your table you see a pile of unattended IRS letters amounting to 2500$ in taxes due.</i>")
		system.println("One of the tables legs is being supported by a bar of gold. Its worth approximitly a lifetime supply of dogfood, or 2500$. You consider heading down the <u>road</u> to the local village or going about what you planned on doing today anyways over at Walden <u>pond</u>. ");
		system.println("");
		imgurl.innerHTML="<img src='img/dog.jpg'></img>"
		imgName.textContent="Wally:"
		imgSpeech.textContent="'Woof! Woof! (whimper)'"
		return true;
	};
	this.pond = function(){
		system.title('Walden Pond')
		system.println("...");
		system.println("...");
		imgurl.innerHTML="<img src='img/marcher.jpg'></img>"
		imgName.textContent="John Marcher:"
		imgSpeech.textContent="'...'"
		return true

	};

	this.bed = function(commandData) {
		system.println("You sleep in for 24 hours");
		system.println("...");
		system.println("ENDING 1/6 (Quietism)");
		imgurl.innerHTML="<img src='img/bartleby.jpg'></img>"
		imgName.textContent="Ghost of Herman Melville:"
		imgSpeech.textContent="'Ah Thoreau! Ah Humanity!'"
		return true;
	};
	this.l = this.look;
};
oldhouse[4] = function() {
	var title = "ENDING 1/6 (Are you seriously that lazy?)";
	var description = "The polished marble floors echo with footsteps, augmenting the already voluminous size of the ballroom. In the center of the tremendous vaulted ceiling hangs an enormous crystal chandelier, casting sparkles of light across the ornately gilded walls.";
	var exitsDescription = "A hallway extends beneath an archway to the <strong>south</strong>.";
	var visited = false;
	this.actions = function(command, commandData) {
		if (typeof (this[command]) == "function") {
			return this[command](commandData);
		}
		return false;
	};
	

};
oldhouse[3] = function() {
	var title = "Grand Ballroom";
	var description = "The polished marble floors echo with footsteps, augmenting the already voluminous size of the ballroom. In the center of the tremendous vaulted ceiling hangs an enormous crystal chandelier, casting sparkles of light across the ornately gilded walls.";
	var exitsDescription = "A hallway extends beneath an archway to the <strong>south</strong>.";
	var visited = false;
	this.actions = function(command, commandData) {
		if (typeof (this[command]) == "function") {
			return this[command](commandData);
		}
		return false;
	};
	this.enter = function() {
		system.title(title);
		system.println("<strong>" + title + "</strong>");
		if (!visited) {
			system.println(description);
			system.println(exitsDescription);
			visited = true;
		}
	};
	this.south = function() {
		system.println("You walk south.");
		system.println("");
		player.setPosition(0, 1);
		return true;
	};
	this.s = this.south;

	this.look = function(commandData) {
		if (commandData.length <= 0) {
			system.println("You look around.");
			system.println("");
			system.println(description);
			system.println(exitsDescription);
		}
		return false;
	};
	this.l = this.look;
};

var ballroomItems = [];
ballroomItems[0] = function() {
	var viewed = false;
	this.keys = [ "pearl", "bead" ];
	this.actions = function(command, commandData) {
		if (typeof (this[command]) == "function") {
			return this[command](commandData);
		}
		return false;
	};

	this.look = function(commandData) {
		if (commandData.length > 0 && system.in_array(commandData[0], this.keys)) {
			system.println("It is a shiny, opalescent pearl.");
			viewed = true;
			return true;
		}
		if (commandData.length <= 0) {
			if (viewed) {
				system.println("A perfect white pearl sits on the floor.");
			} else {
				system.println("A tiny white bead sits on the floor.");
			}
		}
		return false;
	};
	this.l = this.look;
	this.take = function(commandData) {
		if (system.in_array(commandData[0], this.keys)) {
			if (viewed) {
				system.println("You take the pearl.");
			} else {
				system.println("You take the bead.");
			}
			system.println("");
			var item = world.takeItem(commandData[0], player.getPosition());
			player.giveItem(item);
			return true;
		}
		return false;
	};
	this.held = function() {
		if (viewed) {
			system.println("a pearl");
		} else {
			system.println("a bead");
		}
		return false;
	};
	this.drop = function(commandData) {
		if (system.in_array(commandData[0], this.keys)) {
			if (viewed) {
				system.println("You drop the pearl, letting it bounce across the floor to a stop.");
			} else {
				system.println("You drop the bead, letting it bounce across the floor to a stop.");
			}
			system.println("");
			var item = player.takeItem(commandData[0]);
			world.giveItem(item, player.getPosition());
			return true;
		}
		return false;
	};
};

world.addZone(0, oldhouse);
world.addItems(0, 3, ballroomItems);
