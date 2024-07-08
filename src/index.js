import 'dotenv/config';
import { myIp } from './utils/ip.js';
import { connectDB } from './db/db.js';
import { app } from './app.js';

const port = process.env.PORT || 8000;

connectDB()
    .then(() =>
        app.listen(port, () => {
            console.log(`server listening on`);
            const urls = {
                external: `http://${myIp}:${port}`,
                local: `http://localhost:${port}`
            }
            console.table(urls)
        })
    )
    .catch((err) => console.log(`Error connecting DB`));


























// Another example
/*
import { DB_NAME } from './constants.js';
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        app.on('error', (err) => console.error(err));
        app.listen(process.env.PORT, () => console.log(
            `server listening on 
            ${myIp}:${process.env.PORT} 
            \n
            http://localhost:${process.env.PORT}`
        ));
    } catch (error) {
        console.log(error);
    }
})();

*/
