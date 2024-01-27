import { RouterModule, Routes } from '@angular/router';
import { VizsgafeladatComponent } from './vizsgafeladat/vizsgafeladat.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: 'vizsgafeladat', component: VizsgafeladatComponent},
    {path: '', redirectTo: '/vizsgafeladat', pathMatch: 'full'},
    {path: '**', redirectTo: '/vizsgafeladat', pathMatch: 'full'},
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}