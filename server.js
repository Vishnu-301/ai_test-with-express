import express from "express";
import ejs from "ejs";

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index", { reply: null });
});

app.post("/assistant", (req, res) => {
    const message = req.body.message.toLowerCase();
    let reply = "what's up";

    switch (message) {
        case 'hello':
            reply = "Hello! How can I help you?";
            break;
        case 'what is your name':
            reply = "I am Vish, your web assistant.";
            break;
        case 'what is the time':
            reply = `Current time is ${new Date().toLocaleTimeString()}`;
            break;
        case 'current date':
            reply = `Today's date is ${new Date().toDateString()}`;
            break;
        case 'help':
            reply = "Try asking: time, date, or say hello";
            break;
        default:
            reply = "whats up";
            break;
    }

    res.render("index", { reply });
});

app.listen(3000, () => {
    console.log("Assistant running on http://localhost:3000");
});
