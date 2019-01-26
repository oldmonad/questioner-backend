/* eslint-disable indent */
/* eslint-disable eol-last */
import dotenv from 'dotenv';
import pool from './index';
import bcrypt from '../utilities/bcrypt';

dotenv.config();

console.log('Creating tables...');

(async () => {
    try {
        console.log('Creating users table...');
        await pool.query(`CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        user_name VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        phone_number VARCHAR(11) NOT NULL,
        password VARCHAR(100) NOT NULL,
        admin BOOLEAN DEFAULT FALSE,
        created_on TIMESTAMPTZ DEFAULT NOW())`);

        const password = bcrypt.hashPassword(process.env.ADMIN_PASSWORD);
        const Admin = {
            firstname: 'legolas',
            lastname: 'Aragorn',
            username: 'ShirePrince',
            email: 'legolaslegit@gmail.com',
            password,
            phonenumber: '08135266484',
        };

        const queryPlaceholder = `INSERT INTO users (first_name, last_name, user_name, email, password,  phone_number)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, first_name, last_name, user_name, email, phone_number`;
        const values = [Admin.firstname, Admin.lastname, Admin.username,
            Admin.email, Admin.password, Admin.phonenumber,
        ];
        await pool.query(queryPlaceholder, values);
        // eslint-disable-next-line quotes
        const makeAdmin = `UPDATE users SET admin = true WHERE email = $1`;

        const adminValue = [Admin.email];
        await pool.query(makeAdmin, adminValue);


        console.log('Creating meetups table...');
        await pool.query(`CREATE TABLE IF NOT EXISTS meetups(
        id SERIAL PRIMARY KEY,
        topic VARCHAR(255) NOT NULL,
        location TEXT NOT NULL,
        happening_on VARCHAR(50) NOT NULL,
        image VARCHAR(50),
        created_on TIMESTAMPTZ DEFAULT NOW())`);

        console.log('Creating questions table...');
        await pool.query(`CREATE TABLE IF NOT EXISTS questions(
        id SERIAL PRIMARY KEY,
        meetup_id INT NOT NULL,
        title VARCHAR(255) NOT NULL,
        body TEXT NOT NULL,
        up_votes INT DEFAULT 0,
        down_votes INT DEFAULT 0,
        user_id INT NOT NULL,
        created_on TIMESTAMPTZ DEFAULT NOW(),
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
        FOREIGN KEY (meetup_id) REFERENCES meetups (id) ON DELETE CASCADE)`);

        console.log('Creating rsvps table...');
        await pool.query(`CREATE TABLE IF NOT EXISTS rsvps(
        id SERIAL,
        meetup_id INT NOT NULL,
        user_id INT NOT NULL,
        response VARCHAR(5) NOT NULL,
        PRIMARY KEY(meetup_id, user_id),
        FOREIGN KEY (meetup_id) REFERENCES meetups (id) ON DELETE CASCADE,
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE)`);

        console.log('Creating comments table...');
        await pool.query(`CREATE TABLE IF NOT EXISTS comments(
        id SERIAL PRIMARY KEY,
        question_id INT NOT NULL,
        title VARCHAR(255) NOT NULL,
        body TEXT NOT NULL,
        comment TEXT NOT NULL,
        user_id INT NOT NULL,
        created_on TIMESTAMPTZ DEFAULT NOW(),
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
        FOREIGN KEY (question_id) REFERENCES questions (id) ON DELETE CASCADE)`);

        console.log('Creating votes table...');
        await pool.query(`CREATE TABLE IF NOT EXISTS votes(
        id SERIAL PRIMARY KEY,
        user_id INT NOT NULL,
        question_id INT NOT NULL,
        vote VARCHAR(12) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
        FOREIGN KEY (question_id) REFERENCES questions (id) ON DELETE CASCADE)`);
    } catch (error) {
        console.log(error);
    }
})();