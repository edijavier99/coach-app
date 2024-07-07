import React, { useEffect, useState } from 'react';
import Plotly from 'plotly.js-dist';  
import createPlotlyComponent from 'react-plotly.js/factory';
const AddWeightRecord = React.lazy(() => import('./forms/addWeightRecord'));

const Plot = createPlotlyComponent(Plotly);

const Graphic = ({onBack, client}) => {
    const [data, setData] = useState([]);  

    useEffect(() => {
        const fetchRecords = () => {
            fetch(`${process.env.REACT_APP_BACKEND_URL}myapp/api/weight_graphic/${client}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);  
                })
                .catch(err => console.error('Error fetching data:', err));
        };

        fetchRecords();  // Llama a fetchRecords dentro del efecto
    }, [client]);  // Añade client al array de dependencias si es necesario

    const buildChartData = () => {
        if (data.length === 0) {
            return {
                xValues: [], 
                yValues: [],  
                textValues: [] 
            };
        }

        const xValues = data.map(item => item.id);  
        const yValues = data.map(item => item.value); 
        const textValues = data.map((item, index) => `Session ${index + 1}`); 

        return {
            xValues,
            yValues,
            textValues
        };
    };

    const { xValues, yValues, textValues } = buildChartData();

    // Configuración de la figura de Plotly
    const figure = {
        data: [{
            x: xValues,
            y: yValues,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { 
                color: 'blue',
                size: 12, 
                line: { width: 2 } 
            },
            text: textValues,  
            name: 'Weight Graphic'
        }],
        layout: {
            width: 800,
            height: 400,
            title: 'Weight Graphic',
            xaxis: {
                title: 'Sessions',
                range: [0, 12], 
                tickvals: xValues, 
                ticktext: xValues.map(val => `${val}`) 
            },
            yaxis: {
                title: 'Kgs',
                range: [40, 100],  
                tickvals: Array.from({length: 13}, (_, i) => 40 + i * 5),  // Valores de las marcas del eje y desde 40 a 100 con incremento de 5
            }
        }
    };

    return (
        <div>
            <h2>Line Chart</h2>
            <Plot
                data={figure.data}
                layout={figure.layout}
            />
            <AddWeightRecord client_id={client}/>
            <button className='btn btn-primary' onClick={onBack}>Back to clients</button>
        </div>
    );
};

export default Graphic;
