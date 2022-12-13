//Open terminal. Make sure that it's pointing to `jest-testing` directory.  
//Install the jest npm package using the npm install command and the --save-dev flag.  
//Verify that the installation was completed successfully by opening the package.json file and confirming that the "devDependencies" entry lists jest similar to the following:

//"                                                                                                              devDependencies": {
//                                                                                                              "jest": "^28.0.0"
//                                                                                                               }

//In the package.json file, locate the "scripts" entry, and inside of it, update the test entry to `jest`.

// Task 1: Code the timesTwo function declaration
// Within timesTwo.js file
//                                                                                                           function timesTwo(val) {
   //                                                                                                               return (val * 2);
//                                                                                                            }

// Task 2: Export the timesTwo function as a module within same file
//                                                                                                           module.exports = timesTwo;
//    Task 3: Import into testing file timesTwo.test.js
//                                                                                                           const timesTwo = require('./timesTwo');

// // Write the first test
//                                                                                                           test('returns the number times 2', () => {
//                                                                                                           expect(timesTwo(10)).toBe(20)
//                                                                                                           });
//With the terminal pointed at the `jest-testing` directory, run the test script using npm.
