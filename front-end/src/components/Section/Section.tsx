import {
  HtmlHTMLAttributes,
  DetailedHTMLProps,
  FunctionComponent,
  PropsWithChildren,
} from 'react'
import SectionStyle from './Section.module.css'

interface SectionProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  backgroundColor?: string
  className?: string
}

const Section: FunctionComponent<PropsWithChildren<SectionProps>> = (props) => {
  const { children, backgroundColor, style } = props

  return (
    <>
      <section
        className={`content-sheet-x ${SectionStyle.Section ?? ''} ${
          props.className ?? ''
        }`}
        style={{ backgroundColor, ...style }}
      >
        {children}
      </section>
    </>
  )
}

export default Section
