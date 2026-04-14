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
export declare class ProdutosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    listarPorCategoria(categoriaId: string): Promise<({
        marketplaceLinks: {
            url: string;
            id: string;
            createdAt: Date;
            tipo: import("@prisma/client").$Enums.EnumMarketplaceType;
            produtoId: string;
        }[];
    } & {
        id: string;
        nome: string;
        createdAt: Date;
        updatedAt: Date;
        categoriaId: string;
        descricao: string;
        preco: import("@prisma/client-runtime-utils").Decimal;
        imagens: string[];
        linkWhatsApp: string;
    })[]>;
    listarUm(id: string): Promise<({
        marketplaceLinks: {
            url: string;
            id: string;
            createdAt: Date;
            tipo: import("@prisma/client").$Enums.EnumMarketplaceType;
            produtoId: string;
        }[];
    } & {
        id: string;
        nome: string;
        createdAt: Date;
        updatedAt: Date;
        categoriaId: string;
        descricao: string;
        preco: import("@prisma/client-runtime-utils").Decimal;
        imagens: string[];
        linkWhatsApp: string;
    }) | null>;
    criar(data: CriarProdutoInput): Promise<{
        marketplaceLinks: {
            url: string;
            id: string;
            createdAt: Date;
            tipo: import("@prisma/client").$Enums.EnumMarketplaceType;
            produtoId: string;
        }[];
    } & {
        id: string;
        nome: string;
        createdAt: Date;
        updatedAt: Date;
        categoriaId: string;
        descricao: string;
        preco: import("@prisma/client-runtime-utils").Decimal;
        imagens: string[];
        linkWhatsApp: string;
    }>;
    atualizar(id: string, data: AtualizarProdutoInput): Promise<{
        marketplaceLinks: {
            url: string;
            id: string;
            createdAt: Date;
            tipo: import("@prisma/client").$Enums.EnumMarketplaceType;
            produtoId: string;
        }[];
    } & {
        id: string;
        nome: string;
        createdAt: Date;
        updatedAt: Date;
        categoriaId: string;
        descricao: string;
        preco: import("@prisma/client-runtime-utils").Decimal;
        imagens: string[];
        linkWhatsApp: string;
    }>;
    excluir(id: string): Promise<{
        id: string;
        nome: string;
        createdAt: Date;
        updatedAt: Date;
        categoriaId: string;
        descricao: string;
        preco: import("@prisma/client-runtime-utils").Decimal;
        imagens: string[];
        linkWhatsApp: string;
    }>;
}
export {};
