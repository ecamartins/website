export interface PageDetails {
    show: boolean;
}

export type AppPageType = "PROJECTS" | "HOME";

export const iconLinkStyles = (color: string, contrastText: string = "primary.contrastText") => ({
    color: color,
    "&:hover": {
        color: contrastText,
    },
});