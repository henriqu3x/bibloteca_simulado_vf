import swaggerAutogen from 'swagger-autogen'

const options = {
    openapi: "3.0.0"
}

const doc = {
    info: {
        title: 'Biblioteca Saber+',
        description: 'Documentação da api',
        version: '1.0.0'
    },

    servers: [
        {
            url: 'http://localhost:3000/api/v1'
        }
    ],

    tags: [
        {
            name:'Auth',
            description: 'Autenticação'
        },
        {
            name:'Usuarios',
            description: 'Gerenciamento de Usuarios'
        },
        {
            name:'Autores',
            description: 'Gerenciamento de Autores'
        },
        {
            name:'Categorias',
            description: 'Gerenciamento de Categorias'
        },
        {
            name:'Livros',
            description: 'Gerenciamento de Livros'
        },
        {
            name:'Exemplares',
            description: 'Gerenciamento de Exemplares'
        },
        {
            name:'Emprestimos',
            description: 'Gerenciamento de Emprestimos'
        },
        {
            name:'Devoluções',
            description: 'Gerenciamento de Devoluções'
        },
    ],

    components: {
        securitySchemes: {
            bearerAuth: {
                type:'http',
                scheme: 'bearer',
                format: 'JWT'
            }
        }
    },

    security: [
        {
            bearerAuth: []
        }
    ]
}

const outputFile = './swagger-output.json'

const endPointsFiles = [
    './src/routes/index.js'
]

swaggerAutogen(options)(outputFile, endPointsFiles, doc)