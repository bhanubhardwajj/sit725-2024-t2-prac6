import chai from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../app.js';

const { expect } = chai;
chai.use(chaiHttp);

describe('Student Portal', () => {
    it('should add a new query with email', (done) => {
        chai.request(app)
            .post('/add-query')
            .send({
                studentName: 'Test Student',
                queryText: 'Test Query',
                email: 'test@example.com'
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });
});