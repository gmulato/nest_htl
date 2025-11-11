
import { Servico } from "src/servico/entity/servico.entity";
import { ServicoRequest } from "../request/servico.request";
import { ServicoResponse } from "../response/servico.response";

export class ConverterServico{

  static toServico(servicoRequest: ServicoRequest){
    const servico = new Servico();

    if(servicoRequest.servicoId != null){ //se o id não estiver vazio
      servico.servicoId = servicoRequest.servicoId;
    }
    servico.nome = servicoRequest.nome;
    servico.descricao = servicoRequest.descricao;
    servico.valor = servicoRequest.valor;

    return servico;
  }

  static toPartial(servicoRequest: ServicoRequest): Partial<Servico> {
    const patch: Partial<Servico> = {};

    if (servicoRequest.servicoId !== undefined) {
      patch.servicoId = servicoRequest.servicoId;
    }
    if (servicoRequest.nome !== undefined) {
      patch.nome = servicoRequest.nome;
    }
    if (servicoRequest.descricao !== undefined) {
      patch.descricao = servicoRequest.descricao;
    }
    if (servicoRequest.valor !== undefined) {
      patch.valor = servicoRequest.valor;
    }
    
    return patch;
  }

  static toServicoResponse(servico: Servico){

    const servicoResponse = new ServicoResponse();
    servicoResponse.servicoId = servico.servicoId ?? 0;
    servicoResponse.descricao = servico.descricao;
    servicoResponse.valor = servico.valor;
    servicoResponse.nome = servico.nome;

    return servicoResponse;
  }
}