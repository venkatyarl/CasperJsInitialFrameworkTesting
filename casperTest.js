var casper = require('casper').create()
var x = require('casper').selectXPath;
casper.userAgent("Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36")

//open webpage
var website = 'https://www.bankofamerica.com/'
var username = 'userName'
var password = 'password'

casper.start(website, function() {
    
})

casper.then(function() {
    console.log('Opening ' + website)
    casper.capture('bao.png');
})

casper.then(function(){
    this.sendKeys("#onlineId1", username);
    this.sendKeys("#passcode1", password);
    console.log('Entering the details');
    casper.capture('enteredDetails.png');
})

casper.thenClick(x('//*[@id="hp-sign-in-btn"]'), function(){
    console.log('Clicked the Sign in button');
    
})
    
casper.wait(5000, function(){
    casper.capture('page loaded.png')
    
    var checkingAccount = casper.fetchText(x('//*[@id="Traditional"]/li[1]/div[1]/div[1]/span'));
    var boaCreditCard = casper.fetchText(x('//*[@id="Traditional"]/li[2]/div[1]/div/span'));
    console.log('Bank of America Core Checking' + boaCoreChecking);
    console.log('Bank of America Credit Card' + boaCreditCard);
})


casper.run()