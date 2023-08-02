const request = async (magnitud) => {
  if (!magnitud || typeof magnitud != 'number') {
    process.exit(); // finish execution
  }
  try {
    const response = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson');
    const data = await response.json();

    const arr = data.features; // save array to variable

    const date = data.metadata.generated; // save date generated

    arr.map((m) => {
      const mag = m.properties.mag; // save magnitude
      if (mag === magnitud) {
        const dateEarthquakes = m.properties.time; //save the date of each earthquake
        const object = {
          title: data.metadata.title,
          count: data.metadata.count,
          status: data.metadata.status,
          title_earthquakes: m.properties.title,
          date: new Date(date),
          date_earthquakes: new Date(dateEarthquakes),
          mag: mag,
          status_earthquakes: m.properties.status,
          type: m.properties.type,
          place_earthquakes: m.properties.place,
          coordinate: m.geometry.coordinates,
          info: m.properties.url,
          detail: m.properties.detail,
        };
        const show = `
      *****************************
      ${object.title}        
        ---------------------
      total : ${object.count}
      status: ${object.status}
        ---------------------
      ${object.date}
      ==============================
      ${object.title_earthquakes} 
      ${object.date_earthquakes}
      Magnitud: ${object.mag}
      Estatus:  ${object.status_earthquakes}
      Tipo:  ${object.type}
      Lugar:  ${object.place_earthquakes}
      Coordenadas:  ${object.coordinate}
      Info:  ${object.info}
      Detalles:  ${object.detail}
      ==============================
      `;
        console.log(show);
      }
    });
  } catch (error) {
    throw console.error('error');
  }
};

request(1.1);
request(1.2);
request(1.3);
request(1.4);
request(1.5);
request(1.6);
