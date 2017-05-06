// import Audio from './components/audios/index';
// import Upload from './components/uploads/index';

export default class Router {
    static get map(): any {
        return {
            '/': {
                component: '<h1>Hello World!!!</h1>'
            }
        }
    }
}