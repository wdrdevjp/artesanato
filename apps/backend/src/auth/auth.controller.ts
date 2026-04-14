import { Request } from 'express';
import { Controller, Post, Body, Req, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

interface LoginDto {
  email: string;
  senha: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto, @Req() req: Request) {
    const administrador = await this.authService.validarAdministrador(loginDto.email, loginDto.senha);

    if (!administrador) {
      return {
        success: false,
        erro: 'Credenciais inválidas',
      };
    }

    const session = req.session as any;
    session.administradorId = administrador.id;
    session.administrador = {
      id: administrador.id,
      nome: administrador.nome,
      email: administrador.email,
    };

    return {
      success: true,
      administrador,
    };
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@Req() req: Request) {
    return new Promise((resolve, reject) => {
      req.session.destroy((err) => {
        if (err) {
          reject(err);
        } else {
          resolve({ success: true });
        }
      });
    });
  }
}
