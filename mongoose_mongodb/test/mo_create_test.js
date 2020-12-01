const Student = require("../app/student");
const assert = require("assert"); // provided by the mocha

// // we need to pass the title of describe and the call back function
// describe('Create records',()=>{

//     // a describe block can have multiple it blocks
//     it('Create an entry in the DB',()=>{

//         assert(true);    // assert always excepts true.
//     });

// });

// actual test case for creating an entry in the db.

describe("Create records", () => {
  it("Create a student in the db", () => {
    // create a user.
    const raghav = new Student({
      name: "Raghav",
    });

    // save to the db
    // save returns a promise if done then assert it and isNew will be turned to false.
    // if not created handled by the catch
    raghav.save()
          .then(() => {
                assert(!raghav.isNew);
            })
          .catch(()=>{
              "Error creating user"
          });
  });
});
