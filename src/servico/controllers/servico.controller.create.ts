import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ServicoRequest } from '../dto/request/servico.request';
import { ServicoServiceCreate } from '../service/servico.service.create';
import { ROUTE } from 'src/commons/constants/url.sistema';

@Controller(ROUTE.SERVICO.BASE)
export class ServicoControllerCreate {

  constructor(private readonly servicoServiceCreate: ServicoServiceCreate){}

  @HttpCode(HttpStatus.CREATED)
  @Post(ROUTE.SERVICO.CREATE)
  create(@Body() servicoRequest: ServicoRequest) {
    const response = this.servicoServiceCreate.create(servicoRequest);
    return response;
  }
}
