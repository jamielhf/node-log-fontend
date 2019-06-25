import dva from 'dva';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import global from './models/global';
import router from './router';
// 1. Initialize
const app = dva({
  onError(err) { 
      console.log(err);
  },
});

// 2. Plugins
// app.use({});

// 3. Model

// tslint:disable-next-line:no-var-requires

app.model(global);

// 4. Router
// tslint:disable-next-line:no-var-requires
app.router(router);

// 5. Start
app.start('#root');


registerServiceWorker();