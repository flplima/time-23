import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";
import { CoreService } from "../core.service";
import { MessagesService } from "./messages.service";
import { Inject } from "@nestjs/common";
import { CORE_MODULE_OPTIONS } from "../constants";
import { CoreModuleOptions } from "../core.module";

@WebSocketGateway()
export class MessagesGateway {
  constructor(
    private messagesService: MessagesService,
    private coreService: CoreService,
    @Inject(CORE_MODULE_OPTIONS) private coreModuleOptions: CoreModuleOptions,
  ) {}

  @WebSocketServer()
  io: Server;

  cart: any[] = [];

  state: string = 'initial';

  name: string = '';

  address: string = '';

  @SubscribeMessage('message')
  async onMessage(
    @MessageBody() data: any,
  ) {
    const userMessage = await this.messagesService.create({
      text: data.text,
      fromUser: true,
    });
    this.io.emit('message', userMessage);

    if (this.state === 'initial') {
      await this.delay();
      this.createAndEmitReponse(`Olá. Bem vindo ao Mercadinho da Ana. Eu sou a Getúlia e irei te ajudar a fazer seu pedido. O que deseja comprar hoje?`)
      this.state = 'buying';
      return;
    }

    if (this.state === 'name') {
      this.name = data.text;
      this.createAndEmitReponse(`Ok, ${this.name}. Agora, qual o seu endereço de entrega?`)
      this.state = 'address';
      return;
    }

    if (this.state === 'address') {
      this.address = data.text;
      this.createAndEmitReponse(`Certo. Agora efetue o pagamento clicando no link abaixo. É rápido e seguro!`);
      await this.delay();
      this.createAndEmitReponse(`https://pag.getnet.com.br/7VUJu1YhJ`);
      await this.delay();
      await this.delay();
      this.createAndEmitReponse(`Seu pagamento foi aprovado e seu pedido foi enviado! Obrigada!`);
      return;
    }

    const [r] = await Promise.all([
      this.coreService.process(userMessage.text),
      new Promise(resolve => setTimeout(resolve, this.coreModuleOptions.responseDelay)),
    ]);

    const result = r as any;

    switch (result.intent) {
      case 'buy': {
        const { entities } = result;
        const qtd = entities.find(item => item.entity === 'number')?.resolution?.value || 1; 
        const productName = entities.find(item => item.entity === 'produto')?.option;
        if (!productName) {
          this.createAndEmitReponse('Não tenho este produto no momento.');
        } else {
          this.cart.push({ productName, qtd });
          this.createAndEmitReponse(`Adicionei ${qtd}x do produto ${productName} ao seu carrinho. Mais alguma coisa ou podemos finalizar o pedido?`);
        }
        break;
      }

      case 'finish': {
        this.state = 'name';
        await this.delay();
        this.createAndEmitReponse(`Seu pedido ficou assim: ${this.cart.map(item => `${item.qtd}x ${item.productName}`).join(', ')}`);
        await this.delay();
        this.createAndEmitReponse(`O total é R$ 89,90`);
        await this.delay();
        this.createAndEmitReponse('Agora vamos finalizar o seu pedido.');
        await this.delay();
        this.createAndEmitReponse('Qual é o seu nome?');
        break;
      }

      default:
        this.createAndEmitReponse('Não entendi. Poderia reformular?');
    }
  }

  delay() {
    return new Promise(r => setTimeout(r, 1000));
  }

  async createAndEmitReponse(text: string) { 
    const responseMessage = await this.messagesService.create({ text });
    this.io.emit('message', responseMessage);
  }
}
