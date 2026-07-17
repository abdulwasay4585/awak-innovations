"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
// ── Middleware ──────────────────────────────────────────────────
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
}));
app.use(express_1.default.json());
// ── Health Check ─────────────────────────────────────────────────
app.get('/', (_req, res) => {
    res.json({ status: 'ok', message: 'Awak Innovations API is running' });
});
// In-memory store for now (replace with Prisma when DB is provisioned)
const contactSubmissions = [];
app.post('/api/contact', (req, res) => {
    const { firstName, lastName, email, company, message } = req.body;
    // Validation
    if (!firstName || !lastName || !email || !message) {
        res.status(400).json({ error: 'Missing required fields: firstName, lastName, email, message' });
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        res.status(400).json({ error: 'Invalid email address' });
        return;
    }
    const submission = { firstName, lastName, email, company: company || '', message };
    contactSubmissions.push(submission);
    console.log('📧 New contact submission:', { firstName, lastName, email, company });
    res.status(201).json({
        success: true,
        message: `Thank you ${firstName}! We've received your message and will be in touch within 1 business day.`,
    });
});
const newsletterSubscribers = new Set();
app.post('/api/newsletter', (req, res) => {
    const { email } = req.body;
    if (!email) {
        res.status(400).json({ error: 'Email is required' });
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        res.status(400).json({ error: 'Invalid email address' });
        return;
    }
    if (newsletterSubscribers.has(email)) {
        res.status(200).json({ success: true, message: "You're already subscribed! Thank you." });
        return;
    }
    newsletterSubscribers.add(email);
    console.log('📰 New newsletter subscriber:', email);
    res.status(201).json({
        success: true,
        message: "You've been subscribed to our newsletter!",
    });
});
// ── 404 Handler ───────────────────────────────────────────────────
app.use((_req, res) => {
    res.status(404).json({ error: 'Route not found' });
});
// ── Start ─────────────────────────────────────────────────────────
app.listen(port, () => {
    console.log(`✅ Backend server running on port ${port}`);
    console.log(`   Health: http://localhost:${port}/`);
    console.log(`   Contact API: http://localhost:${port}/api/contact`);
    console.log(`   Newsletter API: http://localhost:${port}/api/newsletter`);
});
//# sourceMappingURL=index.js.map