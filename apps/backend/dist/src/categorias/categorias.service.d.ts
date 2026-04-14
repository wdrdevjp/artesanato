import { PrismaService } from '../common/prisma.service';
export declare class CategoriasService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    listarTodas(): Promise<{
        id: string;
        nome: string;
        createdAt: Date;
        updatedAt: Date;
        imagem: string;
    }[]>;
    listarUma(id: string): Promise<{
        id: string;
        nome: string;
        createdAt: Date;
        updatedAt: Date;
        imagem: string;
    } | null>;
    criar(data: {
        nome: string;
        imagem: string;
    }): Promise<{
        id: string;
        nome: string;
        createdAt: Date;
        updatedAt: Date;
        imagem: string;
    }>;
    atualizar(id: string, data: {
        nome?: string;
        imagem?: string;
    }): Promise<{
        id: string;
        nome: string;
        createdAt: Date;
        updatedAt: Date;
        imagem: string;
    }>;
    excluir(id: string): Promise<{
        id: string;
        nome: string;
        createdAt: Date;
        updatedAt: Date;
        imagem: string;
    }>;
}
