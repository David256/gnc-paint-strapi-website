import { FunctionComponent } from 'react'
import { Service } from '../types'

interface ServiceCardProps {
  index: number
  service: Service
}

const ServiceCard: FunctionComponent<ServiceCardProps> = (props) => {
  const { index, service } = props
  return (
    <>
      <div className="flex flex-col gap-4 p-4 rounded-3xl">
        <div className="flex flex-row">[icon]</div>
        <div className="flex flex-row">
          {index}
          <span>.</span>
        </div>
        <div className="flex flex-row">{service.title}</div>
        <div className="flex flex-row">{service.paragraph}</div>
      </div>
    </>
  )
}

export default ServiceCard
