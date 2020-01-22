import React, { Component } from 'react';
import VideoAula from '../example-redux/video-aula/videoAula';
import SideBar from '../example-redux/side-bar/sideBar';
import { Provider } from 'react-redux';
import store from '../example-redux/store/store';

class ExempleRedux extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>          {/* Forma de repassar para todos os componentes filhos uma informação */}
                    <VideoAula />
                    <SideBar />
                </Provider>
            </div>
        );
    }
}

export default ExempleRedux;