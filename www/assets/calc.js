(function(){
  var D = JSON.parse(document.getElementById("cdata").textContent);
  var $ = function(id){ return document.getElementById(id); };
  var f = function(n){ return (Math.round(n*100)/100).toFixed(2).replace(/\.?0+$/,""); };
  var cur = 0, KEY = "merit-calc-v1-page";
  function load(){ try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch(e){ return {}; } }
  function save(o){ try { localStorage.setItem(KEY, JSON.stringify(o)); } catch(e){} }
  var st = load();
  ["mo","mt","io","it"].forEach(function(k){ if (st[k] != null) $(k).value = st[k]; });
  function pct(o,t){ o = parseFloat(o); t = parseFloat(t); if (isNaN(o) || !(t>0) || o<0 || o>t) return null; return o/t*100; }
  function setup(){
    var u = D[cur];
    $("trow").style.display = u.test ? "" : "none";
    if (u.test){ $("tl").textContent = u.test; var s = (st.tests||{})[u.key] || {}; $("to").value = s.o || ""; $("tt").value = s.t || u.total; }
    calc();
  }
  function calc(){
    var u = D[cur], w = u.w, mo=$("mo").value, mt=$("mt").value, io=$("io").value, it=$("it").value;
    st.mo=mo; st.mt=mt; st.io=io; st.it=it;
    if (u.test){ st.tests = st.tests || {}; st.tests[u.key] = {o:$("to").value, t:$("tt").value}; }
    save(st);
    var m = pct(mo,mt), h = pct(io,it), t = u.test ? pct($("to").value,$("tt").value) : null, agg = null, miss = [];
    if (u.kind === "pu" || u.kind === "gcu"){
      if (m==null) miss.push("Matric"); if (h==null) miss.push("Inter");
      if (w[1]>0 && t==null) miss.push(u.test);
      if (!miss.length){
        var a = u.kind==="pu" ? Math.min(100,(parseFloat(mo)/4+parseFloat(io)+(($("hz")&&$("hz").checked)?20:0))/(parseFloat(mt)/4+parseFloat(it))*100) : (parseFloat(mo)+parseFloat(io))/(parseFloat(mt)+parseFloat(it))*100;
        agg = a*w[0]/100 + (w[1]>0 ? t*w[1]/100 : 0);
      }
    } else if (u.kind === "avg"){
      if (m==null) miss.push("Matric"); if (h==null) miss.push("Inter"); if (t==null) miss.push(u.test);
      if (!miss.length) agg = (m+h)/2*w[0]/100 + t*w[2]/100;
    } else {
      if (w[0]>0 && m==null) miss.push("Matric"); if (w[1]>0 && h==null) miss.push("Inter"); if (w[2]>0 && u.test && t==null) miss.push(u.test);
      if (!miss.length) agg = (w[0]?m*w[0]/100:0) + (w[1]?h*w[1]/100:0) + (w[2]&&u.test?t*w[2]/100:0);
    }
    if (agg == null){ $("out").textContent = "–"; $("msg").textContent = "Add your " + miss.join(", ").replace(/, ([^,]*)$/," and $1") + " marks to see your merit."; }
    else { $("out").textContent = f(agg) + "%"; $("msg").textContent = u.prog + (u.status==="estimate" ? " · estimate" : " · official formula"); }
  }
  ["mo","mt","io","it","to","tt"].forEach(function(k){ $(k).addEventListener("input", calc); });
  if ($("hz")) $("hz").addEventListener("change", calc);
  if ($("prog")) $("prog").addEventListener("change", function(e){ cur = +e.target.value; setup(); });
  setup();
})();
