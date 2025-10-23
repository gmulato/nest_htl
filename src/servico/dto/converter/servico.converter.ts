
import { Servico } from "src/servico/entity/servico.entity";
import { ServicoRequest } from "../request/servico.request";
import { ServicoResponse } from "../response/servico.response";

export class ConverterServico{

  static toServico(servicoRequest: ServicoRequest){
    const servico = new Servico();

    if(servicoRequest.idServico != null){ //se o id não estiver vazio
      servico.idServico = servicoRequest.idServico;
    }
    servico.nomeServico = servicoRequest.nomeServico;
    servico.codServico = servicoRequest.codServico;

    return servico;
  }

  static toServicoResponse(servico: Servico){

    const servicoResponse = new ServicoResponse();
    servicoResponse.idServico = servico.idServico ?? 0;
    servicoResponse.codServico = servico.codServico;
    servicoResponse.nomeServico = servico.nomeServico;

    return servicoResponse;
  }
}