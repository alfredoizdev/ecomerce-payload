import React from 'react'
import { Data, ServerComponentProps } from 'payload'
import './styles.scss'

interface CellProps extends ServerComponentProps {
  value: string
}

export const Cell: React.FC<CellProps> = (props: Data) => {
  const { cellData } = props

  return <div className="chip" style={{ backgroundColor: cellData as string }} />
}
