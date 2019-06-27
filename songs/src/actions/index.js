// Action creator
export const selectedSong = (song) => {
    // Return an action
    return {
        type: 'SONG_SELECTED', // <-- REQUIRED
        payload: song, // <-- OPTIONAL
    };
};
