class poliza {
  constructor(id, mA, p) {
    this.identificacion = id;
    this.montoAsegurado = mA;
    this.porcentaje = p;
  }
}
class vida extends poliza {
  constructor(id, mA, p, e) {
    super(id, mA, p);
    this.edad = e;
  }
  cobertura() {
    return this.montoAsegurado * this.porcentaje;
  }
  montoPagar() {
    if (this.edad <= 18) return this.cobertura() * 0.05;
    else return this.cobertura();
  }
}
class vehiculo extends poliza {
  constructor(id, mA, p, a) {
    super(id, mA, p);
    this.anno = a;
  }
  cobertura() {
    return this.montoAsegurado * this.porcentaje;
  }

  montoPagar() {
    if (this.anno <= 2000) return this.cobertura() * 0.07;
    else return this.cobertura() * 0.12;
  }
}
class Aseguradora {
  constructor(cP, aM) {
    this.contPoliza = cP;
    this.acumMonto = aM;
  }
  Procesar(p) {
    this.acumMonto += P.montoPagar();
    this.contPoliza++;
  }

  Promedio() {
    return this.acumMonto / this.contPoliza;
  }
}
function main() {
  let salida = document.getElementById("salida");
  let poliza1 = new vida(22, 1000, 80, 15);
  let poliza2 = new vida(11, 500, 90, 22);
  let poliza3 = new vida(55, 2000, 70, 18);
  let poliza4 = new vida(88, 1500, 90, 30);

  let poliza5 = new vehiculo(33, 2000, 80, 2000);
  let poliza6 = new vehiculo(90, 1500, 90, 2005);
  let poliza7 = new vehiculo(77, 1000, 90, 1995);
  let poliza8 = new vehiculo(44, 2500, 85, 2010);
  salida.innerHTML = "Poliza<br>";

  Aseguradora.Procesar(poliza1);
  Aseguradora.Procesar(poliza2);
  Aseguradora.Procesar(poliza3);
  Aseguradora.Procesar(poliza4);
  Aseguradora.Procesar(poliza5);
  Aseguradora.Procesar(poliza6);
  Aseguradora.Procesar(poliza7);
  Aseguradora.Procesar(poliza8);
  
  salida.innerHTML = "Poliza<br>"
  salida.innerHTML+= `${poliza1.identificacion} <br> monto Asegurado: ${poliza1.montoAsegurado} <br> porcentaje: ${poliza1.porcentaje} <br> edad:${poliza1.edad} ${poliza1.Cobertura()} ${poliza1.montoPagar()} <br>´
  salida.innerHTML+= `${poliza2.identificacion} <br> monto Asegurado: ${poliza2.montoAsegurado} <br> porcentaje: ${poliza2.porcentaje} <br> edad: ${poliza2.edad} ${poliza2.Cobertura()} ${poliza2.montoPagar()} <br>´
  salida.innerHTML+= `${poliza3.identificacion} <br> monto Asegurado: ${poliza3.montoAsegurado} <br> porcentaje: ${poliza3.porcentaje} <br> edad: ${poliza3.edad} ${poliza3.Cobertura()} ${poliza3.montoPagar()} <br>´
  salida.innerHTML+= `${poliza4.identificacion} <br> monto Asegurado: ${poliza4.montoAsegurado} <br> porcentaje: ${poliza4.porcentaje} <br> edad: ${poliza4.edad} ${poliza4.Cobertura()} ${poliza4.montoPagar()} <br>´

}