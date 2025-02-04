// const express = require('express')

import express from 'express' //package
import utils from '@andasan/my-awesome-package'

import { greet } from "./utils.js" //module


const app = express();

app.get('/', (req, res) => {
    res.json({
        message: greet("Hoge")
    })
});

app.get("/capitalize", (req, res) => {
    res.json({
        capitalize: utils.capitalizeWords('hoge boke hage')
    })
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
})