import { NAV_LINKS } from "@/constants"
import Link from "next/link"


const NavMobile = ({ navMobile }: { navMobile: boolean }) => {
   return (
      <div className={`${navMobile ? 'min-h-screen' : 'min-h-0'}
        w-full fixed top-0 left-0 right-0 bg-neutral-500 -bottom-12 -z-10 lg:hidden overflow-hidden transition-all h-0`}
      >
         <ul className='w-full top-0 left-0 h-full flex flex-col justify-center items-center gap-y-8'>
            {NAV_LINKS.map((link) => (
               <li key={link.key}>
                  <Link 
                     href={link.href} 
                     key={link.key} 
                     className="text-white text-2xl flexCenter cursor-pointer
                     pb-1.5 transition-all hover:font-bold"
                  >
                     {link.label}
                  </Link>

               </li>
            ))}
         </ul>
      </div>
   )
}

export default NavMobile