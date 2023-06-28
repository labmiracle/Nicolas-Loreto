function calcularDiasCrecimiento(
  velocidadCrecimiento,
  velocidadDecrecimiento,
  alturaDeseada
) {
  let crecimiento = velocidadCrecimiento - velocidadDecrecimiento;
  let alturaActual = 0;
  let dias = 0;

  if (velocidadCrecimiento <= 0 || velocidadDecrecimiento <= 0) {
    return "Los valores de crecimiento y decrecimiento no pueden ser negativos o iguales a 0";
  } else if (velocidadCrecimiento === velocidadDecrecimiento) {
    return "Así la planta nunca crecerá!";
  } else if (velocidadCrecimiento < velocidadDecrecimiento) {
    return "La planta no puede decrecer más de lo que crecerá";
  } else {
    const calcularCrecimiento = () => {
      return alturaDeseada / crecimiento;
    };

    return "La planta tardará en crecer " + calcularCrecimiento() + " días";
  }
}

console.log(calcularDiasCrecimiento(50, 45, 10));
