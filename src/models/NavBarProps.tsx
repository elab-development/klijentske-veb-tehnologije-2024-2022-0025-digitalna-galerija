export class NavBarProps {
    imageSrcPath: string; //putanja do slike koja će se koristiti u NavBar komponenti
    navItems: { name: string, path: string }[];  //niz objekata - predstavljaju stavke navigacije u NavBar komponenti 
                                                //svaka stavka navigacije ima name (naziv) i path (putanju)

    constructor(imageSrcPath: string, navItems: { name: string, path: string }[]) {
        //prima putanju do slike (imageSrcPath) i niz stavki navigacije (navItems)
        //kada se stvori nova instanca klase NavBarProps, ova dva svojstva se postavljaju na 
        //odgovarajuće vrednosti prosleđene konstruktoru
        this.imageSrcPath = imageSrcPath;
        this.navItems = navItems;
    }
}