const run = require('../Libs/run.js');
var config = require('../Config/Config.json');
var BVT_01_CreateNewWallet = require('../TestCase/version_2/BVT_01_CreateNewWallet.json');
var BVT_02_ImportWalletByPassphrase = require('../TestCase/version_2/BVT_02_ImportWalletByPassphrase.json');
var BVT_03_ImportWalletByPrivateKeys = require('../TestCase/version_2/BVT_03_ImportWalletByPrivateKeys.json');
var BVT_04_AddCoin = require('../TestCase/version_2/BVT_04_AddCoin.json');
var BVT_05_AddToken = require('../TestCase/version_2/BVT_05_AddToken.json');
var BVT_06_AddNewContact = require('../TestCase/version_2/BVT_06_AddNewContact.json');
var BVT_07_SendReceiveBTCcoin = require('../TestCase/version_2/BVT_07_SendReceiveBTCcoin.json');
var BVT_08_SendReceiveEOScoin = require('../TestCase/version_2/BVT_08_SendReceiveEOScoin.json');
var cleanUp = require('../Libs/cleanUp.js');
var testCaseTime = config.timeOut.testCaseTime;

describe('SmokeTest_2_21', function () {
    var testSuite = this.title;
    this.timeout(testCaseTime);
    beforeEach(function(done){
        done();     
    });

    it('BVT_01', async function(done) {
        try{
            await run.startWithFile(BVT_01_CreateNewWallet);
            done();
        }catch(err){
            done(new Error(err));
        }
    });

    // it('BVT_02', async function(done) {
    //     try{
    //         await run.startWithFile(BVT_02_ImportWalletByPassphrase);
    //         done();
    //     }catch(err){
    //         done(new Error(err));
    //     }
    // });

    // it('BVT_03', async function(done) {
    //     try{
    //         await run.startWithFile(BVT_03_ImportWalletByPrivateKeys);
    //         done();
    //     }catch(err){
    //         done(new Error(err));
    //     }
    // });

    // it('BVT_04', async function(done) {
    //     try{
    //         await run.startWithFile(BVT_04_AddCoin);
    //         done();
    //     }catch(err){
    //         done(new Error(err));
    //     }
    // });

    // it('BVT_05', async function(done) {
    //     try{
    //         await run.startWithFile(BVT_05_AddToken);
    //         done();
    //     }catch(err){
    //         done(new Error(err));
    //     }
    // });

    // it('BVT_06', async function(done) {
    //     try{
    //         await run.startWithFile(BVT_06_AddNewContact);
    //         done();
    //     }catch(err){
    //         done(new Error(err));
    //     }
    // });
    
    // it("BVT_07",async function(done){
    //     try{
    //         data = await testData.getTestData("bvt_07.xlsx", "data");
    //         data.forEach(async function(file) {
    //                 describe("BVT_07_dataSet",function() {
    //                     this.timeout(testCaseTime);
        
    //                     it("BVT_07",async function(done){
    //                         try{
    //                             await run.startWithFile(BVT_07_SendReceiveBTCcoin, file);
    //                             done();
    //                         }catch(err){
    //                             done(new Error(err));
    //                         }
    //                     })
        
    //                     afterEach(async function(done){
    //                         try{
    //                             await cleanUp.clearAllData(testSuite, this.currentTest.state, this.currentTest.title);
    //                             done();
    //                         }catch(err){
    //                             done(new Error(err));
    //                         }
    //                      });
    //                 })
    //             })
    //             done();
    //     }catch(err){
    //         done(new Error(err));
    //     }
    // })

    // it("BVT_08",async function(done){
    //     try{
    //         data = await testData.getTestData("bvt_08.xlsx", "data");
    //         data.forEach(async function(file) {
    //                 describe("BVT_08_dataSet",function() {
    //                     this.timeout(testCaseTime);
        
    //                     it("BVT_08",async function(done){
    //                         try{
    //                             await run.startWithFile(BVT_08_SendReceiveEOScoin, file);
    //                             done();
    //                         }catch(err){
    //                             done(new Error(err));
    //                         }
    //                     })
        
    //                     afterEach(async function(done){
    //                         try{
    //                             await cleanUp.clearAllData(testSuite, this.currentTest.state, this.currentTest.title);
    //                             done();
    //                         }catch(err){
    //                             done(new Error(err));
    //                         }
    //                      });
    //                 })
    //             })
    //             done();
    //     }catch(err){
    //         done(new Error(err));
    //     }
    // })

    //final close app
    afterEach(async function(done){
        try{
            await cleanUp.clearAllData(testSuite, this.currentTest.state, this.currentTest.title);
            done();
        }catch(err){
            done(new Error(err));
        }
    });
});