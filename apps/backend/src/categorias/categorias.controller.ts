import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Get()
  async listar() {
    const categorias = await this.categoriasService.listarTodas();
    return { success: true, categorias };
  }

  @Get(':id')
  async listarUma(@Param('id') id: string) {
    const categoria = await this.categoriasService.listarUma(id);
    if (!categoria) {
      return { success: false, erro: 'Categoria não encontrada' };
    }
    return { success: true, categoria };
  }

  @Post()
  @UseGuards(AuthGuard)
  async criar(@Body() body: { nome: string; imagem: string }) {
    const categoria = await this.categoriasService.criar(body);
    return { success: true, categoria };
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  async atualizar(@Param('id') id: string, @Body() body: { nome?: string; imagem?: string }) {
    try {
      const categoria = await this.categoriasService.atualizar(id, body);
      return { success: true, categoria };
    } catch (error) {
      return { success: false, erro: 'Categoria não encontrada' };
    }
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async excluir(@Param('id') id: string) {
    try {
      await this.categoriasService.excluir(id);
      return { success: true };
    } catch (error: any) {
      if (error.message === 'Não é possível excluir categoria que contém produtos') {
        return { success: false, erro: error.message };
      }
      return { success: false, erro: 'Categoria não encontrada' };
    }
  }
}
