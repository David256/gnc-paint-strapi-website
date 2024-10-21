export interface ServiceCTO {
  id: number
  attributes: {
    title: string
    description: string
  }
}

export interface ColorCTO {
  id: number
  attributes: {
    name: string
    hex: string
    services: {
      data: ServiceCTO[]
    }
  }
}

export interface Service {
  id: number
  title: string
  description: string
}

export interface Color {
  id: number
  name: string
  hex: string
  services: Service[]
}

export interface ColorBrief {
  name: string
}
