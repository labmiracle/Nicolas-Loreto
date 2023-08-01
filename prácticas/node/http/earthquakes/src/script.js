const request = async (magnitud) => {
  if (!magnitud || typeof magnitud != 'number') return;
  try {
    const response = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson');
    const data = await response.json();

    const arr = data.features;

    arr.map((m) => {
      const mag = m.properties.mag;
      if (mag >= magnitud) {
        const object = {
          title: data.metadata.title,
          total: data.metadata.count,
          status: data.metadata.status,
          title_earthquakes: m.properties.title,
          date: '',
          time: '',
          mag: mag,
          status_earthquakes: m.properties.status,
          type: m.properties.type,
          place_earthquakes: m.properties.place,
          coordinate: m.geometry.coordinates[0],
        };
        console.log(object);
      }
    });
  } catch (error) {
    throw console.error('error');
  }
};

request(0.5);
