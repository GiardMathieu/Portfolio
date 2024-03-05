import { Firebase, androidStudio, javaScript, kotlin, librairieASPMVC, librairieAxios, librairieBulma, librairieDaisyUi, librairieEslint, librairieNextJs, librairiePIXI, librairieTailwindCss, librarieWebSockets, react, typeScript, vueJs } from "./Librairies";
import Project from "./Project";


export const projet1 = new Project(1, "Among Them", "Un projet permettant de connecter plusieurs joueurs dans un jeu de rencontre inspiré par Club Penguin et Among Us. Voici un résumé de l'éxpérience d'un utilisateur: la personne se crée un compte et il se fait amener directement vers le jeu. Le joueur peut se promener, communiquer avec les autres joueurs présents et jouer au mini-jeux qui ont étés crées. De plus, l'utilisateur peut changer ses options de connexion (changement du nom d'utilisateur, par exemple) et changer l'apparence de son personnage. ","/projectIcon/AmongThemIcon.png",
 [librairiePIXI, librairieBulma, typeScript, react, Firebase, librarieWebSockets]);


export const projet2 = new Project(2, "Streamin' Piece", "Un projet prenant la forme Web et mobile qui sert à diffuser des vidéos aux utilisateurs qui sont abonnés au service (cette information est récoltée durant leur connexion). Lorsque connecté, un utilisateur peut laisser un commentaire et donner un score à une épisode sur cinq. De plus, si un abonné veut revoir ce qu’il a écouté auparavant, il peut aller à la section « Historique » pour voir tous les épisodes déjà vues. Les outils utilisés pour ce projet sont : MSSQL pour la base de données, Express pour le backend, React et CSS pour le site web et Kotlin pour l’application mobile.","/projectIcon/StreaminPiece.png",
 [androidStudio, kotlin, react, javaScript, librairieBulma]);

 export const projet3 = new Project(3, "Outil de conception de programme", "Pendant mon stage au Collège de Maisonneuve, j'ai travaillé avec un étudiant et un professeur sur l'Outil de conception de programme, qui permet aux conseillères pédagogiques de faire la conception d'un programme d'études facilement. L'utilisation de cet outil permet aux utilisateurs autorisés à modifier les données liées à un programme d'études. De plus, l'utilisateur peut transférer toutes les données écrites dans un document Word grâce à l'utilisation de la librairie Open XML dans le backend (écrit en c#) et ensuite l'imprimer. ", "/projectIcon/SDPIcon.png",
 [vueJs, librairieBulma, librairieASPMVC, librairieAxios, librairieEslint]);

export const projet4 = new Project(4, "CRTP - Simulation d'interrogations pour étudiant en techniques policières.", "Une application qui sert d’outil de formations pour les étudiants en technique policière. Il va leur permettre de se familiariser avec la manipulation d’une carte d’identité lors de mises en situations, d’utiliser un outil de recherche de base de données et de se familiariser avec les informations récoltées. Pour faire ce projet, une API a dû être exploitée afin que les données soient bien affichées pour le client. Le front-end a été ensuite fait avec Vuejs", "/projectIcon/Police.png",
 [vueJs, javaScript, librairieBulma]);

export const projet5 = new Project(5, "Site portfolio", "Le site qui va me permettre de faire valoir mes forces et les technologies utilisées durant mon parcours scolaire et professionnelle","/projectIcon/portfolio.png",
 [librairieTailwindCss, librairieNextJs, typeScript, librairieDaisyUi]);

export const projects: Project[] = [
    projet1, projet2, projet3, projet4, projet5
];