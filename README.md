# 📱 LocalFix Mobile 🚧

LocalFix is a civic issue reporting mobile application that helps citizens report local problems such as potholes, garbage, broken streetlights, and water leakage. 🏙️

Citizens can submit a complaint with a photo, location, category, and description. The system can detect nearby existing complaints to reduce duplicate reports and allow users to upvote existing issues. 👍

---

## 🚀 Features

- 🔐 User registration and login
- 📢 Report local civic issues
- 📸 Upload issue photos
- 📍 Capture GPS location
- 🏷️ Select complaint category
- 📋 View submitted complaints
- 🗺️ View complaints on a map
- 👍 Upvote existing nearby complaints
- 🔄 Track complaint status
- 🔔 Receive complaint status updates

---

## 🏗️ Project Architecture

```text
Mobile App
   ↓
FastAPI Backend
   ↓
PostgreSQL Database
```

The mobile application communicates with the backend through REST APIs. The mobile app never directly accesses the database. 🔒

---

## 🛠️ Tech Stack

- ⚛️ React Native
- 📦 Expo
- 🔷 TypeScript
- 🧭 Expo Router
- ⚡ FastAPI
- 🐘 PostgreSQL
- 🔑 JWT Authentication
- 🐙 Git & GitHub

---

## 📱 Mobile Application

The mobile application is responsible for:

- 🔐 Authentication
- 📝 Complaint creation
- 📸 Photo upload
- 📍 Location capture
- 📋 Complaint listing
- 🗺️ Map-based complaint viewing
- 🔄 Complaint status tracking

---

## 📂 Project Structure

```text
localfix-mobile/
├── src/
│   ├── app/
│   ├── components/
│   ├── constants/
│   ├── hooks/
│   └── ...
├── assets/
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🗺️ Development Roadmap

### 🥇 Phase 1 — Mobile MVP

- [x] 📦 Expo project setup
- [x] 🔷 TypeScript setup
- [x] 🧭 Expo Router setup
- [ ] 🔐 Login & Registration
- [ ] 🏠 Home screen
- [ ] 📢 Report complaint
- [ ] 📸 Photo upload
- [ ] 📍 GPS location
- [ ] 🔌 Backend integration
- [ ] 🗺️ Map
- [ ] 📄 Complaint details

### 🥈 Phase 2 — Duplicate Detection

- [ ] 📍 Nearby complaint detection
- [ ] 🏷️ Category-based matching
- [ ] 💡 Existing complaint suggestions
- [ ] 👍 Upvote functionality

### 🥉 Phase 3 — Complaint Tracking

- [ ] 📝 Reported
- [ ] 🔧 In Progress
- [ ] ✅ Resolved
- [ ] 🔔 Status notifications

### 🏛️ Phase 4 — Admin Dashboard

Municipal staff will be able to:

- [ ] 👀 View complaints
- [ ] 🔽 Filter complaints
- [ ] 🛠️ Start work on complaints
- [ ] 🔄 Update complaint status
- [ ] 📦 Manage resolved issues

---

## 💻 Run Locally

Install dependencies:

```bash
npm install
```

Start the Expo development server:

```bash
npx expo start
```

You can then run the application using:

- 📲 Expo Go
- 🤖 Android Emulator
- 🍎 iOS Simulator
- 🌐 Web Browser

---

## 🧑‍💻 Development Approach

LocalFix is being developed incrementally using a real-world engineering workflow:

```text
Requirement
    ↓
Architecture
    ↓
API & Database Design
    ↓
Implementation
    ↓
Testing
    ↓
Git Commit
    ↓
Next Feature
```

---

## 📌 Current Status

**Project Stage:** 🌱 Mobile foundation setup

The Expo React Native project has been created and the development environment is ready. ✅

More features will be implemented step-by-step. 🚀
