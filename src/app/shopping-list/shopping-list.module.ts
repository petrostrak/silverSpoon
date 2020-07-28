import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { DropdownDirective } from '../shared/dropdown.directive'

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
        DropdownDirective,
    ],
    imports: [RouterModule.forChild([
        { path: 'shopping-list', component: ShoppingListComponent }
    ]), CommonModule, FormsModule]
})
export class ShoppingListModule { }