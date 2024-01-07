export interface PageDetails {
    show: boolean;
}

export type AppPageType = "PROJECTS" | "HOME";

export const iconLinkStyles = { color: "primary.main", "&:hover": { color: "primary.contrastText" } }