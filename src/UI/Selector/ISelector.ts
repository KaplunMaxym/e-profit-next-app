interface ISelectorData {
    map(arg0: (item: any) => import("react").JSX.Element): import("react").ReactNode;
    id: number;
    language: string;
}
export interface ISelector {
    data: any[];
}