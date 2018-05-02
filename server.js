const Vue=require('vue');
const express=require('express');
const server=express();
const renderer=require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./src/index.template.html', 'UTF-8')
  });
const createApp=require('./dist/main.server.js').default;
server.use(express.static('./dist'));
server.get('*',(req,res)=>{
    const context = {
        title: 'hellovue',
        meta: `
          <meta ...>
          <meta ...>
        `
      }
      const app=createApp();
    renderer.renderToString(app,context,(err,html)=>{
        if(err){
            res.status(500).end('Internal Server Error');
            return;
        }
        res.end(html);
    })
})

server.listen(8888,()=>{
    console.log('The server is running at http://localhost:' + '8888');
})