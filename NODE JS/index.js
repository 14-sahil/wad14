let express = require('express')
const app = express();
app.use(express.static('public'));
app.listen(4000, () => {
    console.log(`localhost 4000 started`)
})
