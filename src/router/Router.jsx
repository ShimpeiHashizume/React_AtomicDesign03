import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../componets/pages/Top";
import { Users } from "../componets/pages/Users";
import { DefaultLayout } from "../componets/templates/DefaultLayout";
import { HeaderOnly } from "../componets/templates/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
