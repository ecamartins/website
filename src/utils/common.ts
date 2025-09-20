export interface PageDetails {
    show: boolean;
}

export type AppPageType = "PROJECTS" | "HOME";

export const iconLinkStyles = (color: string) => ({
    color: color,
    "&:hover": {
        color: "primary.contrastText",
    },
});