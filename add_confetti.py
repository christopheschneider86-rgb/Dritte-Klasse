import os

files = [
    "deutsch/deutsch_trainer.html",
    "englisch/englisch_trainer.html",
    "religion/religion_trainer.html",
    "hsu/hsu_trainer_3_klasse.html",
    "musik/musik_trainer.html"
]

css = """
  <style>
    .confetti {
      position: fixed;
      width: 10px; height: 10px;
      z-index: 9999;
      pointer-events: none;
    }
  </style>
"""

js_func = """
function createConfetti(){for(let i=0;i<40;i++){const c=document.createElement('div');c.className='confetti';c.style.left=Math.random()*100+'vw';c.style.top='-10px';c.style.backgroundColor=['#f1c40f','#e74c3c','#3498db','#2ecc71','#9b59b6'][Math.floor(Math.random()*5)];document.body.appendChild(c);let a=Math.random()*2-1,s=Math.random()*3+2,x=0,y=0;const iv=setInterval(()=>{x+=a;y+=s;c.style.transform=`translate(${x}px,${y}px) rotate(${y*2}deg)`;if(y>window.innerHeight){clearInterval(iv);c.remove();}},20);}}
"""

for f in files:
    with open(f, 'r') as file:
        content = file.read()
    
    # 1. Add CSS
    if ".confetti" not in content:
        content = content.replace("</head>", css + "</head>")
        
    # 2. Add JS function
    if "function createConfetti" not in content:
        content = content.replace("</script>\n</body>", js_func + "</script>\n</body>")
        # Just in case the format is slightly different:
        if "function createConfetti" not in content:
            content = content.replace("</script></body>", js_func + "</script></body>")
            if "function createConfetti" not in content:
                content = content.replace("</script>\n</html>", js_func + "</script>\n</html>")

    # 3. Add call
    if "showBonus(containerId, coins) {" in content:
        content = content.replace("showBonus(containerId, coins) {\n", "showBonus(containerId, coins) {\n  createConfetti();\n")
    elif "showBonus() {" in content:
        content = content.replace("showBonus() {\n", "showBonus() {\n  createConfetti();\n")
    else:
        # Check for checkAnswer
        # Look for the line where 'const ok = selectedAnswer === correct;' or 'const correct = selectedAnswer === sol;'
        # And inject after it sets the feedback msg or class
        # It's easier to just do a simple replacement if it's there
        if "const msg = ok ? 'Super, Richtig! ✅' : 'Fast! Schau nochmal hin. 💪';" in content:
             content = content.replace("const msg = ok ? 'Super, Richtig! ✅' : 'Fast! Schau nochmal hin. 💪';", "const msg = ok ? 'Super, Richtig! ✅' : 'Fast! Schau nochmal hin. 💪';\n  if (ok) createConfetti();")
        elif "if (i === sol) b.classList.add('correct');" in content: # musik, hsu
             # Wait, that's inside a loop. We should just add it after the loop if `correct` is true
             content = content.replace("const fb = document.getElementById('feedbackArea');", "const fb = document.getElementById('feedbackArea');\n  if (correct) createConfetti();")

    with open(f, 'w') as file:
        file.write(content)

print("Done")
