'use server'

import { notFound } from 'next/navigation'
import { Color, ColorBrief, ColorCTO } from '../types'
import logger from '@/lib/logger'

const { STRAPI_API } = process.env

export async function deleteLastServiceByColor(colorName:string): Promise<boolean> {

  try {
    const response= await fetch(`${STRAPI_API}/api/services/delete?colorId=${colorName}`)

    if (!response.ok) return false

    const data = await response.json()

    if (data.error) return false

    return true
  }

  catch(err) {
    logger.error(err)
    return false
  }

}

export async function getAllColorNames(): Promise<ColorBrief[]> {

  try {
    const response = await fetch(`${STRAPI_API}/api/colors?fields[0]=name`)

    if (!response.ok) return []

    const { data }: { data: ColorCTO[] } = await response.json()

    return data.map((colorData) => ({
      name: colorData.attributes.name,
    }))
  } catch (err) {
    logger.error(err)
    return []
  }
}

export async function getColorWithServices(
  colorName: string,
  enableNotFoundError?: boolean,
): Promise<Color | null> {

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
