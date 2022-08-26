const tableConversor = (arr) => {
  arr.map((e) => {
    if (e.CountryId === 1) {
      e.CountryId = "Uruguay";
    }
    if (e.CountryId === 2) {
      e.CountryId = "Paraguay";
    }
    if (e.CountryId === 3) {
      e.CountryId = "Bolivia";
    }
    if (e.CountryId === 4) {
      e.CountryId = "Argentina";
    }
    if (e.CountryId === 5) {
      e.CountryId = "Chile";
    }

    if (e.StatusId === 1) {
      e.StatusId = "En proceso";
    }
    if (e.StatusId === 2) {
      e.StatusId = "No iniciada";
    }
    if (e.StatusId === 3) {
      e.StatusId = "Finalizada";
    }
    if (e.AreaId === 1) {
      e.AreaId = "Tecnologia";
    }

    if (e.AreaId === 2) {
      e.AreaId = "Gastronomía";
    }

    if (e.AreaId === 3) {
      e.AreaId = "Marketing";
    }

    if (e.AreaId === 4) {
      e.AreaId = "Administración";
    }

    if (e.AreaId === 5) {
      e.AreaId = "Comercial";
    }

    if (e.AreaId === 6) {
      e.AreaId = "Producción";
    }

    if (e.AreaId === 7) {
      e.AreaId = "Logística";
    }

    if (e.AreaId === 8) {
      e.AreaId = "Gastronomía";
    }

    if (e.AreaId === 9) {
      e.AreaId = "Recursos Humanos";
    }

    if (e.AreaId === 10) {
      e.AreaId = "Ingenierías";
    }

    if (e.AreaId === 11) {
      e.AreaId = "Comercial";
    }

    if (e.AreaId === 12) {
      e.AreaId = "Atención al Cliente";
    }
  });
  return arr;
};

export default tableConversor;
