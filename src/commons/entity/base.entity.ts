import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseEntity {
  // Não possuo em todas as entidades

  // @CreateDateColumn({ name: 'CRIADO_EM' })
  // createdAt!: Date;

  // @UpdateDateColumn({ name: 'ATUALIZADO_EM' })
  // updatedAt!: Date;

  constructor(data: Partial<BaseEntity> = {}) {
    Object.assign(this, data);
  }
}
