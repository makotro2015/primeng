export interface Man {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
}

export interface PeopleColumn {
    field: string,
    title: string,
    value: string,
    id: string,
    visible: boolean
}