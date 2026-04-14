import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async validarAdministrador(email: string, senha: string): Promise<{ id: string; nome: string; email: string } | null> {
    const administrador = await this.prisma.administrador.findUnique({
      where: { email },
    });

    if (!administrador) {
      return null;
    }

    const senhaValida = await bcrypt.compare(senha, administrador.senha);
    if (!senhaValida) {
      return null;
    }

    return {
      id: administrador.id,
      nome: administrador.nome,
      email: administrador.email,
    };
  }
}
