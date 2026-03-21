import './Table.scss';

interface Column<T> {
    key: keyof T;
    label: string;
    render?: (value: T[keyof T], row: T) => React.ReactNode;
}

interface TableProps<T> {
    title: string;
    subtitle?: string;
    columns: Column<T>[];
    data: T[];
    hideHeader?: boolean;
}

const Table = <T extends object>({ title, subtitle, columns, data, hideHeader }: TableProps<T>) => {
    return (
        <div className="table-wrapper">
            <table className="table">
                <caption>{title}</caption>
                {!hideHeader && (
                    <thead>
                        <tr>
                            {columns.map((col) => (
                                <th key={String(col.key)}>{col.label}</th>
                            ))}
                        </tr>
                    </thead>
                )}
                {subtitle && (
                    <thead className="table__subtitle-row">
                        <tr>
                            <th colSpan={columns.length}>{subtitle}</th>
                        </tr>
                    </thead>
                )}
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((col) => (
                                <td key={String(col.key)}>
                                    {col.render
                                        ? col.render(row[col.key], row)
                                        : String(row[col.key])}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table