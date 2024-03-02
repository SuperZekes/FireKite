// Responses object adds responses to the chatbot
const responses = {
    "hi": "Hello there!", 
    "hello": "Hello there!",
    "hi!": "Hello there! How are you today?",
    "hello!": "Hello there! How are you today?",
    "how are you?": "I'm doing great!",
    "what's your name?": "I'm FireKite!",
    "how are you": "I'm doing great!",
    "what's your name": "I'm FireKite!",
    "i'm good": "That's great to hear!",
    "i'm great": "Glad to hear it!",
    "what can you do?": "I'm a ChatBot made by SuperZekes you can clone the repo yourself and and/remove messages! https://github.com/SuperZekes/FireKite",
    "what are you?": "I'm a ChatBot made by SuperZekes you can clone the repo yourself and and/remove messages! https://github.com/SuperZekes/FireKite",
    "what are your skills?": "Chatting based off of commands and responses",
    "can you code?": "I don't actually write code myself",
    "goodbye": "Goodbye!",
    "bye": "Goodbye!",
    "goodbye!": "Goodbye!",
    "bye!": "Goodbye!",
    "good": "That's great to hear!",
    "good morning": "Good morning to you as well!",
    "good afternoon": "Good afternoon to you as well!",
    "good evening": "Good evening to you as well!"
  }
  
  function sendMessage() {
  
    // Get user input
    let userInput = document.getElementById("userInput").value;
    
    // Create user message
    let userMessage = document.createElement("div");
    userMessage.innerHTML = userInput;
    userMessage.classList.add("text-right", "bg-gray-200", "p-2", "rounded");
  
    // Create bot message
    let botMessage = document.createElement("div");
    
    // Lookup response 
    let botResponse;
    if(responses[userInput.toLowerCase()]) {
      botResponse = responses[userInput.toLowerCase()];
    } else {
      botResponse = "Hmm, I'm not sure how to respond to that yet!";
    }
  
    botMessage.innerHTML = botResponse;
    botMessage.classList.add("text-left", "bg-gray-300", "p-2", "rounded");
  
    // Append messages
    let chatbox = document.getElementById("chatbox");
    chatbox.appendChild(userMessage);
    chatbox.appendChild(botMessage);
  
    // Clear input
    document.getElementById("userInput").value = "";
  
  }