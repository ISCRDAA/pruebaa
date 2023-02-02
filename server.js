const EXPRESS = require('express');
const app = new EXPRESS();
const PORT = 5420;
app.use((req, res, next) => {
    console.log("peticion en curso");
    next();
});
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(PORT, () => {
    console.log(`server ready in port  ${PORT}`);
});