import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class CategoriasService {
  constructor(private readonly prisma: PrismaService) {}

  async listarTodas() {
    return this.prisma.categoria.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async listarUma(id: string) {
    return this.prisma.categoria.findUnique({
      where: { id },
    });
  }

  async criar(data: { nome: string; imagem: string }) {
    return this.prisma.categoria.create({
      data,
    });
  }

  async atualizar(id: string, data: { nome?: string; imagem?: string }) {
    return this.prisma.categoria.update({
      where: { id },
      data,
    });
  }

  async excluir(id: string) {
    const contagemProdutos = await this.prisma.produto.count({
      where: { categoriaId: id },
    });

    if (contagemProdutos > 0) {
      throw new Error('Não é possível excluir categoria que contém produtos');
    }

    return this.prisma.categoria.delete({
      where: { id },
    });
  }
}
