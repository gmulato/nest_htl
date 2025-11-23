
import { Funcionario } from "src/funcionario/entity/funcionario.entity";
import { FuncionarioRequest } from "../request/funcionario.request";
import { FuncionarioResponse } from "../response/funcionario.response";

export class ConverterFuncionario{

  static toFuncionario(funcionarioRequest: FuncionarioRequest){
    const funcionario = new Funcionario();

    if(funcionarioRequest.funcionarioId != null){ //se o id não estiver vazio
      funcionario.funcionarioId = funcionarioRequest.funcionarioId;
    }
    funcionario.nome = funcionarioRequest.nome;
    funcionario.email = funcionarioRequest.email;
    funcionario.senha = funcionarioRequest.senha;
    funcionario.ativo = funcionarioRequest.ativo;

    return funcionario;
  }

  static toPartial(funcionarioRequest: FuncionarioRequest): Partial<Funcionario> {
    const patch: Partial<Funcionario> = {};

    if (funcionarioRequest.funcionarioId !== undefined) {
      patch.funcionarioId = funcionarioRequest.funcionarioId;
    }
    if (funcionarioRequest.nome !== undefined) {
      patch.nome = funcionarioRequest.nome;
    }
    if (funcionarioRequest.email !== undefined) {
      patch.email = funcionarioRequest.email;
    }
    if (funcionarioRequest.senha !== undefined) {
      patch.senha = funcionarioRequest.senha;
    }
    if (funcionarioRequest.ativo !== undefined) {
      patch.ativo = funcionarioRequest.ativo;
    }
    
    return patch;
  }

  static toFuncionarioResponse(funcionario: Funcionario){

    const funcionarioResponse = new FuncionarioResponse();
    funcionarioResponse.funcionarioId = funcionario.funcionarioId ?? 0;
    funcionarioResponse.ativo = funcionario.ativo;
    funcionarioResponse.senha = funcionario.senha;
    funcionarioResponse.email = funcionario.email;
    funcionarioResponse.nome = funcionario.nome;

    return funcionarioResponse;
  }
}