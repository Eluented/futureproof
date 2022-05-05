const request = require('supertest') // http assertion library - standardised protocol that connects al machines - http - supertest test the actual transfer of data http asertion - testing api 
const app = require('../app');


describe('API server', ()=>{
    let api;

    beforeAll(()=>{
        api = app.listen(5001, () =>{
            console.log(`Test server runing at port 5001`);
        });
    })               // before anythingmake sure test server is running

    afterAll((done) =>{
        api.close(done);
        console.log(`Gracefully stopping test serer`); // gracefully stop - no artifacts running or something programming term - server crashes ports might be still used and things might be running in the background - artifacts that are jangling not stopped fully - good way to stop is when everything runs down and gracefully stopping
    });

    it('responds to get / with a status 200', (done) =>{
        request(api).get('/').expect(200, done);
    });

    it('responds to get /cats with a status of 200', (done) =>{
        request(api).get('/cats').expect(200, done)
    });

    it('retrieves a cat by id', (done) => {
        request(api)
            .get('/cats')
            .expect(200)
            .expect([{id:3, name:'Rumble', age:12}, done]) // testing if the route works not the actual data - both requests match this route 
    })
});