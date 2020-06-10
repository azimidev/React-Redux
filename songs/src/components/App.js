import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

export default () => {
    return (
        <div className="ui container grid" style={{marginTop: '20px'}}>
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    );
};
