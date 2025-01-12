import React from 'react'
import { ServerComponentProps } from 'payload'
import Image from 'next/image'

interface CellProps extends ServerComponentProps {
  value: string
}

export const Cell: React.FC<CellProps> = () => {
  return (
    <div>
      <Image src={'/tumbnails.jpg'} alt="thumbnails" width={30} height={30} />
    </div>
  )
}
