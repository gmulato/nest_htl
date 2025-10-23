import { Injectable } from "@nestjs/common";
import { ServicoRequest } from "../dto/request/servico.request";
import { ConverterServico } from "../dto/converter/servico.converter";
import { tabelaServico } from "./tabela.service";

@Injectable()
export class ServicoServiceUpdate{

  private servicos = tabelaServico;

  constructor(){}

  update(id:number, servicoRequest:ServicoRequest){
    
    const servico = ConverterServico.toServico(servicoRequest);
    const servicoIndex = this.servicos.findIndex((c) => c.servicoId === id);
    const servicoCadastrada = this.servicos[servicoIndex];
    const currentDate = new Date();
    this.servicos[servicoIndex] = {
      ...servicoCadastrada,
      ...servico,
      createdAt: servicoCadastrada.createdAt || currentDate,
      updatedAt: currentDate
    }

    const servicoResponse = ConverterServico.toServicoResponse(this.servicos[servicoIndex]);
    return servicoResponse;
  }
}