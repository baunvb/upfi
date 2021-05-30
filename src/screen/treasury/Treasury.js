import React, { useEffect, useMemo } from 'react'
import Contracts from "../../contracts/Contracts"
import "./treasury.css"
import { useTable } from 'react-table'

function History({ columns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })
    return (
        <table {...getTableProps()} className="treasury-table">
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default function Treasury(props) {

    const columns = [
        {
            Header: 'Timestamp',
            accessor: 'timestamp',
        },
        {
            Header: 'Capital',
            accessor: 'capital',
        },
        {
            Header: 'Profit',
            accessor: 'profit',
        },
        {
            Header: 'Reinvested',
            accessor: 'reinvested',
        },
        {
            Header: "Tx",
            accessor: "tx"
        }
    ]
    const data = [
        {
            timestamp: "07/05/2021 16:56:54",
            capital: "$12,162,324",
            profit: "$9,433",
            reinvested: "$12,162,324",
            tx: "0xf95074...52fac50f "
        },
        {
            timestamp: "07/05/2021 16:56:54",
            capital: "$12,162,324",
            profit: "$9,433",
            reinvested: "$12,162,324",
            tx: "0xf95074...52fac50f "
        },
        {
            timestamp: "07/05/2021 16:56:54",
            capital: "$12,162,324",
            profit: "$9,433",
            reinvested: "$12,162,324",
            tx: "0xf95074...52fac50f "
        },
        {
            timestamp: "07/05/2021 16:56:54",
            capital: "$12,162,324",
            profit: "$9,433",
            reinvested: "$12,162,324",
            tx: "0xf95074...52fac50f "
        },
        {
            timestamp: "07/05/2021 16:56:54",
            capital: "$12,162,324",
            profit: "$9,433",
            reinvested: "$12,162,324",
            tx: "0xf95074...52fac50f "
        },
        {
            timestamp: "07/05/2021 16:56:54",
            capital: "$12,162,324",
            profit: "$9,433",
            reinvested: "$12,162,324",
            tx: "0xf95074...52fac50f "
        }
    ]



    useEffect(() => {

    }, [])
    return (
        <div className="treasury">
            <span className="treasury-header">UTK TREASURY</span>
            <div className="treasury-content">
                <div>
                    <span className="treasury-subheader">Status</span>
                    <div className="treasury-row">
                        <div className="treasury-col">
                            <span className="treasury-text">Minting Pool Balance:    {6, 655, 233}</span>
                            <span className="treasury-text">Vault Balance: $0</span>
                            <span className="treasury-text">Profit Sharing for Foundry: 100%</span>
                            <span className="treasury-text">Above threshold: Yes</span>
                        </div>
                        <div className="treasury-col">
                            <span className="treasury-text">Invested Collateral Ratio: 5%</span>
                            <span className="treasury-text">Effective Reserve Collateral Ratio: 100%</span>
                            <span className="treasury-text">Reserve Threshold Ratio: 15%</span>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="treasury-subheader">Terms</span>
                    <ul>
                        <li className="treasury-li">Invested Collateral Ratio: The percentage of idle collateral the protocol using to invest into the vault</li>
                        <li className="treasury-li">Invested Collateral Ratio: The percentage of idle collateral the protocol using to invest into the vault</li>
                    </ul>
                </div>
                <div>
                    <span className="treasury-subheader">History</span>
                    <History columns={columns} data={data} />
                </div>

            </div>
        </div>
    )
}