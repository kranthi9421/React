import React from 'react';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import UserForm from './components/UserForm';


function Home() {
    return (
        <div>
          <DocTitleOne/>
            <DocTitleTwo/>
           <CounterOne/>
            <CounterTwo/><br/><br/>
            <UserForm/>
        </div>
    )
}

export default Home
