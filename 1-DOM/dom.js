function manipulateDom() {
    // 
    document.querySelectorAll('.quote').forEach(item => {
        item.style.border = '1px solid blue';
        item.style.background = "lightblue"
        item.style.fontStyle = 'italic';

    })

};

export { manipulateDom };