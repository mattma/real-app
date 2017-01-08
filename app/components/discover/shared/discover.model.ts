export interface ICandadate {
  socialServices: Array<{service: string;}>;
  greeting: string;
  profile: {
    imagePath: string;
    age: string;
    job: string;
    height?: string;
    religion?: string;
    employer?: string;
    education?: string;
    salary?: string;
    verification?: Array<string>;
  }
}
