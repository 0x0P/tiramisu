import express, { Request, Response } from 'express'
import documents  from './routers/documents'

const app = express();

app.use('/docs', documents);0

app.listen(3100, () => {
    console.log('💖 TIRAMISU!');
})


