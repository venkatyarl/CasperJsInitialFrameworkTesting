var casper = require('casper').create();

casper.start('http://casperjs.org/', function() {
    this.echo(this.getTitle());
})

casper.thenOpen('http://phantonjs.org', function() {
    this.echo(this.getTitle());
})

casper.run();