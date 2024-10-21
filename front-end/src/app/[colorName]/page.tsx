import Landing from '@/components/Landing'
import { getAllColorNames, getColorWithServices } from '../actions'
import { notFound } from 'next/navigation'
import logger from '@/lib/logger'

interface ColorPageProps {
  params: {
    colorName: string
  }
}

export const revalidate = 60
export const dynamicParams = true

export const generateStaticParams = async () => {
  const colorBriefs = await getAllColorNames()

  const colorNames = colorBriefs.map((brief) => brief.name)

  return colorNames.map((colorName) => ({
    colorName,
  }))
}

export default async function ColorPage(props: ColorPageProps) {
  const colorData = await getColorWithServices(props.params.colorName, true)

  if (colorData === null) {
    notFound()
  }

  logger.debug(colorData)

  return (
    <Landing
      colorName={props.params.colorName}
      baseColor={colorData.hex}
      services={colorData.services}
    />
  )
}
