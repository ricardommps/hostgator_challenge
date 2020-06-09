### Status pipelines branchs

| Branch  | Build                                                                                                                                                                                                                                                  | Cobertura                                                                                                                                                                                                                                              |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Develop | [![pipeline status](https://git-unj.softplan.com.br/saj-procuradorias/central-cda/pj-centralcda-frontend-temp/badges/develop/pipeline.svg)](https://git-unj.softplan.com.br/saj-procuradorias/central-cda/pj-centralcda-frontend-temp/commits/develop) | [![coverage report](https://git-unj.softplan.com.br/saj-procuradorias/central-cda/pj-centralcda-frontend-temp/badges/develop/coverage.svg)](https://git-unj.softplan.com.br/saj-procuradorias/central-cda/pj-centralcda-frontend-temp/commits/develop) |

## Service Level Objectives
### Dependências

|                        | pj-centralcda-api | pj-protesto-api | pj-centralcda-pump | pj-centralcda-frontend |
|------------------------|-------------------|-----------------|--------------------|------------------------|
| Database(SQL)          |         M         |        M        |          M         |                        |
| Database(SAJ5)         |                   |                 |          M         |                        |
| Elasticsearch          |         M         |                 |                    |                        |
| RabbitMQ               |         O         |        M        |          M         |                        |
| ActiveMQ               |         O         |                 |                    |                        |
| pj-centralcda-api      |                   |        M        |          M         |            M           |
| pj-protesto-api        |         O         |                 |                    |                        |
| pj-centralcda-pump     |         O         |                 |                    |                        |
| pj-centralcda-frontend |         O         |                 |                    |                        |
