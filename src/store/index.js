import { configureStore } from '@reduxjs/toolkit';

import toggleSideBar from '../actions/toggleSide'
import toggleChatBox from '../actions/toggleChatBox'
const store = configureStore({
    reducer: {
        sidebar: toggleSideBar.reducer,
        chatbox: toggleChatBox.reducer
    }

})
export default store