import { Injectable } from "@nestjs/common";
import { tabelaServico } from "./tabela.service";

@Injectable()
export class ServicoServiceFindAll{

  private servicos = tabelaServico;
  constructor(){}

  findAll(){
    return this.servicos;
  }
}