const { axiosInstance } = require("./axios");
const { organizer } = require("./timetable");

function sendMessages(messageObj, messageText) {
    // Telegram's chat id is usually at message.chat.id
    const chatId = (messageObj && messageObj.chat && messageObj.chat.id) || messageObj.chat_id || (messageObj.from && messageObj.from.id);
    if (!chatId) return Promise.reject(new Error("Missing chat id in update message object"));
    return axiosInstance.get("sendMessage", {
        chat_id: chatId,
        text: String(messageText || ""),
    });
}
function sendPicture(params) {
    const chatId = getChatId(params.message);
    if (!chatId) return Promise.reject(new Error("Missing chat id for sendPicture"));
    return axiosInstance.get("sendPhoto", {
        chat_id: chatId,
        photo: params.photo,
    });
}
function Timetable(params) {
    const chatId = params.message;
    if (!chatId) return Promise.reject(new Error("Missing chat id for Timetable"));
    return axiosInstance.get("sendPhoto", {
        chat_id: chatId,
        photo: "https://photos.app.goo.gl/Dj3sm8Gz16vTUZcGA",
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
                return sendMessages(messageObj, "Welcome! Use /help to see available commands.");
            case "help":
                return sendMessages(messageObj, "Available commands: /start, /timetable");
            case "asad":
                try {
                    return sendMtoAsad(messageText.replace("/asad ", ""));
                } catch (err) {
                    console.log(err)
                    return sendMessages(messageObj, "nimadur")
                }
            case "toUser":
                sendMessages(messageObj, "Sent!")
                try{
                    return sendMtoUser(messageText.replace("/toUser ", "").split(":")[0], messageText.replace("/toUser ", "").replace(messageText.replace("/toUser ", "").split(":")[0], "Admin"));
                } catch (err) {
                    console.log(err)
                    sendMessages(messageObj, "nimadur xato")
                }
            case "ques":
                return question(messageObj, messageText.replace("/ques ", ""));
            // case "photo":
            //     return sendPicture({ message: messageObj, photo: messageText.replace("/photo ", "") });
            case "timetable":
                sendMessages(messageObj,"Here is the timetable:")
                if (messageText.replace("/timetable", "").trim() === "") {
                    return Timetable({ message: chatId });
                }else{
                    let day = messageText.replace("/timetable ", "").trim()
                    switch (day) {
                        case "monday":
                            return sendMessages(messageObj, organizer("monday"));
                        case "tuesday":
                            return sendMessages(messageObj, organizer("tuesday"));
                        case "wednesday":
                            return sendMessages(messageObj, organizer("wednesday"));
                        case "thursday":
                            return sendMessages(messageObj, organizer("thursday"));
                        case "friday":
                            return sendMessages(messageObj, organizer("friday"));
                        case "all":
                            return sendMessages(messageObj, organizer("all"));
                        default:
                            return sendMessages(messageObj, `Unknown day: ${day}`);
                    }
                }
            case "updatelog":
                return sendMessages(messageObj, "Bot currently runs on 1.02 published 01.02.2026 at 20:54 \n \n 💠01.01 - 30.01.2026; 10:30 \n 💠01.00 - 30.01.2026; 10:11");

            default:
                return sendMessages(messageObj, `Unknown command: ${command}`);
        }
    } else {
        return
    }
}

module.exports = { handleMessage };