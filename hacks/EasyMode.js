// Makes you not need to answer math questions.
e=await (await fetch("https://api.prodigygame.com/game-api/status")).json();CryptoJS.MD5 = () => ({ toString: () => e.data.prodigyGameFlags.debugPassword });enableDebug('',!0)
easyMode()
