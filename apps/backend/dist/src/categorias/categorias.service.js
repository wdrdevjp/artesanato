"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/prisma.service");
let CategoriasService = class CategoriasService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async listarTodas() {
        return this.prisma.categoria.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }
    async listarUma(id) {
        return this.prisma.categoria.findUnique({
            where: { id },
        });
    }
    async criar(data) {
        return this.prisma.categoria.create({
            data,
        });
    }
    async atualizar(id, data) {
        return this.prisma.categoria.update({
            where: { id },
            data,
        });
    }
    async excluir(id) {
        const contagemProdutos = await this.prisma.produto.count({
            where: { categoriaId: id },
        });
        if (contagemProdutos > 0) {
            throw new Error('Não é possível excluir categoria que contém produtos');
        }
        return this.prisma.categoria.delete({
            where: { id },
        });
    }
};
exports.CategoriasService = CategoriasService;
exports.CategoriasService = CategoriasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoriasService);
//# sourceMappingURL=categorias.service.js.map