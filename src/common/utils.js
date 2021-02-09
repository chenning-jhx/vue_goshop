//防抖函数
export const debounce = (fn, delay) => {
    let timer, startTimeStamp = 0;
    let context, args;

    let run = (timerInterval) => {
        timer = setTimeout(() => {
            let now = (new Date()).getTime();
            let interval = now - startTimeStamp
            if (interval < timerInterval) { // the timer start time has been reset, so the interval is less than timerInterval
                console.log('debounce reset', timerInterval - interval);
                startTimeStamp = now;
                run(wait - interval);  // reset timer for left time 
            } else {
                fn.apply(context, args);
                clearTimeout(timer);
                timer = null;
            }

        }, timerInterval);
    }

    return function () {
        context = this;
        args = arguments;
        let now = (new Date()).getTime();
        startTimeStamp = now;

        if (!timer) {
            console.log('debounce set', wait);
            run(wait);    // last timer alreay executed, set a new timer
        }

    }
}

// 时间格式化
export function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    let o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds()
    };

    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + "";
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
        }
    }

    return fmt;
}