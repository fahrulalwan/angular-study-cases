export class TopicModel {
  id: number;
  name: string;
  href: string;
  description: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.href = '/';
    this.description = '';
  }

  convert(dto: any): TopicModel {
    if (dto.id) {
      this.id = dto.id;
    }
    if (dto.topic) {
      this.name = dto.topic;
    }
    if (dto.href) {
      this.href = dto.href;
    }
    if (dto.description) {
      this.description = dto.description;
    }

    return this;
  }
}
