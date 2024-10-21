'use server'

import { notFound } from 'next/navigation'
import { Color, ColorCTO } from '../types'
import logger from '@/lib/logger'

export async function getColorWithServices(
  colorName: string,
  enableNotFoundError?: boolean,
): Promise<Color | null> {
  const { STRAPI_API } = process.env

  logger.debug('STRAPI_API:', STRAPI_API)

  let response: Response

  try {
    const url = `${STRAPI_API}/colors?filters[name][$eq]=${colorName}&populate[services][fields][0]=title&populate[services][fields][1]=description&fields[0]=name&fields[1]=hex`
    logger.debug('url:', url)
    response = await fetch(url)
  } catch (err) {
    logger.error(err)
    if (enableNotFoundError) {
      notFound()
    } else {
      return null
    }
  }

  if (!response.ok) {
    if (enableNotFoundError) {
      notFound()
    } else {
      return null
    }
  }

  const { data }: { data: ColorCTO[] } = await response.json()

  if (data.length === 0) {
    if (enableNotFoundError) {
      notFound()
    } else {
      return null
    }
  }

  const colorData = data[0]

  return {
    id: colorData.id,
    name: colorData.attributes.name,
    hex: `#${colorData.attributes.hex}`,
    services: colorData.attributes.services.data.map((service) => ({
      id: service.id,
      title: service.attributes.title,
      description: service.attributes.description,
    })),
  }
}
