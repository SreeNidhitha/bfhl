const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// POST Method
app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const userId = "Gongati Sree Nidhitha Reddy"; // Replace with dynamic generation if needed
    const email = "gongati.sreenidhitha2021@gmail.com";
    const rollNumber = "21BCE2409";  // Your roll number

    let numbers = [];
    let alphabets = [];
    let highestLowercaseAlphabet = "";

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (typeof item === 'string') {
            alphabets.push(item);
            if (item >= 'a' && item <= 'z' && item > highestLowercaseAlphabet) {
                highestLowercaseAlphabet = item;
            }
        }
    });

    res.status(200).json({
        is_success: true,
        user_id: userId,
        email: email,
        roll_number: rollNumber,
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
    });
});

// GET Method
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
