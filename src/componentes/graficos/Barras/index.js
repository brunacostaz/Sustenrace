import React from 'react'
import { Chart as Chartjs } from 'chart.js/auto'
import { Bar, Doughtnut, Line} from 'react-chartjs-2'

import mediaBPM from '../../../data/mediaBPM.json'

import '../../../variaveis.css'
import './Barras.css'

const Barras = () => {

    const obterDetalhesCorrida = (label) => {
        const partes = label.split('/')
        console.log(label)
        return {
            pais: partes[0],
            data: partes.slice(1).join('/')
        } 
    }

    const labels = mediaBPM.map(dados => obterDetalhesCorrida(dados.label).data)

    return (
        <section className='graficoBarras'>
            <Bar 
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: "Batimentos Cardíacos",
                            data: mediaBPM.map((dados) => dados.value),
                            backgroundColor: 'rgba(178, 4, 17, 0.2)',
                            borderColor: 'rgb(178, 4, 17)',
                            borderWidth: 1
                        }
                    ]
                }}
                options={{
                    plugins: {
                        tooltip: {
                            callbacks: {
                                title: (tooltipItems) => {
                                    const index = tooltipItems[0].dataIndex
                                    const corridaDetalhes = obterDetalhesCorrida(mediaBPM[index].label)
                                    return `${corridaDetalhes.pais}\n${corridaDetalhes.data}`
                                }
                            }
                        }
                    }
                }}
            />
        </section>
    )
}

export default Barras