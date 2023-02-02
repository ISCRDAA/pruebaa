function Matriz (){
    this.loop = function() {
        const x = (n) => {
            resultado=""
            for (i=0; i<n; i++) {
                for ( j=0; j<n; j++) {
                    resultado += (j==i || j==n-i-1) ? "X" : "_";
        }
        resultado+="\n";
    }
    return resultado;
};
console.log(x(6));
}}
var hello = new Matriz();
hello.loop();