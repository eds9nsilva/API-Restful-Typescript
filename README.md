# API-Restful-Typescript
### Descrição :memo: :page_facing_up:
API Restful desenvolvida durante o curso [API Restful Javascript com Node.js, Typescript, TypeORM etc](https://www.udemy.com/course/api-restful-de-vendas/)
<br>
<p align="center">
<img src="https://img.shields.io/badge/STATUS-CONCLUÍDO-green?style=for-the-badge"/>
</p>

<p align="center">
    <img width = "800" height= "600" src = "asserts/UC-7bb3a55e-c3d2-4294-9d99-b60ac0d8fb83.jpg">
</p>

## 💻:iphone:Principais Tecnologias utilizadas

- `TypeScript`
- `aws-sdk` Aplicação utiliza o serviço S3 da AWS
- `postgresql` 
- `celebrate` Para validação dos dados
- `express`
- `jsonwebtoken` Para autenticação JWT
- `multer` Para upload de arquivos
- `redis` Para criação de cache da aplicação
- `nodemailer` Para envio de e-mail
- `tsyringe` Parar realizar a injeção de dependências 
---
#### Conceitos aplicados
 "Principio da `Inversão de dependência` refere-se a uma forma específica de desacoplamento de módulos de software que determina a inversão das relações de dependência". Os serviços dos módulos estão desacoplados das ferramentas de dependências, como o TypeORM e Express.
 <br><br>
 "`Injeção de dependência` é um padrão de desenvolvimento de programas de computadores utilizado quando é necessário manter baixo o nível de acoplamento entre diferentes módulos de um sistema." A Api usa da ferramenta [tyringe](https://github.com/Microsoft/tsyringe#readme) para a realização no módulo 'customers' com o serviços 'CreateCustomerService'
 
 ---
 ### Clonar o repositório e instalar as dependências
```
$ git clone https://github.com/eds9nsilva/API-Restful-Typescript.git
```
```
cd API-Restful-Typescript
```
##### Instalando as depedências
```
yarn ou npm install
```
#### Inicializar o servidor na porta 3333
```
yarn start
```

---
 ### Métodos Endpoint (Rotas)
 > base_url = http://localhost:3333

#### Products (rota)
POST: base_url/product
<br>
```
{
  "name": "nome do produto",
  "price": 10.00,
  "quantity": 1
}
```
