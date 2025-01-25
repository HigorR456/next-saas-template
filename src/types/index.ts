export type SessionType = {
  expires?: string;
  user:{
    email: string;
    name: string;
    image: string;
  }
};

export enum PlanEnum {
  starter = 'starter',
  premium = 'premium',
}
