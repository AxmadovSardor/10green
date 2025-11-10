const { getAIResponse } = require("./ai");
const { axiosInstance } = require("./axios");

function sendMessages(messageObj, messageText) {
    // Telegram's chat id is usually at message.chat.id
    const chatId = (messageObj && messageObj.chat && messageObj.chat.id) || messageObj.chat_id || (messageObj.from && messageObj.from.id);
    if (!chatId) return Promise.reject(new Error("Missing chat id in update message object"));
    return axiosInstance.get("sendMessage", {
        chat_id: chatId,
        text: String(messageText || ""),
    });
}

function getChatId(messageObj) {
    return (messageObj && messageObj.chat && messageObj.chat.id) || messageObj.chat_id || (messageObj.from && messageObj.from.id);
}

function sendChatAction(chatId, action = "typing") {
    if (!chatId) return Promise.reject(new Error("Missing chat id for chat action"));
    return axiosInstance.get("sendChatAction", {
        chat_id: chatId,
        action,
    });
}
function sendMtoAsad( messageText) {
    // Telegram's chat id is usually at message.chat.id
    const chatId = 5044025550;
    return axiosInstance.get("sendMessage", {
        chat_id: chatId,
        text: String(messageText || ""),
    });
}
function sendMtoUser(messageObj, messageText) {
    // Telegram's chat id is usually at message.chat.id
    const chatId = messageObj;
    if (!chatId) return Promise.reject(new Error("Missing chat id in update message object"));
    return axiosInstance.get("sendMessage", {
        chat_id: chatId,
        text: String(messageText || ""),
    });
}
function question(messageObj, messageText) {
    // Telegram's chat id is usually at message.chat.id
    const chatId = 5822990554;
    return axiosInstance.get("sendMessage", {
        chat_id: chatId,
        text: String(
`⬇️From: ${messageObj.from.first_name}
🔢id: ${messageObj.chat.id}
🤫username: @${messageObj.from.username || "no username"}
💬Said: ${messageText}` || ""),
    });
}

// Escape Telegram MarkdownV2 special characters so text is sent literally.
function escapeMarkdownV2(text) {
    // Characters to escape in MarkdownV2: _ * [ ] ( ) ~ ` > # + - = | { } . !
    // We escape all of them with a preceding backslash.
    return text.replace(/([_\*\[\]\(\)~`>#\+\-\=\|\{\}\.\!])/g, "\\$1");
}
async function handleMessage(messageObj) {
    if (!messageObj) return;
    const messageText = messageObj.text || "";

    // Log user input details
    const chatId = getChatId(messageObj);
    console.log(messageObj);

    // Commands start with slash at position 0
    if (messageText.startsWith("/")) {
        const command = messageText.substr(1).split(" ")[0];
        console.log("Received command:", command);
        switch (command) {
            case "start":
                return sendMessages(messageObj, "Welcome to the Assistant bot of <b>Karshi Presidential school</b>! My name is Sardor.");
            case "help":
                return sendMessages(messageObj, "Available commands: /start, /help");
            case "asad":
                return sendMtoAsad(messageText.replace("/asad ", ""));
            case "toUser":
                return sendMtoUser(messageText.replace("/toUser ", "").split(":")[0], messageText.replace("/toUser ", "").replace(messageText.replace("/toUser ", "").split(":")[0], "Admin"));
            case "ques":
                return question(messageObj, messageText.replace("/ques ", ""));
            default:
                return sendMessages(messageObj, `Unknown command: ${command}`);
        }
    } else {
        // Send periodic 'typing' chat actions while AI is processing.
        const chatId = getChatId(messageObj);
        let typingInterval = null;

        if (chatId) {
            // Send initial typing action immediately, then every 3s
            sendChatAction(chatId, "typing").catch(() => {});
            typingInterval = setInterval(() => sendChatAction(chatId, "typing").catch(() => {}), 3000);
        }

        try {
            const aiText = await getAIResponse(messageText);
            console.log("AI response:", aiText);

            if (typingInterval) clearInterval(typingInterval);

            return sendMessages(messageObj, aiText || "");
        } catch (err) {
            console.error("AI handler error:", err);
            if (typingInterval) clearInterval(typingInterval);
            // Fallback message to the user
            return sendMessages(messageObj, "Sorry, I couldn't process that right now.");
        }
    }
}

module.exports = { handleMessage };