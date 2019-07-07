import React from 'react';

import './App.css';
import Calendar from './Calendar/Calendar';

const App: React.FC = () => {
    return (
        <div className="App">
            <Calendar currentMonth={'07.2019'} />
        </div>
    );
};

export default App;
