export interface VuexArgs<T>{
    state:T;
    commit:(mutation:string,data?:any) => void;
}