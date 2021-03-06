import axios from 'axios';
import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { SaleSucess } from 'types/Sale';
import { round } from 'Utils/format';
import { BASE_URL } from 'Utils/requests';


type SeriesData = {
    name: string;
    data: number[];
}

type ChartData = {
    labels: {
        categories: string[];
    },
    series: SeriesData[];
}

const options = {
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
};

export default function BarChart() {

    const [chartData, setChartData] = useState<ChartData>({
        labels:{
            categories:[]
        },
        series:[
            {
                name:"",
                data:[]
            }
        ]
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/sucess-by-seller`)
            .then(response => {
                const data = response.data as SaleSucess[];
                const myLabels = data.map(x => x.sellerName);
                const mySeries = data.map(x => round(100.0 * x.deals / x.visited, 1))

                setChartData({
                    labels:{
                        categories: myLabels
                    },
                    series:[
                        {
                            name:"% Sucess",
                            data:mySeries
                        }
                    ]
                });
            });
    }, [])

    return (
        <Chart
            options={{...options, xaxis: chartData.labels}}
            series={chartData.series}
            type="bar"
            height="240"
        />
    )
}
