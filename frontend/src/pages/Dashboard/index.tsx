import BarChart from 'components/BarChart'
import DataTable from 'components/DataTable'
import DonutChart from 'components/DonutChart'
import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import React from 'react'

export default function Dashboard() {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">DashBoard de Vendas</h1>
                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de sucesso</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Vendas</h5>
                        <DonutChart />
                    </div>
                </div>
                <div className="py-3">
                    <h2 className="text-primary">Tabela de Vendas</h2>
                    <DataTable />
                </div>
            </div>
            <Footer />
        </>
    )
}
