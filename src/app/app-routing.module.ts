import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { InfoitemComponent } from './infoitem/infoitem.component';


const routes: Routes = [

  // { path: 'menuitem', component: MenuitemComponent },
  { path: 'infoitem', component: InfoitemComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
