# Criando uma single page com React
Exemplo de uma single page com React

O primeiro passo no desenvolvimento da aplicação será criar um novo projeto com a ferramenta de linha de comando create-react-app. Ela cria para nós uma estrutura de pastas e arquivos e configura alguns pacotes necessários de forma automática.

Nesse projeto utilizei o comando: create-react-app react-dashboard

O Bootstrap é um dos principais frameworks front-end do mercado. Ele tem como dependência a biblioteca jQuery e na versão 4 passou a depender também do Popper.js. Neste vídeo vamos ver como instalá-lo em uma aplicação React e como carregar suas dependências. (npm install jquery popper.js bootstrap ).
Para fazer o carregamento do bootstrap, não é diretamente pelo html e sim pelo index.js.
Os pacotes do popper e jquery foram instalados na pasta node_modules.
Para organizar as importações crie uma pasta, dentro de src, chamada include e vamos dividir em tres aquivos a importação do popper, do jquery e do bootstrap.

Depois no index.js chama o bootstrap: import './include/bootstrap';

O menu superior será o primeiro componente do projeto. Ele utilizará o navbar do Bootstrap para exibir uma barra de navegação com links no topo da página.

Tendo criado o menu superior no vídeo passado, veremos agora como importar esse componente dentro do App.js e exibi-lo na página.

Cada página da aplicação será representada por um componente que consome dados de um web service RESTful. Neste vídeo conheceremos a estrutura dos dados que serão retornados por cada um desses endpoints.

Criando o componente resumo:

O componente Resumo, que foi criado , tem como objetico obter os dados do endpoint /resumo do web service e exibirá informações a respeito das consultas e do faturamento da empresa.

Na interface gráfica do componente de resumo vamos usar o sistema de grid do Bootstrap, além de cards e tables. Esses elementos serão usados para exibir as informações para o usuário de forma clara e responsiva.

Agora que temos a interface do componente pronta, vamos obter os dados do web service através de uma requisição HTTP GET. Para isso usaremos um método padrão dos componentes do React, o componentDidMount.

Da mesma forma que exibimos dados no HTML por meio de instruções JavaScript, também podemos definir classes CSS dinamicamente. Para isso, veremos como atribuir um valor à propriedade className de acordo com uma expressão condicional.

Seguiremos agora o mesmo procedimento usado para criar o componente de Resumo e adicionaremos ao projeto o componente Consultas, que consumirá dados do endpoint /consultas.

