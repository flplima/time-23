import { Injectable, OnApplicationBootstrap, Inject } from "@nestjs/common";
import { CORE_MODULE_OPTIONS } from "./constants";
import { NlpService } from "./nlp/nlp.service";
import { CoreModuleOptions } from "./core.module";
import { ProductsService } from "src/products/products.service";

@Injectable()
export class CoreService implements OnApplicationBootstrap {
  constructor(
    private nlpService: NlpService,
    private productsService: ProductsService,
    @Inject(CORE_MODULE_OPTIONS) private coreModuleOptions: CoreModuleOptions,
  ) {}

  onApplicationBootstrap() {
    this.train();
  }

  async train() {
    const products = await this.productsService.find();
    for (const product of products) {
      this.nlpService.addNamedEntity('produto', product.name, [product.name]);
    }

    // Adicionar frases
    this.nlpService.addDocument('Quero comprar %produto%', 'comprar');

    // Treinar o algoritmo
    await this.nlpService.train();

    // Testes
    const a = await this.nlpService.process('eu quero comprar um arroz');
    console.log(a);
  }

  async process(text: string): Promise<string> {
    const result = await this.nlpService.process(text);
    const { entities } = result;
    const qtd = entities.find(item => item.entity === 'number')?.resolution?.value || 1; 
    console.log(result);
    const product = entities.find(item => item.entity === 'produto')?.option || '???';
    return `OK. Entendi que você quer comprar ${qtd} unidade${qtd > 1 ? 's' : ''} do produto ${product}.`;
  }
  
  dontKnowWhatToSay(text: string) {
    if (text.slice(-1) === '?') {
      return this.coreModuleOptions.notKnowMessage;
    }
    return this.coreModuleOptions.notUnderstandMessage;
  }
}
