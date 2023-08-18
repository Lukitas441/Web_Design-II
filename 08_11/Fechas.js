const newYear = () => {
  const date = new Date("2023/11/31");
  const [day, month, year] = [
    date.getDate(),
    date.getMonth() + 1,
    date.getFullYear(),
  ];
  console.log(`Año nuevo sera el ${day} del mes ${month} del año ${year}`);
};
newYear();

const daysTillNewYear = () => {
  const date = new Date();
  let arrDate = `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}`.split("/");
  const newYear = new Date(date.getFullYear(), "11", "31");
  let arrNewYear = `${newYear.getFullYear()}/${
    newYear.getMonth() + 1
  }/${newYear.getDate()}`.split("/");

  if (arrDate === arrNewYear) {
    console.log("Hoy es año nuevo");
  } else {
    const remaingDays = {
      months: arrNewYear[1] - arrDate[1],
      days: arrNewYear[2] - arrDate[2],
    };
    console.log(
      `Quedan ${remaingDays.months} meses y ${remaingDays.days} dias para año nuevo`
    );
  }
};
daysTillNewYear();

const diferenciaEnDias = (fecha1, fecha2) => {
  const [dateStart, dateEnd] = [new Date(fecha1), new Date(fecha2)];
  const day = 1000 * 60 * 60 * 24; // Milisegundos en un día
  const diff = Math.abs(dateEnd.getTime() - dateStart.getTime());
  const daysdiff = Math.ceil(diff / day);
  console.log(
    `La diferencia en días entre ${fecha1} y ${fecha2} es de ${daysdiff} días.`
  );
};
diferenciaEnDias("2023/06/01", "2023/06/10");

function getDays(date) {
  const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const fechaIngresada = new Date(date);
  const diaSemana = diasSemana[fechaIngresada.getDay()];
  console.log(`El día de la semana para ${fechaIngresada} es ${diaSemana}.`);
}
getDays("2050/09/15");

function calcularEdad(fechaNac) {
  const fechaNacSave = new Date(fechaNac);
  const fechaActual = new Date();
  const edad = fechaActual.getFullYear() - fechaNacSave.getFullYear();
  if (
    fechaActual.getMonth() < fechaNacSave.getMonth() ||
    (fechaActual.getMonth() === fechaNacSave.getMonth() &&
      fechaActual.getDate() < fechaNacSave.getDate())
  ) {
    return edad - 1;
  }
  console.log(`Tienes ${edad} años.`);
}
calcularEdad("2004/06/05");

