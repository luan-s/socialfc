Pseudo Codigo 


Programa{
	criaFila();
	criaLista();
	abreArquivo();
	fazLabirinto(); //Constroi a matrz do labirinto com base nos dados lidos do arquivo
	percorreLabirinto(); // Cria um vetor, onde cada posicao deste contem um vetor com 4 numeros inteiros, de 1 a 4.
	                     // Cada numero representa uma direcao, por exemplo, 1 = cima e 2 = direita. Em seguida, verifica
					     // se as arestas da matriz labirinto sao  solidas. Caso positivo, prossegue para a funcao abaixo.
	percore(){
		posicaoCorrente = entrada; // Define a posicao corrente para a entrada, para comecar a percorrer o labirinto

		enquanto(posicaoCorrente != saida){
			se(mover(cima) == verdadeiro) // Tenta mudar a posicao atual para cima, em outras palavras, andar para cima.
				continuar;                // Caso consiga, pula para a proxima iteracao do loop.

			se(mover(direita) == verdadeiro) // Tenta mudar a posicao atual para direita, em outras palavras, andar para direita.
				continuar;                   // Caso consiga, pula para a proxima iteracao do loop.

			se(mover(baixo) == verdadeiro) // Tenta mudar a posicao atual para baixo, em outras palavras, andar para baixo.
				continuar;                 // Caso consiga, pula para a proxima iteracao do loop.

			se(mover(esquerda) == verdadeiro) // Tenta mudar a posicao atual para esquerda, em outras palavras, andar para a esquerda.
				continuar;                    // Caso consiga, pula para a proxima iteracao do loop.

			// Caso nao consiga movimentar, desempilha 2 posicoes da pilha (atual e anterior) para voltar para a posicao 
			// anterior e tentar outro caminho
			desempilha();
			desempilha();
			posicaoCorrente = topoPilha;

			// Atualiza a matriz, colocando o caracter '.' nas posicoes invalidas.
			posicaoAnterior = invalida;
		}

		// Redefine a matriz do labirinto, retirando todas as variaveis de controle usadas acima.
		reformulaMatriz(); 

		salvaNaLista(); //Verifica se é a primeira vez que o algoritimo percorre o labirinto ou se o caminho
						// contido na pilha(caminho que acabou de ser percorrido) é menor do que o caminho na lista
						// caso seja, atualiza a lista com o novo caminho mais curto. 

		retorna 1;
	}

	/// De acordo com o parâmetro passado na varivael "direcao", o algoritimo verifica se a posição é percorrivel, ou
	/// seja, não é parede # ou algum caminho já percorrido A.
	mover(direcao){

		se(direcao== 1) linhaAtual -1; // Cima.
		se(direcao== 2) colunaAtual +1;// Direita.
		se(direcao== 3) linhaAtual +1; // Baixo.
		se(direcao== 4) colunaAtual -1;//Esquerda.

		se(posicaoAtual > dimensoesMatriz || posicaoAtual < 0){ //Verifica se a posição atual esta dentro dos limites da matriz
			se(direcao== 1) linhaAtual +1; // Cima.
			se(direcao== 2) colunaAtual -1;// Direita.
			se(direcao== 3) linhaAtual -1; // Baixo.
			se(direcao== 4) colunaAtual +1;//Esquerda.
			retorna 0 // posição invalida.
		}

		se(ePercorrivel(posicaoAtual)){ // Verifica se a pos~ição é percorrivel, caso seja, faz o movimento e atualiza a pilha
			posicaoAnterior = posicaoAtual;
			topoPilha = posicaoAtual; //Empilha
			retorna 1; 
		}senao{
			//Volta com valor anterior ao movimento, já que o movimento falhou.
			se(direcao== 1) linhaAtual +1; // Cima.
			se(direcao== 2) colunaAtual -1;// Direita.
			se(direcao== 3) linhaAtual -1; // Baixo.
			se(direcao== 4) colunaAtual +1;//Esquerda.
			retorna 0;
		}

	}

}