import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent } from 'react'

const Header: FunctionComponent = () => {
  return (
    <>
      <div className="content-sheet-x py-14">
        <header className="flex flex-row">
          <div className="bg-white rounded-full p-2 px-5 w-[172px] h-[96px] flex flex-col items-center justify-center">
            <Link href="/">
              <Image src="/logo.png" alt="" width={127} height={63} />
            </Link>
          </div>
        </header>
      </div>
    </>
  )
}

export default Header
