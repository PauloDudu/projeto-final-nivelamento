

/*  5° Crie um outro arquivo com o nome de javaScript.js
    6° Dentro do arquivo javascript, preciso que me explique da forma que você achar melhor o
    que é:
    6.1 variáveis e constantes, quero exemplos.
    6.2 comandos de decisão, quero exemplos.
    6.3 loops, quero exemplos.
    6.4 funções, quero exemplos.
    6.5 escopos, quero exemplos.
    6.6 inputs e outputs, quero exemplos.
    6.7 array, quero exemplos.
    6.8 objetos, quero exemplos.
    6.9 (camelCase, PascalCase, kibab-case, snake_case).
    6.10 Diferença entre caminho absoluto e caminho relativo.
    6.11 Diferença entre os operadores &&, ||, == e !=
    6.12 O que é EPER, e para que serve.
    6.13 Explique o que é Pilha e Fila, quero exemplos.
    6.14 Explique com suas palavras qual a diferença entre html, javascript e css
*/

/*          variáveis e constantes, quero exemplos

    Variaveis sao "conteiners" que armazenam valores que o usuario podera usar em alguma funcionalidade

    ex:

            var a = 12 ; var b = "Marcelo" ; var c = true

            -> as variaveis podem ter seu valor alterado durante o algoritmo o que tras o nome variavel

            var a = 10;   a tem o valor 10 
            var a = 20;   a agora tem o valor 20 e nao o valor 10



    As costantes sao quase a mesma coisa porem elas nao poder ter seu valor alterado, ou seja uma
    vez que eu atribuo um valor a uma constante ela nn pode ter outro valor a nao ser o inicial.

            const b = 10;  b tem o valor 10
            const b = 20;  <error>
    

*/

/*          comandos de decisão, quero exemplos

    Comandos sao "ordens" que o programador ira dar ao algoritmo para ele realizar

        ex:

            alert("Fui ordenado a disparar um alerta no navehador")

            ao dar esse comando ("alert()") estou pedindo para que o navegador dispare uma 
            mensagem de alerta.

    Decisões sao tomadas de acordo com condições as quais um comando será realizado ou nao.

        ex:

            var a = 10;                              -> Eu atribui um valor a variavel a e ele é 10
            if(var a == 10){                        -> A decisao a ser tomada é se ele ira alertar no    
                alert("a é igual a 10");             no navegador se a é ou não é igual a 10
            }else {                                 -> Então como a variavel a tem o valor 10 
                alert("a nao é igual a 10");         o alerta sera feito dizendo que a e igual a 10
            };

            ->Explicando esse trexo de algoritmo
            a variavel a recebe o valor 10, entao a agora vale 10, a condicional analisa a variavel a,
            se a for igual a 10 ira alertar que "a é igual a 10" se nao ira alertar que "a nao é igual a 10".


*/

/*          loops, quero exemplos

    Loops sao laços de repetição que irão se repetir ate que uma determinada condição seja obtida.

    -> irei usar o while, porem a outros como o for, do, for in, for of.
    
    ex: 

            var b = 1                             -> A condição estabelecida e a de que enquanto o valor
            while(b < 5){                         de b for menor que cindo ele ira imprimir o valor de b
                document.write(b) ;                na tela, e a cada vez que imprime o valor de b sera 
                b++                               acrescentado um para que uma hora ele chegue a 5 e pare
            };                                    o loop, pois a condição exige que ele seja menor que 5
            alert("nao sou mais menor que 5");     para funcionar e quando saie do loop alertara a mensagem.

*/

/*          funções, quero exemplos.

    funções sao uma serie de comandos que sao executados apenas caso sejam "chamados"

    ex:

    function alerta(){              -> Essa funcao realizara um alerta apenas se eu chamar ela, de que forma?
        alert("fui chamado");       -> alerta() ->esa e amaneira que eu chamo esse tipo de funcao entao caso 
    };                              nao tenha esse comando no algoritmo a funcao nao sera executada.

*/

/*          escopos, quero exemplos

    escopos sao a definiçao de areas onde uma variavel vai funcionar.

    se eu criar uma variavel em contexto local ela funcionara apenas nesse contexto local.

    ex: se eu criar uma variavel dentro de uma função essa variavel sera criada quando a funcao for 
    chamada e sera destruida quando essa função parar de executar. nao permitindo que eu use essa variavel
    fora da função.


    var n1 = 2;                         -> a função sera chamada adicionando os valores de n1 e n2 em a e b
    var n2 = 3;                         e dentro da função ele somara os 2 valores e impromira na tela 
_                                       porem quando acabar a função a e b serao destuidos e o document.write
    soma(n1,n2);                        em seguida nao conseguira imprimir nada por as variaveis a e b sao de              
_                                       escopo local. Mas quadndo for pedido pra imprimir n1 + n2 
    function soma(a,b){                 ela conseguirá imprimir por sao de escopo global.
        document.write(a + B);
    }

    document.write(a + b)
    document.write(n1 + n2)



*/
/*      inputs e outputs, quero exemplos

    Imputs sao comandos que aparecem na tela e retornam uma situação pro programador e os autputs
    tambem sao comandos porem nao retornam nada.

    ex: imput

    var a = prompot("Digite algo: ")          

     -> O usuario ira digitar algo no navegador e esse valor sera retornado ao programador dentro da
     variaveel a.

     
        output

    usando a variavel a, supunhamos que o usuario tenha digitado "ola"

    o comando output "document.write" ira imprimi a na tela porem apenas imprimir nao irá receber nada

    document.write(a)                                  

*/
/*      array, quero exemplos

    Array e uma variavel com uma cadeia de informações 

    var nomes = ["Pedro", "Marcelo", "Thiago"];

    pra definila eu uso a colchete
*/

/*       objetos, quero exemplos

    um objeto é parecido com o array porem sua caracteristica definitiva e que as informaçoes sao
    sao detalhadas.

    ex: var aluno = {nome: "Paulo", idade: 19, altura: 1,75};

    pra definila eu uso chaves e dentro dela o dois pontos significa atribuiçÕ
*/

/*          (camelCase, PascalCase, kibab-case, snake_case)

    Sao formas de escitas em determinada linguagem de programação.

    ex: 
        camelCase: se escreve com o codigo em lower case e a inicial de cada palavre a partir da segunda
        é maiuscula
        PascalCase: todas as iniciais sao maiuscilas
        kibab-case: tudo lower case e as palavras separadas por ifens
        snake_case: escrita lower case com as palavras separadas por underlines

*/
/*      Diferença entre caminho absoluto e caminho relativo

    caminho absoluto é o caminho padrão ao qual um arquivo esta localizado.

    por exemplo eu tenho um arquivo html numa pasta que esta na area de trabalho 
    
    seu caminho sera´

    -> desktop/pasta/arquivo.html

    ja o caminho relativo funciona a partir de onde o arquivo esta localizado.

    por exemplo

    estou usando o arquivo html definido anteriormente e quero acessar informaçoes de outro 
    arquivo na mesma pasta porem quero usar um caminho diferente do padrao que pode ser grande muitas vezes
    
    eu usaria ./ que significa acesse a pasta em que eu estou e proucure por outros arquivos para que
    eu possa acessar.

    entao se nesa pasta tiver outros arquivos eu poderer acessar assim

    ./arquivodiferente.html
*/  

/*          Diferença entre os operadores &&, ||, == e !=

    && -> e;  || -> ou;  == -> comparação;  != -> diferença;

    && e || -> sao usados quando quero conferir uma verdade 
    
    no && as duas opçoes devem ser verdade para verificar verdade 
    eno || uma das duas ocçoes sao necessarias para eu devolver verdade ou falsa para devolver falsa


    == e != -> sao comparaçoes 

    usamos == para verificar se duas coisas sao iguais
    usamos != para verificar se duas coisas sao diferentes

*/

/*       O que é EPER, e para que serve

        EPER - Entender Planejar Executar e revisar

        Forma eficiente para se utilizar em todas as coisas na vida caso queiramos
        ter um resultado eficiente pois contem todos os passos necessarios para encararmosum
        e descobrirmos como resolve lo.

        primeiro entendendo o que e preciso ser feito depois planejam como deve ser feito
        e executando pra ver se funciona e revisando para remover erros e aperfeicoar.

*/

/*      Explique o que é Pilha e Fila, quero exemplos

    pilha e como uma pilha de livros onde o primeiro componente que entra é o ultimo que sai

    a fila e como uma fila de banco onde o primeiro que entra é o primeiro que sai

    eu entendi esse coinceito mas nn entendi na pratica como funciona esse entra e sai

*/
/*          Explique com suas palavras qual a diferença entre html, javascript e css

    HTML, JavaScript e Css, sao ferramentas de programaçao que permitem um programador criar testar e analisar 
    um site, program, aplicativo, etc. 
    Esses tres em especial se completam 
    o html é a base, sao os ossos, com as informações raizes do sistema, e Css tras a estética à essas
    insoformações como cor de fundo, tamanho das letras, design de fundo. E por fijm o javascript que
    tras a interação ao sistema com a lógica e os comandos.
    
*/