export interface Project {
    date: Date;
    status: string;
    status_colour: 'green' | 'red' | 'orange';
    heading: string;
    description: string;
    location: string | undefined | null;
}
