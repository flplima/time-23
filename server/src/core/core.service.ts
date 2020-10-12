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

    this.nlpService.addDocument('Quero comprar %produto%', 'buy');
    this.nlpService.addDocument('comprar %produto%', 'buy');
    this.nlpService.addDocument('Quero %produto%', 'buy');
    this.nlpService.addDocument('Adicione %produto%', 'buy');
    this.nlpService.addDocument('Adicionar %produto%', 'buy');

    this.nlpService.addDocument('Finalizar pedido', 'finish');
    this.nlpService.addDocument('Só isso mesmo', 'finish');

    // Treinar o algoritmo
    await this.nlpService.train();

  }

  async process(text: string) {
    const result = await this.nlpService.process(text);
    return result;
  }
  
  dontKnowWhatToSay(text: string) {
    if (text.slice(-1) === '?') {
      return this.coreModuleOptions.notKnowMessage;
    }
    return this.coreModuleOptions.notUnderstandMessage;
  }
}
