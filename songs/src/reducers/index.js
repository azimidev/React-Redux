import { combinedReducers } from "redux";

const songsReducer = () => {
    return [
        { title: 'Zim Zim', duration: '4:05' },
        { title: 'Behet Ghol Midam', duration: '2:30' },
        { title: 'Bigharar', duration: '3:50' },
        { title: 'Gole Yakh', duration: '4:00' },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combinedReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
