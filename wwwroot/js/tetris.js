window.tetrisKeyHandler = {
    addKeyListener: function (dotNetObjectRef) {
        document.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                dotNetObjectRef.invokeMethodAsync('MoveLeft');
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                dotNetObjectRef.invokeMethodAsync('MoveRight');
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                dotNetObjectRef.invokeMethodAsync('MoveDown');
            } else if (e.key === ' ' || e.key === 'ArrowUp') {
                e.preventDefault();
                dotNetObjectRef.invokeMethodAsync('Rotate');
            }
        });
    }
};