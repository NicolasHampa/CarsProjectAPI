import app from './app'
import cors from'cors';

app.listen(3333);

// use it before all route definitions
//app.use(cors({origin: 'http://localhost:3333'}));