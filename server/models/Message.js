import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    text: String,
});

const Message = mongoose.model("Message", MessageSchema);
export default Message;