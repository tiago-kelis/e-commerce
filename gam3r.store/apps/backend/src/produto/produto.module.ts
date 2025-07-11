/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProdutoController } from './produto.controller';

@Module({
  controllers: [ProdutoController]
})
export class ProdutoModule {}
