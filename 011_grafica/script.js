function prepararImpresion() {
  // Mapea los IDs originales con sus equivalentes para impresión
  const campos = {
    nombre: "print_nombre",
    fecha: "print_fecha",
    campo1: "print_campo1",
    campo2: "print_campo2",
    // Agrega aquí todos los campos que quieras imprimir
  };

  for (const [idOriginal, idPrint] of Object.entries(campos)) {
    const original = document.getElementById(idOriginal);
    const printField = document.getElementById(idPrint);

    if (original && printField) {
      printField.value = original.value || original.textContent || "";
    }
  }
}

window.onbeforeprint = prepararImpresion;
