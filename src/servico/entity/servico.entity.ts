import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../commons/entity/base.entity';

@Entity('HTL_SERVICO')
export class Servico extends BaseEntity {
  @PrimaryGeneratedColumn('increment', {
    name: 'servico_id',
    type: 'number',
  })
  servicoId?: number;

  @Column({
    name: 'nome',
    type: 'varchar2',
    length: 10,
  })
  nome: string = '';

  @Column({
    name: 'descricao',
    type: 'varchar2',
    length: 50,
  })
  descricao: string = '';

  @Column({
    name: 'valor',
    type: 'number',
  })
  valor: number = 0;

  constructor(data: Partial<Servico> = {}) {
    super();
    Object.assign(this, data);
  }
}