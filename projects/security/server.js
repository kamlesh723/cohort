const express = require("express");
const cookieParser = require("cookie-parser");
const crypto = require("crypto");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cookieParser());

// allow frontend
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

const USERS = [
  { id: 1, email: "test@test.com", password: "1234" }
];

// sessionId -> { userId, csrf }
const sessions = new Map();

function auth(req, res, next) {
  const sid = req.cookies.session;
  const session = sessions.get(sid);

  if (!session) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  req.session = session;
  next();
}

function csrf(req, res, next) {
  const token = req.headers["x-csrf-token"];
  if (token !== req.session.csrf) {
    return res.status(403).json({ error: "CSRF detected" });
  }
  next();
}

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = USERS.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const sessionId = crypto.randomUUID();
  const csrfToken = crypto.randomBytes(32).toString("hex");

  sessions.set(sessionId, { userId: user.id, csrf: csrfToken });

  res.cookie("session", sessionId, {
    httpOnly: true,
    sameSite: "Strict"
  });

  res.json({ csrfToken });
});

app.get("/profile", auth, (req, res) => {
  res.json({ message: "Profile data", userId: req.session.userId });
});

app.post("/transfer", auth, csrf, (req, res) => {
  res.json({ message: "Transfer successful (fake)" });
});

app.listen(3000, () => console.log("Server on http://localhost:5000"));
