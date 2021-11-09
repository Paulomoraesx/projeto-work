import axios from 'axios';
import Pagination from 'components/Pagination';
import React, { useEffect, useState } from 'react'
import { SalePage } from 'types/Sale'
import { formatLocalDate } from 'Utils/format';
import { BASE_URL } from 'Utils/requests';

export default function DataTable() {

    const [page, setPage] = useState<SalePage>({
        first: true,
        number: 0,
        totalElements: 0,
        totalPages: 0,
        last: true,
    });
    
    const [activePage, setactivePage] = useState(0)

    const changePage = (index: number) => {
        setactivePage(index);
    }

    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=${activePage}`)
            .then(response => {
                setPage(response.data);
            });
    }, [activePage]);


    return (
        <>
            <Pagination page={page} onPageChange={changePage} />
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Vendedor</th>
                            <th>Clientes visitados</th>
                            <th>Negócios fechados</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {page.content?.map(item => (
                            <tr key={item.id}>
                                <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
                                <td>{item.seller.name}</td>
                                <td>{item.visited}</td>
                                <td>{item.deals}</td>
                                <td>{item.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
