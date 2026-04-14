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
exports.ProdutosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/prisma.service");
let ProdutosService = class ProdutosService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async listarPorCategoria(categoriaId) {
        return this.prisma.produto.findMany({
            where: { categoriaId },
            include: {
                marketplaceLinks: true,
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async listarUm(id) {
        return this.prisma.produto.findUnique({
            where: { id },
            include: {
                marketplaceLinks: true,
            },
        });
    }
    async criar(data) {
        const { marketplaceLinks, ...produtoData } = data;
        return this.prisma.produto.create({
            data: {
                ...produtoData,
                preco: produtoData.preco,
                marketplaceLinks: marketplaceLinks ? {
                    create: marketplaceLinks,
                } : undefined,
            },
            include: {
                marketplaceLinks: true,
            },
        });
    }
    async atualizar(id, data) {
        const { marketplaceLinks, ...produtoData } = data;
        if (marketplaceLinks) {
            await this.prisma.marketplaceLink.deleteMany({
                where: { produtoId: id },
            });
        }
        return this.prisma.produto.update({
            where: { id },
            data: {
                ...produtoData,
                marketplaceLinks: marketplaceLinks ? {
                    create: marketplaceLinks,
                } : undefined,
            },
            include: {
                marketplaceLinks: true,
            },
        });
    }
    async excluir(id) {
        return this.prisma.produto.delete({
            where: { id },
        });
    }
};
exports.ProdutosService = ProdutosService;
exports.ProdutosService = ProdutosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProdutosService);
//# sourceMappingURL=produtos.service.js.map