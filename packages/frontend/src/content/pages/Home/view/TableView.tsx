import cx from 'classnames'
import React, {ReactChild, ReactNode} from 'react'

interface Props<T> {
    className?: string
    items: T[]
    columns: Column<T>[]
}

export interface Column<T> {
    name: ReactNode
    shortName?: ReactNode
    alignRight?: true
    getValue: (value: T) => ReactChild
}

export function TableView<T>({className, items, columns}: Props<T>) {
    return (
        <div className={cx('TableView', className)}>
            <table className="TableView-Table">
                <thead className="TableView-Header">
                <tr>
                    <th>No.</th>
                    {columns.map((column, i) => (
                        <th key={i} className={column.alignRight ? 'right' : undefined}>
                            <span data-wide={column.shortName ? true : undefined}>
                              {column.name}&nbsp;
                                {/*{column.name === 'Status' ?*/}
                                {/*    <img src='/question-mark.png' width='13px'/>*/}
                                {/*    : null}*/}
                            </span>
                            {column.shortName && (
                                <span data-narrow>{column.shortName}</span>
                            )}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody className="TableView-Body">
                {items.map((item, i) => (
                    <tr key={i}>
                        <td>{i + 1}.</td>
                        {columns.map((column, j) => (
                            <td key={j} className={column.alignRight ? 'right' : undefined}>
                                {column.getValue(item)}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
            <h4 className="mb-0">Status</h4>
            <p className="ma-0"><b>In progress:</b> Project has been not implement the locker contract yet. But has been discussed in their governance forum.</p>
            <p className="ma-0"><b>On:</b> ve-model has been implemented to their main protocol.</p>
        </div>
    )
}
