import { Request } from 'express';
import { AuthService } from './auth.service';
interface LoginDto {
    email: string;
    senha: string;
}
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto, req: Request): Promise<{
        success: boolean;
        erro: string;
        administrador?: undefined;
    } | {
        success: boolean;
        administrador: {
            id: string;
            nome: string;
            email: string;
        };
        erro?: undefined;
    }>;
    logout(req: Request): Promise<unknown>;
}
export {};
