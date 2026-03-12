# ConvoSphere

ConvoSphere is a production-grade real-time messaging platform inspired by modern communication applications like WhatsApp and Discord.  
The project demonstrates scalable frontend architecture, real-time communication, and WebRTC-based audio/video calling using modern web technologies.

This project is being developed as a portfolio-level engineering project to showcase full-stack development skills, real-time systems, and AI integration.

---

## Features

### Authentication
- Secure user registration and login
- JWT-based authentication
- Protected routes

### Real-time Messaging
- Instant messaging using WebSockets
- Typing indicators
- Online/offline presence
- Message delivery and read receipts

### Chat Features
- Message reactions
- File and image sharing
- Message search
- Group conversations

### Audio & Video Calls
- Peer-to-peer audio calls using WebRTC
- Video calls using WebRTC
- Real-time call signalling

### AI Integration
- AI-powered conversation summaries
- Smart insights from conversations

### Performance Optimization
- Virtualized message rendering
- Lazy loading components
- Efficient media handling

### Notifications
- Push notifications for new messages

---

## Tech Stack

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Zustand (state management)
- TanStack Query
- Framer Motion

### Backend
- Node.js
- Express.js

### Real-time Communication
- Socket.io
- WebSockets

### Database
- PostgreSQL / MongoDB

### Media Storage
- Cloudinary / AWS S3

### Audio & Video Calls
- WebRTC

### AI Integration
- OpenAI API

---

## System Architecture
Frontend (Next.js)
|
REST API (Node.js / Express)
|
WebSocket Server (Socket.io)
|
Database (PostgreSQL)
|
Cloud Storage (Cloudinary)

For calls:
User A -------- WebRTC -------- User B
\ |
\ |
Signalling Server (Socket.io)

---

## Project Structure
src
│
├── app
│ ├── (auth)
│ │ ├── login
│ │ └── register
│ │
│ ├── chat
│ │ ├── page.tsx
│ │ └── [conversationId]
│
├── components
│ ├── chat
│ ├── message
│ ├── call
│ └── ui
│
├── hooks
├── services
├── store
├── types
├── utils
└── lib

---

## Development Roadmap

Phase 1
- Project setup
- Authentication system
- Database schema

Phase 2
- Chat UI
- Send and receive messages

Phase 3
- Real-time messaging
- Typing indicators
- Presence tracking

Phase 4
- File sharing
- Message reactions
- Message search

Phase 5
- Audio calls
- Video calls

Phase 6
- AI chat summaries
- Push notifications
- Performance optimization

---

## Installation

Clone the repository
git clone https://github.com/h-samara-mohsin/convosphere.git

Navigate to the project folder
cd convosphere

Install dependencies
npm install

Run the development server
npm run dev

---

## Future Improvements

- End-to-end encryption
- Group video calls
- Voice messages
- Screen sharing
- Mobile app version

---

## Purpose of the Project

This project is built to demonstrate:

- Real-time system architecture
- WebSocket communication
- WebRTC audio/video streaming
- AI integration
- Modern frontend engineering practices

---

## License

MIT License
