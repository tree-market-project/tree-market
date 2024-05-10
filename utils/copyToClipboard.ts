"use client";

function copyToClipboard(text: any){
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);

    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);
    textarea.focus()
    navigator.clipboard.writeText(textarea.value);
    
    document.body.removeChild(textarea);
  };

  export default copyToClipboard;