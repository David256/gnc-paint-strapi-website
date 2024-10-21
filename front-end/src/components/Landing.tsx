import { FunctionComponent } from 'react'
import ServiceCard from './ServiceCard'
import { Service } from '../types'
import Color from 'color'
import Image from 'next/image'
import Section from './Section'
import Badge from './Badge'
import CTA from './CTA'

interface LandingProps {
  services: Service[]
  baseColor: string
}

const Landing: FunctionComponent<LandingProps> = (props) => {
  const { services, baseColor } = props

  const color = Color(baseColor)

  const mainColor = color.hex()
  const backgroundColor = color.lighten(1).hex()
  const darkColor = color.grayscale().darken(0.79).hex()
  const lightColor = color.lightness(90).saturate(0.5).hex()

  return (
    <>
      <div
        className="flex flex-col"
        style={{
          backgroundColor: lightColor,
        }}
      >
        <div
          className="content-sheet-x py-14"
          style={{
            backgroundColor: lightColor,
          }}
        >
          <header className="flex flex-row">
            <div className="bg-white rounded-full p-2 px-5 w-[172px] h-[96px] flex flex-col items-center justify-center">
              <Image src="/logo.png" alt="" width={127} height={63} />
            </div>
          </header>
        </div>

        <Section
          className="flex md:flex-row-reverse flex-col gap-2 justify-between"
          backgroundColor={lightColor}
          style={{ zIndex: 10 }}
        >
          <div className="flex-1 flex flex-col items-center justify-center">
            <Image
              src="/images/banner.main.svg"
              width={714}
              height={714}
              alt=""
            />
          </div>

          <article className="flex flex-1 flex-col gap-[60px] px-7">
            <header className="flex flex-col gap-2">
              <h3 style={{ color: mainColor }}>Vamos con toda!</h3>
              <h1 style={{ color: darkColor }}>
                Prueba freelance
                <br />
                Fullstack
              </h1>
            </header>

            <div className="flex flex-col lg:flex-row flex-wrap [&>*]:max-w-fit lg:max-w-[376px] gap-[14px]">
              <Badge
                color={mainColor}
                backgroundColor={backgroundColor}
                label="Typescript"
              />
              <Badge
                color={mainColor}
                backgroundColor={backgroundColor}
                label="SQL"
              />
              <Badge
                color={mainColor}
                backgroundColor={backgroundColor}
                label="Node JS"
              />
              <Badge
                color={mainColor}
                backgroundColor={backgroundColor}
                label="React JS"
              />
              <Badge
                color={mainColor}
                backgroundColor={backgroundColor}
                label="Next JS"
              />
              <Badge
                color={mainColor}
                backgroundColor={backgroundColor}
                label="Strapi"
              />
            </div>
          </article>
        </Section>

        <Section
          className="flex md:flex-row-reverse flex-col md:gap-2 justify-between pt-64 md:pt-24"
          backgroundColor={mainColor}
          style={{ zIndex: 9 }}
        >
          <div className="flex-1 flex flex-col items-center justify-center">
            <Image
              src="/images/banner.secondary.svg"
              width={714}
              height={714}
              alt=""
            />
          </div>

          <article className="flex-1 flex flex-col gap-11 lg:py-[200px] md:pt-[150px]">
            <div className="flex flex-col gap-[50px]">
              <h2>Lorem Ipsum</h2>
              <p className="max-w-[575px] leading-5">
                <u className="leading-[34px]">Lo que hay que hacer?</u>
                <br />
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500.
              </p>
            </div>

            <div>
              <CTA backgroundColor={darkColor} color={backgroundColor}>
                Ir a la ruta “/”
              </CTA>
            </div>
          </article>
        </Section>

        <Section
          className="flex flex-col lg:flex-row gap-4 justify-between md:pt-60 pb-40 pt-[30rem]"
          backgroundColor={darkColor}
          style={{ zIndex: 8 }}
        >
          <div className="lg:flex-1 lg:max-w-[552px] mb-24 flex flex-col gap-[60px] justify-center">
            <div
              id="content"
              className="[&_p]:mb-5"
              style={{ color: mainColor }}
            >
              <p>
                Hay que crear dos colecciones en strapi, una llamada servicios y
                otra llamada color, y aunque un color puede tener varios
                servicios, un servicio solo puede pertener a un solo color.
              </p>

              <p>
                Los servicios tienen . título y párrafo, los íconos no se
                guardan en base de datos, son aleatorios, pero deben ser los que
                están en el prototipo.
              </p>

              <p>
                Los colores tienen nombre y un hexadecimal, el cuál va a ser
                valor que reemplaze todos los elementos que tengan la variable
                yellow (#F9BB00) en el prototipo.
              </p>

              <p>
                Los servicios de un color los puedo encontrar en la ruta
                /:color, si no existe el param con el color ingresado en la URL
                me redirige al 404. Pero no debe ser el 404 que tiene NEXT js
                por defecto sino una pantalla completamente negra, donde solo se
                vea el logo, en la posiciòn superior izquierda como en esta
                página.
              </p>

              <h2 style={{ color: lightColor }}>Servicios amarillos</h2>
            </div>

            <div>
              <CTA backgroundColor={backgroundColor} color={darkColor}>
                Borrar último servicio
                <br />
                del color actual
              </CTA>
            </div>
          </div>

          <div
            data-testid="services"
            className="grid grid-cols-1 lg:grid-cols-2 lg:max-w-[760px] lg:gap-[30px] gap-[30px] xl::gap-[60px] [&>*]:odd:bg-white"
          >
            {services.map((service, i) => (
              <ServiceCard
                key={i}
                index={i + 1}
                service={service}
                className={`${i % 2 == 1 ? 'lg:translate-y-[123px]' : ''}`}
                style={{ backgroundColor: mainColor }}
              />
            ))}
          </div>
        </Section>
      </div>
    </>
  )
}

export default Landing