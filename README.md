# API - BID Futebol Brasileiro

Essa API foi desenvolvida para o Boletim Informativo Diário (BID) da Confederação Brasileiro de Futebol (CBF). Nele, são feitos os registros dos atletas autorizados a participar das competições oficiais. O sistema conta com um CRUD (create, read, update, delete) para realizar as operações.

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
            "teamID": 251237,
            "birthDate": 19-06-1995
        },
        {
            "name": "Memphis Depay",
            "position": "Atacante",
            "teamID": 523540,
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

### GET /player

Endpoint responsável por buscar um jogador em específico.

#### Parâmetros: 
id: ID do jogador a ser pesquisado.

#### Respostas:
##### OK! 200
Código de retorno processo bem sucedido, você receberá os dados do jogador pesquisado.

Exemplo de requisição:

```
{
    "name": "Jonathan Calleri",
    "position": "Atacante",
    "teamID": "66e70a2aa435c23cba00d9cd",
    "birthDate": 19-06-1995
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

### DELETE /players/

### PUT /game/

## Endpoints (times)

### GET /teams

### GET /teams/

