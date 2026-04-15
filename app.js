// Minimal SPA behavior: handle the inquiry form by opening user's email client with prefilled content
document.addEventListener('DOMContentLoaded',function(){
  const form=document.getElementById('inquiryForm');
  form.addEventListener('submit',function(e){
    e.preventDefault();
    const name=document.getElementById('name').value.trim();
    const contact=document.getElementById('contact').value.trim();
    const message=document.getElementById('message').value.trim()||"I'm interested in buying loyalshift.com";
    const subject=encodeURIComponent('Inquiry about loyalshift.com');
    const body=encodeURIComponent(`Name: ${name}\nContact: ${contact}\n\nMessage:\n${message}`);
    const mailto=`mailto:dasome29+cf@hotmail.com?subject=${subject}&body=${body}`;
    window.location.href=mailto;
  });
});
