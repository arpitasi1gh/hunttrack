const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Get the first user or create one if none exists
  let user = await prisma.user.findFirst();
  if (!user) {
    user = await prisma.user.create({
      data: {
        email: "demo@example.com",
        passwordHash: "$2a$10$qwertyuiopasdfghjklzxcvbnm123456", // Dummy hash (password: "password123")
      },
    });
    console.log("Created test user:", user.email);
  }

  // Create some sample test applications for the user
  const sampleApplications = [
    {
      companyName: "Google",
      position: "Frontend Developer",
      status: "APPLIED",
      salary: "€120,000",
      website: "google.com",
      contactName: "Sundar Pichai",
      notes: "Applied via referral",
      userId: user.id,
    },
    {
      companyName: "Spotify",
      position: "Backend Engineer",
      status: "INTERVIEWING",
      salary: "€130,000",
      website: "spotify.com",
      contactName: "Daniel Ek",
      notes: "Technical interview scheduled for next week",
      userId: user.id,
    },
    {
      companyName: "Tesla",
      position: "Embedded Systems Engineer",
      status: "OFFER",
      salary: "€110,000",
      website: "tesla.com",
      contactName: "Elon Musk",
      notes: "Got the offer! Need to decide by end of month",
      userId: user.id,
    },
    {
      companyName: "Meta",
      position: "UX Designer",
      status: "REJECTED",
      salary: "€88,000",
      website: "meta.com",
      contactName: "Mark Zuckerberg",
      notes: "Rejected after final round",
      userId: user.id,
    },
  ];

  console.log(
    `✅ Added ${sampleApplications.length} sample applications for user: ${user.email}`,
  );
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });