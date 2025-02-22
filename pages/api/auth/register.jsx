import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const users = []; // Temporary in-memory array (Replace with a database in production)

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { fullName, email, password, phoneNumber } = req.body;

  // Validate input
  if (!fullName || !email || !password || !phoneNumber) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check if user exists
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { fullName, email, phoneNumber, password: hashedPassword };

  users.push(newUser); // Save user (In production, store in a database)

  // Generate JWT Token
  const token = jwt.sign({ email, fullName }, process.env.JWT_SECRET, { expiresIn: "1h" });

  res.status(201).json({ message: "User registered successfully", token });
}
