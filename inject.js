document.addEventListener('mousedown',(e)=>{
  chrome.runtime.sendMessage('<mousedown>')
})
document.addEventListener('keydown',(e)=>{
  chrome.runtime.sendMessage(e.key)
})