import { Routes } from '@angular/router';

 export const FULL_ROUTES: Routes = [

 
         { path: 'dashboard', loadChildren: () => import('../home/dashboard/dashboard.module').then(m => m.DashboardModule) }, 
         { path: 'activite', loadChildren: () => import('../home/activite/activite.module').then(m => m.ActiviteModule) }, 
         { path: 'users', loadChildren: () => import('../home/users/users.module').then(m => m.UsersModule) } ,
         { path: 'contrat', loadChildren: () => import('../home/contrat/contrat.module').then(m => m.ContratModule) } ,
         { path: 'service', loadChildren: () => import('../home/service/service.module').then(m => m.ServiceModule) } ,
         { path: 'leaveRequest', loadChildren: () => import('../home/leave-request/leave-request.module').then(m => m.LeaveRequestModule) }, 
         { path: 'listLeave', loadChildren: () => import('../home/list-leave/list-leave.module').then(m => m.ListLeaveModule) }, 
         { path: 'profile', loadChildren: () => import('../home/profile/profile.module').then(m => m.ProfileModule) }, 
         { path: 'updatePassword', loadChildren: () => import('../home/update-password/update-password.module').then(m => m.UpdatePasswordModule) },
         { path: 'help', loadChildren: () => import('../home/help/help.module').then(m => m.HelpModule) },        
         { path: '', redirectTo: '/dashboard', pathMatch:'full'},
         { path: '**', redirectTo: 'dashboard'},
         

]