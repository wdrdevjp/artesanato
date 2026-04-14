import { ProdutosService } from './produtos.service';
export declare class ProdutosController {
    private readonly produtosService;
    constructor(produtosService: ProdutosService);
    listarPorCategoria(categoriaId: string): Promise<{
        success: boolean;
        produtos: ({
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
        })[];
    }>;
    listarUm(id: string): Promise<{
        success: boolean;
        erro: string;
        produto?: undefined;
    } | {
        success: boolean;
        produto: {
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
        };
        erro?: undefined;
    }>;
    criar(body: any): Promise<{
        success: boolean;
        produto: {
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
        };
    }>;
    atualizar(id: string, body: any): Promise<{
        success: boolean;
        produto: {
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
        };
        erro?: undefined;
    } | {
        success: boolean;
        erro: string;
        produto?: undefined;
    }>;
    excluir(id: string): Promise<{
        success: boolean;
        erro?: undefined;
    } | {
        success: boolean;
        erro: string;
    }>;
}
