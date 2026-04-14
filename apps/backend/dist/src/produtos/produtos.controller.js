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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosController = void 0;
const common_1 = require("@nestjs/common");
const produtos_service_1 = require("./produtos.service");
const auth_guard_1 = require("../common/guards/auth.guard");
let ProdutosController = class ProdutosController {
    produtosService;
    constructor(produtosService) {
        this.produtosService = produtosService;
    }
    async listarPorCategoria(categoriaId) {
        const produtos = await this.produtosService.listarPorCategoria(categoriaId);
        return { success: true, produtos };
    }
    async listarUm(id) {
        const produto = await this.produtosService.listarUm(id);
        if (!produto) {
            return { success: false, erro: 'Produto não encontrado' };
        }
        return { success: true, produto };
    }
    async criar(body) {
        const produto = await this.produtosService.criar(body);
        return { success: true, produto };
    }
    async atualizar(id, body) {
        try {
            const produto = await this.produtosService.atualizar(id, body);
            return { success: true, produto };
        }
        catch (error) {
            return { success: false, erro: 'Produto não encontrado' };
        }
    }
    async excluir(id) {
        try {
            await this.produtosService.excluir(id);
            return { success: true };
        }
        catch (error) {
            return { success: false, erro: 'Produto não encontrado' };
        }
    }
};
exports.ProdutosController = ProdutosController;
__decorate([
    (0, common_1.Get)('categorias/:categoriaId/produtos'),
    __param(0, (0, common_1.Param)('categoriaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "listarPorCategoria", null);
__decorate([
    (0, common_1.Get)('produtos/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "listarUm", null);
__decorate([
    (0, common_1.Post)('produtos'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "criar", null);
__decorate([
    (0, common_1.Put)('produtos/:id'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "atualizar", null);
__decorate([
    (0, common_1.Delete)('produtos/:id'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "excluir", null);
exports.ProdutosController = ProdutosController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [produtos_service_1.ProdutosService])
], ProdutosController);
//# sourceMappingURL=produtos.controller.js.map