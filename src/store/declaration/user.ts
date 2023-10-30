import { BehaviorSubject } from "rxjs";

export const user = new BehaviorSubject<UserInfo | null>(null)