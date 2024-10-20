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
  backgroundColor?: string
  color?: string
}

const CTA: FunctionComponent<PropsWithChildren<CTAProps>> = (props) => {
  const { children, backgroundColor, color, ...rest } = props

  return (
    <>
      <button
        {...rest}
        className={`py-6 px-[50px] rounded-full min-w-[350px] h-[76px] flex flex-row justify-between items-center text-2xl gap-[21px] ${
          rest.className ?? ''
        }`}
        style={{ backgroundColor, color, ...rest.style }}
      >
        <span className="leading-none text-start">{children}</span>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.75 6.26953L16.9922 8.02734L22.7344 13.7695H2.51953V16.2305H22.7344L16.9922 21.9727L18.75 23.7305L27.4805 15L18.75 6.26953Z"
            fill={color}
          />
        </svg>
      </button>
    </>
  )
}

export default CTA
