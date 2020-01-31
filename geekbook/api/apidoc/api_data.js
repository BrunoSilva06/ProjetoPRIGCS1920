define({ "api": [
  {
    "type": "delete",
    "url": "/messages/:id",
    "title": "Apagar Mensagem",
    "group": "Message",
    "version": "0.0.0",
    "filename": "routes/messages.js",
    "groupTitle": "Message",
    "name": "DeleteMessagesId"
  },
  {
    "type": "get",
    "url": "/messages/:id",
    "title": "Obter Mensagem",
    "group": "Message",
    "version": "0.0.0",
    "filename": "routes/messages.js",
    "groupTitle": "Message",
    "name": "GetMessagesId"
  },
  {
    "type": "post",
    "url": "/messages",
    "title": "Criar Mensagem",
    "group": "Message",
    "version": "0.0.0",
    "filename": "routes/messages.js",
    "groupTitle": "Message",
    "name": "PostMessages"
  },
  {
    "type": "delete",
    "url": "/posts/id",
    "title": "Apagar um post",
    "group": "Post",
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "Post",
    "name": "DeletePostsId"
  },
  {
    "type": "get",
    "url": "/posts",
    "title": "Lista de Posts",
    "group": "Post",
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "Post",
    "name": "GetPosts"
  },
  {
    "type": "get",
    "url": "/posts/categoria/:categoria",
    "title": "Filtrar posts de uma dada categoria",
    "group": "Post",
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "Post",
    "name": "GetPostsCategoriaCategoria"
  },
  {
    "type": "get",
    "url": "/posts/curso/:curso",
    "title": "Filtrar Posts de um curso",
    "group": "Post",
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "Post",
    "name": "GetPostsCursoCurso"
  },
  {
    "type": "get",
    "url": "/posts/user/:id",
    "title": "Obter posts de um User",
    "group": "Post",
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "Post",
    "name": "GetPostsUserId"
  },
  {
    "type": "post",
    "url": "/Posts",
    "title": "Inserir Post",
    "group": "Post",
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "Post",
    "name": "PostPosts"
  },
  {
    "type": "post",
    "url": "/posts/:id",
    "title": "Obter post",
    "group": "Post",
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "Post",
    "name": "PostPostsId"
  },
  {
    "type": "post",
    "url": "/posts/:id/comment",
    "title": "Enviar Comentário",
    "group": "Post",
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "Post",
    "name": "PostPostsIdComment"
  },
  {
    "type": "post",
    "url": "/posts/:id/like",
    "title": "Enviar like",
    "group": "Post",
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "Post",
    "name": "PostPostsIdLike"
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Apagar Utilizador",
    "group": "User",
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User",
    "name": "DeleteUsersId"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Listagem de Utilizadores",
    "group": "User",
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User",
    "name": "GetUsers"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Obter Utilizador",
    "group": "User",
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User",
    "name": "GetUsersId"
  },
  {
    "type": "get",
    "url": "/users/:id/amigos",
    "title": "Obter lista de amigos de um utilizador",
    "group": "User",
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User",
    "name": "GetUsersIdAmigos"
  },
  {
    "type": "get",
    "url": "/users/:id/feed",
    "title": "Obter lista de posts personalizada de um User",
    "group": "User",
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User",
    "name": "GetUsersIdFeed"
  },
  {
    "type": "get",
    "url": "/users/:id/inbox",
    "title": "Mensagens do utilizador",
    "group": "User",
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User",
    "name": "GetUsersIdInbox"
  },
  {
    "type": "get",
    "url": "/users/name/:nome",
    "title": "Pesquisar Utilizador por nome",
    "group": "User",
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User",
    "name": "GetUsersNameNome"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Criar Utilizador",
    "group": "User",
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User",
    "name": "PostUsers"
  },
  {
    "type": "post",
    "url": "/users/:id/amigos/:id2",
    "title": "Criar amizade entre dois users",
    "group": "User",
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User",
    "name": "PostUsersIdAmigosId2"
  },
  {
    "type": "post",
    "url": "/users/:id/message",
    "title": "Enviar mensagem a um utilizador",
    "group": "User",
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User",
    "name": "PostUsersIdMessage"
  }
] });
