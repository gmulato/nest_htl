import { Injectable } from "@nestjs/common";
import { ServicoRequest } from "../dto/request/servico.request";
import { ConverterServico } from "../dto/converter/servico.converter";
import { tabelaServico } from "./tabela.service";

@Injectable()
export class ServicoServiceCreate{

  private servicos = tabelaServico;
  constructor(){}

  create(servicoRequest:ServicoRequest){
    const servico = ConverterServico.toServico(servicoRequest);

    const newIdServico = this.servicos.length + 1;

    const newServico = {
      ...servico,
      servicoId : newIdServico,
    };

    this.servicos.push(newServico);

    const servicoResponse = ConverterServico.toServicoResponse(newServico);

    return servicoResponse;
  }
}