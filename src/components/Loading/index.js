import React from 'react';
import Spinner from 'react-spinner-material';

function Loading(props) {
    return (
        <div>
            <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true} />
        </div>
    );
}

export default Loading;