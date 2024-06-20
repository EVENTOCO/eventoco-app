import { LoginUserComponent } from "../../user/components/login-user/login-user/login-user.component";

export interface EventResponse{
    id:number,
    title: string,
    date: Date,
    place: string,
    descriptionService: string,
    tag: string,
    isImportant: boolean,
    aproxNumParticipants: string,
    email_user: LoginUserComponent,
}
