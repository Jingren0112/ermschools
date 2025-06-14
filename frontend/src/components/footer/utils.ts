// This file contains the footer content structure and the keys for localization.
export interface footerContent {
    header: string,
    body1: string,
    body2: string,
    body3: string,
    body4: string
}

// Instead of storing localized strings, store the keys for each field
export const footerContent: footerContent[] = [
    {
        header: "footer1Header",
        body1: "footer1Body1",
        body2: "footer1Body2",
        body3: "footer1Body3",
        body4: "footer1Body4"
    },
    {
        header: "footer2Header",
        body1: "footer2Body1",
        body2: "footer2Body2",
        body3: "footer2Body3",
        body4: "footer2Body4"
    },
    {
        header: "footer3Header",
        body1: "footer3Body1",
        body2: "footer3Body2",
        body3: "footer3Body3",
        body4: "footer3Body4"
    }
]