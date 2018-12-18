import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { GroupService } from './group.service';

@Injectable({
  providedIn: 'root'
})
//export class GroupsResolverService implements Resolve<IGroup[] { 

 // constructor(
 //   private groupService: GroupService,
 // ) { }

  //resolve(
  //  route: ActivatedRouteSnapshot,
  //  state: RouterStateSnapshot 
  //  ): Observable<Group[]>(
  //     return 
  //  ) 
  //}


interface IGroup {
  id: string;
  value: string;
  active: boolean;
}
