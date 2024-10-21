import { Service } from '../types'

import Landing from '@/components/Landing'

const services: Service[] = [
  {
    title: 'Phasellus Vitae',
    paragraph: 'Quisque Porttitor vitae vel amet ',
  },
  {
    title: 'Iaculis Magna',
    paragraph: 'Porttitor neque scelerisque mattis. ',
  },
  {
    title: 'Eleifend Pulvinar ',
    paragraph: 'Vitae Consectetur nibh velit ',
  },
  {
    title: 'Velit Odio Phir',
    paragraph: 'Ametneq magna consectetur leo. ',
  },
]

export default function Home() {
  const baseColor = '#F9B800'

  return <Landing baseColor={baseColor} services={services} />
}
