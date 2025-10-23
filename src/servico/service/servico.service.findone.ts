import { Injectable } from "@nestjs/common";
import { tabelaServico } from "./tabela.service";

@Injectable()
export class ServicoServiceFindOne{

  private servico = tabelaServico;
  
  constructor(){}

  findOne(id:number){
    const servico = this.servico.find((c) => c.servicoId === id);
    return servico;
  }
}