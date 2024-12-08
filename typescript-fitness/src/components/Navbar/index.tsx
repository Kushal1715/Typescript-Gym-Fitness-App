import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActiveButton from "@/components/ActiveButton.tsx";

type Props = {
  selectedPage: SelectedPage,
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean
}

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  const flexBetween = "flex items-center justify-between"
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')

  const [toggleMenu, setToggleMenu] = useState<boolean>(false)

  const displayNavbar = isTopOfPage ? '' : 'bg-primary-100'
  return (
    <nav>
      <div className={`${displayNavbar} ${flexBetween} w-full fixed top-0 z-30 py-6`}>
        <div className={`${flexBetween} w-5/6 mx-auto`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side */}
            <img src={Logo} alt="logo" />
            {/* right side  */}
            {
              isAboveMediumScreens ? <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActiveButton setSelectedPage={setSelectedPage}>Become a Member</ActiveButton>
                </div>
              </div> :
                <button className="rounded-full bg-secondary-500 p-2" onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6 w-6 text-white" />
                </button>
            }

          </div>
        </div>
      </div>
      {/* //mobile menu  */}
      {!isAboveMediumScreens && toggleMenu && <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
        {/* //close icon  */}
        <div className="flex justify-end p-12">
          <button onClick={() => setToggleMenu(!toggleMenu)}>
            <XMarkIcon className="h-6 w-6 text-gray-400" />
          </button>
        </div>
        <div className="ml-[33%] flex flex-col gap-10 text-2xl">
          <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        </div>
      </div>}
    </nav>
  )
}

export default Navbar