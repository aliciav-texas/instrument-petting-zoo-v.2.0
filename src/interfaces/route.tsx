export interface IRoute {
  path: string;
  exact: boolean;
  component: any;
  name: string;
  protected: boolean;
}
