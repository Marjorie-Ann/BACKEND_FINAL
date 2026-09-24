import express from 'express';

import bookRoutes from './routes/bookRoutes.js';

const app = express();

app.use('/book', bookRoutes);

try {
    const port = 3000;
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
} catch (e) {
    console.log(e);
}
