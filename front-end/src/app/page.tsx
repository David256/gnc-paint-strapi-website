import { Color, Service } from '../types'

import Landing from '@/components/Landing'
import { getColorWithServices } from './actions'

const services: Service[] = [
  {
    id: 1,
    title: 'Phasellus Vitae',
    description: 'Quisque Porttitor vitae vel amet ',
  },
  {
    id: 2,
    title: 'Iaculis Magna',
    description: 'Porttitor neque scelerisque mattis. ',
  },
  {
    id: 3,
    title: 'Eleifend Pulvinar ',
    description: 'Vitae Consectetur nibh velit ',
  },
  {
    id: 4,
    title: 'Velit Odio Phir',
    description: 'Ametneq magna consectetur leo. ',
  },
]

export default async function Home() {
  const baseColor = '#F9B800'

  let colorData = await getColorWithServices('yellow')

  if (colorData === null) {
    colorData = {
      hex: baseColor,
      id: 0,
      name: 'yellow',
      services,
    } as Color
  }

  return <Landing baseColor={colorData.hex} services={colorData.services} />
}
