const express = require('express');
const {PrismaClient} = require('@prisma/client');
const verifyToken = require('../middleware/verifyToken')

const router = express.Router();
const prisma = new PrismaClient();

// (POST) Create a new application
router.post('/', verifyToken, async (req, res) => {
    const {companyName, position, status, applicationDate, salary, nextAction, website, contactName, notes } = req.body;

    // Validate required fields
    if (!companyName || !position || !status) {
        return res.status(400).json({error: 'Company name, position, and status are required fields.'});
    }

    try {
        const newApplication = await prisma.application.create({
            data: {
                companyName,
                position,
                status,
                applicationDate: applicationDate ? new Date(applicationDate) : undefined,
                salary,
                nextAction,
                website,
                contactName,
                notes,
                userId: req.user.userId, // From the verifyToken middleware
            },
        });

        res.status(201).json({
            message: 'Application created successfully',
            application: newApplication,
        });

    } catch (error) {
        console.error('Create application error:', error);
        res.status(500).json({error: 'Something went wrong'});
    }
});


// (GET) Read all applications for the logged-in user
router.get('/', verifyToken, async (req, res) => {
    try {
        const applications = await prisma.application.findMany({
            where: {userId: req.user.userId},
            orderBy: {applicationDate: 'desc'}, // Most recent 1st
        });

        res.json({
            count: applications.length,
            applications,
        });

    } catch (error) {
        console.error('Get application error:', error);
        res.status(500).json({error: 'Something went wrong'});
    }
});

// (PUT) Update an existing application
router.put('/:id', verifyToken, async (req, res) => {
    const {id} = req.params;
    const {companyName, position, status, applicationDate, salary, nextAction, website, contactName, notes} = req.body;

    // Validate required fields
    if (!companyName || !position || !status) {
        return res.status(400).json({error: 'Company name, position, and status are required fields.'});
    }

    try {
        // Check if the application exists and belongs to the logged-in user
        const existing = await prisma.application.findFirst({
            where: {id, userId: req.user.userId},
        })

        if (!existing) {
            return res.status(404).json({error: 'Application not found'});
        }

        const updatedApplication = await prisma.application.update({
            where: {id: id},
            data: {
                companyName,
                position,
                status,
                applicationDate: applicationDate ? new Date(applicationDate) : undefined,
                salary,
                nextAction,
                website,
                contactName,
                notes,
            },
        });

        res.json({
            message: 'Application updated successfully',
            application: updatedApplication,
        });

    } catch (error) {
        console.error('Update application error:', error);
        res.status(500).json({error: 'Something went wrong'});
    }
});

// (DELETE) Remove an application
router.delete('/:id', verifyToken, async (req, res) => {
    const {id} = req.params;

    try {
        // Check if the application exists and belongs to the logged-in user
        const existing = await prisma.application.findFirst({
            where: {id, userId: req.user.userId},
        })

        if (!existing) {
            return res.status(404).json({error: 'Application not found'});
        }

        await prisma.application.delete({
            where: {id: id},
        });

        res.json({message: 'Application deleted successfully'});

    } catch (error) {
        console.error('Delete application error:', error);
        res.status(500).json({error: 'Something went wrong'});
    }
});

// (GET) Fetch / Read a specific application by its id
router.get('/:id', verifyToken, async (req, res) => {
    const {id} = req.params;

    try {
        const application = await prisma.application.findFirst({
            where: {id, userId: req.user.userId},
        })

        if (!application) {
            return res.status(404).json({error: 'Application not found'});
        }

        res.json(application);

    } catch (error) {
        console.error('Get an application error:', error);
        res.status(500).json({error: 'Something went wrong'});
    }
});

module.exports = router;