require('dotenv').config()
const tmi = require("tmi.js");
const axios = require("axios").default;

/**
 * An array of authorized users that are allowed to use the commands
 * 
 * @var string[]
 */
const authorizedUsers = ["phil_otimo", "realtwitchy"];

/**
 * Creating the client
 * 
 * @see https://tmijs.com/#guide-options
 */
const client = new tmi.Client({
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true,
  },
  identity: {
    username: "phil_otimated",
    password: process.env.TWITCH_OAUTH_TOKEN,
  },
  channels: ["phil_otimo", "realtwitchy"],
});

client.connect();

/**
 * Command handler
 */
client.on("message", async (channel, user, message, self) => {
  if (self || !message.startsWith("~")) {
    return;
  }

  const apiUrl = "https://awaken-api.herokuapp.com/api/v1";
  const baseUrl = apiUrl.replace("api/v1", "");
  const args = message.split(" ");
  const endpoint = args[0].replace("~", "");
  const search = args[1];

  // format everyting after the search as `&filters[]={ what you typed }`
  const filters = args
    .slice(2)
    .map((filter) => filter.replace(/^/, "&filters[]="))
    .join(" ")
    .replace(/\s/g, "");

  const url = `${apiUrl}${endpoint}?search=${search}${filters}&per_page=10`;

  // If the user is not authorized and attempts to call a command
  if (!authorizedUsers.includes(user.username) && message.startsWith("~")) {
    return client.say(
      channel,
      `@${user.username} uh-uh-uh, you didn't say the magic word`
    );
  } else {
    try {
      const response = await axios.get(url, {
        headers: {
          Accept: "application/json"
        },
      });

      return client.say(
        channel,
        response.data.selections
          .map((selection) => `[ ${baseUrl}${endpoint}/${selection.slug} ]`)
          .toString()
          .replace(/,/g, " ")
      );
    } catch {
      return client.say(
        channel,
        `I'm sorry, @${user.username}, I'm afraid I can't find what you are looking for`
      );
    }
  }
});
