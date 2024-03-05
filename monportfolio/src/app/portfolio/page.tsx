import Tooltip from "../TooltipComponent";
import { librairies } from "./Librairies";
import Project from "./Project"
import {projects} from "./Projects";
import Cards from "./cards";
import CardsTechonology from "./cardsTechnology";

export default function Portfolio() {

    console.log(projects);
    return (
        <>
            <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-primary md:text-5xl lg:text-6xl text-center">Mes projets</h1>
            <div className="sm:grid md:grid-cols-3 justify-items-center place-items-stretch">
            {
                projects.map((project, index) => {
                    return (
                        <Cards
                         key={project.getId()}
                         id={project.getId()} 
                         nom={project.getName()} 
                         desc={project.getDescription()}
                         imgPATH={project.getimgPATH()}></Cards>
                    )
                })
            }
            </div>
            <div className="flex items-center justify-center relative">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-primary md:text-5xl lg:text-6xl dark:text-white text-center">
                    Les technologies utilisées
                </h1>
                <Tooltip
                 text="Vous pouvez cliquer sur les cartes des technologies pour aller voir leur documentation respective qui a été utilisée durant mon apprentissage"
                />
            </div>
            <div className="sm:grid md:grid-cols-3 justify-items-center justify-evenly ">
                {
                    librairies.sort(
                        (l1,l2) => (l1.getName().toLowerCase() > l2.getName().toLowerCase() ? 1: (l1.getName().toLowerCase() < l2.getName().toLowerCase() ? -1 : 0))
                    ).map((librairie, index) => {
                        return (
                            <CardsTechonology
                             key={librairie.getId()}
                             id={librairie.getId()}
                             nom={librairie.getName()}
                             imgPATH={librairie.getImgURL()}
                             docLink={librairie.getDocLink()}
                            />
                    )
                })
            }
            </div>
        </>
    )
}