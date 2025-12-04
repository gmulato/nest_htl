import { Hospede } from "src/hospede/entity/hospede.entity";
import { Funcionario } from 'src/funcionario/entity/funcionario.entity';
import { HospedeRequest } from "../request/hospede.request";
import { HospedeResponse } from "../response/hospede.response";
import { Quarto } from "src/quarto/entity/quarto.entity";

export class ConverterHospede{

  static toHospede(hospedeRequest: HospedeRequest){
    const hospede = new Hospede();
    if (hospedeRequest.hospedeId != null && hospedeRequest.hospedeId > 0) {
      hospede.hospedeId = hospedeRequest.hospedeId;
    }
    hospede.nome = hospedeRequest.nome;
    hospede.cpf = hospedeRequest.cpf;
    hospede.rg = hospedeRequest.rg;
    hospede.sexo = hospedeRequest.sexo;
    if (hospedeRequest.dataNascimento != null) {
      hospede.dataNascimento = typeof hospedeRequest.dataNascimento === 'string'
        ? new Date(hospedeRequest.dataNascimento)
        : hospedeRequest.dataNascimento;
    }
    hospede.email = hospedeRequest.email;
    hospede.telefone = hospedeRequest.telefone;
    if(hospedeRequest.criadoPorId != null && hospedeRequest.criadoPorId > 0){
      hospede.criadoPor = new Funcionario({ funcionarioId: hospedeRequest.criadoPorId });
    }
    return hospede;
  }

  static toPartial(hospedeRequest: HospedeRequest): Partial<Hospede> {
    const patch: Partial<Hospede> = {};

    if (hospedeRequest.nome !== undefined) {
      patch.nome = hospedeRequest.nome;
    }

    if (hospedeRequest.cpf !== undefined) {
      patch.cpf = hospedeRequest.cpf;
    }

    if (hospedeRequest.rg !== undefined) {
      patch.rg = hospedeRequest.rg;
    }

    if (hospedeRequest.sexo !== undefined) {
      patch.sexo = hospedeRequest.sexo;
    }

    if (hospedeRequest.dataNascimento !== undefined) {
      patch.dataNascimento =
        typeof hospedeRequest.dataNascimento === 'string'
          ? new Date(hospedeRequest.dataNascimento)
          : hospedeRequest.dataNascimento;
    }

    if (hospedeRequest.email !== undefined) {
      patch.email = hospedeRequest.email;
    }

    if (hospedeRequest.telefone !== undefined) {
      patch.telefone = hospedeRequest.telefone;
    }

    if (
      hospedeRequest.criadoPorId !== undefined &&
      hospedeRequest.criadoPorId > 0
    ) {
      patch.criadoPor = new Funcionario({
        funcionarioId: hospedeRequest.criadoPorId,
      });
    }

    return patch;
  }

  static toHospedeResponse(hospede: Hospede){
    const hospedeResponse = new HospedeResponse();
    hospedeResponse.hospedeId = hospede.hospedeId;
    hospedeResponse.nome = hospede.nome;
    hospedeResponse.cpf = hospede.cpf;
    hospedeResponse.rg = hospede.rg;
    hospedeResponse.sexo = hospede.sexo;
    hospedeResponse.dataNascimento = hospede.dataNascimento;
    hospedeResponse.email = hospede.email;
    hospedeResponse.telefone = hospede.telefone;
    hospedeResponse.criadoEm = hospede.criadoEm;
    hospedeResponse.atualizadoEm = hospede.atualizadoEm;
    hospedeResponse.criadoPorId = hospede.criadoPor?.funcionarioId;
    hospedeResponse.criadoPorNome = hospede.criadoPor?.nome;
    return hospedeResponse;
  }
}