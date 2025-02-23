import { PrismaClient } from "@prisma/client";
import cookie from "cookie";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // Check if cookies exist before parsing
    if (!req.headers.cookie) {
      return res.status(401).json({ message: "Unauthorized - No cookies found" });
    }

    // Parse cookies safely
    const cookies = cookie.parse(req.headers.cookie || "");
    const token = cookies.refreshToken; // Ensure this matches the cookie name you set

    if (!token) {
      return res.status(401).json({ message: "Unauthorized - No token found" });
    }

    // Verify the token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(403).json({ message: "Forbidden - Invalid token" });
    }

    // Fetch the user
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });

  } catch (error) {
    console.error("Error in /api/auth/me:", error); 
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
}
