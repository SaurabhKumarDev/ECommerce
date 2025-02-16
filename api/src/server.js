const app = require(".");
const { connectToDB } = require("../config/db")

const Port = 5001;

app.listen(Port, async () => {
    await connectToDB();
    console.log(`Server listening on ${Port} Port`);
})