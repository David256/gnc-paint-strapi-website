import Landing from '@/components/Landing'
import { getColorWithServices } from '../actions'
import { notFound } from 'next/navigation'
import logger from '@/lib/logger'

interface ColorPageProps {
  params: {
    colorName: string
  }
}

export default async function ColorPage(props: ColorPageProps) {
  const colorData = await getColorWithServices(props.params.colorName, true)

  if (colorData === null) {
    notFound()
  }

  logger.debug(colorData)

  return <Landing baseColor={colorData.hex} services={colorData.services} />
}
