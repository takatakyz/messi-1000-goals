const DATA={careerGoals:931,target:1000,updated:"2026年10月3日",season:{apps:41,goals:35,assists:19}};
const $=id=>document.getElementById(id);
const remaining=Math.max(DATA.target-DATA.careerGoals,0), pct=Math.min(DATA.careerGoals/DATA.target*100,100);
$("goals").textContent=DATA.careerGoals.toLocaleString("ja-JP");
$("remaining").textContent=remaining;
$("percent").textContent=pct.toFixed(1)+"%";
$("bar").style.width=pct+"%"; $("updated").textContent=DATA.updated;
$("apps").textContent=DATA.season.apps; $("seasonGoals").textContent=DATA.season.goals; $("assists").textContent=DATA.season.assists;
$("current").textContent=DATA.careerGoals;
for(const n of [950,975,999]){const el=$("m"+n);if(el)el.textContent=DATA.careerGoals>=n?"達成済み":"あと"+(n-DATA.careerGoals);}
$("milestone").textContent=DATA.careerGoals<950?950:DATA.careerGoals<975?975:DATA.careerGoals<999?999:1000;
