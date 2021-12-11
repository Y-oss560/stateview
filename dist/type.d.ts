export interface IState {
    currentState: string;
    show: Function;
    component: any;
    [index: string]: any;
}
export interface GlobalStateMapping {
    currentState: string;
    [index: string]: any;
}
export interface ICconfig {
    ref: any;
    GlobalStateMapping: GlobalStateMapping;
    component: any;
}
//# sourceMappingURL=type.d.ts.map