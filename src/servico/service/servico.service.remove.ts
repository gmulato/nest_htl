import { Injectable } from "@nestjs/common";
import { tabelaServico } from "./tabela.service";

@Injectable()
export class ServicoServiceRemove{

  private servico = tabelaServico;
  constructor(){}

  remove(id:number){
    const servicoIndex = this.servico.findIndex((c) => c.servicoId === id);
    this.servico.splice(servicoIndex, 1);
    return this.servico;
  }
}