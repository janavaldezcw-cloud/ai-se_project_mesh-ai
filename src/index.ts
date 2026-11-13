import express from 'express';
import router from './routes/index.js';

const app = express();
const port = 3000 ;

app.use(router);

app.listen(port, () => {
    console.log('port 3000 is live')
});


app.get("/health", (req,res): void => {
    res.status(200).json({
        "success":true ,
        "data": {'status' : 'ok' },
       ' error': null 
    })
} )