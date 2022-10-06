const request = require('supertest');
const app = require('../server');

describe('GET', () => {
    describe('For correct api call', () => {
        it('should return response with status 200', async () => {
            const res = await request(app)
                .get('/events/')
            expect(res.statusCode).toEqual(200);
        })
        it('should return events object', async () => {
            const res = await request(app)
                .get('/events/')
            expect(typeof res.body).toBe('object');
        })
    });
    describe('For incorrect api call', () => {
        it('should return 404 status code for wrong url', async () => {
            const res = await request(app)
                .get('/eventss/')
            expect(res.statusCode).toEqual(404);
        })
    });
    afterAll((done) => {
        done();
    });
})


describe('POST', () => {
    describe('For correct api call', () => {
        it('should return response with status 201', async () => {
            const res = await request(app)
                .post('/events/')
                .send({
                    "firstName": "Radek",
                    "lastName": "Łuckoś",
                    "email": "luckos.r@hotmail.com",
                    "eventDate": "2022-10-11T00:00:00.000+00:00",
                });
            expect(res.statusCode).toEqual(201);
            expect(typeof res.body).toBe('object');
        });
        it('should return created object in response', async () => {
            const objectToCreate = {
                "firstName": "Radek",
                "lastName": "Łuckoś",
                "email": "luckos.r@hotmail.com",
                "eventDate": "2022-10-11T00:00:00.000+00:00",
            };
            const res = await request(app)
                .post('/events/')
                .send(objectToCreate);
            expect(res.body).toHaveProperty('__v');
            expect(res.body).toHaveProperty('_id');
            expect(res.body).toHaveProperty('email');
            expect(res.body).toHaveProperty('eventDate');
            expect(res.body).toHaveProperty('lastName');
            expect(res.body).toHaveProperty('firstName');
        })
    });
    describe('For incorrect api call', () => {
        it('should return response message with status 400 when wrong data is send', async () => {
            const res = await request(app)
                .post('/events/')
                .send({
                    "firstName": "Radek",
                    "lastName": "Łuckoś",
                    "email": "luckos.r@hotmail.com",
                    "eventDate": "dsfds",
                })
            expect(res.statusCode).toEqual(400);
            expect(res.body).toHaveProperty('message');
        })
        it('should return response message with status 400 when empty fields are send', async () => {
            const res = await request(app)
                .post('/events/')
                .send({
                    "firstName": "",
                    "lastName": "Łuckoś",
                    "email": "luckos.r@hotmail.com",
                    "eventDate": "2022-10-11T00:00:00.000+00:00",
                })
            expect(res.statusCode).toEqual(400);
            expect(res.body).toHaveProperty('message');
        })
    });
    afterAll((done) => {
        done();
    });
})



