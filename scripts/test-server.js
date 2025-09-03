#!/usr/bin/env node

/**
 * Test Server for Social Media Crawler Detection
 * 
 * This server demonstrates how to serve static HTML to crawlers
 * and the SPA to regular users.
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Social media crawler detection
const crawlerUserAgents = [
    'facebookexternalhit',
    'twitterbot',
    'linkedinbot',
    'whatsapp',
    'telegrambot',
    'skypeuripreview',
    'slackbot',
    'discordbot',
    'googlebot',
    'bingbot'
];

function isCrawler(userAgent) {
    if (!userAgent) return false;
    return crawlerUserAgents.some(crawler => 
        userAgent.toLowerCase().includes(crawler.toLowerCase())
    );
}

// Middleware to log requests
app.use((req, res, next) => {
    const userAgent = req.get('User-Agent') || 'Unknown';
    const isCrawlerRequest = isCrawler(userAgent);
    
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    console.log(`User-Agent: ${userAgent}`);
    console.log(`Is Crawler: ${isCrawlerRequest ? 'YES' : 'NO'}`);
    console.log('---');
    
    next();
});

// Serve static files from dist directory
app.use(express.static(path.join(__dirname, '../dist')));

// Handle blog article routes
app.get('/blog-details/:articleId', (req, res) => {
    const userAgent = req.get('User-Agent') || '';
    const articleId = req.params.articleId;
    
    if (isCrawler(userAgent)) {
        // Serve static HTML for crawlers
        const staticPath = path.join(__dirname, '../dist/blog-details', articleId, 'index.html');
        
        console.log(`🤖 Serving static HTML for crawler: ${staticPath}`);
        
        res.sendFile(staticPath, (err) => {
            if (err) {
                console.log(`❌ Static file not found: ${staticPath}`);
                // Fallback to SPA
                res.sendFile(path.join(__dirname, '../dist/index.html'));
            } else {
                console.log(`✅ Static HTML served successfully`);
            }
        });
    } else {
        // Serve SPA for regular users
        console.log(`👤 Serving SPA for regular user`);
        res.sendFile(path.join(__dirname, '../dist/index.html'));
    }
});

// Handle root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Fallback to SPA for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Test server running on http://localhost:${PORT}`);
    console.log('');
    console.log('📋 Test URLs:');
    console.log(`   Regular user: http://localhost:${PORT}/blog-details/aws-overview`);
    console.log(`   Facebook bot: curl -H "User-Agent: facebookexternalhit/1.1" http://localhost:${PORT}/blog-details/aws-overview`);
    console.log(`   Twitter bot:  curl -H "User-Agent: Twitterbot/1.0" http://localhost:${PORT}/blog-details/aws-overview`);
    console.log('');
    console.log('🔍 Watch the console to see how requests are handled differently');
});

export default app;
