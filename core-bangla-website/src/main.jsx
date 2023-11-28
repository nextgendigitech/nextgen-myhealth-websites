import { StrictMode, createRef } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { SnackbarProvider } from "notistack";
import { FiX } from 'react-icons/fi';
import { Collapse } from '@mui/material';

import App from './App.jsx';
import store from './store';
import './index.css';

const notistackRef = createRef();
const onClickDismiss = key => () => { 
    notistackRef.current.closeSnackbar(key);
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <SnackbarProvider
                dense
                TransitionComponent={Collapse}
                transitionDuration={{enter: 0, exit: 0 }}
                // maxSnack={1}
                preventDuplicate={true}
                ref={notistackRef}
                action={(key) => (
                        <FiX className="mr-1 clickable" onClick={onClickDismiss(key)} />
                    )}
            >
                <App />
            </SnackbarProvider>
        </Provider>
    </StrictMode>,
);
