# PICKAngular

### Instruções
O projeto está com Angular e Docker. Caso deseje modificar ou criar um novo projeto, basta seguir o tutorial abaixo:

 1 - remova a pasta pickAngular.
 
 2 - Utilize o comando abaixo para gerar a estrutura do Angular
 ```
   docker-compose run --rm app ng [NOME DO APP]
 ```
 3 - Rode o comando para dar permissão as pastas geradas:
 ```
  sudo chown -R $USER:$USER .
 ```
 4 - Acesse a pasta do projeto gerado e modifique o package.json:

  De:
  ```
    “start”: “ng serve”,
  ```

  Para:

  ```
  "start": "ng serve --host 0.0.0.0 --poll=500",
  ```

5 - Agora basta rodar o servidor:

 ```
  docker-compose up
 ```
