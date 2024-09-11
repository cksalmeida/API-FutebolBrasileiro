import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
    name: String,
    position: String,
    teamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        required: true
    },
    birthDate: String,
});

const Player = mongoose.model("Player", playerSchema);

export default Player;
