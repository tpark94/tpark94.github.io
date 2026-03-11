---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

<div class="pub-tabs">
  <button class="pub-tab active" data-tab="journals">Journals</button>
  <button class="pub-tab" data-tab="conferences">Conferences</button>
  <button class="pub-tab" data-tab="datasets">Datasets</button>
  <button class="pub-tab" data-tab="thesis">Thesis</button>
</div>

<div class="pub-tab-content active" id="tab-journals">
<div class="pub-timeline">
{% assign prev_year = "" %}
{% for post in site.publications reversed %}
  {% if post.type == "journal" %}
    {% assign pub_year = post.venue | split: "(" | last | split: ")" | first %}
    {% if pub_year != prev_year %}
      <div class="pub-year-marker"><span>{{ pub_year }}</span></div>
      {% assign prev_year = pub_year %}
    {% endif %}
    {% include archive-single-publication.html %}
  {% endif %}
{% endfor %}
</div>
</div>

<div class="pub-tab-content" id="tab-conferences">
<div class="pub-timeline">
{% assign prev_year = "" %}
{% for post in site.publications reversed %}
  {% if post.type == "conference" %}
    {% assign pub_year = post.venue | split: "(" | last | split: ")" | first %}
    {% if pub_year != prev_year %}
      <div class="pub-year-marker"><span>{{ pub_year }}</span></div>
      {% assign prev_year = pub_year %}
    {% endif %}
    {% include archive-single-publication.html %}
  {% endif %}
{% endfor %}
</div>
</div>

<div class="pub-tab-content" id="tab-datasets">
<div class="pub-timeline">
{% assign prev_year = "" %}
{% for post in site.publications reversed %}
  {% if post.type == "dataset" %}
    {% assign pub_year = post.venue | split: "(" | last | split: ")" | first %}
    {% if pub_year != prev_year %}
      <div class="pub-year-marker"><span>{{ pub_year }}</span></div>
      {% assign prev_year = pub_year %}
    {% endif %}
    {% include archive-single-publication.html %}
  {% endif %}
{% endfor %}
</div>
</div>

<div class="pub-tab-content" id="tab-thesis">
<div class="pub-timeline">
{% assign prev_year = "" %}
{% for post in site.publications reversed %}
  {% if post.type == "thesis" %}
    {% assign pub_year = post.venue | split: "(" | last | split: ")" | first %}
    {% if pub_year != prev_year %}
      <div class="pub-year-marker"><span>{{ pub_year }}</span></div>
      {% assign prev_year = pub_year %}
    {% endif %}
    {% include archive-single-publication.html %}
  {% endif %}
{% endfor %}
</div>
</div>

<script>
document.querySelectorAll('.pub-tab').forEach(function(tab) {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.pub-tab').forEach(function(t) { t.classList.remove('active'); });
    document.querySelectorAll('.pub-tab-content').forEach(function(c) { c.classList.remove('active'); });
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
  });
});

function copyBibtex(btn) {
  var text = btn.nextElementSibling.querySelector('code').textContent;
  navigator.clipboard.writeText(text).then(function() {
    btn.classList.add('copied');
    setTimeout(function() { btn.classList.remove('copied'); }, 1500);
  });
}

function toggleBibtex(el) {
  var block = el.closest('.archive__item-info').querySelector('.pub-bibtex-block');
  if (block.style.display !== 'none') {
    block.style.display = 'none';
    return;
  }
  var code = block.querySelector('code');
  if (code.textContent) {
    block.style.display = 'block';
    return;
  }
  fetch(el.dataset.bibtexUrl)
    .then(function(r) { return r.text(); })
    .then(function(text) {
      code.textContent = text;
      block.style.display = 'block';
    });
}
</script>
