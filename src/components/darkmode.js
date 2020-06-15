import React from 'react';

function darkmodebutton() {

    function darkModeSwitch() {
        var button = document.getElementById('dark-mode-button'); 
        var switchButton = document.getElementById('dark-mode-switch'); 
        var body = document.body;


        if (switchButton.getAttribute('data-value') == 'light') {
            switchButton.style.left = '35px';
            switchButton.style.backgroundColor = '#F2F2F2';
            button.style.borderColor = '#F2F2F2';
            body.style.backgroundColor = '#212121';
            body.style.color = '#fff';
            switchButton.setAttribute('data-value', 'dark');
        }
        else {
            switchButton.style.left = '2px';
            switchButton.style.backgroundColor = '#ADADAD';
            button.style.borderColor = '#ADADAD';
            body.style.backgroundColor = '#F5F5F5';
            body.style.color = '#212121';
            switchButton.setAttribute('data-value', 'light');
        } 
    }

    return (

        <div id="dark-mode-button" onClick={darkModeSwitch}>
            <div id="dark-mode-switch" data-value="light"></div>
        </div>
    );
}

export default darkmodebutton;