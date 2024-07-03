import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const Graphic = () => {
  const [plotData, setPlotData] = useState(null);

  useEffect(() => {
    fetchPlotData();
  }, []);

  const fetchPlotData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}api/plot-data/`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPlotData(data);
    } catch (error) {
      console.error('Error fetching plot data:', error);
    }
  };

  if (!plotData) {
    return <div>Loading...</div>;
  }

  const data = [
    {
      x: plotData.sepal_width,
      y: plotData.sepal_length,
      mode: 'markers',
      type: 'scatter',
      marker: { color: 'blue' },
      text: plotData.species,
    },
  ];

  return (
    <div>
      <h1>Plotly Chart</h1>
      <Plot
        data={data}
        layout={{ title: 'Sepal Width vs. Sepal Length' }}
      />
    </div>
  );
};

export default Graphic;
