import Image from "next/image";
import Link from "next/link";



export default function CardsTechonology(props: { id: number, nom: string, imgPATH: string, docLink: string}) {
    return (
			<div className="card compact-card card-bordered border-4 border-info hover:border-secondary items-center m-5 overflow-hidden">
				<a href ={props.docLink}>
				<figure className="bg-secondary p-5 h-64 w-full rounded">
					<img className="object-contain w-96 scale-75" src={props.imgPATH} alt={`Image pour: ${props.nom}`} ></img>
      			</figure>
      			<div className="card-body items-center">
        			<h2 className="card-title">{props.nom}</h2>
      			</div>
				  </a>			
			</div>
		
    )
}