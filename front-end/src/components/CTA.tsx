import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FunctionComponent,
  PropsWithChildren,
} from 'react'

interface CTAProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: string
}

const CTA: FunctionComponent<PropsWithChildren<CTAProps>> = (props) => {
  const { children, color, ...rest } = props
  return (
    <>
      <button {...rest} style={{ color }}>
        {children}
      </button>
    </>
  )
}

export default CTA
