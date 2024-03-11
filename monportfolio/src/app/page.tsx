import Image from "next/image";
"use client"
import { useState } from "react";

export default function Home() {
  return (
	<main className="min-h-screen">
		<div className="hero w-full bg-secondary ">
			<div className="hero-content text-center justify-center items-center place-self-center">
				<div>
					<img src="/Linkedin pic.JPG" className="mx-auto h-64" alt="Photo de moi"/>
					<div className="max-w-md ">
						<h1 className="text-5x1 font-bold py-3">Mathieu Giard</h1>
						<p className="">Courriel: mathieu.giard@outlook.com</p>
						<p className="">LinkedIn: 
							<a href="https://www.linkedin.com/in/mathieu-giard-51b45b264/"
							 className="text-secondary-content pl-2">
								  https://www.linkedin.com/in/mathieu-giard-51b45b264/
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
		<p className="text-center p-4">
			Bonjour, je m&apos;appelle Mathieu Giard et je suis une personne passionnée par la programmation. Après avoir obtenu mon diplôme d&apos;étude secondaire à l&apos;école de Monseigneur-A.-M.-Parent, j&apos;ai fait le choix de m&apos;inscrire au Collège de Maisonneuve dans le programme de techniques informatique dans le profil de développement d&apos;applications. Pour en savoir plus sur  mes connaissances, vous pouvez parcourir mon site portfolio ou tout simplement lire mon curriculum vitae (CV) situé en-dessous de ce paragraphe. Merci !
		</p>
		<div className="flex justify-center">
			<iframe src="/Mathieu_GiardCV.pdf" className="h-lvh w-3/4 pb-4" />
		</div>
	</main>
  );
}
