db.restaurants.find();
db.restaurants.find({},{"restaurant_id":1, "name":1, "borough":1, "cuisine":1});
db.restaurants.find({},{restaurant_id:1, name:1, borough:1, cuisine:1, _id:0});
db.restaurants.find({},{restaurant_id:1, name:1, borough:1, cuisine:1, "address.zipcode" :1, _id:0});
db.restaurants.find({borough: /Bronx/});
db.restaurants.find({borough: /Bronx/}).limit(5);
db.restaurants.find({borough: /Bronx/}).limit(5).skip(5);
db.restaurants.find({"grades.score":{$gt: 90}});
db.restaurants.find({"grades.score" : {$gt:80, $lt:100}});
db.restaurants.find({'address.coord': {$lt:-95.754168}});
db.restaurants.find({cuisine: {$ne:"American "}});
db.restaurants.find({cuisine: {$ne:"American "}, "grades.score":{$gt: 70}, 'address.coord': {$lt:-65.754168}});
db.restaurants.find({$and: [{cuisine: {$ne:"American "}}, {"grades.grade": "A"}, {borough: {$ne: "Brooklyn"}}]}).sort({cuisine: 1});
db.restaurants.find({name: /^Wil/ }, {restaurant_id : 1, name : 1, borough: 1, cuisine: 1});
db.restaurants.find({name: /ces$/ }, {restaurant_id : 1, name : 1, borough: 1, cuisine: 1});
db.restaurants.find({name: /Reg/ }, {restaurant_id : 1, name : 1, borough: 1, cuisine: 1});
db.restaurants.find({borough: "Bronx", $or : [{cuisine: "American"},{cuisine : "Chinese"} ]});
db.restaurants.find({borough: {$in : ["Staten Island", "Queens", " Bronx", "Brooklyn"]}}, {restaurant_id : 1, name : 1, borough: 1, cuisine: 1});
db.restaurants.find({borough: {$nin : ["Staten Island", "Queens", "Bronx", "Brooklyn"]}}, {restaurant_id : 1, name : 1, borough: 1, cuisine: 1});
db.restaurants.find({"grades.score" :{$lt: 10} }, {restaurant_id : 1, name : 1, borough: 1, cuisine: 1});