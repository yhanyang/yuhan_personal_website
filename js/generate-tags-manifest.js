document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll("ol li");
  const data = [];

  items.forEach(li => {
    const text = li.textContent;
    const urlMatch = text.match(/GCN\s*(\d{4,6})/);
    const grbMatch = text.match(/(GRB\s*\d{6,}[A-Z]?)/);
    const telescopeMatch = text.match(/\b(VLT|LBT|GTC|Swift|Chandra|EP)\b/);

    const entry = {
      title: text.trim().replace(/\s+/g, " "),
      tags: [],
    };

    if (urlMatch) {
      entry.tags.push(`GCN ${urlMatch[1]}`);
    }
    if (grbMatch) {
      entry.tags.push(grbMatch[1]);
    }
    if (telescopeMatch) {
      entry.tags.push(telescopeMatch[1]);
    }

    data.push(entry);
  });

  console.log("Generated tag manifest:", data);
});