import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';

@Injectable()
export class UploadService {
  private readonly uploadDir = path.join(process.cwd(), 'uploads');
  private readonly categoriasDir = path.join(this.uploadDir, 'categorias');
  private readonly produtosDir = path.join(this.uploadDir, 'produtos');

  constructor() {
    this.ensureDirectories();
  }

  private ensureDirectories() {
    [this.categoriasDir, this.produtosDir].forEach((dir) => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async uploadImagem(file: Express.Multer.File, tipo: 'categoria' | 'produto'): Promise<string> {
    const ext = path.extname(file.originalname).toLowerCase();
    const allowedExts = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

    if (!allowedExts.includes(ext)) {
      throw new Error('Tipo de arquivo não permitido');
    }

    const hash = crypto.randomBytes(16).toString('hex');
    const filename = `${hash}${ext}`;
    const targetDir = tipo === 'categoria' ? this.categoriasDir : this.produtosDir;
    const filepath = path.join(targetDir, filename);

    await fs.promises.writeFile(filepath, file.buffer);

    return `/uploads/${tipo}s/${filename}`;
  }
}
