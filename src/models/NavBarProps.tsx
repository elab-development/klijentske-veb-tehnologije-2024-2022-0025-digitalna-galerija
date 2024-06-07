export class NavBarProps {
    imageSrcPath: string;
    navItems: { name: string, path: string }[];

    constructor(imageSrcPath: string, navItems: { name: string, path: string }[]) {
        this.imageSrcPath = imageSrcPath;
        this.navItems = navItems;
    }
}