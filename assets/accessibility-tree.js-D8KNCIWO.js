(function () {
  window.__claudeElementMap ||= {};
  window.__claudeRefCounter ||= 0;
  // 语义锚点：页面可访问性树生成器（read_page 工具的 DOM 序列化实现）
  const __cpAccessibilityTreeGlobalElementMapKey = "__claudeElementMap";
  const __cpAccessibilityTreeGlobalRefCounterKey = "__claudeRefCounter";
  const __cpAccessibilityTreeGlobalGeneratorKey = "__generateAccessibilityTree";
  const __cpAccessibilityTreeRefIdPrefix = "ref_";
  const __cpAccessibilityTreeDefaultDepth = 15;
  const __cpAccessibilityTreeFilterAll = "all";
  const __cpAccessibilityTreeFilterInteractive = "interactive";
  window.__generateAccessibilityTree = function (e, t, r, i) {
    try {
      let h = function (e) {
        var t = e.getAttribute("role");
        if (t) {
          return t;
        }
        var r = e.tagName.toLowerCase();
        var i = e.getAttribute("type");
        return {
          a: "link",
          button: "button",
          input: i === "submit" || i === "button" ? "button" : i === "checkbox" ? "checkbox" : i === "radio" ? "radio" : i === "file" ? "button" : "textbox",
          select: "combobox",
          textarea: "textbox",
          h1: "heading",
          h2: "heading",
          h3: "heading",
          h4: "heading",
          h5: "heading",
          h6: "heading",
          img: "image",
          nav: "navigation",
          main: "main",
          header: "banner",
          footer: "contentinfo",
          section: "region",
          article: "article",
          aside: "complementary",
          form: "form",
          table: "table",
          ul: "list",
          ol: "list",
          li: "listitem",
          label: "label"
        }[r] || "generic";
      };
      // 语义锚点：推断元素 role（包含 input[type] 特判）
      const __cpAccessibilityTreeInferRole = h;
      let g = function (e) {
        var t = e.tagName.toLowerCase();
        if (t === "select") {
          var r = e;
          var i = r.querySelector("option[selected]") || r.options[r.selectedIndex];
          if (i && i.textContent) {
            return i.textContent.trim();
          }
        }
        var n = e.getAttribute("aria-label");
        if (n && n.trim()) {
          return n.trim();
        }
        var a = e.getAttribute("placeholder");
        if (a && a.trim()) {
          return a.trim();
        }
        var o = e.getAttribute("title");
        if (o && o.trim()) {
          return o.trim();
        }
        var l = e.getAttribute("alt");
        if (l && l.trim()) {
          return l.trim();
        }
        if (e.id) {
          var u = document.querySelector("label[for=\"" + e.id + "\"]");
          if (u && u.textContent && u.textContent.trim()) {
            return u.textContent.trim();
          }
        }
        if (t === "input") {
          var d = e;
          var c = e.getAttribute("type") || "";
          var f = e.getAttribute("value");
          if (c === "submit" && f && f.trim()) {
            return f.trim();
          }
          if (d.value && d.value.length < 50 && d.value.trim()) {
            return d.value.trim();
          }
        }
        if (["button", "a", "summary"].includes(t)) {
          var h = "";
          for (var g = 0; g < e.childNodes.length; g++) {
            var m = e.childNodes[g];
            if (m.nodeType === Node.TEXT_NODE) {
              h += m.textContent;
            }
          }
          if (h.trim()) {
            return h.trim();
          }
        }
        if (t.match(/^h[1-6]$/)) {
          var s = e.textContent;
          if (s && s.trim()) {
            return s.trim().substring(0, 100);
          }
        }
        if (t === "img") {
          return "";
        }
        var p = "";
        for (var w = 0; w < e.childNodes.length; w++) {
          var b = e.childNodes[w];
          if (b.nodeType === Node.TEXT_NODE) {
            p += b.textContent;
          }
        }
        if (p && p.trim() && p.trim().length >= 3) {
          var v = p.trim();
          if (v.length > 100) {
            return v.substring(0, 100) + "...";
          } else {
            return v;
          }
        }
        return "";
      };
      // 语义锚点：推断元素可读 label（aria-label/placeholder/title/alt/label[for]/textContent）
      const __cpAccessibilityTreeInferLabel = g;
      let m = function (e) {
        var t = window.getComputedStyle(e);
        return t.display !== "none" && t.visibility !== "hidden" && t.opacity !== "0" && e.offsetWidth > 0 && e.offsetHeight > 0;
      };
      // 语义锚点：元素可见性判断（display/visibility/opacity/尺寸）
      const __cpAccessibilityTreeIsVisible = m;
      let s = function (e) {
        var t = e.tagName.toLowerCase();
        return ["a", "button", "input", "select", "textarea", "details", "summary"].includes(t) || e.getAttribute("onclick") !== null || e.getAttribute("tabindex") !== null || e.getAttribute("role") === "button" || e.getAttribute("role") === "link" || e.getAttribute("contenteditable") === "true";
      };
      // 语义锚点：元素交互性判断（tag/onclick/tabindex/role/contenteditable）
      const __cpAccessibilityTreeIsInteractive = s;
      let p = function (e) {
        var t = e.tagName.toLowerCase();
        return ["h1", "h2", "h3", "h4", "h5", "h6", "nav", "main", "header", "footer", "section", "article", "aside"].includes(t) || e.getAttribute("role") !== null;
      };
      // 语义锚点：结构性元素判断（heading/landmark/role）
      const __cpAccessibilityTreeIsStructural = p;
      let w = function (e, t) {
        var r = e.tagName.toLowerCase();
        if (["script", "style", "meta", "link", "title", "noscript"].includes(r)) {
          return false;
        }
        if (t.filter !== "all" && e.getAttribute("aria-hidden") === "true") {
          return false;
        }
        if (t.filter !== "all" && !m(e)) {
          return false;
        }
        if (t.filter !== "all" && !t.refId) {
          var i = e.getBoundingClientRect();
          if (!(i.top < window.innerHeight) || !(i.bottom > 0) || !(i.left < window.innerWidth) || !(i.right > 0)) {
            return false;
          }
        }
        if (t.filter === "interactive") {
          return s(e);
        }
        if (s(e)) {
          return true;
        }
        if (p(e)) {
          return true;
        }
        if (g(e).length > 0) {
          return true;
        }
        var n = h(e);
        return n !== null && n !== "generic" && n !== "image";
      };
      // 语义锚点：元素是否纳入可访问性树（按 filter/aria-hidden/viewport 可见性/role/label）
      const __cpAccessibilityTreeShouldIncludeElement = w;
      let b = function (e, t, r) {
        if (!(t > a) && e && e.tagName) {
          var i = w(e, r) || r.refId !== null && t === 0;
          if (i) {
            var o = h(e);
            var l = g(e);
            var u = null;
            for (var d in window.__claudeElementMap) {
              if (window.__claudeElementMap[d].deref() === e) {
                u = d;
                break;
              }
            }
            if (!u) {
              u = "ref_" + ++window.__claudeRefCounter;
              window.__claudeElementMap[u] = new WeakRef(e);
            }
            var c = " ".repeat(t) + o;
            if (l) {
              c += " \"" + (l = l.replace(/\s+/g, " ").substring(0, 100)).replace(/"/g, "\\\"") + "\"";
            }
            c += " [" + u + "]";
            if (e.getAttribute("href")) {
              c += " href=\"" + e.getAttribute("href") + "\"";
            }
            if (e.getAttribute("type")) {
              c += " type=\"" + e.getAttribute("type") + "\"";
            }
            if (e.getAttribute("placeholder")) {
              c += " placeholder=\"" + e.getAttribute("placeholder") + "\"";
            }
            n.push(c);
            if (e.tagName.toLowerCase() === "select") {
              for (var f = e.options, m = 0; m < f.length; m++) {
                var s = f[m];
                var p = " ".repeat(t + 1) + "option";
                var v = s.textContent ? s.textContent.trim() : "";
                if (v) {
                  p += " \"" + (v = v.replace(/\s+/g, " ").substring(0, 100)).replace(/"/g, "\\\"") + "\"";
                }
                if (s.selected) {
                  p += " (selected)";
                }
                if (s.value && s.value !== v) {
                  p += " value=\"" + s.value.replace(/"/g, "\\\"") + "\"";
                }
                n.push(p);
              }
            }
          }
          if (e.children && t < a) {
            for (var _ = 0; _ < e.children.length; _++) {
              b(e.children[_], i ? t + 1 : t, r);
            }
          }
        }
      };
      // 语义锚点：DFS 遍历 + 序列化为文本行（含 ref_id 分配与 select option 展开）
      const __cpAccessibilityTreeTraverseAndSerialize = b;
      var n = [];
      var a = t ?? 15;
      var o = {
        filter: e || "all",
        refId: i
      };
      if (i) {
        var l = window.__claudeElementMap[i];
        if (!l) {
          return {
            error: "Element with ref_id '" + i + "' not found. It may have been removed from the page. Use read_page without ref_id to get the current page state.",
            pageContent: "",
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
        }
        var u = l.deref();
        if (!u) {
          return {
            error: "Element with ref_id '" + i + "' no longer exists. It may have been removed from the page. Use read_page without ref_id to get the current page state.",
            pageContent: "",
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
        }
        b(u, 0, o);
      } else if (document.body) {
        b(document.body, 0, o);
      }
      for (var d in window.__claudeElementMap) {
        if (!window.__claudeElementMap[d].deref()) {
          delete window.__claudeElementMap[d];
        }
      }
      var c = n.join("\n");
      if (r != null && c.length > r) {
        var f = "Output exceeds " + r + " character limit (" + c.length + " characters). ";
        return {
          error: f += i ? "The specified element has too much content. Try specifying a smaller depth parameter or focus on a more specific child element." : t !== undefined ? "Try specifying an even smaller depth parameter or use ref_id to focus on a specific element." : "Try specifying a depth parameter (e.g., depth: 5) or use ref_id to focus on a specific element from the page.",
          pageContent: "",
          viewport: {
            width: window.innerWidth,
            height: window.innerHeight
          }
        };
      }
      return {
        pageContent: c,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      };
    } catch (h) {
      throw new Error("Error generating accessibility tree: " + (h.message || "Unknown error"));
    }
  };
})();
