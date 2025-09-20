export interface PageDetails {
    show: boolean;
}

export type AppPageType = "PROJECTS" | "HOME" | "BIO";

export const iconLinkStyles = (color: string, contrastText: string = "primary.contrastText") => ({
    color: color,
    "&:hover": {
        color: contrastText,
    },
});