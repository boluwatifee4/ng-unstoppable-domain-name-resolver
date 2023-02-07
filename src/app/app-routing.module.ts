import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadUpComponent } from './ft-modules/load-up/load-up.component';
import { ResolverComponent } from './ft-modules/resolver/resolver.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {path: 'resolve-domain', component: ResolverComponent},
  {path: "welcome", component: LoadUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
