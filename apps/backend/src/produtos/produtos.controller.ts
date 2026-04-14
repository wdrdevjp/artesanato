import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller()
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get('categorias/:categoriaId/produtos')
  async listarPorCategoria(@Param('categoriaId') categoriaId: string) {
    const produtos = await this.produtosService.listarPorCategoria(categoriaId);
    return { success: true, produtos };
  }

  @Get('produtos/:id')
  async listarUm(@Param('id') id: string) {
    const produto = await this.produtosService.listarUm(id);
    if (!produto) {
      return { success: false, erro: 'Produto não encontrado' };
    }
    return { success: true, produto };
  }

  @Post('produtos')
  @UseGuards(AuthGuard)
  async criar(@Body() body: any) {
    const produto = await this.produtosService.criar(body);
    return { success: true, produto };
  }

  @Put('produtos/:id')
  @UseGuards(AuthGuard)
  async atualizar(@Param('id') id: string, @Body() body: any) {
    try {
      const produto = await this.produtosService.atualizar(id, body);
      return { success: true, produto };
    } catch (error) {
      return { success: false, erro: 'Produto não encontrado' };
    }
  }

  @Delete('produtos/:id')
  @UseGuards(AuthGuard)
  async excluir(@Param('id') id: string) {
    try {
      await this.produtosService.excluir(id);
      return { success: true };
    } catch (error) {
      return { success: false, erro: 'Produto não encontrado' };
    }
  }
}
