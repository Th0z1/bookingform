import {ViewComponent } from "./app/component/view/view.component";
import { Page1Component } from "./app/component/page1/page1.component";
import { DetailpageComponent } from "./app/component/detailpage/detailpage.component";
import { EventComponent } from "./app/component/event/event.component";
import { NavbarComponent } from "./app/component/navbar/navbar.component";
//array
export const AppRoutes= [
    {path: '',component:Page1Component},
    {path: 'detailpage',component:DetailpageComponent,children:[

        {path: 'view',component:ViewComponent },
        {path: 'event',component:EventComponent },
        {path: 'navbar',component:NavbarComponent }

    ]}
];