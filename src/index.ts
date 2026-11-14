import express from 'express';
import { logger } from './middleware/logger.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';
import router from './routes/index.js';


const app = express();
const port = 3000 ;

app.use(express.json());
app.use(logger)

app.use(router);


app.listen(port, () => {
    console.log('Server running on port 3000')
});



app.get("/health", (req,res): void => {
    res.status(200).json({
        "success":true ,
        "data": {'status' : 'ok' },
       error: null
    })
} )

app.get('/test-error', () => {
  throw new Error('Test error');
});

app.use(notFound);
app.use(errorHandler);