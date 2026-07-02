const express = require('express');
const bcrypt = require('bcryptjs');
const {PrismaClient} = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

// creating register endpoint for new user registration
router.post('/register', async (req, res) => {
    const {email, password} = req.body;

    // checking if email & password are provided
    if (!email || !password) {
        return res.status(400).json({error: 'Email and password are required'});
    }

    try {
        // checking if user already exists
        const existingUser = await prisma.user.findUnique({
            where: {email}
        });

        if (existingUser) {
            return res.status(400).json({error: 'User already exists'});
        }

        // hashing the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // creating new user in the database
        const newUser = await prisma.user.create({
            data: {
                email,
                passwordHash: hashedPassword,
            },
        });

        // sending success response (not password) back
        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: newUser.id,
                email: newUser.email
            },
        });

    } catch (error) {
        console.error('Registeration error:', error);
        res.status(500).json({error: 'Something went wrong'});
    }

});

// creating login endpoint for user login
router.post('/login', async (req, res) => {
    const {email, password} = req.body;

    // checking if email and password are provided
    if (!email || !password) {
        return res.status(400).json({error: 'Email and password are required'});
    }

    try {
        // finding the user by email
        const user = await prisma.user.findUnique({
            where: {email}
        });

        // if user doesn't exist, returing error
        if (!user) {
            return res.status(401).json({error: 'User does not exist'});
        }

        // comparing the provided password with the stored hashed
        const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

        // if password is invalid, returing error
        if (!isPasswordValid) {
            return res.status(401).json({error: 'Invalid credentials'});
        }

        // generating JWT token
        const jwt = require('jsonwebtoken');
        const token = jwt.sign(
            {userId: user.id, email: user.email},
            process.env.JWT_SECRET || 'huntrack_super_secret_key_2026',
            {expiresIn: '7d'}
        );

        // sending back the token and user info
        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                email: user.email
            },
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({error: 'Something went wrong'});
    }

});

module.exports = router;
