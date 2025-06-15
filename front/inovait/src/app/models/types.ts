export interface School {
    id: number;
    name: string;
    is_public: boolean;
}

export interface Student {
    id?: number;
    name: string;
    birth_date: string;
    gender: string;
    school: number; // id de colegio
}