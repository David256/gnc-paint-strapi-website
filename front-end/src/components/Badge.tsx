import { FunctionComponent } from 'react'

interface BadgeProps {
  label: string
  className?: string
}

const Badge: FunctionComponent<BadgeProps> = (props) => {
  const { label } = props

  return (
    <>
      <div className={`p-2 rounded-full ${props.className}`}>{label}</div>
    </>
  )
}

export default Badge
