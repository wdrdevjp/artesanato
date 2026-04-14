export declare class UploadService {
    private readonly uploadDir;
    private readonly categoriasDir;
    private readonly produtosDir;
    constructor();
    private ensureDirectories;
    uploadImagem(file: Express.Multer.File, tipo: 'categoria' | 'produto'): Promise<string>;
}
