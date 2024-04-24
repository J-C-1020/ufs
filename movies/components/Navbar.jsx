import Link from 'next/link'
import '@/styles/styles.css'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"




export default function Navbar (){
    return (
        <div className="navBar">
            <h1> Navbar </h1>
            <div>
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger className='navbarButton'><Link href="/">Home</Link></MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className='navbarButton'><Link href="/TopMovies">Top Movies</Link></MenubarTrigger>
                    </MenubarMenu>
                </Menubar>
            </div>
        </div>
    );
}
