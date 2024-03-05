// Cette classe va permettre d'afficher les librairies/ fonctionnalités utilisés pour la conception du projet (Par exemple, MSSQL etc..)
export default class Librairie {
    private id: number;
    private name: string;
    private imgURL: string;
    private docLink: string;
    constructor(id: number, name: string = "", imgURL: string = "", docLink: string = "") {
        this.id = id;
        this.name = name;
        this.imgURL = imgURL;
        this.docLink = docLink;
    }

    public getId() {
        return this.id;
    }

    public getName() {
        return this.name;
    }

    public getImgURL() {
        return this.imgURL;
    }

    public getDocLink() {
        return this.docLink;
    }
}
