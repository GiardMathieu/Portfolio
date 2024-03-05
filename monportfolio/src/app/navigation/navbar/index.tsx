import Link from "next/link";
import { ChangeEvent } from "react";
import ThemeInput from "./themeInput";

export default function Navbar() {
    return (
        /*
        <div className="w-full h-20 bg-indigo-800 sticky top-0">
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    <ul className="hidden md:flex gap-x-6 text-white">
                        <li>
                            <Link href="/"> Accueil </Link>
                        </li>
                        <li>
                            <Link href="/contacts"> Contacts</Link>
                        </li>
                        <li>
                            <Link href="/portfolio"> Portfolio</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        */
		<div className="navbar bg-primary text-primary">
			<div className="flex-none navbar-start">
				<div className="dropdown">
					<div className="btn btn-primary-content btn-square" role="button" tabIndex={0}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
							<path
						 	strokeLinecap="round" 
						 	strokeLinejoin="round" 
						 	strokeWidth="2" 
						 	d="M4 6h16M4 12h16M4 18h16">
							</path>
						</svg>
					</div>
					<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
						<li>
							<Link href={"/"}>Accueil</Link>
						</li>
						<li>
							<Link href={"/portfolio"}>Projets et technologies utilisées</Link>
						</li>
					</ul>
				</div>
				<p className="ml-5">Site portfolio de Mathieu Giard</p>
			</div>
			<div className="navbar-end">
				<div className="dropdown dropdown-end">
					<div className="btn btn-neutral-content btn-square " role="button" tabIndex={0}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  							<path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"/>
						</svg>
					</div>
					<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-primary" suppressHydrationWarning>
						Thèmes: 
						<li>
							<ThemeInput label="Cupcake" value="cupcake"/>
						</li>
						<li>
							<ThemeInput label="Emerald" value="emerald"/>
						</li>
						<li>
							<ThemeInput label="Black" value="black"/>
						</li>
						<li>
							<ThemeInput label="Business" value="business"/>
						</li>
						<li>
							<ThemeInput label="Dim" value="dim"/>
						</li>						
						<li>
							<ThemeInput label="Sunset" value="sunset"/>
						</li>
						<li>
							<ThemeInput label="Forest" value="forest"/>
						</li>
					</ul>
				</div>

			</div> 
       	</div>
    )
}