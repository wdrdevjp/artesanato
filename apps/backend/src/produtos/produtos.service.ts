import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

interface MarketplaceLinkInput {
  tipo: 'Shopee' | 'MercadoLivre';
  url: string;
}

interface CriarProdutoInput {
  categoriaId: string;
  nome: string;
  descricao: string;
  preco: number;
  imagens: string[];
  linkWhatsApp: string;
  marketplaceLinks?: MarketplaceLinkInput[];
}

interface AtualizarProdutoInput {
  nome?: string;
  descricao?: string;
  preco?: number;
  imagens?: string[];
  linkWhatsApp?: string;
  marketplaceLinks?: MarketplaceLinkInput[];
}

@Injectable()
export class ProdutosService {
  constructor(private readonly prisma: PrismaService) {}

  async listarPorCategoria(categoriaId: string) {
    return this.prisma.produto.findMany({
      where: { categoriaId },
      include: {
        marketplaceLinks: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async listarUm(id: string) {
    return this.prisma.produto.findUnique({
      where: { id },
      include: {
        marketplaceLinks: true,
      },
    });
  }

  async criar(data: CriarProdutoInput) {
    const { marketplaceLinks, ...produtoData } = data;

    return this.prisma.produto.create({
      data: {
        ...produtoData,
        preco: produtoData.preco,
        marketplaceLinks: marketplaceLinks ? {
          create: marketplaceLinks,
        } : undefined,
      },
      include: {
        marketplaceLinks: true,
      },
    });
  }

  async atualizar(id: string, data: AtualizarProdutoInput) {
    const { marketplaceLinks, ...produtoData } = data;

    if (marketplaceLinks) {
      await this.prisma.marketplaceLink.deleteMany({
        where: { produtoId: id },
      });
    }

    return this.prisma.produto.update({
      where: { id },
      data: {
        ...produtoData,
        marketplaceLinks: marketplaceLinks ? {
          create: marketplaceLinks,
        } : undefined,
      },
      include: {
        marketplaceLinks: true,
      },
    });
  }

  async excluir(id: string) {
    return this.prisma.produto.delete({
      where: { id },
    });
  }
}
