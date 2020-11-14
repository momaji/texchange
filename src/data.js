
var data = {
    "locations": [ "Toronto", "Brampton", "Hamilton"],
    "classes": [ "ENG 2MA3", "CHEM 4P03", "BIO 1B03" ],
    "textbooks": [  { "name": "Biology - Concepts and Connections", "author": "Campbell", "published": "1990-01-01", "price": 40, "course": "BIO 1A03", "src": "/image/bio_1.jpg", "rating": "☆☆☆☆" , "location": "Hamilton", "id": 0},
                    { "name": "Biology", "author": "Brooker", "published": "2002-03-21", "price": 60, "course": "BIO 1B03", "src": "/image/bio_2.jpg", "rating": "☆☆☆", "location": "Brampton", "id": 1 },
                    { "name": "Human Biology", "author": "Michael D. Johnson", "published": "2008-03-21", "price": 90, "course": "BIO 3HB3", "src": "/image/bio_3.jpg", "rating": "☆☆", "location": "Toronto", "id": 2 },
                    { "name": "Exploring Biology in the Labratory", "author": "John L. Crawley", "published": "2018-06-14", "price": 110, "course": "BIO 2LA3", "src": "/image/bio_4.jpg", "rating": "☆☆☆☆☆", "location": "Brampton", "id": 3 },
                    { "name": "Organic Chemistry", "author": "Michael B. Smith", "published": "2000-11-04", "price": 40, "course": "CHEM 2OC3", "src": "/image/chemistry_1.jpg", "rating": "☆", "location": "Hamilton", "id": 4 },
                    { "name": "Conceptual Chemistry", "author": "John Suchocki", "published": "2008-03-21", "price": 60, "course": "CHEM 3CC3", "src": "/image/chemistry_2.jpg", "rating": "☆☆☆", "location": "Hamilton", "id": 5 },
                    { "name": "Physical Chemistry of Polymers", "author": "Sebastian Seiffert", "published": "2013-02-19", "price": 95, "course": "CHEM 4P03", "src": "/image/chemistry_3.jpg", "rating": "☆☆☆☆", "location": "Brampton", "id": 6 },
                    { "name": "Organic Chemistry 2", "author": "Francis A. Carey", "published": "2017-08-20", "price": 115, "course": "CHEM 2CO3", "src": "/image/chemistry_4.jpg", "rating": "☆☆☆☆☆", "location": "Toronto", "id": 7 },
                    { "name": "Mathematics", "author": "Holt", "published": "2002-12-05", "price": 45, "course": "MATH 1XA3", "src": "/image/math_1.jpg", "rating": "☆☆☆", "location": "Hamilton", "id": 8 },
                    { "name": "Geometry", "author": "Holt", "published": "2005-09-26", "price": 70, "course": "MATH 1XB3", "src": "/image/math_2.jpg", "rating": "☆", "location": "Hamilton", "id": 9 },
                    { "name": "Elementary Calculus", "author": "H. Jerome Keisler", "published": "2015-04-30", "price": 85, "course": "MATH 2C03", "src": "/image/math_3.jpg", "rating": "☆☆☆☆", "location": "Hamilton", "id": 10 },
                    { "name": "Essential Mathematics for Engineers", "author": "W. J. R. H Pooler", "published": "2019-11-16", "price": 120, "course": "ENG 2MA3", "src": "/image/math_4.jpg", "rating": "☆☆", "location": "Toronto", "id": 11 }
                ],
    "firstNames": ["Janet", "King", "Ray-William", "Anthony", "Drew"],
    "lastNames": ["Kim", "Bach", "Johnson", "Fantano", "Gooden"],
    "emails": ["janetkim@gmail.com", "bachk.5p00n@hotmail.com", "yfm2011@yahoo.com", "anthonyf@gmail.com", "drewisgooden@outlook.com"],
    "numbers": ["647-123-4567", "416-821-5211", "905-800-5009", "647-929-3264", "416-666-4205"],
    "profileLocations": ["Toronto, ON", "Toronto, ON", "Hamilton, ON", "Hamilton, ON", "Brampton, ON"],
    "avatars": ["/image/janet.jpg", "/image/bach.jpg", "/image/ray.jpg", "/image/fantano.jpg", "/image/gooden.jpg"],
    //This is how the people should be structured
    "people":[
        {"id":0, "firstName": "Janet", "lastName": "Kim", "email": "janetkim@gmail.com", "phone":"647-123-4567", "location": "Toronto, ON", "avatar":"/image/janet.jpg"},
        {"id":1, "firstName": "King", "lastName": "Bach", "email": "bachk.5p00n@hotmail.com", "phone":"416-821-5211", "location": "Toronto, ON", "avatar":"/image/bach.jpg"},
        {"id":2, "firstName": "Ray-William", "lastName": "Johnson", "email": "yfm2011@yahoo.com", "phone":"905-800-5009", "location": "Hamilton, ON", "avatar":"/image/ray.jpg"},
        {"id":3, "firstName": "Anthony", "lastName": "Fantano", "email": "anthonyf@gmail.com", "phone":"647-929-3264", "location": "Hamilton, ON", "avatar":"/image/fantano.jpg"},
        {"id":4, "firstName": "Drew", "lastName": "Gooden", "email": "drewisgooden@outlook.com", "phone":"416-666-4205", "location": "Brampton, ON", "avatar":"/image/gooden.jpg"}
    ]
}

export default data;
