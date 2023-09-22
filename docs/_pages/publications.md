---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}


### Preprints

{% for post in site.publications reversed %}
  {% if post.type == "preprint" %}
    {% include archive-single-publication.html %}
  {% endif %}
{% endfor %}

### Journal Articles

{% for post in site.publications reversed %}
  {% if post.type == "journal" %}
    {% include archive-single-publication.html %}
  {% endif %}
{% endfor %}

### Conference Proceedings

{% for post in site.publications reversed %}
  {% if post.type == "conference" %}
    {% include archive-single-publication.html %}
  {% endif %}
{% endfor %}

### Datasets

{% for post in site.publications reversed %}
  {% if post.type == "dataset" %}
    {% include archive-single-publication.html %}
  {% endif %}
{% endfor %}
