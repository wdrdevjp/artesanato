import { CategoriasService } from './categorias.service';
export declare class CategoriasController {
    private readonly categoriasService;
    constructor(categoriasService: CategoriasService);
    listar(): Promise<{
        success: boolean;
        categorias: {
            id: string;
            nome: string;
            createdAt: Date;
            updatedAt: Date;
            imagem: string;
        }[];
    }>;
    listarUma(id: string): Promise<{
        success: boolean;
        erro: string;
        categoria?: undefined;
    } | {
        success: boolean;
        categoria: {
            id: string;
            nome: string;
            createdAt: Date;
            updatedAt: Date;
            imagem: string;
        };
        erro?: undefined;
    }>;
    criar(body: {
        nome: string;
        imagem: string;
    }): Promise<{
        success: boolean;
        categoria: {
            id: string;
            nome: string;
            createdAt: Date;
            updatedAt: Date;
            imagem: string;
        };
    }>;
    atualizar(id: string, body: {
        nome?: string;
        imagem?: string;
    }): Promise<{
        success: boolean;
        categoria: {
            id: string;
            nome: string;
            createdAt: Date;
            updatedAt: Date;
            imagem: string;
        };
        erro?: undefined;
    } | {
        success: boolean;
        erro: string;
        categoria?: undefined;
    }>;
    excluir(id: string): Promise<{
        success: boolean;
        erro?: undefined;
    } | {
        success: boolean;
        erro: any;
    }>;
}
