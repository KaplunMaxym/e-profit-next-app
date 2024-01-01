export interface IData {
    id: number,
    category: string
}
export interface ICategories {
    data: IData[],
    name: string,
}