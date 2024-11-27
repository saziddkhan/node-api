const express = require('express')
const app = express()
const data = require('./MOCK_DATA.json')
PORT = 8000


app.get('/api/data', (req, res) => {
    return res.json(data);
});


app.get('/api/data:id', (req, res) => {
    const id = Number(req.params.id);
    const user = data.find((user) => user.id === id)
    return res.json(user);
});



app.listen(PORT, () => {
    console.log(`listening on port${PORT}`)
})