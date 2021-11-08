JS:
//Funcion para calcular la propina
    function calularPropina()
     {
//obtener datos
    var totalCompra = document.getElementById('box').value;
    var porcentajePropina = document.getElementById('box2').value;
    var totalPersonas = document.getElementById('box3').value;
//formulas
    var porcentaje= porcentajePropina/100;
    var resultado1 = totalCompra*porcentaje;
    var resultado2 = resultado1/totalPersonas;

    if (totalCompra == "")
    {
        document.getElementById('r3').innerHTML = "INTRODUZCA TODOS LOS DATOS";
        document.getElementById('r1').innerHTML = ":(";
        document.getElementById('r2').innerHTML = ":(";
    }

    else
    {

        //respuestas

        document.getElementById('r1').innerHTML =  resultado1.toFixed(2);
        document.getElementById('r2').innerHTML = resultado2.toFixed(2);

}
}

