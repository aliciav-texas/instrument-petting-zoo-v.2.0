interface IRoute {
    path: string;
    component: any;
    name: string;
    protected: boolean;
}
declare const routes: IRoute[];
export default routes;
