const Vue=require('vue');
const express=require('express');
const server=express();

const { createBundleRenderer } = require('vue-server-renderer')
const template = require('fs').readFileSync('./src/index.template.html', 'utf-8')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false, // 推荐
  template,
  clientManifest
})
// const renderer=require('vue-server-renderer').createRenderer({
//     template: require('fs').readFileSync('./src/index.template.html', 'UTF-8')
//   });
// const createApp=require('./dist/main.server.js').default;
server.use('/dist',express.static('./dist'));
server.get('*',(req,res)=>{
    const context={url:req.url}

    // createApp(context).then(()=>{
        renderer.renderToString( context,(err, html) => {
            if (err) {
              if (err.code === 404) {
                res.status(404).end('Page not found')
              } else {
                res.status(500).end('Internal Server Error')
              }
            } else {
              res.end(html)
            }
          })
    // }).catch((error) => {
    //     console.error(error);
    //   })
})

server.listen(8889,()=>{
    console.log('The server is running at http://localhost:' + '8889');
})