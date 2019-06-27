// Action creator
export const selectedSong = (song) => {
    // Return an action
    return {
        type: 'SELECTED_SONG', // <-- REQUIRED
        payload: song, // <-- OPTIONAL
    };
};
