import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MainContentComponent } from '../../components/main-content/main-content.component';
import { ModalDeleteAnnouncementComponent } from '../../components/modal-delete-announcement/modal-delete-announcement.component';
import { HeaderbarComponent } from '../../components/headerbar/headerbar.component';
import { ActivatedRoute } from '@angular/router';
import { PetService } from '../../service/pet.service';

@Component({
  selector: 'app-abrigo-screen',
  standalone: true,
  imports: [
    SidebarComponent,
    MainContentComponent,
    ModalDeleteAnnouncementComponent,
    HeaderbarComponent,
  ],
  templateUrl: './abrigo-screen.component.html',
  styleUrl: './abrigo-screen.component.css',
})
export class AbrigoScreenComponent implements OnInit{
  editModalVisible = false;
  deleteModalVisible = false;
  abrigo: any=[];

  recieveEditEvent($event: void) {
    this.editModalVisible = true;
  }

  recieveDeleteEvent($event: void) {
    this.deleteModalVisible = true;
  }

  triggerEditModalClosure($event: void) {
    this.editModalVisible = false;
  }

  triggerDeleteModalClosure($event: void) {
    this.deleteModalVisible = false;
  }

  constructor(
    private service: PetService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.abrigo = this.service.getAbrigo(id);
    });
  }

}
