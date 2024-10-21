'use client'
import {
  DetailedHTMLProps,
  FunctionComponent,
  HtmlHTMLAttributes,
  useEffect,
  useState,
} from 'react'
import { Service } from '../types'
import Image from 'next/image'

interface ServiceCardProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  index: number
  service: Service
  className?: string
}

const ServiceCard: FunctionComponent<ServiceCardProps> = (props) => {
  const { index, service } = props

  const [icon, setIcon] = useState('')

  useEffect(() => {
    const randomIcon = `/images/icons/${Math.floor(Math.random() * 4) + 1}.png`
    setIcon(randomIcon)
  }, [])

  return (
    <>
      <div
        style={{ ...props.style }}
        className={`odd:bg-[var(--background)] p-[50px] flex flex-col gap-6 rounded-[60px] w-full h-[400px] ${
          props.className ?? ''
        }`}
      >
        <aside className="flex flex-row w-[60px] h-[60px]">
          {icon ? <Image src={icon} width={60} height={60} alt="" /> : null}
        </aside>
        <div className="flex flex-col gap-[10px]">
          <header className="flex flex-row text-7xl leading-[72px]">
            {index}
            <span>.</span>
          </header>

          <div className="flex flex-col gap-5">
            <h4 className="flex flex-row leading-6 text-2xl">
              {service.title}
            </h4>
            <div className="flex flex-row leading-5 text-xl">
              {service.description}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceCard
