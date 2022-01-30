import { Injectable } from "@nestjs/common";
import { Livro } from "./livro.model";

@Injectable()
export class LivrosService {

    private livros: Livro[] = [
        // new Livro('LIV01', 'Livro TDD', 29.90),
        // new Livro('LIV02', 'Livro Flutter', 39.90),
        // new Livro('LIV03', 'Livro IA', 29.90)
    ];

    obterTodos(): Livro[] {
        return this.livros;
    }

    obterUm(id: number): Livro {
        return this.livros[0];
    }

    criar(livro: Livro) {
        this.livros.push(livro);
    }

    alterar(livro: Livro) {
        return livro;
    }

    apagar(id: number) {
        this.livros.pop();
    }
}