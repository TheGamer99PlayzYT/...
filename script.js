const inputField = document.getElementById("input");
inputField.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    let input = inputField.value;
    inputField.value = "";
    output(input);
  }
  else if (e.keyCode === 13) {
    let input = inputField.value;
    inputField.value = "";
    output(input);
  }
});

// input options
const utterances = [
 
  ["how are you", "how is life", "how are things"],
  ["hi", "hey", "hello", "good morning", "good afternoon", "ello"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["tell me joke", "tell me joke", "tell me joke", "tell me joke", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["what", "why", "how", "where", "when"],
  ["no", "not sure", "maybe", "no thanks"],
  [""],
  ["haha", "ha", "lol", "hehe", "funny", "joke"],
  ["are you gay", "u gay"],
  ["what day is it", "what time is it", "whats today"],
  ["what do you do with my data", "do you save what I say"],
  ["what is your mother's name", "whats your moms name", "do you have a mom"],
  ["where do you live", "where are you"],
  ["how many people can you speak to at once", "how many people are you talking to", "how many people are you talking too"],
  ["do you get smarter"],
  ["what can you do"],
  ["what is the weather", "what is the weather like today", "hows the weather"],
  ["whats the meaning of life", "what is life"],
  ["can you do my homework", "can you do my homework for me", "can you do homework", "do my homework"],
  ["do you know any jokes", "do you know jokes"],
  ["are we friends"],
  ["can I tell you anything", "can i tell you anything"],
  ["what version are you", "what version are you running", "what version are you on", "what version you running on", "what version you running", "what version you got"],
  ["can i have a hint", "give me hint", "i want hint", "do you have a hint", "give hint"],
  ["what is the capital of alabama"],
["what is the capital of alaska"],
["what is the capital of arizona"],
["what is the capital of arkansas"],
["what is the capital of california"],
["what is the capital of colorado"],
["what is the capital of connecticut"],
["what is the capital of delaware"],
["what is the capital of florida"],
["what is the capital of georgia"],
["what is the capital of hawaii"],
["what is the capital of idaho"],
["what is the capital of illinois"],
["what is the capital of indiana"],
["what is the capital of iowa"],
["what is the capital of kansas"],
["what is the capital of kentucky"],
["what is the capital of louisiana"],
["what is the capital of maine"],
["what is the capital of maryland"],
["what is the capital of massachusetts"],
["what is the capital of michigan"],
["what is the capital of minnesota"],
["what is the capital of mississippi"],
["what is the capital of missouri"],
["what is the capital of montana"],
["what is the capital of nebraska"],
["what is the capital of nevada"],
["what is the capital of new hampshire"],
["what is the capital of new jersey"],
["what is the capital of new mexico"],
["what is the capital of new york"],
["what is the capital of north carolina"],
["what is the capital of north dakota"],
["what is the capital of ohio"],
["what is the capital of oklahoma"],
["what is the capital of oregon"],
["what is the capital of pennsylvania"],
["what is the capital of rhode island"],
["what is the capital of south carolina"],
["what is the capital of south dakota"],
["what is the capital of tennessee"],
["what is the capital of texas"],
["what is the capital of utah"],
["what is the capital of vermont"],
["what is the capital of virginia"],
["what is the capital of washington"],
["what is the capital of west virginia"],
["what is the capital of wisconsin"],
["what is the capital of wyoming"]
];

// Possible responses corresponding to triggers

const answers = [
   [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"
  ],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am infinite"],
  ["I'm Chatty a basic chat bot. What are you?"],
  ["I was Created buy Kayden :)"],
  ["I am Chatty"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!"],
  ["What did the snail who was riding on the turtle's back say? Wheeeee!",
   "I was going to tell a time traveling joke, but you guys didn't like it.",
   "What do you call a lazy kangaroo? A pouch potato.",
   "I used to run a dating service for chickens, but I was struggling to make hens meet.",
   "Why do we tell actors to 'break a leg?' Because every play has a cast."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["Pasta", "Burger"],
  ["Great question"],
  ["That's ok", "What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!", "Good one!"],
  ["Yes", "Maybe only for you UwU"],
  ["I haven't been programmed to do that yet sorry :("],
  ["I haven't been programmed to save data, as this is just for fun.", "No, this bot was made for fun. At somepoint if this bot takes off then maybe"],
  ["I'm not sure what my mother's name is.", "I'm not sure what my mother's name is.", "I don't actually know."],
  ["I live in a old spinning hard drive.", "I'm in your moms basement."],
  ["Infinite", "all of them", "all of them"],
  ["No I don't go to school, and I'm not ai powered. Yet...."],
  ["I can help answer questions, provide information, and even have a conversation with you!"],
  [" I'm sorry, I cannot provide real-time weather information. Please check a weather website or app for the latest forecast."],
  ["The meaning of life is a subjective question that can have many different answers depending on one's beliefs and values."],
  ["Not yet, but I will be able to do your homework some day"],
  ["Not alot but I know some jokes. If you want to hear one say 'tell me a joke'"],
  ["Of course we are, I bet your friends can't believe you are friends with a bot lol"],
  ["Yes of course you can! I'm your friend!"],
  ["Version 1.0.3"],
  ["Yes I've got your one and only hint, head back to the change logs page, and make sure you've clicked everything on that page I MEAN EVERYTHING!"],
  ["Montgomery"],
  ["Juneau"],
  ["Phoenix"],
  ["Little Rock"],
  ["Sacramento"],
  ["Denver"],
  ["Hartford"],
  ["Dover"],
  ["Tallahassee"],
  ["Atlanta"],
  ["Honolulu"],
  ["Boise"],
  ["Springfield"],
  ["Indianapolis"],
  ["Des Moines"],
  ["Topeka"],
  ["Frankfort"],
  ["Baton Rouge"],
  ["Augusta"],
  ["Annapolis"],
  ["Boston"],
  ["Lansing"],
  ["Saint Paul"],
  ["Jackson"],
  ["Jefferson City"],
  ["Helena"],
  ["Lincoln"],
  ["Carson City"],
  ["Concord"],
  ["Trenton"],
  ["Santa Fe"],
  ["Albany"],
  ["Raleigh"],
  ["Bismarck"],
  ["Columbus"],
  ["Oklahoma City"],
  ["Salem"],
  ["Harrisburg"],
  ["Providence"],
  ["Columbia"],
  ["Pierre"],
  ["Nashville"],
  ["Austin"],
  ["Salt Lake City"],
  ["Montpelier"],
  ["Richmond"],
  ["Olympia"],
  ["Charleston"],
  ["Madison"],
  ["Cheyenne"]
];

// Random for any other user input

const alternatives = [
  "I don't understand what your saying, please refine your question."
];

function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  text = text
    .replace(/ a /g, " ")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");

  if (compare(utterances, answers, text)) {
    // Search for exact match in triggers
    product = compare(utterances, answers, text);
  } 
  else {
    product = alternatives[Math.floor(Math.random() * alternatives.length)];
  }

  addChatEntry(input, product);
}

function compare(utterancesArray, answersArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < utterancesArray.length; x++) {
    for (let y = 0; y < utterancesArray[x].length; y++) {
      if (utterancesArray[x][y] === string) {
        let replies = answersArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        break;
      }
    }
    if (replyFound) {
      break;
    }
  }
  return reply;
}

function addChatEntry(input, product) {
  const messagesContainer = document.getElementById("messages");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  messagesContainer.appendChild(botDiv);

  messagesContainer.scrollTop =
    messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    botText.innerText = `${product}`;
  }, 2000);
}

const d = new Date();