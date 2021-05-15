const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index.js");
var expect = chai.expect;

//Configure chai
chai.use(chaiHttp);
chai.should();

//Exit after running all tests
after(function () {
  process.exit(0);
});

describe("Tickets", () => {
  describe("GET", () => {
    var nextVal = "";
    var prevVal = "";

    //Test to get first 25 tickets list
    it("should get first 25 tickets from list", (done) => {
      chai
        .request(app)
        .get("/tickets")
        .end((_err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          expect(res.body.tickets).to.have.lengthOf(25);
          nextVal = res.body.meta.after_cursor;
          done();
        });
    });

    //Test to get next tickets list
    it("should get next 25 tickets from list", (done) => {
      chai
        .request(app)
        .get(`/tickets/next-page/${nextVal}`)
        .end((_err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          expect(res.body.tickets).to.have.lengthOf(25);
          prevVal = res.body.meta.before_cursor;
          done();
        });
    });

    //Test to get previous tickets list
    it("should get previous 25 tickets from list", (done) => {
      chai
        .request(app)
        .get(`/tickets/previous-page/${prevVal}`)
        .end((_err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          expect(res.body.tickets).to.have.lengthOf(25);
          done();
        });
    });

    //Test to get single ticket
    it("should get a single ticket", (done) => {
      const id = 1;
      chai
        .request(app)
        .get(`/ticket/${id}`)
        .end((_err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });

    //Test to get single ticket
    it("should get error 404 if ID is not available", (done) => {
      const id = 234;
      chai
        .request(app)
        .get(`/ticket/${id}`)
        .end((_err, res) => {
          const error = res.error;
          error.should.have.status(404);
          done();
        });
    });

    //Test to get single ticket
    it("should get error 400 if the the request is incorrect", (done) => {
      const id = -1;
      chai
        .request(app)
        .get(`/ticket/${id}`)
        .end((_err, res) => {
          const error = res.error;
          error.should.have.status(400);
          done();
        });
    });
  });
});
