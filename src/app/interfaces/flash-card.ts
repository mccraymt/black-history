export interface FlashCard {
    id: number;
    title: string;
    subtitle?: string;
    value?: string;
    facts: string[];
    imageSrc?: string;
    references?: string[];
}
