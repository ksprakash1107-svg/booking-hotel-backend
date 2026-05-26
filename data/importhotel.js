const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const dns = require("dns");

const Hotel = require("../model/hotelmodel");

// Fix DNS issue
dns.setServers(["8.8.8.8", "8.8.4.4"]);

// MongoDB connection
const connectionString =
  "mongodb+srv://prakash:prakash1234@cluster0.qgnaudj.mongodb.net/bookmyhotel?retryWrites=true&w=majority&appName=Cluster0";

// Read JSON file
const hotels = JSON.parse(
  fs.readFileSync(path.join(__dirname, "hotel.json"), "utf-8")
);

// Import data
const importDocuments = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("Database connected successfully");

    await Hotel.create(hotels);
    console.log("Data imported successfully");

    process.exit(0);
  } catch (error) {
    console.log("Import failed:", error.message);
    process.exit(1);
  }
};

// Delete data
const deleteDocuments = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("Database connected successfully");

    await Hotel.deleteMany();
    console.log("Collection data deleted successfully");

    process.exit(0);
  } catch (error) {
    console.log("Delete failed:", error.message);
    process.exit(1);
  }
};

// Command check
if (process.argv[2] === "--import") {
  importDocuments();
} else if (process.argv[2] === "--delete") {
  deleteDocuments();
} else {
  console.log("Please use --import or --delete");
  process.exit(1);
}