// insert

db.users.insertOne({ name: "sameer" });
db.books.insertOne({ price: "$50" });
db.data.insertMany([{ name: "" }, { age: "" }, { gender: "" }]);

// update

db.products.updateOne({ name: "tshirt" }, { $set: { price: 1000 } });
db.products.updateOne({ name: "tshirt" }, { $set: { price: 1000 } });

// query

db.products.find({ name: "tshirt" });
