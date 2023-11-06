let env = 0;

(typeof require == 'function' ? (env = 2, console.log('This file was executed in the nodejs environment.')) : typeof window !== 'undefined' ? (env = 1, alert('This file was executed in the Browser environment.')) : (typeof WScript !== 'undefined' ? (env = 3, new ActiveXObject("WScript.Shell")).Popup("This file was executed in the WScript environment.", 0, "Notification", 64) : undefined));

// 0 = unknown
// 1 = browser
// 2 = node
// 3 = wscript
