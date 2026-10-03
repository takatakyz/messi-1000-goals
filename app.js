async function loadData() {
  const res = await fetch("data.json?ts=" + Date.now());

  if (!res.ok) {
    throw new Error("data.jsonの読み込みに失敗しました");
  }

  return await res.json();
}

const $ = id => document.getElementById(id);

loadData().then(DATA => {

  const remaining = Math.max(DATA.target - DATA.careerGoals, 0);
  const pct = Math.min(DATA.careerGoals / DATA.target * 100, 100);

  $("goals").textContent =
    DATA.careerGoals.toLocaleString("ja-JP");

  $("remaining").textContent = remaining;

  $("percent").textContent =
    pct.toFixed(1) + "%";

  $("bar").style.width = pct + "%";

  $("updated").textContent =
    DATA.updated;

  $("apps").textContent =
    DATA.season.apps;

  $("seasonGoals").textContent =
    DATA.season.goals;

  $("assists").textContent =
    DATA.season.assists;

  $("current").textContent =
    DATA.careerGoals;

  for (const n of [950, 975, 999]) {

    const el = $("m" + n);

    if (el) {
      el.textContent =
        DATA.careerGoals >= n
          ? "達成済み"
          : "あと" + (n - DATA.careerGoals);
    }
  }

  if ($("milestone")) {

    $("milestone").textContent =
      DATA.careerGoals < 950 ? 950 :
      DATA.careerGoals < 975 ? 975 :
      DATA.careerGoals < 999 ? 999 :
      DATA.careerGoals < 1000 ? 1000 :
      DATA.careerGoals + 1;
  }

  const targetEl =
    document.querySelector(".target");

  if (targetEl) {
    targetEl.textContent =
      "/ " + DATA.target.toLocaleString("ja-JP");
  }

  const lead =
    document.querySelector(".lead");

  if (lead) {

    lead.textContent =
      DATA.careerGoals >= DATA.target
        ? `メッシは1,000ゴールを達成！現在 ${DATA.careerGoals.toLocaleString("ja-JP")} ゴール`
        : `メッシは1,000ゴールまであと ${remaining} ゴール`;
  }

}).catch(err => {

  console.error(err);

});
