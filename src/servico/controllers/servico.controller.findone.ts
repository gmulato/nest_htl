import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { ServicoServiceFindOne } from '../service/servico.service.findone';
import { ROUTE } from 'src/commons/constants/url.sistema';

@Controller(ROUTE.SERVICO.BASE)
export class ServicoControllerFindOne {
  constructor(private readonly servicoServiceFindOne : ServicoServiceFindOne){}

  @HttpCode(HttpStatus.OK)
  @Get(ROUTE.SERVICO.BY_ID)
  findOne(@Param('id', ParseIntPipe) id: number) { //ParseIntPipe converte em inteiro
    const servico = this.servicoServiceFindOne.findOne(id);// + converte a string para um number
    return servico;
  }
}
