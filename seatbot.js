const tmi = require('tmi.js');
var TeeHeecount = 1;
var rndMsgCnt = 0;
var rndMsgMax = 10;

// Define configuration options
const opts = {
  identity: {
    username: 'yellowraventesting',
    password: 'hczn950yueciwyc7ows9n5gf8yxicg'
  },
  channels: [
    '#Yellowraven'
  ]
};
// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot
  // Remove whitespace from chat message
  const commandName = msg.trim();

  

  if (commandName === '!teehee') {
        client.say(target, 'Test');
	  } else {
    console.log(`* Unknown command ${commandName}`);
  }

}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}