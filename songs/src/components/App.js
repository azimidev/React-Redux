import React from 'react';
import SongList from './SongList';

export default () => {
    return (
        <div className="ui container grid" style={{marginTop: '20px'}}>
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
            </div>
        </div>
    );
};
