import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComentComponent } from "./coment.component";

const routes: Routes = [{ path: "", component: ComentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ComentRoutingModule { }
