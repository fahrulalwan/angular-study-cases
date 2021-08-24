export class TodoModel {
  id: number;
  name: string;
  note: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.note = '';
  }

  from(dto: any): TodoModel {
    if (dto.id) {
      this.id = dto.id;
    }
    if (dto.name) {
      this.name = dto.name;
    }
    if (dto.note) {
      this.note = dto.note;
    }

    return this;
  }

  toJSON(): Record<string, any> {
    return {
      id: this.id,
      name: this.name,
      note: this.note,
    }
  }
}
