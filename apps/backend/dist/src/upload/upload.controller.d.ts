import { UploadService } from './upload.service';
export declare class UploadController {
    private readonly uploadService;
    constructor(uploadService: UploadService);
    upload(file: Express.Multer.File, tipo: string): Promise<{
        success: boolean;
        path: string;
        erro?: undefined;
    } | {
        success: boolean;
        erro: any;
        path?: undefined;
    }>;
}
