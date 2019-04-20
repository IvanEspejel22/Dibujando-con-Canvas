

function dibujo(){
var d = document.getElementById('dibujito');
var lienzo = d.getContext("2d");
var  xf;
var  yi;
var  nxf;
var lineas = parseInt(document.getElementById('linea').value);
var colorcito = document.getElementById('color').value;
var l=0;
var separar = 500/lineas;


    for (l= 0; l <= lineas; l++)
    {
       xf = separar*l;
       nxf = 500-separar*l;
       yi = separar*(l+1);
       
       dibujarLinea(colorcito, 0, yi, xf,500);
       dibujarLinea(colorcito, 500, yi, xf,0);
       dibujarLinea(colorcito, nxf, 0, 0 , yi);
       dibujarLinea(colorcito, yi, 500, 500 , nxf);
       
      
    }
        dibujarLinea(colorcito, 500, 0, 0,0);
        dibujarLinea(colorcito, 499, 499, 499, 0);
        dibujarLinea(colorcito, 0, 0, 0, 499);
        dibujarLinea(colorcito, 0, 499, 499, 499);

    function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
    {
        lienzo.beginPath();
        lienzo.strokeStyle = color;
        lienzo.moveTo(xinicial,yinicial);
        lienzo.lineTo(xfinal,yfinal);
        lienzo.stroke();
        lienzo.closePath();
    }
}