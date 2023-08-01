const request = async (magnitud) => {
  if (!magnitud || typeof magnitud != 'number') return;
  try {
    const response = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson');
    const data = await response.json();

    const object = {
      title: data.metadata.title,
      total: data.metadata.count,
      status: data.metadata.status,
    };
    console.log(object);
    const arr = data.features;

    arr.map((m) => {
      const mag = m.properties.mag;
      if (mag >= magnitud) {
      }
    });
  } catch (error) {
    throw console.error('error');
  }
};

request(0.5);
