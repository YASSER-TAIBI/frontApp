import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'activite', loadChildren: () => import('./activite/activite.module').then(m => m.ActiviteModule) }, 
  { path: 'leaveRequest', loadChildren: () => import('./leave-request/leave-request.module').then(m => m.LeaveRequestModule) }, 
  { path: 'listLeave', loadChildren: () => import('./list-leave/list-leave.module').then(m => m.ListLeaveModule) }, 
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) }, 
  { path: 'updatePassword', loadChildren: () => import('./update-password/update-password.module').then(m => m.UpdatePasswordModule) },

  { path: 'logout', loadChildren: () => import('./logout/logout.module').then(m => m.LogoutModule) },

  { path: 'help', loadChildren: () => import('./help/help.module').then(m => m.HelpModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
