# API - BID Futebol Brasileiro

Essa API foi desenvolvida para o Boletim Informativo Diário (BID) da Confederação Brasileira de Futebol (CBF). Nele, são feitos os registros dos atletas autorizados a participar das competições oficiais. O sistema conta com um CRUD (create, read, update, delete) para realizar as operações.

## Endpoints (atletas)

### GET /players
Endpoint responsável por listar todos os jogadores cadastrados no banco de dados.

#### Parâmetros:
Nenhum

#### Respostas:
##### OK! 200
Código de retorno de processo bem sucedido, você receberá a listagem de todos os jogadores.

Exemplo de resposta:

```
{
    "players": [
        {
            "name": "Raphael Cavalcante Veiga",
            "position": "Meio-campo",
            "teamID": "66e709a4a435c23cba00d9c8",
            "birthDate": 19-06-1995
        },
        {
            "name": "Memphis Depay",
            "position": "Atacante",
            "teamID": "66e709a4a435c23cba00d9bf",
            "birthDate": 13/02/1994
        }
    ]
}
```

#### Erro ao Buscar Jogadores! 500
Essa resposta significa que ocorreu algum erro interno no servidor. Os motivos podem incluir por exemplo, uma falha na comunicação com o banco de dados.

Exemplo de resposta:

```
{
  "error": "Erro ao buscar jogadores"
}
```

### GET /players/

Endpoint responsável por buscar um jogador em específico.

#### Parâmetros: 
id: ID do jogador a ser pesquisado.

#### Respostas:
##### OK! 200
Código de retorno de processo bem sucedido, você receberá os dados do jogador pesquisado.

Exemplo de resposta:

```
{
    "name": "Jonathan Calleri",
    "position": "Atacante",
    "teamID": "66e70a2aa435c23cba00d9cd",
    "birthDate": 23-09-1993
}
```

#### Não encontrado! 404
Caso essa resposta aconteça, significa que o jogador com o ID fornecido não foi encontrado.

Exemplo de resposta:

```
{
  "error": "Erro ao buscar jogador"
}
```

### POST /players

Endpoint responsável por cadastrar um novo jogador no banco de dados.

#### Parâmetros:
name: Nome do jogador.<br>
position: Posição de jogo.<br>
teamId: ID do time atual.<br>
birthDate: Data de nascimento.

Exemplo de requisição:

```
{
    "name": "Estêvão Willian Almeida de Oliveira Gonçalves",
    "position": "Atacante",
    "teamId": "66e709a4a435c23cba00d9c8",
    "birthDate": 24-04-2007
}
```

#### Respostas:
##### Criado! 201
Essa resposta significa que o jogador foi cadastrado com sucesso.

Exemplo de resposta: Nenhum conteúdo retornado.

##### Erro ao Criar Jogador! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "error": "Erro ao criar jogador!"
}
```

### DELETE /players/

Endpoint responsável por deletar um jogador em específico pelo seu ID.

#### Parâmetros:
id: ID do jogador a ser deletado.

#### Respostas:
##### Sem Conteúdo! 204
Caso essa resposta aconteça, o jogador foi deletado com sucesso e não há conteúdo para retornar ao cliente.

Exemplo de resposta: Nenhum conteúdo retornado.

##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido.

Exemplo de resposta:

```
{
    "error": "ID inválido!"
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "err": "Erro ao excluir o jogador."
}
```

### PUT /game/

Endpoint responsável por atualizar as informações de um jogador em específico pelo seu ID.

#### Parâmetros:
id: ID do jogador a ser atualizado.<br>
name: Nome do jogador (opcional).<br>
position: Posição de jogo (opcional).<br>
teamId: ID do time atual (opcional).<br>
birthDate: Data de nascimento (opcional).<br>

Exemplo de requisição:

```
{
    "name": "Eduardo Pereira Rodrigues",
    "position": "Atacante",
    "teamId": "66e709a4a435c23cba00d9c8",
    "birthDate": 07-01-1992
}
```

#### Respostas:
##### OK! 200
Caso essa resposta aconteça, as informações do jogador foram atualizadas com sucesso.

Exemplo de resposta:

```
{
    "players": {
        "name": "Eduardo Pereira Rodrigues",
        "position": "Atacante",
        "teamId": "66e709a4a435c23cba00d9c8",
        "birthDate": 07-01-1992
    }
}
```

##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido ou a requisição contém dados malformados.

Exemplo de resposta:

```
{
    "error": "ID inválido ou dados malformados!"
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "error": "Erro interno do servidor!"
}
```


## Endpoints (times)

### GET /teams

Endpoint responsável por listar todos os times cadastrados no banco de dados.

#### Parâmetros:
Nenhum

#### Respostas:
##### OK! 200
Código de retorno de processo bem sucedido, você receberá a listagem de todos os times cadastrados.

Exemplo de resposta:

```
{
    "teams": [
        {
            "name": "Sociedade Esportiva Palmeiras",
            "teamID": "66e709a4a435c23cba00d9c8"
        },
        {
            "name": "Sport Club Corinthians Paulista",
            "teamID": "66e709a4a435c23cba00d9bf"
        }
    ]
}
```

#### Erro ao Buscar Times! 500
Essa resposta significa que ocorreu algum erro interno no servidor. Os motivos podem incluir por exemplo, uma falha na comunicação com o banco de dados.

Exemplo de resposta:

```
{
  "error": "Erro ao buscar times"
}
```

### GET /teams/

Endpoint responsável por buscar um time em específico.

#### Parâmetros: 
teamId: ID do time a ser pesquisado.

#### Respostas:
##### OK! 200
Código de retorno de processo bem sucedido, você receberá os dados do time pesquisado.

Exemplo de resposta:

```
{
    "name": "São Paulo Futebol Clube",
    "teamID": "66e70a2aa435c23cba00d9cd"
}
```

#### Não encontrado! 404
Caso essa resposta aconteça, significa que o time com o ID fornecido não foi encontrado.

Exemplo de resposta:

```
{
  "error": "Erro ao buscar time"
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "error": "Erro ao excluir o jogador."
}
```
