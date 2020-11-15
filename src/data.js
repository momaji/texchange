
var data = {
    "locations": [ "Toronto", "Brampton", "Hamilton"],
    "classes": [ "ENG 2MA3", "CHEM 4P03", "BIO 1B03" ],
    "textbooks": [  { "name": "Biology - Concepts and Connections", "author": "Campbell", "published": "1990-01-01", "price": 40, "course": "BIO 1A03", "src": "/image/bio_1.jpg", "rating": "☆☆☆☆☆" , "location": "Hamilton", "id": 0, "personId": 0},
                    { "name": "Biology", "author": "Brooker", "published": "2002-03-21", "price": 60, "course": "BIO 1B03", "src": "/image/bio_2.jpg", "rating": "☆☆☆☆", "location": "Brampton", "id": 1, "personId": 1 },
                    { "name": "Human Biology", "author": "Michael D. Johnson", "published": "2008-03-21", "price": 90, "course": "BIO 3HB3", "src": "/image/bio_3.jpg", "rating": "☆☆☆", "location": "Toronto", "id": 2, "personId": 2 },
                    { "name": "Exploring Biology in the Labratory", "author": "John L. Crawley", "published": "2018-06-14", "price": 110, "course": "BIO 2LA3", "src": "/image/bio_4.jpg", "rating": "☆☆", "location": "Brampton", "id": 3, "personId": 3 },
                    { "name": "Organic Chemistry", "author": "Michael B. Smith", "published": "2000-11-04", "price": 40, "course": "CHEM 2OC3", "src": "/image/chemistry_1.jpg", "rating": "☆", "location": "Hamilton", "id": 4, "personId": 4 },
                    { "name": "Conceptual Chemistry", "author": "John Suchocki", "published": "2008-03-21", "price": 60, "course": "CHEM 3CC3", "src": "/image/chemistry_2.jpg", "rating": "☆☆☆☆☆", "location": "Hamilton", "id": 5, "personId": 0 },
                    { "name": "Physical Chemistry of Polymers", "author": "Sebastian Seiffert", "published": "2013-02-19", "price": 95, "course": "CHEM 4P03", "src": "/image/chemistry_3.jpg", "rating": "☆☆☆☆", "location": "Brampton", "id": 6, "personId": 1 },
                    { "name": "Organic Chemistry 2", "author": "Francis A. Carey", "published": "2017-08-20", "price": 115, "course": "CHEM 2CO3", "src": "/image/chemistry_4.jpg", "rating": "☆☆☆", "location": "Toronto", "id": 7, "personId": 2 },
                    { "name": "Mathematics", "author": "Holt", "published": "2002-12-05", "price": 45, "course": "MATH 1XA3", "src": "/image/math_1.jpg", "rating": "☆☆", "location": "Hamilton", "id": 8, "personId": 3 },
                    { "name": "Geometry", "author": "Holt", "published": "2005-09-26", "price": 70, "course": "MATH 1XB3", "src": "/image/math_2.jpg", "rating": "☆", "location": "Hamilton", "id": 9, "personId": 4 },
                    { "name": "Elementary Calculus", "author": "H. Jerome Keisler", "published": "2015-04-30", "price": 85, "course": "MATH 2C03", "src": "/image/math_3.jpg", "rating": "☆☆☆☆☆", "location": "Hamilton", "id": 10, "personId": 0 },
                    { "name": "Essential Mathematics for Engineers", "author": "W. J. R. H Pooler", "published": "2019-11-16", "price": 120, "course": "ENG 2MA3", "src": "/image/math_4.jpg", "rating": "☆☆☆☆", "location": "Toronto", "id": 11, "personId": 1 },
                    { "name": "Essential Mathematics for Engineers", "author": "W. J. R. H Pooler", "published": "2019-11-16", "price": 100, "course": "ENG 2MA3", "src": "/image/math_4.jpg", "rating": "☆☆☆", "location": "Hamilton", "id": 12, "personId": 2 }
                ],
    "people": [
        {"id": 0, "firstName": "Janet", "lastName": "Kim", "email": "janetkim@gmail.com", "phone":"647-123-4567", "location": "Toronto, ON", "avatar":"/image/janet.jpg", "books": [0, 5, 10], "favourited": [3, 8], "rating": "☆☆☆☆☆"},
        {"id": 1, "firstName": "Anthony", "lastName": "Fantano", "email": "anthonyf@gmail.com", "phone":"647-929-3264", "location": "Hamilton, ON", "avatar":"/image/fantano.jpg", "books": [1, 6, 11], "favourited": [2, 8, 7], "rating": "☆☆☆☆"},
        {"id": 2, "firstName": "Ray-William", "lastName": "Johnson", "email": "yfm2011@yahoo.com", "phone":"905-800-5009", "location": "Hamilton, ON", "avatar":"/image/ray.jpg", "books": [2, 7, 12], "favourited": [0, 1, 11, 12], "rating": "☆☆☆"},
        {"id": 3, "firstName": "King", "lastName": "Bach", "email": "bachk.5p00n@hotmail.com", "phone":"416-821-5211", "location": "Toronto, ON", "avatar":"/image/bach.jpg","books": [3, 8], "favourited": [4, 6, 7, 9, 10], "rating": "☆☆"},
        {"id": 4, "firstName": "Drew", "lastName": "Gooden", "email": "drewisgooden@outlook.com", "phone":"416-666-4205", "location": "Brampton, ON", "avatar":"/image/gooden.jpg", "books": [4, 9], "favourited": [0, 1, 2, 3, 5, 6, 8, 9, 10], "rating": "☆"}
    ]
}

export default data;
