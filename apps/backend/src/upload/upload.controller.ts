import { Controller, Post, UseGuards, UseInterceptors, UploadedFile, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('imagem'))
  async upload(@UploadedFile() file: Express.Multer.File, @Body('tipo') tipo: string) {
    if (!file) {
      return { success: false, erro: 'Nenhum arquivo enviado' };
    }

    if (tipo !== 'categoria' && tipo !== 'produto') {
      return { success: false, erro: 'Tipo deve ser "categoria" ou "produto"' };
    }

    try {
      const path = await this.uploadService.uploadImagem(file, tipo);
      return { success: true, path };
    } catch (error: any) {
      return { success: false, erro: error.message };
    }
  }
}
