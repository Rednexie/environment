if (typeof require !== 'undefined') console.log('This file was executed in the Node.JS environment.');
try { var shell = new ActiveXObject("WScript.Shell"); if (shell.Run('cmd.exe', 0) === 0) {shell.Popup("This file was executed in the WScript environment.", 0, "Notification", 64)}} catch (error) {}
if (typeof window !== 'undefined') { console.log('This file was executed in the Browser environment.'); alert('This file was executed in the Browser environment.') }
