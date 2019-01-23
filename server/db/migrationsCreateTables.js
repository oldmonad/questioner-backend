/* eslint-disable indent */
/* eslint-disable eol-last */
import pool from './index';
import dotenv from 'dotenv';
import bcrypt from '../utilities/bcrypt';

dotenv.config();

console.log('Creating tables...');

(async () => {
    try {
        console.log('Creating users table...');
        await pool.query(`CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        firstname VARCHAR(50) NOT NULL,
        lastname VARCHAR(50) NOT NULL,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        phonenumber VARCHAR(11) NOT NULL,
        password VARCHAR(100) NOT NULL,
        admin BOOLEAN DEFAULT FALSE,
        createdon TIMESTAMPTZ DEFAULT NOW())`);

        const password = bcrypt.hashPassword(process.env.ADMIN_PASSWORD);
        const Admin = {
            firstname: 'legolas',
            lastname: 'Aragorn',
            username: 'ShirePrince',
            email: 'legolaslegit@gmail.com',
            password,
            phonenumber: '08135266484',
        };

        const queryPlaceholder = `INSERT INTO users (firstname, lastname, username, email, password,  phonenumber)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, firstname, lastname, username, email, phonenumber`;
        const values = [Admin.firstname, Admin.lastname, Admin.username,
            Admin.email, Admin.password, Admin.phonenumber
        ];
        await pool.query(queryPlaceholder, values);
        const makeAdmin = `UPDATE users SET admin = true WHERE email = $1 `;

        const adminValue = [Admin.email];
        await pool.query(makeAdmin, adminValue);


        console.log('Creating meetups table...');
        await pool.query(`CREATE TABLE IF NOT EXISTS meetups(
        id SERIAL PRIMARY KEY,
        topic VARCHAR(255) NOT NULL,
        location TEXT NOT NULL,
        date VARCHAR(50) NOT NULL,
        image VARCHAR(50),
        tags VARCHAR(500),
        createdon TIMESTAMPTZ DEFAULT NOW())`);

        console.log('Creating questions table...');
        await pool.query(`CREATE TABLE IF NOT EXISTS questions(
        id SERIAL PRIMARY KEY,
        meetupid INT NOT NULL,
        title VARCHAR(255) NOT NULL,
        body TEXT NOT NULL,
        upvotes INT DEFAULT 0,
        downvotes INT DEFAULT 0,
        userid INT NOT NULL,
        createdon TIMESTAMPTZ DEFAULT NOW(),
        FOREIGN KEY (userid) REFERENCES users (id) ON DELETE CASCADE,
        FOREIGN KEY (meetupid) REFERENCES meetups (id) ON DELETE CASCADE)`);

        console.log('Creating rsvps table...');
        await pool.query(`CREATE TABLE IF NOT EXISTS rsvps(
        id SERIAL,
        meetupid INT NOT NULL,
        userid INT NOT NULL,
        response VARCHAR(5) NOT NULL,
        PRIMARY KEY(meetupid, userid),
        FOREIGN KEY (meetupid) REFERENCES meetups (id) ON DELETE CASCADE,
        FOREIGN KEY (userid) REFERENCES users (id) ON DELETE CASCADE)`);

        console.log('Creating comments table...');
        await pool.query(`CREATE TABLE IF NOT EXISTS comments(
        id SERIAL PRIMARY KEY,
        meetupid INT NOT NULL,
        questionid INT NOT NULL,
        body TEXT NOT NULL,
        userid INT NOT NULL,
        createdon TIMESTAMPTZ DEFAULT NOW(),
        FOREIGN KEY (userid) REFERENCES users (id) ON DELETE CASCADE,
        FOREIGN KEY (questionid) REFERENCES questions (id) ON DELETE CASCADE,
        FOREIGN KEY (meetupid) REFERENCES meetups (id) ON DELETE CASCADE)`);

        console.log('Creating votes table...');
        await pool.query(`CREATE TABLE IF NOT EXISTS votes(
        id SERIAL PRIMARY KEY,
        userid INT NOT NULL,
        questionid INT NOT NULL,
        vote VARCHAR(8) NOT NULL,
        FOREIGN KEY (userid) REFERENCES users (id) ON DELETE CASCADE,
        FOREIGN KEY (questionid) REFERENCES questions (id) ON DELETE CASCADE)`);
    } catch (error) {
        console.log(error);
    }
})();