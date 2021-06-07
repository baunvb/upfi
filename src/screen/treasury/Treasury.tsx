import React, { useEffect, useMemo } from 'react'
import Contracts from "../../contracts/Contracts"
import "./treasury.css"
import { useTable, Column } from 'react-table'
import { formatCurrency } from '../../utils/Util'
import { FaCopy, FaExternalLinkAlt } from 'react-icons/fa';

type header =  {
    Header: string,
    accessor: string,
    Cell?: any
}

type transaction = {
    timestamp: string,
    capital: number,
    profit: number,
    reinvested: number,
    tx: string
}

const History: React.FC<{ columns: Array<Column<transaction>>, data: Array<transaction> }> = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data
    })
    return (
        <table {...getTableProps()} className="treasury-table">
            <thead>
                {headerGroups.map((headerGroup: any) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column: any) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row: any, i: number) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell: any) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default function Treasury(props: any) {

    const columns: Array<Column<transaction>> = [
        {
            Header: 'Timestamp',
            accessor: 'timestamp',
        },
        {
            Header: 'Capital',
            accessor: 'capital',
            Cell: (row: any) => "$" + formatCurrency(row.value)
        },
        {
            Header: 'Profit',
            accessor: 'profit',
            Cell: (row: any) => "$" + formatCurrency(row.value)

        },
        {
            Header: 'Reinvested',
            accessor: 'reinvested',
            Cell: (row: any) => "$" + formatCurrency(row.value)
        },
        {
            Header: "Tx",
            accessor: "tx",
            Cell: (row: any) => <a className="treasury-table-tx" href={"https://etherscan.io/tx/" + row.value} target="_blank">
                <span>{row.value}</span>
                <span className="treasury-tx-external-link">
                    <FaExternalLinkAlt size={10}/>
                </span>
            </a>
        }
    ]
    const data: Array<transaction> = [
        {
            timestamp: "07/05/2021 16:56:54",
            capital: 12345,
            profit: 9.1125,
            reinvested: 12365478,
            tx: "0xf9507452fac50f52fac50f52fac50f52fac50f"
        },
        {
            timestamp: "07/05/2021 16:56:54",
            capital: 12345,
            profit: 9.1125,
            reinvested: 12365478,
            tx: "0xf9507452fac50f52fac50f52fac50f52fac50f"
        },
        {
            timestamp: "07/05/2021 16:56:54",
            capital: 12345,
            profit: 9.1125,
            reinvested: 12365478,
            tx: "0xf9507452fac50f52fac50f52fac50f52fac50f"
        },
        {
            timestamp: "07/05/2021 16:56:54",
            capital: 12345,
            profit: 9.1125,
            reinvested: 12365478,
            tx: "0xf9507452fac50f52fac50f52fac50f52fac50f"
        },
        {
            timestamp: "07/05/2021 16:56:54",
            capital: 12345,
            profit: 9.1125,
            reinvested: 12365478,
            tx: "0xf9507452fac50f52fac50f52fac50f52fac50f "
        },
        {
            timestamp: "07/05/2021 16:56:54",
            capital: 12345,
            profit: 9.1125,
            reinvested: 12365478,
            tx: "0xf9507452fac50f52fac50f52fac50f52fac50f"
        },
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
                            <span className="treasury-text">Minting Pool Balance:  $6.34</span>
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