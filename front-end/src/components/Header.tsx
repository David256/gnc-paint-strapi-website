import Image from 'next/image'
import { FunctionComponent } from 'react'

const Header: FunctionComponent = () => {
  return (
    <>
      <div className="content-sheet-x py-14">
        <header className="flex flex-row">
          <div className="bg-white rounded-full p-2 px-5 w-[172px] h-[96px] flex flex-col items-center justify-center">
            <Image src="/logo.png" alt="" width={127} height={63} />
          </div>
        </header>
      </div>
    </>
  )
}

export default Header
