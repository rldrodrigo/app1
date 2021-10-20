import { Component, OnInit } from '@angular/core';

import { Frase } from 'app/shared/frase.model';
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase: '
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  public tentativas: number = 3

  constructor() {
    this.atualizaRodada()
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta(): void {

    if (this.rodadaFrase.frasePtBr == this.resposta) {

      //trocar a pergunta
      this.rodada++
      this.progresso = this.progresso + (100 / this.frases.length)

      //atualiza o objeto rodadaFrase
      this.atualizaRodada()

      this.resposta = ''
    } else {
      //diminuir a variável tentativas
      this.tentativas--
      if (this.tentativas === -1) {

      }
    }
  }

  public atualizaRodada(): void {
    //define a frase da rodada com base em alugma lógica
    this.rodadaFrase = this.frases[this.rodada]
    //limpar resposta
    this.resposta = ''
  }

}
