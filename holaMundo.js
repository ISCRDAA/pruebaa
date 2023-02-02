function printhello() {
    this.loop = function () {
        var times = 6;
        for (var i = 0; i <= times; i++)
        
        
 
            console.log("el resultado es " + i);
  }
}
var hello = new printhello();
hello.loop();
