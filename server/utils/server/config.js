import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {

    MONGO_CONNECTION: process.env.MONGO_CONNECTION,
    TOKEN_SECRET: process.env.TOKEN_SECRET,
    TOKEN_SECRET_EXP: process.env.TOKEN_SECRET_EXP,
    PORT: process.env.PORT,
    
    SMTP_EMAIL: process.env.SMTP_EMAIL,
    SMTP_PASSWORD: process.env.SMTP_PASSWORD,
    SMTP_HOST: process.env.SMTP_HOST,
    

};