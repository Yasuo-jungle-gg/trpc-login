Esta es una simple app de logeo con EL T3 stack [https://github.com/t3-oss/create-t3-app] 
del que han estado hablando en youtube últimamente y me parece bastante interesante la 
rapidez con la que se puede desarrollar una aplicación con todo un stack de tecnologías
del lado del cliente[1], servidor[2] y base de datos[3]


Este stack se compone de las siguientes tecnologías y estas son mis opiniones:
-Typescript()
-Tailwind CSS(en esta app estoy usando css puro pero tailwind me gusta también)
-TRPC(Es una nueva alternativa a GraphQL, que simplifica las queries de una manera segura con typescript [https://trpc.io])
-Prisma ORM(por alguna cosa prefiero SQL en vez de usar orm's, pero la estructura de los orm's los hace bastante simples de entender a simple vista)
-Next JS(En mi opinión svelte es un muy buen framework mas que nada por el hecho de que no tiene virtual DOM y puedo ver y nombrar con facilidad
las classNames de los div con mucha mas comprensibilidad que en el virtual DOM de react en el que está basado next)
-PostgreSQL(Este lo ejecuté en un contenedor de Docker pero se puede usar cualquier otra alternativa igual como PlanetScale o Railway que son geniales en mi opinión)

OJO, toda esta aplicación la seguí de este tutorial [https://www.youtube.com/watch?v=syEWlxVFUrY] ya que quería hacer un login con distintas tecnologías



En el archivo NOTES.md están los comandos para crear una aplicación, instalar TRPC y otras dependencias e instalar prismaORM, voy a dejar los pasos acá:
- Crear next app con typeScript:
      - [yarn create next-app trpc-nombredetuapp --typescript]
- Instalar TRPC y otras dependencias: 
- "yarn add @trpc/client @trpc/server @trpc/react @trpc/next zod react-query superjson jotai @prisma/client react-hook-form jsonwebtoken cookie"

"yarn add @types/jsonwebtoken @types/cookie -D"

-Y finalmente crear un contenedor PostgreSQL en docker y especificar el puerto 5432 de la base de datos con el servidor en la variable de entorno DATABASE_URL

-y listo se tiene una aplicación completa corriendo en localhost:3000, a construir cosas bacanes.
