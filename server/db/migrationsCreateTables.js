/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable eol-last */
import dotenv from 'dotenv';
import pool from './index';
import bcrypt from '../utilities/bcrypt';
import {
mockMeetups1, mockMeetups2, mockMeetups3,
} from './mockMeetups';
import {
 mockQuestions1, mockQuestions2, mockQuestions3, mockQuestions4,
} from './mockQuestions';
import { mockComment1, mockComment2 } from './mockComments';

dotenv.config();

console.log('Creating tables...');

(async () => {
    try {
        console.log('Creating users table...');
        await pool.query(`CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50),
        user_name VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        phone_number VARCHAR(11),
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

        console.log('Seeding admin..');
        await pool.query(queryPlaceholder, values);

        console.log('Admin seeded...');

        // eslint-disable-next-line quotes
        const makeAdmin = `UPDATE users SET admin = true WHERE email = $1`;

        const adminValue = [Admin.email];
        await pool.query(makeAdmin, adminValue);


        console.log('Creating meetups table...');
        await pool.query(`CREATE TABLE IF NOT EXISTS meetups(
        id SERIAL PRIMARY KEY,
        user_id INT NOT NULL,
        topic VARCHAR(255) NOT NULL,
        location TEXT NOT NULL,
        happening_on VARCHAR(50) NOT NULL,
        image_url VARCHAR(500),
        created_on TIMESTAMPTZ DEFAULT NOW())`);

        const MeetupQueryPlaceholder = `INSERT INTO meetups (user_id, topic, location, happening_on,
      image_url) VALUES ($1, $2, $3, $4, $5) RETURNING *`;

        const meetup1 = [mockMeetups1.userId, mockMeetups2.topic, mockMeetups1.location, mockMeetups1.happeningOn,
        mockMeetups1.imageUrl,
        ];
        const meetup2 = [mockMeetups2.userId, mockMeetups2.topic, mockMeetups2.location, mockMeetups2.happeningOn,
        mockMeetups2.imageUrl,
        ];
        const meetup3 = [mockMeetups3.userId, mockMeetups3.topic, mockMeetups3.location, mockMeetups3.happeningOn,
        mockMeetups3.imageUrl,
        ];

        console.log('Seeding meetups..');
        await pool.query(MeetupQueryPlaceholder, meetup1);
        await pool.query(MeetupQueryPlaceholder, meetup2);
        await pool.query(MeetupQueryPlaceholder, meetup3);
        console.log('Meetups seeded..');


        console.log('Creating questions table...');
        await pool.query(`CREATE TABLE IF NOT EXISTS questions(
        id SERIAL PRIMARY KEY,
        meetup_id INT NOT NULL,
        title VARCHAR(255),
        body TEXT NOT NULL,
        up_votes INT DEFAULT 0,
        down_votes INT DEFAULT 0,
        user_id INT NOT NULL,
        created_on TIMESTAMPTZ DEFAULT NOW(),
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
        FOREIGN KEY (meetup_id) REFERENCES meetups (id) ON DELETE CASCADE)`);


        const QuestionQueryPlaceholder = 'INSERT INTO questions (meetup_id, title, body, user_id) VALUES ($1, $2, $3, $4) RETURNING *';

        const question1 = [mockQuestions1.meetupId, mockQuestions1.title, mockQuestions1.body, mockQuestions1.userId];
        const question2 = [mockQuestions2.meetupId, mockQuestions1.title, mockQuestions2.body, mockQuestions2.userId];
        const question3 = [mockQuestions3.meetupId, mockQuestions1.title, mockQuestions3.body, mockQuestions3.userId];
        const question4 = [mockQuestions4.meetupId, mockQuestions1.title, mockQuestions4.body, mockQuestions4.userId];


        console.log('Seeding questions..');
        await pool.query(QuestionQueryPlaceholder, question1);
        await pool.query(QuestionQueryPlaceholder, question2);
        await pool.query(QuestionQueryPlaceholder, question3);
        await pool.query(QuestionQueryPlaceholder, question4);
        console.log('Questions seeded..');

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
        comment TEXT NOT NULL,
        user_id INT NOT NULL,
        created_on TIMESTAMPTZ DEFAULT NOW(),
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
        FOREIGN KEY (question_id) REFERENCES questions (id) ON DELETE CASCADE)`);

           const CommentQueryPlaceholder = 'INSERT INTO comments (question_id, comment, user_id) VALUES ($1, $2, $3) RETURNING *';

       const comment1 = [mockComment1.questionId, mockComment1.comment, mockComment1.userId];
        const comment2 = [mockQuestions2.meetupId, mockComment2.comment, mockComment2.userId];

        console.log('Seeding comments..');
        await pool.query(CommentQueryPlaceholder, comment1);
        await pool.query(CommentQueryPlaceholder, comment2);
        console.log('Comments seeded..');


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