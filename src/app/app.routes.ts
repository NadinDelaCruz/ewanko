import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CartPageComponent } from './cart-page/cart-page.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'search/:searchItem', component: HomeComponent},
    {path: 'tag/:tag', component: HomeComponent},
    {path: 'food/:id', component: FoodpageComponent},
    {path: 'cart-page', component:CartPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
