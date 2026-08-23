// Simpler explanation layer for Liron — loaded after app.js.
window.feedbackHtml = function(q, ans) {
  if (q.kind === 'likert') {
    return `<div class="feedback learn">
      <h3>אין כאן נכון או לא נכון</h3>
      <div style="margin-top:10px;padding:14px;border-radius:14px;background:#fff8dc;border:1px solid #eedb9c;line-height:1.65">
        <strong style="display:block;margin-bottom:6px">בפשטות</strong>
        עני לפי מה שבאמת מאפיין אותך בדרך כלל. לא לפי מה שנדמה לך שמחפשים.
      </div>
    </div>`;
  }

  const ok = ans.correct;
  const correctText = q.options[q.correctIndex];
  const simple = q.simpler || (Array.isArray(q.explanation) ? q.explanation.slice(0, 2).join(' ') : '');
  const full = Array.isArray(q.explanation) ? q.explanation : [];

  return `<div class="feedback ${ok ? '' : 'learn'}">
    <h3>${ok ? 'נכון' : 'התשובה הנכונה היא: ' + correctText}</h3>
    ${ans.unknown ? '<p>טוב שעצרת במקום לנחש. עכשיו רק מבינים את הדרך.</p>' : ''}
    <div style="margin-top:10px;padding:16px;border-radius:16px;background:linear-gradient(145deg,#fff8dc,#fffdf5);border:1px solid #ead9a4;line-height:1.7">
      <div style="display:inline-block;background:#ffedaf;color:#6e5c25;border-radius:999px;padding:5px 9px;font-size:13px;font-weight:800;margin-bottom:8px">במילים הכי פשוטות</div>
      <div style="font-size:17px;font-weight:650">${simple}</div>
    </div>
    <details style="margin-top:12px">
      <summary style="cursor:pointer;color:#6e786f;font-weight:600">רוצה לראות גם את הדרך המלאה?</summary>
      <ol class="steps" style="margin-top:10px">${full.map(x => `<li>${x}</li>`).join('')}</ol>
      <div class="pattern">אם תרצי לזכור כלל קצר: ${q.pattern}</div>
    </details>
    <div class="row" style="margin-top:12px">
      <button class="btn secondary" onclick="similar('${q.id}')">עוד שאלה מאותו סוג</button>
    </div>
  </div>`;
};
