import { PrismaClient } from "@prisma/client";
import authenticateToken from "../middleware/authMiddleWare"; // Ensure correct path

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await authenticateToken(req, res, async () => {
      console.log("Authenticated user:", req.user); // ✅ Debugging log

      if (!req.user || !req.user.id) {
        return res.status(401).json({ message: "Unauthorized - No user ID found" });
      }

      const user = await prisma.user.findUnique({ where: { id: req.user.id } });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json({ user });
    });
  } catch (error) {
    console.error("Error fetching user:", error); // ✅ Debugging log
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
}
