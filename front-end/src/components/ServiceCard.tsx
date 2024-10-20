import { FunctionComponent } from 'react'
import { Service } from '../types'

interface ServiceCardProps {
  index: number
  service: Service
  className?: string
}

const ServiceCard: FunctionComponent<ServiceCardProps> = (props) => {
  const { index, service } = props
  return (
    <>
      <div
        className={`p-[50px] flex flex-col gap-6 rounded-[60px] bg-white w-[350px] h-[400px] ${
          props.className ?? ''
        }`}
      >
        <aside className="flex flex-row w-[60px] h-[60px] border">[icon]</aside>
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
              {service.paragraph}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceCard
