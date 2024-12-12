function createTimer(){
    let timerId = 0;
    let timerMap = {};

    function setTimeoutPolyfill(cb, delay){
        const id = timerId++;
        timerMap[id] = true;
        const start = Date.now();
        function triggerCallback(){
            if(!timerMap[id]) return;
            if(Date.now() > start + delay){
                cb();
                delete timerMap[id]
            }else{
                triggerCallback();
            }
        }

        triggerCallback();
        return id;
    }

    function clearSetTimeoutPolyfill(){
        delete timerMap[id]
    }

    return {
        setTimeoutPolyfill,
        clearSetTimeoutPolyfill
    }
}


const { setTimeoutPolyfill, clearSetTimeoutPolyfill } = createTimer();

const id = setTimeoutPolyfill(() => {
   console.log("Hiiii")
}, 400)