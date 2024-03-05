import Librairie from "../portfolio/Librairie";
import { librairies } from "../portfolio/Librairies";
import CardsTechonology from "../portfolio/cardsTechnology";
import Project from "../portfolio/Project";
import Tooltip from "../TooltipComponent";

export default function TemplateProjectDesc(props: {project: Project}) {
    return (
        <>
            <div className="flex flex-col items-center m-4 relative">
                <img src={props.project.getimgPATH()} alt="" width={400} />
                <div className="flex items-center justify-center relative">
                    <h1 className="font-serif text-4xl pt-3">{props.project.getName()}</h1>
                    <Tooltip
                     text="Vous pouvez cliquer sur les cartes des technologies pour aller voir leur documentation respective qui a été utilisée durant mon apprentissage"
                    />
                </div>

            </div>
            <div className="flex-1 text-center">
                <p>{props.project.getDescription()}</p>
            </div>
            <div className="sm:grid md:grid-cols-3 justify-items-center place-items-stretch py-6">
                {
                    props.project.getLibrairies().sort(
                        (l1,l2) => (l1.getName().toLowerCase() > l2.getName().toLowerCase() ? 1: (l1.getName().toLowerCase() < l2.getName().toLowerCase() ? -1 : 0))
                    ).map((librairie, index) => (
                        <CardsTechonology
                         key={librairie.getId()}
                         id={librairie.getId()}
                         nom={librairie.getName()}
                         imgPATH={librairie.getImgURL()}
                         docLink={librairie.getDocLink()}
                        ></CardsTechonology>
                    ))
                }
            </div>
        </>
    )
}