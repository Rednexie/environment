let env = 0;

(typeof require !== 'undefined' ? env = 2 : typeof window !== 'undefined' ? (env = 1, alert('This file was executed in the Browser environment.')) : (typeof WScript !== 'undefined' ? (env = 3; new ActiveXObject("WScript.Shell")).Popup("This file was executed in the WScript environment.", 0, "Notification", 64) : undefined));


// 1 = browser
// 2 = node
// 3 = wscript
