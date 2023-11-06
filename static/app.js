const chatLog = document.getElementById("chat-log");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const roleInput = document.getElementById("role-input");

sendButton.addEventListener("click", () => {
  const userMessage = userInput.value;
  const chatbotRole = roleInput.value;
  if (userMessage.toString().length > 0) {
    sendButton.disabled = true;
    // Clear the input field
    userInput.value = "";
    // Append user message with the "user-message" class
    chatLog.innerHTML += `<div class="user-message">${userMessage}</div>`;
    fetch("/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role: chatbotRole, message: userMessage }),
    })
      .then((response) => response.json())
      .then((data) => {
        const botResponse = data.bot_response;
        // Display the bot's response in the chat log
        chatLog.innerHTML += `<div class="bot-message">AI: ${botResponse}</div>`;
        chatLog.scrollTop = chatLog.scrollHeight; // Auto-scroll to the latest message
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        // Re-enable the button after a specified delay (3 seconds)
        setTimeout(() => {
          sendButton.disabled = false;
        }, 3000);
      });
  }
});

userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const userMessage = userInput.value;
    const chatbotRole = roleInput.value;
    if (userMessage.toString().length > 0) {
      sendButton.disabled = true;
      // Clear the input field
      userInput.value = "";
      // Append user message with the "user-message" class
      chatLog.innerHTML += `<div class="user-message">${userMessage}</div>`;
      fetch("/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role: chatbotRole, message: userMessage }),
      })
        .then((response) => response.json())
        .then((data) => {
          const botResponse = data.bot_response;
          // Display the bot's response in the chat log
          chatLog.innerHTML += `<div class="bot-message">AI: ${botResponse}</div>`;
          chatLog.scrollTop = chatLog.scrollHeight; // Auto-scroll to the latest message
        })
        .catch((error) => {
          console.error("Error:", error);
        })
        .finally(() => {
          // Re-enable the button after a specified delay (3 seconds)
          setTimeout(() => {
            sendButton.disabled = false;
          }, 3000);
        });
    }
  }
});

// sendButton.addEventListener("click", () => {
//   const userMessage = userInput.value;
//   if (userMessage.toString().length > 0) {
//     chatLog.innerHTML += `<div class="user-message">${userMessage}</div>`;
//     userInput.value = ""; // Clear the input field

//     // Echo the user message
//     chatLog.innerHTML += `<div class="bot-message">AI said: ${userMessage}</div>`;
//     chatLog.scrollTop = chatLog.scrollHeight;
//   }
// });
