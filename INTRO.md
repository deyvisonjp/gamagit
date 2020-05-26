# REACT

## O que é?

- Lib para criação de interfaces
- Utilizada para a construção de SPA (Single Page Application)
- Podemos chamar de framework, devido a seu ecossistema:
   * React JS;
   * React Native;
   * Redux;
   * Webpack;
   * Etc;
- Tudo fica dentro do JavaScript(elementos visuais, lógica e estilo); 

## Vantagens !

- Organização do código:
   * Divisão do app/código em blocos específicos;
   * O funcionamento de um cmponente não interfere em outro;
   * Se um componente é removido, o resto continua funcionando; 
- Divisão de responsabilidade:
   * Back-end: Regras de negócio;
   *Front-end: Interface;
- Programação declarativa:
   * Dizemos ao código o que queremos, ele se encarrega do resto.

## Componentização
- Todo componente deve ter um estado (ex. variáveis);
- Não pode conter mais de dois elementos jsx 'irmãos' sendo retornados
   Neste contexto basta envolver esses elementos dentro de uma tag como por 
   exemplo <> </> (fragments)
*** 3 pilares do React : Componentes : Estados (Hooks) : Propriedades 

## Preparando o Ambiente
- Instalar Node (de acordo com o sistema operacional... 
      Ex. Windows: Chocolatey (gerenciador de pacotes));
   * Verificar se foi instalado:
      Dentro do prompt: 
         > node -v
         > npm -v
      _ALTERNATIVO_: yarn no lugar de npm;

- Terminal alternativo para Windows: _hyper_

- React
   * create react app - Utilizar o portfolio facebook
      Isso traz uma estrutura semi pronta.
   * npx create-react-app +nome_do_app+
      Esse comando gera todas as dependencias dentro do novo projeto


### INSTALAR PACOTES
   - axios: Retorna requisições com promisses
      > npm install axios

   - react-router-dom: Responsável por indicar as rotas
      > yarn add  react-router-dom

   - styled-components : Componentes de estilo - o componente fica dentro da pasta
      > yarn add styled-components
