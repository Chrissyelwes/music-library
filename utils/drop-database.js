/* eslint-disable semi */
const mysql = require('mysql2/promise');

const path = require('path');

require('dotenv').config({
  path: path.join(__dirname, '../.env.test')
});

const { DB_PASSWORD, DB_NAME, DB_USER, DB_HOST, DB_PORT } = process.env;

const connection = async () => {
  try {
    const db = await mysql.createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      port: DB_PORT
    });
    await db.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`);
    db.close();
  } catch (err) {
    console.log(
      'Could not drop database statement.'
    );
    console.log('Environment Variables are:', {
      DB_PASSWORD,
      DB_NAME,
      DB_USER,
      DB_HOST,
      DB_PORT
    });
    console.log(err);
  }
};

connection.query(`DROP DATABASE ${DB_NAME}`, () => connection.end());
