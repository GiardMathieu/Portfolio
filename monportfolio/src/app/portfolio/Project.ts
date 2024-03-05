import Librairie from "./Librairie";

export default class Project {
    private id: number;
    private name: string;
    private description: string;
    private imgPATH: string;
    private librairies: Librairie[];
    constructor(id: number, name: string, description: string, imgPATH: string = "", librairies: Librairie[]){
        this.id = id;
        this.name = name;
        this.description = description;
        this.librairies = librairies;
        this.imgPATH = imgPATH;
    }

    public getId() {
        return this.id;
    };

    public getName() {
        return this.name;
    }

    public getDescription() {
        return this.description;
    }

    public getLibrairies() {
        return this.librairies;
    }

    public getimgPATH() {
        return this.imgPATH;
    }
}