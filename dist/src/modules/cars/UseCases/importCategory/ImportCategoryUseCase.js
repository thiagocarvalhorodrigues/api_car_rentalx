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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportCategoryUseCase = void 0;
const tsyringe_1 = require("tsyringe");
const csv_parse_1 = require("csv-parse");
const fs_1 = __importDefault(require("fs"));
let ImportCategoryUseCase = class ImportCategoryUseCase {
    constructor(categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    loadCategories(file) {
        return new Promise((resolve, reject) => {
            const stream = fs_1.default.createReadStream(file.path);
            const categories = [];
            const parseFile = (0, csv_parse_1.parse)();
            stream.pipe(parseFile);
            parseFile.on("data", async (line) => {
                const [name, description] = line;
                categories.push({
                    name,
                    description
                });
            })
                .on("end", () => {
                fs_1.default.promises.unlink(file.path);
                resolve(categories);
            })
                .on("error", (err) => {
                reject(err);
            });
        });
    }
    async execute(file) {
        const categories = await this.loadCategories(file);
        console.log(categories);
        categories.map(async (category) => {
            const { name, description } = category;
            const existeCategory = await this.categoriesRepository.findByName(name);
            if (!existeCategory) {
                await this.categoriesRepository.create({
                    name,
                    description
                });
            }
        });
    }
};
ImportCategoryUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("CategoriesRepository")),
    __metadata("design:paramtypes", [Object])
], ImportCategoryUseCase);
exports.ImportCategoryUseCase = ImportCategoryUseCase;
