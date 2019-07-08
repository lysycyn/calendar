import React from 'react';

import './App.css';
import Calendar from './Calendar/Calendar';

const App: React.FC = () => {
    return (
        <div className="App">
            <Calendar
                startMonth={'07.2019'}
                dates={[
                    { date: '10.07.2019', color: 'green' },
                    { date: '11.07.2019', color: 'brown' },
                    { date: 'sdfsdfd', color: 'green' },
                    { date: '11.sdfsf07.2019', color: 'brown' },
                    { date: '12.08.2019', color: '#d9d9d9' },
                    { date: '11.08.2019', color: '#a1d1d1' },
                    { date: '13.08.2019', color: 'red' }
                ]}
            />
        </div>
    );
};

export default App;
