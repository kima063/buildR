export class Course {
  public span: number;

  constructor(public Name: string,
              public isLab: boolean,
              public duration: number
    ) {
      if (this.duration <= 75) {
        this.span = 100 * this.duration / 75;
      }
      if (this.duration > 75) {
        this.span = 100 * this.duration / 150;
      }
  }

}
