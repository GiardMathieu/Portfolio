import Image from "next/image";
import Link from "next/link";

export default function Cards(props: { id: number, nom: string, desc: string, imgPATH: string}) {
    return (
        <div className="card compact-card card-bordered border-2 border-info hover:border-secondary size-2/3 items-center">
            <figure className="bg-secondary p-10">
                <img className="object-scale-down h-90 w-96" src={props.imgPATH} alt={`Image pour: ${props.nom}`} />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title">{props.nom}</h2>
                <div className="card-actions">
                    <Link href={`/project/${props.id}`}>
                        <button className="btn btn-primary">
                            En savoir plus.
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    )
}