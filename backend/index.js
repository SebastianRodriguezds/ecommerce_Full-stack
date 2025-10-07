const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = process.env.PORT || 5000;

main().then(() => console.log("Mongodb is successfully connectred.")).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://admin:HDBHknhL9jkBfqTU@lebaba-ecommerce.umtiuq5.mongodb.net/?retryWrites=true&w=majority&appName=lebaba-ecommerce');

    app.get('/', (req, res) => {
        res.send('Server is running...!')
    });
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})