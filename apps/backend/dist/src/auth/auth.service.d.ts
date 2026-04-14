import { PrismaService } from '../common/prisma.service';
export declare class AuthService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    validarAdministrador(email: string, senha: string): Promise<{
        id: string;
        nome: string;
        email: string;
    } | null>;
}
